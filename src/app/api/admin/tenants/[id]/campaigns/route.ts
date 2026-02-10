import { NextResponse, NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

/**
 * Simple API key check for admin endpoints.
 */
function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get('authorization');
  const apiKey = process.env.ADMIN_API_KEY;
  if (!apiKey) return false;
  return authHeader === `Bearer ${apiKey}`;
}

/**
 * GET /api/admin/tenants/[id]/campaigns
 * List equity vault campaigns for a tenant.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: tenantId } = await params;

  try {
    const { data, error } = await supabaseAdmin
      .from('equity_vault_campaigns')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Fetch campaigns error:', error);
      return NextResponse.json({ error: 'Failed to fetch campaigns' }, { status: 500 });
    }

    return NextResponse.json({ campaigns: data });
  } catch (err) {
    console.error('Admin campaigns error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/admin/tenants/[id]/campaigns
 * Create a new equity vault campaign for a tenant.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: tenantId } = await params;

  try {
    const body = await req.json();
    const { name, slug, type = 'qr_code', config = {} } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: 'name and slug are required' }, { status: 400 });
    }

    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ 
        error: 'slug must be lowercase letters, numbers, and hyphens only' 
      }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('equity_vault_campaigns')
      .insert([{
        tenant_id: tenantId,
        name,
        slug,
        type,
        config,
      }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'A campaign with this slug already exists for this tenant' }, { status: 409 });
      }
      console.error('Create campaign error:', error);
      return NextResponse.json({ error: 'Failed to create campaign' }, { status: 500 });
    }

    return NextResponse.json({ campaign: data }, { status: 201 });
  } catch (err) {
    console.error('Admin create campaign error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
