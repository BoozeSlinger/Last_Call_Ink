import { NextResponse } from 'next/server';
import { supabase, resolveTenant } from '@/lib/supabase';

/**
 * POST /api/equity-vault
 * Captures guest data for a tenant's Equity Vault.
 * Used by QR codes, landing pages, and signup forms on client sites.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      tenant_slug,
      tenant_id,
      campaign_slug,
      first_name,
      last_name,
      email,
      phone,
      birthday,
      source = 'landing_page',
      source_detail,
      sms_opt_in = false,
      email_opt_in = true,
      tags = [],
      metadata = {},
    } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!tenant_slug && !tenant_id) {
      return NextResponse.json({ error: 'tenant_slug or tenant_id is required' }, { status: 400 });
    }

    // Resolve the tenant
    const tenant = await resolveTenant(tenant_slug || tenant_id);
    if (!tenant) {
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    if (tenant.status !== 'active') {
      return NextResponse.json({ error: 'Tenant is not active' }, { status: 403 });
    }

    // Resolve campaign if provided
    let campaignId = null;
    if (campaign_slug) {
      const { data: campaign } = await supabase
        .from('equity_vault_campaigns')
        .select('id')
        .eq('tenant_id', tenant.id)
        .eq('slug', campaign_slug)
        .eq('is_active', true)
        .single();
      
      campaignId = campaign?.id || null;
    }

    // Check for duplicate email within this tenant (upsert logic)
    const { data: existing } = await supabase
      .from('equity_vault_entries')
      .select('id')
      .eq('tenant_id', tenant.id)
      .eq('email', email.toLowerCase())
      .single();

    if (existing) {
      // Update existing entry with new info (don't create duplicates)
      const { error: updateError } = await supabase
        .from('equity_vault_entries')
        .update({
          first_name: first_name || undefined,
          last_name: last_name || undefined,
          phone: phone || undefined,
          birthday: birthday || undefined,
          sms_opt_in,
          email_opt_in,
          source,
          source_detail,
          campaign_id: campaignId || undefined,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existing.id);

      if (updateError) {
        console.error('Vault Update Error:', updateError);
        return NextResponse.json({ error: 'Failed to update entry' }, { status: 500 });
      }

      return NextResponse.json({ success: true, action: 'updated', id: existing.id });
    }

    // Insert new entry
    const { data: newEntry, error: insertError } = await supabase
      .from('equity_vault_entries')
      .insert([{
        tenant_id: tenant.id,
        campaign_id: campaignId,
        first_name,
        last_name,
        email: email.toLowerCase(),
        phone,
        birthday,
        source,
        source_detail,
        sms_opt_in,
        email_opt_in,
        tags,
        metadata,
      }])
      .select('id')
      .single();

    if (insertError) {
      console.error('Vault Insert Error:', insertError);
      return NextResponse.json({ error: 'Failed to capture entry' }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      action: 'created', 
      id: newEntry?.id 
    });

  } catch (err) {
    console.error('Equity Vault API Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
