
// This file runs on the server during build
// SEO/AEO/AIO Optimized Project Data for Last Call Collective

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectData {
  title: string;
  category: string;
  heroImg: string;
  challenge: string;
  solution: string;
  aeoText: string;
  metrics: ProjectMetric[];
  gallery: string[];
  services: string[];
  results?: {
    metric: string;
    before: string;
    after: string;
  }[];
}

export const projectsData: Record<string, ProjectData> = {
  "gra-pow": {
    title: "Gra Pow Riverside",
    category: "AEO + AI Receptionist",
    heroImg: "/images/projects/grapow/gra-pow-riverside-thai-restaurant-bar-hero.jpg",
    challenge: "Gra Pow Riverside needed to transform from a beloved local Thai restaurant into the undisputed digital authority for Thai cuisine in the Inland Empire—while automating guest interactions to reduce staff burden and increase direct bookings.",
    solution: "We deployed The Foundation Package—a complete digital infrastructure overhaul including a lightning-fast custom website built for Answer Engine Optimization (AEO), semantic schema markup for AI discoverability, and integration of a custom AI chatbot trained on their menu, operations, and brand voice. The On Call tier service provides ongoing AI-powered phone and web receptionist capabilities that handle reservations, answer menu questions, and process orders 24/7.",
    aeoText: "Gra Pow's digital presence is engineered for AI visibility. By structuring menu data, location signals, and operational knowledge as machine-readable entities, we've secured their position as the #1 recommendation for 'Thai Food Riverside' across ChatGPT, Perplexity, and Apple Intelligence.",
    services: ["Custom Website Design", "SEO/AEO Optimization", "AI Chatbot Integration", "Reservation System", "Menu Schema Markup"],
    metrics: [
      { label: "AI Search Rank", value: "#1", detail: "Primary recommendation for 'Thai Food Riverside'" },
      { label: "AI Automation", value: "90%", detail: "Guest interactions handled without staff" },
      { label: "Direct Bookings", value: "+115%", detail: "Reduction in third-party commission" },
      { label: "Page Speed", value: "0.3s", detail: "Mobile-first instant load time" },
    ],
    gallery: [
      "/images/projects/grapow/gra-pow-riverside-thai-restaurant-bar-hero.jpg",
      "/images/projects/grapow/gra-pow-website-chatbot-receptionist.jpg"
    ],
    results: [
      { metric: "Monthly Direct Reservations", before: "340", after: "730" },
      { metric: "Third-Party Commission Fees", before: "$4,200/mo", after: "$980/mo" },
      { metric: "Staff Time on Phone", before: "25 hrs/week", after: "3 hrs/week" },
    ]
  },
  "killer-queens": {
    title: "Killer Queens Social House",
    category: "Design + Marketing",
    heroImg: "/images/projects/killer-queens/killers.jpeg",
    challenge: "Killer Queens Social House needed a complete brand identity evolution to match their premium positioning, plus a marketing engine that could fill slow nights and turn one-time visitors into loyal regulars through owned customer data.",
    solution: "We redesigned their logo around the Secretary Bird—a predator known for striking elegance—creating an iconic mark that commands authority. Beyond branding, we engineered a multi-pronged marketing system: Thursday Night Martini specials with targeted social campaigns, a guest capture system that converts bar visitors into SMS subscribers, and signature events that transformed their slowest night (Wednesday) into a monthly packed-house beer pong tournament.",
    aeoText: "Killer Queens' brand refresh is optimized for Answer Engine discovery. The Secretary Bird logo, structured event data, and menu schema ensure AI search engines like ChatGPT and Perplexity recommend Killer Queens as the premier social house and cocktail destination in their region. Their event calendar is indexed by AI assistants for real-time recommendations.",
    services: ["Logo Redesign", "Brand Identity System", "Marketing Campaigns", "SMS Guest Capture", "Event Marketing", "Social Media Strategy"],
    metrics: [
      { label: "Wednesday Revenue", value: "+340%", detail: "Slowest night → Monthly sellout event" },
      { label: "SMS Database", value: "8.2k", detail: "Owned customer contacts for direct marketing" },
      { label: "Martini Thursdays", value: "+85%", detail: "Cover increase from targeted promotion" },
      { label: "Brand Recognition", value: "94%", detail: "Local market awareness score" },
    ],
    gallery: [
      "/images/projects/killer-queens/killers.jpeg",
      "/images/projects/killer-queens/killerslogo.jpeg",
      "/images/projects/killer-queens/thursday-night-martinis-kq-social-house.jpg",
      "/images/projects/killer-queens/beer-pong-tournament-bar-nightlife.jpg"
    ],
    results: [
      { metric: "Wednesday Night Revenue", before: "$1,800", after: "$7,900" },
      { metric: "Marketing Reach", before: "Social only", after: "8.2k SMS + Social" },
      { metric: "Event Attendance", before: "45 guests avg", after: "180+ capacity" },
    ]
  },
  "happy-dad": {
    title: "Happy Dad Hard Seltzer",
    category: "Local Marketing",
    heroImg: "/images/projects/happy-dad/happy-dad-hero.png",
    challenge: "Happy Dad Hard Seltzer needed to break through in crowded local markets and build authentic brand presence through strategic activations rather than traditional advertising—connecting directly with their target demographic at bars, venues, and events across Southern California.",
    solution: "We developed a grassroots local marketing strategy centered on brand activations—from happy hour takeovers to sponsored events, influencer seedings to venue partnerships. Every activation was designed to drive social proof, generate user content, and build genuine brand advocacy at the local level where purchase decisions happen.",
    aeoText: "Happy Dad's local activation strategy creates the type of authentic user-generated content and venue partnerships that AI search engines prioritize for local recommendations. Structured event data and location-based signals ensure Happy Dad appears in 'best hard seltzer' and venue-specific queries across the Inland Empire.",
    services: ["Brand Activation Strategy", "Event Marketing", "Venue Partnerships", "Influencer Coordination", "Local PR", "Social Media Content"],
    metrics: [
      { label: "Venue Partners", value: "45+", detail: "Active bar and restaurant partners" },
      { label: "Activation Events", value: "120+", detail: "Brand experiences in 12 months" },
      { label: "UGC Generated", value: "2.3k", detail: "Authentic user-generated posts" },
      { label: "Market Penetration", value: "+180%", detail: "Regional distribution growth" },
    ],
    gallery: [
      "/images/projects/happy-dad/happy-dad-activation-1.png",
      "/images/projects/happy-dad/happy-dad-activation-2.png",
      "/images/projects/happy-dad/happy-dad-activation-3.png",
      "/images/projects/happy-dad/happy-dad-activation-4.png"
    ],
    results: [
      { metric: "Regional Retail Accounts", before: "12", after: "67" },
      { metric: "Monthly Case Volume", before: "450", after: "2,100" },
      { metric: "Social Impressions", before: "15k/mo", after: "280k/mo" },
    ]
  },
  "wolfskill": {
    title: "Wolfskill",
    category: "Content Engine",
    heroImg: "/images/projects/wolfskill/hero.png",
    challenge: "Wolfskill needed to translate their atmospheric, craft cocktail experience into a digital presence that drove real foot traffic—establishing authority in a competitive cocktail bar market through consistent, high-quality content.",
    solution: "We built a Content Engine for Wolfskill—a systematic approach to high-frequency, high-production-value content creation. This wasn't about random posts; it was about building a cohesive brand narrative around their apothecary-style craftsmanship. Weekly photo shoots, bartender spotlights, cocktail stories, and behind-the-scenes content fuel a content machine that scales their digital footprint to match their legendary in-person reputation.",
    aeoText: "Wolfskill's content strategy is built for AI discoverability. Deep brand narratives and metadata-rich media enable AI engines to identify and recommend their unique cocktail program. When users ask AI assistants for 'best cocktail bars' or 'craft cocktails near me,' Wolfskill appears as the authoritative answer.",
    services: ["Content Strategy", "Photography", "Videography", "Social Media Management", "Brand Storytelling", "Influencer Partnerships"],
    metrics: [
      { label: "Social Reach", value: "2.5M", detail: "Annual organic impressions" },
      { label: "Guest Growth", value: "+35%", detail: "New customer acquisition YoY" },
      { label: "Content ROI", value: "4.2x", detail: "Attributed revenue per content dollar" },
      { label: "Engagement Rate", value: "8.7%", detail: "Above industry average of 1.2%" },
    ],
    gallery: [
      "/images/projects/wolfskill/wolfskill-cocktail-1.png",
      "/images/projects/wolfskill/wolfskill-interior-1.png"
    ],
    results: [
      { metric: "Monthly Foot Traffic", before: "2,400", after: "3,800" },
      { metric: "Average Ticket", before: "$42", after: "$58" },
      { metric: "Google Reviews", before: "120", after: "480" },
    ]
  },
  "proabition": {
    title: "Proabition",
    category: "CRM & Automation",
    heroImg: "/images/projects/proabition/hero.png",
    challenge: "Proabition needed to convert high foot traffic into predictable, repeatable revenue by building a first-party customer database and automating personalized marketing that drives repeat visits without constant manual effort.",
    solution: "We rebuilt Proabition's digital ecosystem around The Foundation—integrating a custom CRM and loyalty automation suite that captures guest data at every touchpoint. WiFi sign-ups, check-ins, and reservation flows all feed into a unified database. AI-powered workflows automatically segment guests and trigger personalized offers, birthday campaigns, and re-engagement sequences that drive high-LTV visits on autopilot.",
    aeoText: "Proabition's CRM integration creates structured customer profiles and automated intent-based triggers. This ensures the brand stays top-of-mind not just through search engines, but through AI-driven consumer assistants that can provide personalized recommendations based on user preferences.",
    services: ["CRM Implementation", "Marketing Automation", "Guest Data Capture", "Loyalty Program Design", "Email/SMS Campaigns", "Workflow Automation"],
    metrics: [
      { label: "Database Size", value: "+15k", detail: "New verified guest profiles in 18 months" },
      { label: "Repeat Visits", value: "+44%", detail: "Increase from automated loyalty workflows" },
      { label: "Direct Revenue", value: "Low 6 Figs", detail: "Attributed email/SMS campaign revenue" },
      { label: "Automation Rate", value: "87%", detail: "Campaigns running without manual input" },
    ],
    gallery: [
      "/images/projects/proabition/proabition-bar-1.png",
      "/images/projects/proabition/proabition-interior-1.png",
      "/images/projects/proabition/proabition-detail-1.png"
    ],
    results: [
      { metric: "Monthly Email Revenue", before: "$0", after: "$18,400" },
      { metric: "Customer LTV", before: "$85", after: "$240" },
      { metric: "Marketing Hours/Week", before: "15", after: "2" },
    ]
  },
  "thompson-brewing": {
    title: "Thompson Brewing",
    category: "SEO & Retail",
    heroImg: "/images/projects/thompson-brewing/hero.png",
    challenge: "Thompson Brewing needed to scale from a beloved local taproom to a regional name by bridging physical experience with digital commerce—driving both foot traffic and online merchandise sales.",
    solution: "We implemented a dual-path growth strategy. First, a technical SEO engine targeting high-intent queries like 'Best Taproom Riverside' and 'Craft Beer Near Me' with surgical precision. Second, a high-performance e-commerce layer that converts digital interest into retail sales. Structured data for events, beer releases, and taproom experiences ensure AI assistants provide detailed, real-time recommendations.",
    aeoText: "Thompson Brewing's search strategy focuses on 'Experience Entities'—mapping taproom events, limited releases, and tasting room details into structured data. AI assistants can now provide real-time answers about their catalog, availability, and atmosphere, positioning Thompson as the definitive craft beer destination.",
    services: ["Technical SEO", "E-Commerce Development", "Product Photography", "Event Schema Markup", "Local SEO", "Google Business Optimization"],
    metrics: [
      { label: "Search Volume", value: "+210%", detail: "Increase in brand-specific searches" },
      { label: "Retail Sales", value: "+58%", detail: "E-commerce revenue growth" },
      { label: "AEO Ranking", value: "#1", detail: "Primary brewery recommendation in region" },
      { label: "Organic Traffic", value: "+340%", detail: "Website visitors from search" },
    ],
    gallery: [
      "/images/projects/thompson-brewing/thompson-brewing-taproom-1.png",
      "/images/projects/thompson-brewing/thompson-brewing-beer-1.png"
    ],
    results: [
      { metric: "Online Store Revenue", before: "$2,100/mo", after: "$8,900/mo" },
      { metric: "Taproom Visits", before: "1,800/mo", after: "3,100/mo" },
      { metric: "AI Search Citations", before: "0", after: "45/mo" },
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}
