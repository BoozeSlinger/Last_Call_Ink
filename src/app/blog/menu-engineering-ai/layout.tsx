import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stop Uploading PDFs — How to Menu Engineer for the Robot Age | Last Call Collective",
  description: "To an AI, your PDF menu is just a flat image. Stop killing your SEO and start ranking for individual menu items. Menu engineering tactics for the AI era.",
};

export default function MenuEngineeringLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Stop Uploading PDFs: How to Menu Engineer for the Robot Age",
    "datePublished": "2024-06-12T00:00:00-07:00",
    "dateModified": "2024-06-12T00:00:00-07:00",
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
    "description": "To an AI, your PDF menu is just a flat image. Stop killing your SEO and start ranking for individual menu items.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lastcallcollective.com/blog/menu-engineering-ai"
    },
    "keywords": "menu engineering, restaurant SEO, PDF menu, AI search, bar menu optimization"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lastcallcollective.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://lastcallcollective.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Stop Uploading PDFs", "item": "https://lastcallcollective.com/blog/menu-engineering-ai" }
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
