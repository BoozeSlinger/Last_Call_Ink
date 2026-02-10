import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Proof — Portfolio | Last Call Collective",
  description: "Case studies and portfolio work from Last Call Collective. See how we've transformed bars and restaurants across Riverside, Temecula, and the Inland Empire.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://lastcallcollective.com/projects" }
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
