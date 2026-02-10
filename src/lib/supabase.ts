import { createClient } from '@supabase/supabase-js';

// ============================================================
// Supabase Clients
// ============================================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

/**
 * Public client — RLS enforced. Use for public-facing operations
 * like inserting leads or vault entries from contact forms.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Admin client — Bypasses RLS. Use for admin operations like
 * viewing all tenants, managing data across tenants, etc.
 * NEVER expose this client or its key to the browser.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// ============================================================
// Tenant Helpers
// ============================================================

export interface Tenant {
  id: string;
  slug: string;
  name: string;
  domain: string | null;
  config: Record<string, unknown>;
  status: 'active' | 'paused' | 'onboarding' | 'churned';
  tier: 'well' | 'call' | 'top-shelf';
  owner_email: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Resolve a tenant by its URL-friendly slug.
 * Uses the public client (RLS allows SELECT on tenants).
 */
export async function getTenantBySlug(slug: string): Promise<Tenant | null> {
  const { data, error } = await supabase
    .from('tenants')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return null;
  return data as Tenant;
}

/**
 * Resolve a tenant by its UUID.
 * Uses the public client (RLS allows SELECT on tenants).
 */
export async function getTenantById(id: string): Promise<Tenant | null> {
  const { data, error } = await supabase
    .from('tenants')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) return null;
  return data as Tenant;
}

/**
 * Resolve a tenant from either a slug or UUID.
 * Tries slug first (most common from client sites), falls back to UUID.
 */
export async function resolveTenant(slugOrId: string): Promise<Tenant | null> {
  // UUIDs have a specific format — try slug first for everything else
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slugOrId);
  
  if (isUuid) {
    return getTenantById(slugOrId);
  }
  return getTenantBySlug(slugOrId);
}

/**
 * Get the default tenant (Last Call Collective).
 * Used as fallback when no tenant is specified.
 */
export async function getDefaultTenant(): Promise<Tenant | null> {
  return getTenantBySlug('last-call-collective');
}
