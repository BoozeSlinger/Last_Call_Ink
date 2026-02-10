import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Truth Audit — Express Audit | Last Call Collective",
  description: "Free express audit for your bar or restaurant. Find out if AI search engines are sending customers to your competitors instead of you.",
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Audit", "item": "https://lastcallcollective.com/audit" }
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
