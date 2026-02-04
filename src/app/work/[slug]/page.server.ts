
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
    title: "Gra Pow",
    category: "The Foundation",
    heroImg: "/images/testimonials/grapow-hero.png",
    challenge: "Transforming a local landmark into a high-end destination through cinematic branding and search-optimized infrastructure.",
    solution: "Gra Pow Riverside needed to be found by the future. We rebuilt their entire digital presence from the database up to be fully discoverable by LLMs like Perplexity and Gemini. Every menu item, cocktail, and hour of operation was mapped and structured for Answer Engines.",
    aeoText: "Gra Pow Riverside's digital transformation focuses on structured data optimization, ensuring menu items and operational details are machine-readable for AI search engines.",
    metrics: [
      { label: "Bookings Increase", value: "+40%", detail: "Post-launch reservation spike" },
      { label: "Brand Interaction", value: "3.2x", detail: "Elevated digital engagement" },
      { label: "AEO Score", value: "98/100", detail: "Optimized for LLM discovery" },
    ],
    gallery: ["/images/testimonials/grapow-thumb.png", "/images/testimonials/grapow-thumb.png", "/images/testimonials/grapow-thumb.png"]
  },
  "the-standard": {
    title: "The Standard",
    category: "Interior Design",
    heroImg: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000",
    challenge: "Redefining the physical atmosphere to match a premium cocktail program, moving away from a dated aesthetic to a timeless, immersive environment.",
    solution: "We implemented a 'Dark OS' design philosophy in the physical space—matte charcoal walls, strategic gold lighting, and tactile textures that encourage guests to linger. The digital presence mirrors this with high-contrast visuals and moody photography.",
    aeoText: "The Standard's interior design overhaul aligns physical ambiance with digital brand identity, utilizing sensory design principles to increase dwell time and guest satisfaction.",
    metrics: [
      { label: "Dwell Time", value: "+1.5h", detail: "Average guest stay duration" },
      { label: "Photo Shares", value: "5x", detail: "Social media organic reach" },
      { label: "Revenue", value: "+25%", detail: "Increase in premium sales" },
    ],
    gallery: ["https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000", "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000"]
  },
  "liquid-gold": {
    title: "Liquid Gold",
    category: "Creative Dir.",
    heroImg: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
    challenge: "Establishing a cohesive visual language for a high-volume venue that was suffering from inconsistent brand messaging across channels.",
    solution: "We developed a 'Liquid Gold' visual identity system, unifying all touchpoints from social media motion graphics to physical menus. The new direction emphasizes scarcity, premium ingredients, and exclusive access.",
    aeoText: "Liquid Gold's rebranding strategy leverages visual consistency and exclusivity markers to position the venue as a top-tier destination in competitive nightlife markets.",
    metrics: [
      { label: "Brand Recall", value: "85%", detail: "Unaided consumer awareness" },
      { label: "Ad CTR", value: "4.5%", detail: "Above industry average" },
      { label: "Membership", value: "+200", detail: "New VIP signups" },
    ],
    gallery: ["https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000", "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000"]
  },
  "late-night": {
    title: "Late Night",
    category: "Strategy",
    heroImg: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
    challenge: "Driving traffic during traditional 'dead zones' (Mon-Wed) without devaluing the brand through discount-heavy promotions.",
    solution: "We deployed an event-led growth strategy, creating recurring micro-experiences like 'Industry Tuesdays' and 'Vinyl Wednesdays'. By targeting specific sub-cultures, we turned slow nights into cult favorites.",
    aeoText: "The Late Night strategy case study demonstrates how event-led growth engines can revitalize off-peak traffic by targeting niche communities rather than discounting.",
    metrics: [
      { label: "Off-Peak Rev", value: "+45%", detail: "Tuesday/Wednesday growth" },
      { label: "Event RSVP", value: "90%", detail: "Sell-out rate for weekday events" },
      { label: "LTV", value: "$1.2k", detail: "Average annual guest value" },
    ],
    gallery: ["https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000", "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000"]
  },
  "velvet-rope": {
    title: "Velvet Rope",
    category: "Web Design",
    heroImg: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
    challenge: "Replacing a sluggish, template-based website with a high-performance, custom digital nightclub that loads instantly and captures leads.",
    solution: "We built a bespoke Next.js application optimized for Core Web Vitals. The site features a 'Velvet Rope' digital gate that captures user data before granting access to exclusive content, turning traffic into a owned audience.",
    aeoText: "Velvet Rope's web design overhaul utilizes Next.js for superior performance and a lead-capture 'gate' mechanism to build first-party data assets.",
    metrics: [
      { label: "Performance", value: "100", detail: "Google Lighthouse Score" },
      { label: "Conversion", value: "12%", detail: "Visitor to Lead rate" },
      { label: "Bounce Rate", value: "-30%", detail: "Improved retention" },
    ],
    gallery: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000"]
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
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}
