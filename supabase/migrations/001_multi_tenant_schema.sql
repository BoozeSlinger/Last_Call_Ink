-- ============================================================
-- Last Call Collective: Multi-Tenant Schema
-- ============================================================
-- This migration creates the generalized multi-tenant backend
-- for managing bar/restaurant clients and their customer data.
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. TENANTS — Master registry of bar/restaurant clients
-- ============================================================
CREATE TABLE IF NOT EXISTS tenants (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug        TEXT UNIQUE NOT NULL,          -- URL-friendly identifier (e.g. 'killer-queens')
  name        TEXT NOT NULL,                 -- Display name (e.g. 'Killer Queens Social House')
  domain      TEXT,                          -- Custom domain if applicable
  config      JSONB DEFAULT '{}'::jsonb,     -- Brand config: colors, logo_url, contact_email, etc.
  status      TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'onboarding', 'churned')),
  tier        TEXT NOT NULL DEFAULT 'well'   CHECK (tier IN ('well', 'call', 'top-shelf')),
  owner_email TEXT,                          -- Primary contact email for the bar owner
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for slug lookups (most common query path)
CREATE INDEX IF NOT EXISTS idx_tenants_slug ON tenants(slug);
CREATE INDEX IF NOT EXISTS idx_tenants_status ON tenants(status);

-- ============================================================
-- 2. LEADS — Contact form / inquiry submissions (multi-tenant)
-- ============================================================
-- Drop the old leads table if it exists and recreate with tenant support.
-- If you have existing data you want to keep, see the data migration below.
-- ============================================================

-- First, check if old leads table exists and migrate data
DO $$
BEGIN
  -- If the old leads table exists but doesn't have tenant_id, add it
  IF EXISTS (
    SELECT 1 FROM information_schema.tables WHERE table_name = 'leads'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'tenant_id'
  ) THEN
    -- Add tenant_id column to existing table (nullable initially for migration)
    ALTER TABLE leads ADD COLUMN tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
    ALTER TABLE leads ADD COLUMN source TEXT DEFAULT 'contact_form';
    ALTER TABLE leads ADD COLUMN status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost'));
    ALTER TABLE leads ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    
    -- Create index
    CREATE INDEX IF NOT EXISTS idx_leads_tenant ON leads(tenant_id);
    CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_leads_tenant_status ON leads(tenant_id, status);
  END IF;

  -- If leads table doesn't exist at all, create it fresh
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.tables WHERE table_name = 'leads'
  ) THEN
    CREATE TABLE leads (
      id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      tenant_id   UUID REFERENCES tenants(id) ON DELETE CASCADE,
      name        TEXT NOT NULL,
      email       TEXT NOT NULL,
      phone       TEXT,
      message     TEXT,
      type        TEXT DEFAULT 'contact',
      source      TEXT DEFAULT 'contact_form',
      audit_data  JSONB,
      status      TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'lost')),
      created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX idx_leads_tenant ON leads(tenant_id);
    CREATE INDEX idx_leads_created ON leads(created_at DESC);
    CREATE INDEX idx_leads_tenant_status ON leads(tenant_id, status);
  END IF;
END $$;

-- ============================================================
-- 3. EQUITY VAULT CAMPAIGNS — Different capture campaigns per tenant
-- ============================================================
CREATE TABLE IF NOT EXISTS equity_vault_campaigns (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id   UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,                 -- e.g. 'Grand Opening QR', 'Happy Hour Signup'
  slug        TEXT NOT NULL,                 -- URL-friendly campaign identifier
  type        TEXT DEFAULT 'qr_code'         CHECK (type IN ('qr_code', 'landing_page', 'tap_to_sign', 'social', 'other')),
  config      JSONB DEFAULT '{}'::jsonb,     -- Campaign-specific settings (redirect URL, etc.)
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Each tenant has unique campaign slugs
  UNIQUE(tenant_id, slug)
);

CREATE INDEX IF NOT EXISTS idx_vault_campaigns_tenant ON equity_vault_campaigns(tenant_id);

-- ============================================================
-- 4. EQUITY VAULT ENTRIES — Guest data captured per tenant
-- ============================================================
CREATE TABLE IF NOT EXISTS equity_vault_entries (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id     UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
  campaign_id   UUID REFERENCES equity_vault_campaigns(id) ON DELETE SET NULL,
  
  -- Guest info
  first_name    TEXT,
  last_name     TEXT,
  email         TEXT NOT NULL,
  phone         TEXT,
  birthday      DATE,
  
  -- Capture metadata
  source        TEXT DEFAULT 'qr_code',     -- qr_code, landing_page, manual, import, etc.
  source_detail TEXT,                       -- Specific QR location, page URL, etc.
  tags          TEXT[] DEFAULT '{}',        -- Flexible tagging: 'vip', 'birthday-club', etc.
  
  -- Opt-in tracking
  sms_opt_in    BOOLEAN DEFAULT false,
  email_opt_in  BOOLEAN DEFAULT true,
  
  -- Metadata
  metadata      JSONB DEFAULT '{}'::jsonb,  -- Additional flexible data
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_vault_entries_tenant ON equity_vault_entries(tenant_id);
CREATE INDEX IF NOT EXISTS idx_vault_entries_email ON equity_vault_entries(tenant_id, email);
CREATE INDEX IF NOT EXISTS idx_vault_entries_created ON equity_vault_entries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_vault_entries_campaign ON equity_vault_entries(campaign_id);

-- ============================================================
-- 5. UPDATED_AT TRIGGER — Auto-update timestamps
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all multi-tenant tables
DO $$
DECLARE
  tbl TEXT;
BEGIN
  FOREACH tbl IN ARRAY ARRAY['tenants', 'leads', 'equity_vault_campaigns', 'equity_vault_entries']
  LOOP
    EXECUTE format(
      'DROP TRIGGER IF EXISTS set_updated_at ON %I; CREATE TRIGGER set_updated_at BEFORE UPDATE ON %I FOR EACH ROW EXECUTE FUNCTION update_updated_at();',
      tbl, tbl
    );
  END LOOP;
END $$;

-- ============================================================
-- 6. SEED — Default tenant for Last Call Collective itself
-- ============================================================
INSERT INTO tenants (slug, name, owner_email, tier, config)
VALUES (
  'last-call-collective',
  'Last Call Collective',
  'ryan@lastcall.marketing',
  'top-shelf',
  '{"brand_color": "#000000", "accent_color": "#d97706", "logo_url": "/images/logo.svg", "contact_email": "ryan@lastcall.marketing"}'::jsonb
)
ON CONFLICT (slug) DO NOTHING;

-- Backfill existing leads with the default tenant
UPDATE leads 
SET tenant_id = (SELECT id FROM tenants WHERE slug = 'last-call-collective')
WHERE tenant_id IS NULL;
