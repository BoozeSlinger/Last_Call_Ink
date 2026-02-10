import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Bar Is Invisible to AI Search Engines | Last Call Collective",
  description: "Google isn't the only search engine anymore. ChatGPT, Perplexity, and Gemini are answering 'best bar near me' — and your bar isn't in the conversation.",
};

export default function InvisibleBarLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Your Bar Is Invisible to AI Search Engines",
    "datePublished": "2024-06-20T00:00:00-07:00",
    "dateModified": "2024-06-20T00:00:00-07:00",
    "author": {
      "@type": "Person",
      "name": "Ryan Stevens",
      "url": "https://lastcallcollective.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Last Call Collective",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lastcallcollective.com/logo.png"
      }
    },
    "description": "Google isn't the only search engine anymore. AI engines are answering 'best bar near me' and your bar isn't in the conversation.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lastcallcollective.com/blog/invisible-bar"
    },
    "keywords": "AI search, bar visibility, AEO, bar SEO, invisible bar, Perplexity, ChatGPT"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://lastcallcollective.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Why Your Bar Is Invisible", "item": "https://lastcallcollective.com/blog/invisible-bar" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
