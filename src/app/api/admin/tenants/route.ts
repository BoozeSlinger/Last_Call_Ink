import { NextResponse, NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

/**
 * Simple API key check for admin endpoints.
 * Checks the Authorization header for the admin API key.
 */
function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get('authorization');
  const apiKey = process.env.ADMIN_API_KEY;
  
  // If no admin key is set, block all admin requests
  if (!apiKey) {
    console.error('ADMIN_API_KEY not configured');
    return false;
  }
  
  return authHeader === `Bearer ${apiKey}`;
}

/**
 * GET /api/admin/tenants
 * List all tenants with lead + vault entry counts.
 */
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get all tenants
    const { data: tenants, error } = await supabaseAdmin
      .from('tenants')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Tenants fetch error:', error);
      return NextResponse.json({ error: 'Failed to fetch tenants' }, { status: 500 });
    }

    // Enrich each tenant with counts
    const enriched = await Promise.all(
      (tenants || []).map(async (tenant) => {
        const [leadCount, vaultCount] = await Promise.all([
          supabaseAdmin
            .from('leads')
            .select('id', { count: 'exact', head: true })
            .eq('tenant_id', tenant.id),
          supabaseAdmin
            .from('equity_vault_entries')
            .select('id', { count: 'exact', head: true })
            .eq('tenant_id', tenant.id),
        ]);

        return {
          ...tenant,
          lead_count: leadCount.count || 0,
          vault_entry_count: vaultCount.count || 0,
        };
      })
    );

    return NextResponse.json({ tenants: enriched });
  } catch (err) {
    console.error('Admin tenants error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/admin/tenants
 * Create a new tenant.
 */
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { slug, name, domain, config, tier, owner_email } = body;

    if (!slug || !name) {
      return NextResponse.json({ error: 'slug and name are required' }, { status: 400 });
    }

    // Validate slug format (lowercase, hyphens, no spaces)
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ 
        error: 'slug must be lowercase letters, numbers, and hyphens only' 
      }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('tenants')
      .insert([{
        slug,
        name,
        domain: domain || null,
        config: config || {},
        tier: tier || 'well',
        owner_email: owner_email || null,
      }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'A tenant with this slug already exists' }, { status: 409 });
      }
      console.error('Create tenant error:', error);
      return NextResponse.json({ error: 'Failed to create tenant' }, { status: 500 });
    }

    return NextResponse.json({ tenant: data }, { status: 201 });
  } catch (err) {
    console.error('Admin create tenant error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
