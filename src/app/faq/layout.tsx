import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — The House Standard | Last Call Collective",
  description: "Common questions about AI Engine Optimization, bar operational audits, AEO vs SEO, getting more customers in Riverside & Temecula bars, and alternatives to Yelp Ads.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://lastcallcollective.com/faq" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
