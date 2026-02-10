import { NextResponse } from 'next/server';
import { supabase, resolveTenant, getDefaultTenant } from '@/lib/supabase';
import { resend } from '@/lib/resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      phone, 
      message, 
      type = 'contact', 
      auditData = null,
      tenant_slug = null,  // Optional: identifies which client this lead belongs to
      tenant_id = null,    // Optional: alternative to slug
    } = body;

    // Resolve the tenant — fallback to default (Last Call Collective)
    let tenant = null;
    if (tenant_slug) {
      tenant = await resolveTenant(tenant_slug);
    } else if (tenant_id) {
      tenant = await resolveTenant(tenant_id);
    }
    
    // If no tenant specified or found, use the default
    if (!tenant) {
      tenant = await getDefaultTenant();
    }

    // 1. Save to Supabase (tenant-aware)
    const { error: supabaseError } = await supabase
      .from('leads')
      .insert([
        { 
          tenant_id: tenant?.id || null,
          name, 
          email, 
          phone, 
          message, 
          type, 
          source: 'contact_form',
          audit_data: auditData,
          created_at: new Date().toISOString() 
        },
      ]);

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
    }

    // 2. Determine notification recipient
    const notifyEmail = tenant?.owner_email || 'ryan@lastcall.marketing';
    const tenantName = tenant?.name || 'Last Call Collective';

    // 3. Send Email via Resend
    const subject = type === 'mini-audit' 
      ? `🚨 TRUTH AUDIT LEAD: ${name} [${tenantName}]` 
      : `🔥 NEW INQUIRY: ${name} [${tenantName}]`;

    const auditResultsHtml = auditData ? `
      <div style="margin-top: 20px; padding: 15px; border: 1px solid #eee; border-radius: 8px; background: #f9f9f9;">
        <h3 style="margin-top: 0;">Truth Audit Results:</h3>
        <p><strong>Visibility Score:</strong> ${auditData.score}%</p>
        <ul style="padding-left: 20px;">
          ${Object.entries(auditData.answers || {}).map(([q, a]) => `
            <li><strong>${q}:</strong> ${a}</li>
          `).join('')}
        </ul>
      </div>
    ` : '';

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'LCI Leads <leads@lastcall.marketing>',
      to: [notifyEmail, 'ryan@lastcall.marketing'].filter((v, i, a) => a.indexOf(v) === i), // dedupe
      subject: subject,
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Lead Captured</h2>
          <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Client: ${tenantName}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Type:</strong> ${type}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          
          ${auditResultsHtml}

          <div style="margin-top: 30px; padding: 20px; background: #111; color: #fff; text-align: center; border-radius: 4px;">
            <p style="margin: 0;">"Make them an offer they feel stupid saying no to."</p>
          </div>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend Error:', emailError);
      return NextResponse.json({ error: 'Failed to send email notification' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
