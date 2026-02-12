import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Barrel & Stave Brewing Co.",
  description: "Badass craft brewery in Fullerton and Temecula.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${oswald.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
