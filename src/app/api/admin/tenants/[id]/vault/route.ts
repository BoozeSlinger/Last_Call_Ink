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
 * GET /api/admin/tenants/[id]/vault
 * Fetch all equity vault entries for a specific tenant.
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
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100);
    const source = url.searchParams.get('source'); // filter by capture source
    const offset = (page - 1) * limit;

    let query = supabaseAdmin
      .from('equity_vault_entries')
      .select('*', { count: 'exact' })
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (source) {
      query = query.eq('source', source);
    }

    const { data, count, error } = await query;

    if (error) {
      console.error('Fetch vault entries error:', error);
      return NextResponse.json({ error: 'Failed to fetch vault entries' }, { status: 500 });
    }

    return NextResponse.json({
      entries: data,
      total: count,
      page,
      limit,
      total_pages: Math.ceil((count || 0) / limit),
    });
  } catch (err) {
    console.error('Admin vault error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
