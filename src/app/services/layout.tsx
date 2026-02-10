import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Menu — Services | Last Call Collective",
  description: "The Foundation, On Call tiers, AI Truth Audit, and operational systems for bars and restaurants. AEO, revenue engines, and marketing for Riverside, Temecula & the Inland Empire.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Last Call Collective",
    "url": "https://lastcallcollective.com/services",
    "provider": {
      "@id": "https://lastcallcollective.com/#organization"
    },
    "areaServed": ["Riverside", "Temecula", "Inland Empire", "Orange County"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bar & Restaurant Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The AI Truth Audit",
            "description": "A data-backed diagnosis of your venue's AI Invisibility — why Gemini, ChatGPT, and Apple Intelligence are ignoring your bar."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Foundation",
            "description": "Complete digital renovation — website, SEO, AEO, Google Business, and the core digital infrastructure your bar needs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Well — Monthly Retainer",
            "description": "Ongoing bar marketing retainer including social media, content, and local SEO management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Call — Monthly Retainer",
            "description": "Premium monthly marketing with paid ads, CRM automation, and advanced AEO strategy."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Top Shelf — Monthly Retainer",
            "description": "Full-service marketing partner — everything in The Call plus dedicated strategy and priority support."
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://lastcallcollective.com/services" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
