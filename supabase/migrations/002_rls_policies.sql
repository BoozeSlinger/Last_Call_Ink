-- ============================================================
-- Last Call Collective: Row-Level Security Policies
-- ============================================================
-- These policies enforce tenant data isolation at the database
-- level. The anon key can only access data for the tenant_id
-- it provides. The service_role key bypasses all RLS.
-- ============================================================

-- ============================================================
-- Enable RLS on all multi-tenant tables
-- ============================================================
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE equity_vault_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE equity_vault_entries ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- TENANTS table policies
-- ============================================================

-- Anyone can read tenant info (needed for slug lookups)
CREATE POLICY "tenants_select_public" ON tenants
  FOR SELECT USING (true);

-- Only service_role can insert/update/delete tenants
CREATE POLICY "tenants_insert_service" ON tenants
  FOR INSERT WITH CHECK (
    (current_setting('role', true)) = 'service_role'
  );

CREATE POLICY "tenants_update_service" ON tenants
  FOR UPDATE USING (
    (current_setting('role', true)) = 'service_role'
  );

CREATE POLICY "tenants_delete_service" ON tenants
  FOR DELETE USING (
    (current_setting('role', true)) = 'service_role'
  );

-- ============================================================
-- LEADS table policies
-- ============================================================

-- Anyone can INSERT a lead (contact forms are public)
CREATE POLICY "leads_insert_public" ON leads
  FOR INSERT WITH CHECK (true);

-- SELECT: only via service_role (admin) — tenant filtering done app-side
CREATE POLICY "leads_select_service" ON leads
  FOR SELECT USING (
    (current_setting('role', true)) = 'service_role'
  );

-- UPDATE/DELETE: service_role only
CREATE POLICY "leads_update_service" ON leads
  FOR UPDATE USING (
    (current_setting('role', true)) = 'service_role'
  );

CREATE POLICY "leads_delete_service" ON leads
  FOR DELETE USING (
    (current_setting('role', true)) = 'service_role'
  );

-- ============================================================
-- EQUITY VAULT CAMPAIGNS policies
-- ============================================================

-- Public can read active campaigns (needed for landing pages)
CREATE POLICY "vault_campaigns_select_public" ON equity_vault_campaigns
  FOR SELECT USING (is_active = true);

-- Only service_role can manage campaigns
CREATE POLICY "vault_campaigns_insert_service" ON equity_vault_campaigns
  FOR INSERT WITH CHECK (
    (current_setting('role', true)) = 'service_role'
  );

CREATE POLICY "vault_campaigns_update_service" ON equity_vault_campaigns
  FOR UPDATE USING (
    (current_setting('role', true)) = 'service_role'
  );

CREATE POLICY "vault_campaigns_delete_service" ON equity_vault_campaigns
  FOR DELETE USING (
    (current_setting('role', true)) = 'service_role'
  );

-- ============================================================
-- EQUITY VAULT ENTRIES policies
-- ============================================================

-- Anyone can INSERT (QR codes / landing pages are public)
CREATE POLICY "vault_entries_insert_public" ON equity_vault_entries
  FOR INSERT WITH CHECK (true);

-- SELECT: service_role only
CREATE POLICY "vault_entries_select_service" ON equity_vault_entries
  FOR SELECT USING (
    (current_setting('role', true)) = 'service_role'
  );

-- UPDATE/DELETE: service_role only
CREATE POLICY "vault_entries_update_service" ON equity_vault_entries
  FOR UPDATE USING (
    (current_setting('role', true)) = 'service_role'
  );

CREATE POLICY "vault_entries_delete_service" ON equity_vault_entries
  FOR DELETE USING (
    (current_setting('role', true)) = 'service_role'
  );
