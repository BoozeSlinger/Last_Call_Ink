import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Zero-Click Bar — Why Your Bar Doesn't Need a Click to Win | Last Call Collective",
  description: "How AI Engine Optimization (AEO) is replacing traditional SEO for bars. Your customers are getting answers from ChatGPT and Perplexity — without ever clicking through to your website.",
};

export default function ZeroClickLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Zero-Click Bar: Why Your Bar Doesn't Need a Click to Win",
    "datePublished": "2024-05-28T00:00:00-07:00",
    "dateModified": "2024-05-28T00:00:00-07:00",
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
    "description": "How AI Engine Optimization (AEO) is replacing traditional SEO for bars. Your customers are getting answers without ever clicking through.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lastcallcollective.com/blog/zero-click-bar"
    },
    "keywords": "AEO, AI Engine Optimization, zero-click search, bar marketing, bar SEO"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://lastcallcollective.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "The Zero-Click Bar", "item": "https://lastcallcollective.com/blog/zero-click-bar" }
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
