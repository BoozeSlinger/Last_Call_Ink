import dynamic from "next/dynamic";
import SidebarBlade from "@/components/SidebarBlade";
import BentoSection from "@/components/BentoSection";
import HomeBlogSection from "@/components/HomeBlogSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AIAuditSection from "@/components/sections/AIAuditSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/Footer";

// Performance Optimization: Dynamic import for heavy components with parallax/video
const HeroReveal = dynamic(() => import("@/components/HeroReveal"), {
  ssr: true,
  loading: () => <div className="h-screen bg-stark" />,
});

export default function Home() {
  // Homepage FAQ schema — mirrors the FAQSection component questions
  const homeFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Bar Operational Audit and does my venue need one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Think of it as a financial health check for your P&L. If your venue is seeing over 15% shrinkage or stagnant weeknight sales, you aren't just 'slowing down'—you're leaking cash. An operational audit identifies exactly where the bleed is happening so we can plug it before we start scaling."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stop bartenders from stealing or over-pouring without firing my whole staff?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on Systems over People. Last Call Collective implements automated inventory tracking and 'blind drop' cash systems that remove the opportunity and temptation for theft. It's not about being a 'snitch'; it's about building a system that protects the owner's margin and rewards the honest staff who actually do the work."
        }
      },
      {
        "@type": "Question",
        "name": "Why isn't my bar showing up in 'Best Bars Near Me' on AI search engines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because traditional SEO is dead. AI engines like Perplexity, ChatGPT, and Gemini look for AEO (AI Engine Optimization). They don't just scan keywords; they analyze specific data points, review sentiment, and structured citations. If you aren't optimized for AEO, your competitors' 2010-era SEO packages are making you invisible to the future of search."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get more customers into my Riverside or Temecula bar on slow weeknights?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The answer isn't 'discounts'—it's Programmatic Traffic. We use AEO to capture high-intent queries like 'Things to do in Riverside tonight' and combine it with automated SMS re-engagement for your regulars. We know the IE and OC geography, and we know that IE weeknights require a specific 'Local Intent' strategy, not a generic marketing blast."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a better alternative to paying for Yelp Ads for my restaurant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes: Owned Distribution. Every owner hates their Yelp bill because they are 'renting' traffic they should already own. By building an automated database and optimizing for Google/AI search engines, you create a distribution channel that YOU control, providing a significantly higher ROI than paying Yelp for the privilege of seeing your own customers."
        }
      }
    ]
  };

  return (
    <main className="relative bg-matte">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFAQSchema) }}
      />
      <SidebarBlade />
      <HeroReveal />
      
      <div className="md:pl-[80px] relative z-20 bg-matte">

        {/* The Investigation (AI Audit Promo) */}
        <AIAuditSection />

        {/* The Proof (Projects) */}
        <BentoSection />
        
        {/* House Menu (Services: Foundation + Tiers + Embedded Testimonials) */}
        <ServicesSection />

        {/* Pull up a stool (Contact) */}
        <div className="mt-16">
          <ContactSection />
        </div>

        {/* The Standard (FAQ) */}
        <div className="mt-16">
          <FAQSection />
        </div>

        {/* Shift Notes (Blog) */}
        <div className="mt-16">
          <HomeBlogSection />
        </div>

        {/* Footer Standard */}
        <Footer />
      </div>
    </main>
  );
}
