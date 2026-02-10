import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pull Up A Stool — Contact | Last Call Collective",
  description: "Get in touch with Last Call Collective. Book your AI Truth Audit, start a project, or ask us about AEO and bar marketing for Riverside, Temecula & the Inland Empire.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://lastcallcollective.com/contact" }
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
