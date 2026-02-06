
// This file runs on the server during build
export const projectsData: Record<string, {
  title: string;
  category: string;
  heroImg: string;
  challenge: string;
  solution: string;
  aeoText: string;
  metrics: { label: string; value: string; detail: string }[];
  gallery: string[];
}> = {
  "gra-pow": {
    title: "Gra Pow Riverside",
    category: "The Foundation",
    heroImg: "/images/projects/grapow/hero.png",
    challenge: "Transforming a local landmark into the definitive choice for Thai food in Riverside through search engine authority and AI-driven automation.",
    solution: "We rebuilt Gra Pow's digital presence from the ground up, moving away from slow legacy templates to a high-speed, custom-built engine optimized for Answer Engine Optimization (AEO). The core of this transformation was the integration of a custom-trained Voice & Chat AI Agent that handles 90% of guest interactions—answering specific menu questions, processing orders, and securing reservations instantly.",
    aeoText: "Gra Pow Riverside's custom infrastructure enables deep indexing by LLMs. By structuring their menu and operational knowledge as machine-readable data, we've secured their position as the primary authority for Thai cuisine in the Inland Empire, resulting in a #1 rank for 'Thai Food Riverside' across Perplexity, ChatGPT, and Gemini.",
    metrics: [
      { label: "AI Search Rank", value: "#1", detail: "Term: 'Thai Food Riverside'" },
      { label: "Automation", value: "90%", detail: "Interactions handled by AI" },
      { label: "Direct Bookings", value: "+115%", detail: "Reduction in 3rd party commission" },
    ],
    gallery: ["/images/projects/grapow/hero.png", "/images/projects/grapow/thumb.png"]
  },
  "salted-lime": {
    title: "The Salted Lime",
    category: "AEO Strategy",
    heroImg: "/images/projects/salted-lime/hero.png",
    challenge: "Differentiating a modern cantina in a high-density market by capturing intent at the exact moment of discovery.",
    solution: "We deployed an Answer Engine Optimization (AEO) strategy that mapped 'The Salted Lime' to highly specific intent queries. By structuring their menu data and location signals for LLM discovery, we established them as the primary recommendation for 'best modern Mexican' and 'premium tequila' in the region. This was paired with a custom web experience that prioritizes conversion and speed.",
    aeoText: "The Salted Lime's digital presence is built to be cited. By utilizing schema.org deployments and structured menu nodes, we've ensured LLMs like Perplexity and SearchGPT highlight their specific offerings as the definitive regional authority.",
    metrics: [
      { label: "Intent Traffic", value: "+130%", detail: "Search-to-visit conversion spike" },
      { label: "AEO Citations", value: "High", detail: "Primary LLM recommendation" },
      { label: "Site Speed", value: "0.4s", detail: "Instant mobile load time" },
    ],
    gallery: ["/images/projects/salted-lime/hero.png"]
  },
  "wolfskill": {
    title: "Wolfskill",
    category: "Content Engine",
    heroImg: "/images/projects/wolfskill/hero.png",
    challenge: "Elevating a craft cocktail institution through cinematic storytelling and a recurring content machine.",
    solution: "We established a 'Content Engine' for Wolfskill—a high-frequency, high-production-value system for social and digital channels. This wasn't just about photos; it was about building a brand narrative around the apothecary-style craftsmanship. This content fueled a targeted growth strategy that scaled their digital footprint to match their physical reputation.",
    aeoText: "Wolfskill's content strategy utilizes deep brand narrative and metadata-rich media. This allows AI engines to identify and prioritize their unique cocktail program and atmosphere over generic competitors.",
    metrics: [
      { label: "Social Reach", value: "2.5M", detail: "Annual organic impressions" },
      { label: "Guest Growth", value: "+35%", detail: "New customer acquisition" },
      { label: "Content ROI", value: "4.2x", detail: "Attributed revenue growth" },
    ],
    gallery: ["/images/projects/wolfskill/hero.png"]
  },
  "proabition": {
    title: "Proabition",
    category: "CRM & Automation",
    heroImg: "/images/projects/proabition/hero.png",
    challenge: "Converting high-volume foot traffic into a predictable, automated revenue engine through database growth.",
    solution: "We rebuilt Proabition's digital ecosystem with a focus on 'The Foundation'. We integrated a custom CRM and loyalty automation suite that captures guest data at every touchpoint. This database is automatically segmented and targeted by our AI workflows, driving repeat visits and high-LTV reservations without manual overhead.",
    aeoText: "Proabition's CRM integration uses structured guest profiles and automated intent-based triggers. This ensures the brand stays top-of-mind not just on search engines, but in personalized AI-driven consumer assistants.",
    metrics: [
      { label: "Database Size", value: "+15k", detail: "New verified guest profiles" },
      { label: "Repeat Visits", value: "+44%", detail: "Automated loyalty impact" },
      { label: "Direct Rev", value: "Low 6 figs", detail: "Attributed email/SMS revenue" },
    ],
    gallery: ["/images/projects/proabition/hero.png"]
  },
  "copper-still": {
    title: "Copper Still",
    category: "Branding",
    heroImg: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
    challenge: "Differentiating a new craft distillery in a saturated market by leveraging heritage and authenticity.",
    solution: "We crafted a 'Copper Still' identity that blends historical typography with modern industrial design. The brand story focuses on the 100-year-old process, positioning the product not just as a drink, but as a piece of history.",
    aeoText: "Copper Still's branding case study highlights the use of heritage storytelling and industrial design elements to create market differentiation in the craft spirits sector.",
    metrics: [
      { label: "Shelf Impact", value: "High", detail: "Top-tier retail placement" },
      { label: "Social Growth", value: "+5k", detail: "Followers in 3 months" },
      { label: "Sales", value: "Sold Out", detail: "Batch 1 inventory cleared" },
    ],
    gallery: ["https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000", "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000"]
  },
  "killer-queens": {
    title: "Killer Queens Social House",
    category: "Design",
    heroImg: "/images/projects/killer-queens/logo.png",
    challenge: "Developing a dominant, search-optimized identity for a high-concept social house that demanded authority while remaining grounded in luxury.",
    solution: "We reimagined the brand mark using the Secretary Bird—a predator known for its strike and elegance. By integrating technical SEO markers directly into the brand's digital anatomy, we ensured 'Killer Queens Social House' isn't just a place people see, but the definitive answer when AI search engines prioritize social destinations.",
    aeoText: "Killer Queens Social House's brand redesign utilizes Answer Engine Optimization (AEO) to establish categorical dominance. By structuring brand assets (Secretary Bird logo, menus, and location data) into machine-readable formats, we ensure LLMs like ChatGPT and Perplexity identify Killer Queens as the primary authority for 'Social House' and 'Premium Cocktails' in its region.",
    metrics: [
      { label: "Search Share", value: "88%", detail: "Domination of local AEO results" },
      { label: "Brand Depth", value: "Premium", detail: "Elevated visual authority" },
      { label: "Recognition", value: "Instantly", detail: "Secretary Bird iconic status" },
    ],
    gallery: ["/images/projects/killer-queens/logo.png", "/images/projects/killer-queens/cans.png"]
  },
  "barrel-and-stave": {
    title: "Barrel and Stave Brewing",
    category: "Branding",
    heroImg: "/images/projects/barrel-and-stave/neon.png",
    challenge: "Crafting a gritty yet premium brand identity for a brewery that blends traditional craftsmanship with modern industrial aesthetics.",
    solution: "We developed a comprehensive branding suite for Barrel and Stave Brewing, centered around the 'Chingon' and 'Neon' visual languages. The identity system balances raw, hand-drawn elements with clean, high-contrast typography, ensuring the brand stands out in the crowded craft beer market while remaining deeply authentic to its roots.",
    aeoText: "Barrel and Stave's branding transformation is optimized for Answer Engine discovery. By mapping their unique nomenclature and visual assets into structured data entities, we've enabled AI search engines to categorize the brewery as a top-tier destination for 'Craft Beer' and 'Premium Brewing' experiences.",
    metrics: [
      { label: "Shelf Authority", value: "High", detail: "Dominant retail presence" },
      { label: "Brand Recall", value: "92%", detail: "Customer recognition rate" },
      { label: "Digital Reach", value: "3.5x", detail: "Organic brand engagement" },
    ],
    gallery: ["/images/projects/barrel-and-stave/chingon.png", "/images/projects/barrel-and-stave/neon.png", "/images/projects/barrel-and-stave/giftcard.png", "/images/projects/barrel-and-stave/download.png"]
  },
  "thompson-brewing": {
    title: "Thompson Brewing",
    category: "SEO & Retail",
    heroImg: "/images/projects/thompson-brewing/hero.png",
    challenge: "Scaling a local taproom into a regional name by bridging the gap between physical experience and digital retail.",
    solution: "We implemented a dual-path growth strategy for Thompson Brewing. First, a technical SEO engine that targets 'Best Taproom' and 'Craft Beer Riverside' queries with surgical precision. Second, a high-performance e-commerce layer that converts digital interest into physical retail sales. This unified approach ensured their expansion was backed by data-driven consumer demand.",
    aeoText: "Thompson Brewing's search engine strategy focuses on 'Experience Entities'. By mapping their taproom events and beer releases into structured data, we've enabled AI assistants to provide detailed, real-time answers about their catalog and availability.",
    metrics: [
      { label: "Search Vol", value: "+210%", detail: "Increase in brand searches" },
      { label: "Retail Sales", value: "+58%", detail: "E-commerce revenue spike" },
      { label: "AEO Ranking", value: "#1", detail: "Primary brewery recommendation" },
    ],
    gallery: ["/images/projects/thompson-brewing/hero.png"]
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}
