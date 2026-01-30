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
  title: "LAST CALL COLLECTIVE | The House Standard",
  description: "By the industry, for the industry. High-end digital agency for bars & nightlife.",
};

import { LiquidCursor } from "@/components/ui/LiquidCursor";

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
        <LiquidCursor />
        <div className="bg-grain" />
        <StickyCTA />
        {children}
      </body>
    </html>
  );
}
