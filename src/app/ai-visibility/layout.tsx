import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Vision Check | Last Call Collective",
  description: "Check your bar's AI visibility score. See if ChatGPT, Perplexity, and Google AI recommend your venue — or your competitor's.",
};

export default function AIVisibilityLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "AI Visibility", "item": "https://lastcallcollective.com/ai-visibility" }
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
