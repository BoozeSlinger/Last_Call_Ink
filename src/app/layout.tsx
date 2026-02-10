import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google"; // Removed unused Google Font import
import "./globals.css";
import StickyCTA from "@/components/StickyCTA";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAST CALL COLLECTIVE | Bar & Restaurant Marketing Agency",
  description: "By the industry, for the industry. High-end digital agency for bars & nightlife. AEO, operational audits, and revenue systems for bars in Riverside, Temecula & the Inland Empire.",
  metadataBase: new URL("https://lastcallcollective.com"),
  openGraph: {
    title: "LAST CALL COLLECTIVE | Bar & Restaurant Marketing Agency",
    description: "By the industry, for the industry. High-end digital agency for bars & nightlife.",
    url: "https://lastcallcollective.com",
    siteName: "Last Call Collective",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAST CALL COLLECTIVE",
    description: "By the industry, for the industry. High-end digital agency for bars & nightlife.",
  },
};

import { LiquidCursor } from "@/components/ui/LiquidCursor";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lastcallcollective.com/#organization",
      "name": "Last Call Collective",
      "url": "https://lastcallcollective.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lastcallcollective.com/logo.png"
      },
      "sameAs": [
        "https://www.instagram.com/lastcallcollective"
      ],
      "description": "High-end digital agency for bars & nightlife. AEO, operational audits, and revenue systems.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Riverside",
          "containedInPlace": { "@type": "State", "name": "California" }
        },
        {
          "@type": "City",
          "name": "Temecula",
          "containedInPlace": { "@type": "State", "name": "California" }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Inland Empire"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Orange County"
        }
      ],
      "knowsAbout": [
        "AI Engine Optimization",
        "Bar Marketing",
        "Restaurant Marketing",
        "Operational Audits",
        "Revenue Systems",
        "Nightlife Marketing"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://lastcallcollective.com/#website",
      "url": "https://lastcallcollective.com",
      "name": "Last Call Collective",
      "publisher": {
        "@id": "https://lastcallcollective.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} font-sans selection:bg-white selection:text-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LiquidCursor />
        <div className="bg-grain" />
        <StickyCTA />
        {children}
      </body>
    </html>
  );
}

