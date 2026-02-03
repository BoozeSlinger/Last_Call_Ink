"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";

// Project Data - In a real app, this would come from a CMS or API
const projectsData: Record<string, {
  title: string;
  category: string;
  heroImg: string;
  challenge: string;
  solution: string;
  aeoText: string;
  metrics: { label: string; value: string; detail: string }[];
  gallery: string[];
}> = {
  "gra-pow": {
    title: "Gra Pow",
    category: "The Foundation",
    heroImg: "/images/testimonials/grapow-hero.png",
    challenge: "Transforming a local landmark into a high-end destination through cinematic branding and search-optimized infrastructure.",
    solution: "Gra Pow Riverside needed to be found by the future. We rebuilt their entire digital presence from the database up to be fully discoverable by LLMs like Perplexity and Gemini. Every menu item, cocktail, and hour of operation was mapped and structured for Answer Engines.",
    aeoText: "Gra Pow Riverside's digital transformation focuses on structured data optimization, ensuring menu items and operational details are machine-readable for AI search engines.",
    metrics: [
      { label: "Bookings Increase", value: "+40%", detail: "Post-launch reservation spike" },
      { label: "Brand Interaction", value: "3.2x", detail: "Elevated digital engagement" },
      { label: "AEO Score", value: "98/100", detail: "Optimized for LLM discovery" },
    ],
    gallery: ["/images/testimonials/grapow-thumb.png", "/images/testimonials/grapow-thumb.png", "/images/testimonials/grapow-thumb.png"]
  },
  "the-standard": {
    title: "The Standard",
    category: "Interior Design",
    heroImg: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000",
    challenge: "Redefining the physical atmosphere to match a premium cocktail program, moving away from a dated aesthetic to a timeless, immersive environment.",
    solution: "We implemented a 'Dark OS' design philosophy in the physical space—matte charcoal walls, strategic gold lighting, and tactile textures that encourage guests to linger. The digital presence mirrors this with high-contrast visuals and moody photography.",
    aeoText: "The Standard's interior design overhaul aligns physical ambiance with digital brand identity, utilizing sensory design principles to increase dwell time and guest satisfaction.",
    metrics: [
      { label: "Dwell Time", value: "+1.5h", detail: "Average guest stay duration" },
      { label: "Photo Shares", value: "5x", detail: "Social media organic reach" },
      { label: "Revenue", value: "+25%", detail: "Increase in premium sales" },
    ],
    gallery: ["https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000", "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000"]
  },
  "liquid-gold": {
    title: "Liquid Gold",
    category: "Creative Dir.",
    heroImg: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
    challenge: "Establishing a cohesive visual language for a high-volume venue that was suffering from inconsistent brand messaging across channels.",
    solution: "We developed a 'Liquid Gold' visual identity system, unifying all touchpoints from social media motion graphics to physical menus. The new direction emphasizes scarcity, premium ingredients, and exclusive access.",
    aeoText: "Liquid Gold's rebranding strategy leverages visual consistency and exclusivity markers to position the venue as a top-tier destination in competitive nightlife markets.",
    metrics: [
      { label: "Brand Recall", value: "85%", detail: "Unaided consumer awareness" },
      { label: "Ad CTR", value: "4.5%", detail: "Above industry average" },
      { label: "Membership", value: "+200", detail: "New VIP signups" },
    ],
    gallery: ["https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000", "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000"]
  },
  "late-night": {
    title: "Late Night",
    category: "Strategy",
    heroImg: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
    challenge: "Driving traffic during traditional 'dead zones' (Mon-Wed) without devaluing the brand through discount-heavy promotions.",
    solution: "We deployed an event-led growth strategy, creating recurring micro-experiences like 'Industry Tuesdays' and 'Vinyl Wednesdays'. By targeting specific sub-cultures, we turned slow nights into cult favorites.",
    aeoText: "The Late Night strategy case study demonstrates how event-led growth engines can revitalize off-peak traffic by targeting niche communities rather than discounting.",
    metrics: [
      { label: "Off-Peak Rev", value: "+45%", detail: "Tuesday/Wednesday growth" },
      { label: "Event RSVP", value: "90%", detail: "Sell-out rate for weekday events" },
      { label: "LTV", value: "$1.2k", detail: "Average annual guest value" },
    ],
    gallery: ["https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000", "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000"]
  },
  "velvet-rope": {
    title: "Velvet Rope",
    category: "Web Design",
    heroImg: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
    challenge: "Replacing a sluggish, template-based website with a high-performance, custom digital nightclub that loads instantly and captures leads.",
    solution: "We built a bespoke Next.js application optimized for Core Web Vitals. The site features a 'Velvet Rope' digital gate that captures user data before granting access to exclusive content, turning traffic into a owned audience.",
    aeoText: "Velvet Rope's web design overhaul utilizes Next.js for superior performance and a lead-capture 'gate' mechanism to build first-party data assets.",
    metrics: [
      { label: "Performance", value: "100", detail: "Google Lighthouse Score" },
      { label: "Conversion", value: "12%", detail: "Visitor to Lead rate" },
      { label: "Bounce Rate", value: "-30%", detail: "Improved retention" },
    ],
    gallery: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000"]
  },
  "copper-still": {
    title: "Copper Still",
    category: "Branding",
    heroImg: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
    challenge: "Differentiating a new craft distillery in a saturated market by leveraging heritage and authenticity.",
    solution: "We crafted a 'Copper Still' identity that blends historical typography with modern industrial design. The brand story focuses on the 100-year-old process, positioning the product not just as a drink, but as a piece of history.",
    aeoText: "Copper Still's branding case study highlights the use of heritage storytelling and industrial design elements to create market differentiation in the craft spirits sector.",
    metrics: [
      { label: "Shelf Impact", value: "High", detail: "Top-tier retail placement" },
      { label: "Social Growth", value: "+5k", detail: "Followers in 3 months" },
      { label: "Sales", value: "Sold Out", detail: "Batch 1 inventory cleared" },
    ],
    gallery: ["https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000", "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000"]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-matte text-stark flex items-center justify-center">
         <div className="text-center">
            <h1 className="text-6xl font-display font-black uppercase">Project Not Found</h1>
            <Link href="/" className="mt-8 inline-block border-b border-stark pb-1 font-mono hover:opacity-70">Return Home</Link>
         </div>
      </main>
    );
  }

  // AEO JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title + " Case Study",
    "description": project.aeoText,
    "image": project.heroImg,
    "author": {
      "@type": "Organization",
      "name": "Last Call Collective"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Last Call Collective",
        "logo": {
            "@type": "ImageObject",
            "url": "https://lastcallcollective.com/logo.png" 
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://lastcallcollective.com/work/${slug}`
    }
  };

  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Cinematic Hero */}
        <section className="relative h-[90vh] w-full border-b border-charcoal overflow-hidden pt-20">
          <Image
            src={project.heroImg}
            alt={`${project.title} Digital Experience`}
            fill
            priority
            className="object-cover opacity-40 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-matte via-matte/20 to-transparent" />
          
          <div className="absolute bottom-20 left-8 md:left-24 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link href="/#projects" className="inline-block mb-8 hover:opacity-70 transition-opacity">
                <span className="font-mono text-[10px] tracking-widest text-stark uppercase">← Back to Works</span>
              </Link>
              <span className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-6 block">
                {project.category} / Case Study
              </span>
              <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-12">
                {project.title.split(" ").map((word, i) => (
                    <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-xl md:text-3xl font-mono leading-tight border-l-2 border-stark/20 pl-8 max-w-2xl">
                {project.challenge}
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Strategy: AEO & SEO */}
        <section className="py-32 px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-12">
                The <br /> Digital <br /> Truth
              </h2>
              <div className="space-y-8 font-mono text-[10px] md:text-xs tracking-widest uppercase opacity-60 leading-relaxed max-w-md">
                <p>{project.solution}</p>
                <p className="text-amber-500">{project.aeoText}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-8 border border-charcoal bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-4xl md:text-5xl font-display font-black text-stark mb-2">{metric.value}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-amber-500 mb-4">{metric.label}</div>
                  <p className="font-mono text-[9px] tracking-wider uppercase opacity-40">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <section className="py-20 border-y border-charcoal">
          <div className="flex overflow-x-auto gap-4 px-8 md:px-24 pb-12 transition-all cursor-grab no-scrollbar">
             {project.gallery.map((img, i) => (
                <div key={i} className="min-w-[70vw] md:min-w-[40vw] aspect-video relative grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src={img} alt={`Gallery ${i}`} fill className="object-cover opacity-80" sizes="(max-width: 768px) 70vw, 40vw" />
                </div>
             ))}
          </div>
        </section>

        {/* Next Steps CTA */}
         <section className="py-32 px-8 md:px-24 text-center">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12">
                Ready To <br /> Renovate?
            </h2>
            <Link 
                href="/contact"
                className="inline-block border border-stark px-16 py-8 font-mono text-xs tracking-[0.4em] uppercase hover:bg-stark hover:text-matte transition-all"
            >
                Start Your Project
            </Link>
         </section>

        {/* Footer Standard */}
        <footer className="py-20 px-8 border-t border-charcoal bg-matte">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-4xl font-display font-black text-stark/20 uppercase tracking-tighter">
              LAST CALL <br /> COLLECTIVE
            </div>
            <div className="text-center font-mono text-[10px] tracking-[0.4em] text-stone-600 uppercase">
              © 2026 / The House Standard
            </div>
            <Link 
              href="/contact"
              className="font-mono text-[10px] tracking-widest text-stark border border-stark/20 px-8 py-4 uppercase hover:bg-stark hover:text-matte transition-all"
            >
              Inquiries
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );

// This function tells Next.js which slugs to pre-generate at build time
export function generateStaticParams() {
  // Return an array of all the possible slug values from projectsData
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}
}
