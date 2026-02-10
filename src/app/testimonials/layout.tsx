import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Receipts — Testimonials | Last Call Collective",
  description: "What bar and restaurant owners say about working with Last Call Collective. Real results from Riverside, Temecula, and Inland Empire venues.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Testimonials", "item": "https://lastcallcollective.com/testimonials" }
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
