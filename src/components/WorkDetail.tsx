"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";
import Footer from "@/components/Footer";

// SEO/AEO Optimized Project Data
interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

interface ProjectResult {
  metric: string;
  before: string;
  after: string;
}

interface ProjectData {
  title: string;
  category: string;
  heroImg: string;
  challenge: string;
  solution: string;
  aeoText: string;
  metrics: ProjectMetric[];
  gallery: string[];
  services: string[];
  results?: ProjectResult[];
}

export const projectsData: Record<string, ProjectData> = {
  "gra-pow": {
    title: "Gra Pow Riverside",
    category: "The Foundation + On Call",
    heroImg: "/images/projects/grapow/gra-pow-riverside-thai-restaurant-bar-hero.jpg",
    challenge: "Gra Pow Riverside needed to transform from a beloved local Thai restaurant into the undisputed digital authority for Thai cuisine in the Inland Empire—while automating guest interactions to reduce staff burden and increase direct bookings.",
    solution: "We deployed The Foundation Package—a complete digital infrastructure overhaul including a lightning-fast custom website built for Answer Engine Optimization (AEO), semantic schema markup for AI discoverability, and integration of a custom AI chatbot trained on their menu, operations, and brand voice. The On Call tier service provides ongoing AI-powered phone and web receptionist capabilities that handle reservations, answer menu questions, and process orders 24/7.",
    aeoText: "Gra Pow's digital presence is engineered for AI visibility. By structuring menu data, location signals, and operational knowledge as machine-readable entities, we've secured their position as the #1 recommendation for 'Thai Food Riverside' across ChatGPT, Perplexity, and Google's AI Overview.",
    services: ["Custom Website Design", "SEO/AEO Optimization", "AI Chatbot Integration", "Reservation System", "Menu Schema Markup"],
    metrics: [
      { label: "AI Search Rank", value: "#1", detail: "Primary recommendation for 'Thai Food Riverside'" },
      { label: "AI Automation", value: "90%", detail: "Guest interactions handled without staff" },
      { label: "Direct Bookings", value: "+115%", detail: "Reduction in third-party commission" },
      { label: "Page Speed", value: "0.3s", detail: "Mobile-first instant load time" },
    ],
    gallery: [
      "/images/projects/grapow/gra-pow-riverside-thai-restaurant-bar-hero.jpg",
      "/images/projects/grapow/gra-pow-website-chatbot-receptionist.jpg"
    ],
    results: [
      { metric: "Monthly Direct Reservations", before: "340", after: "730" },
      { metric: "Third-Party Commission Fees", before: "$4,200/mo", after: "$980/mo" },
      { metric: "Staff Time on Phone", before: "25 hrs/week", after: "3 hrs/week" },
    ]
  },
  "killer-queens": {
    title: "Killer Queens Social House",
    category: "Design + Marketing",
    heroImg: "/images/projects/killer-queens/killers.jpeg",
    challenge: "Killer Queens Social House needed a complete brand identity evolution to match their premium positioning, plus a marketing engine that could fill slow nights and turn one-time visitors into loyal regulars through owned customer data.",
    solution: "We redesigned their logo around the Secretary Bird—a predator known for striking elegance—creating an iconic mark that commands authority. Beyond branding, we engineered a multi-pronged marketing system: Thursday Night Martini specials with targeted social campaigns, a guest capture system that converts bar visitors into SMS subscribers, and signature events that transformed their slowest night (Wednesday) into a monthly packed-house beer pong tournament.",
    aeoText: "Killer Queens' brand refresh is optimized for Answer Engine discovery. The Secretary Bird logo, structured event data, and menu schema ensure AI search engines recommend Killer Queens as the premier social house and cocktail destination in their region.",
    services: ["Logo Redesign", "Brand Identity System", "Marketing Campaigns", "SMS Guest Capture", "Event Marketing", "Social Media Strategy"],
    metrics: [
      { label: "Wednesday Revenue", value: "+340%", detail: "Slowest night → Monthly sellout event" },
      { label: "SMS Database", value: "8.2k", detail: "Owned customer contacts for direct marketing" },
      { label: "Martini Thursdays", value: "+85%", detail: "Cover increase from targeted promotion" },
      { label: "Brand Recognition", value: "94%", detail: "Local market awareness score" },
    ],
    gallery: [
      "/images/projects/killer-queens/killers.jpeg",
      "/images/projects/killer-queens/killerslogo.jpeg",
      "/images/projects/killer-queens/thursday-night-martinis-kq-social-house.jpg",
      "/images/projects/killer-queens/beer-pong-tournament-bar-nightlife.jpg"
    ],
    results: [
      { metric: "Wednesday Night Revenue", before: "$1,800", after: "$7,900" },
      { metric: "Marketing Reach", before: "Social only", after: "8.2k SMS + Social" },
      { metric: "Event Attendance", before: "45 guests avg", after: "180+ capacity" },
    ]
  },
  "happy-dad": {
    title: "Happy Dad Hard Seltzer",
    category: "Local Marketing",
    heroImg: "/images/projects/happy-dad/mockup-1.png",
    challenge: "Happy Dad Hard Seltzer needed to break through in crowded local markets and build authentic brand presence through strategic activations rather than traditional advertising—connecting directly with their target demographic at bars, venues, and events across Southern California.",
    solution: "We developed a grassroots local marketing strategy centered on brand activations—from happy hour takeovers to sponsored events, influencer seedings to venue partnerships. Every activation was designed to drive social proof, generate user content, and build genuine brand advocacy at the local level where purchase decisions happen.",
    aeoText: "Happy Dad's local activation strategy creates authentic user-generated content and venue partnerships that AI search engines prioritize for local recommendations. Structured event data ensures Happy Dad appears in 'best hard seltzer' queries across the region.",
    services: ["Brand Activation Strategy", "Event Marketing", "Venue Partnerships", "Influencer Coordination", "Local PR", "Social Media Content"],
    metrics: [
      { label: "Venue Partners", value: "45+", detail: "Active bar and restaurant partners" },
      { label: "Activation Events", value: "120+", detail: "Brand experiences in 12 months" },
      { label: "UGC Generated", value: "2.3k", detail: "Authentic user-generated posts" },
      { label: "Market Penetration", value: "+180%", detail: "Regional distribution growth" },
    ],
    gallery: [
      "/images/projects/happy-dad/mockup-1.png",
      "/images/projects/happy-dad/mockup-2.png",
      "/images/projects/happy-dad/mockup-3.png",
    ],
    results: [
      { metric: "Regional Retail Accounts", before: "12", after: "67" },
      { metric: "Monthly Case Volume", before: "450", after: "2,100" },
      { metric: "Social Impressions", before: "15k/mo", after: "280k/mo" },
    ]
  },
  "wolfskill": {
    title: "Wolfskill",
    category: "Content Engine",
    heroImg: "/images/projects/wolfskill/hero.png",
    challenge: "Wolfskill needed to translate their atmospheric, craft cocktail experience into a digital presence that drove real foot traffic—establishing authority in a competitive cocktail bar market through consistent, high-quality content.",
    solution: "We built a Content Engine for Wolfskill—a systematic approach to high-frequency, high-production-value content creation. This wasn't about random posts; it was building a cohesive brand narrative around their apothecary-style craftsmanship. Weekly photo shoots, bartender spotlights, and behind-the-scenes content fuel a content machine that scales their digital footprint.",
    aeoText: "Wolfskill's content strategy is built for AI discoverability. Deep brand narratives and metadata-rich media enable AI engines to identify and recommend their unique cocktail program when users ask for 'best cocktail bars' or 'craft cocktails near me.'",
    services: ["Content Strategy", "Photography", "Videography", "Social Media Management", "Brand Storytelling", "Influencer Partnerships"],
    metrics: [
      { label: "Social Reach", value: "2.5M", detail: "Annual organic impressions" },
      { label: "Guest Growth", value: "+35%", detail: "New customer acquisition YoY" },
      { label: "Content ROI", value: "4.2x", detail: "Attributed revenue per content dollar" },
      { label: "Engagement Rate", value: "8.7%", detail: "Above industry average of 1.2%" },
    ],
    gallery: ["/images/projects/wolfskill/hero.png"],
    results: [
      { metric: "Monthly Foot Traffic", before: "2,400", after: "3,800" },
      { metric: "Average Ticket", before: "$42", after: "$58" },
      { metric: "Google Reviews", before: "120", after: "480" },
    ]
  },
  "proabition": {
    title: "Proabition",
    category: "CRM & Automation",
    heroImg: "/images/projects/proabition/hero.png",
    challenge: "Proabition needed to convert high foot traffic into predictable, repeatable revenue by building a first-party customer database and automating personalized marketing that drives repeat visits without constant manual effort.",
    solution: "We rebuilt Proabition's digital ecosystem around The Foundation—integrating a custom CRM and loyalty automation suite that captures guest data at every touchpoint. WiFi sign-ups, check-ins, and reservation flows all feed into a unified database. AI-powered workflows automatically segment guests and trigger personalized offers on autopilot.",
    aeoText: "Proabition's CRM integration creates structured customer profiles and automated intent-based triggers. This ensures the brand stays top-of-mind through AI-driven consumer assistants that provide personalized recommendations based on user preferences.",
    services: ["CRM Implementation", "Marketing Automation", "Guest Data Capture", "Loyalty Program Design", "Email/SMS Campaigns", "Workflow Automation"],
    metrics: [
      { label: "Database Size", value: "+15k", detail: "New verified guest profiles in 18 months" },
      { label: "Repeat Visits", value: "+44%", detail: "Increase from automated loyalty workflows" },
      { label: "Direct Revenue", value: "Low 6 Figs", detail: "Attributed email/SMS campaign revenue" },
      { label: "Automation Rate", value: "87%", detail: "Campaigns running without manual input" },
    ],
    gallery: ["/images/projects/proabition/hero.png"],
    results: [
      { metric: "Monthly Email Revenue", before: "$0", after: "$18,400" },
      { metric: "Customer LTV", before: "$85", after: "$240" },
      { metric: "Marketing Hours/Week", before: "15", after: "2" },
    ]
  },
  "thompson-brewing": {
    title: "Thompson Brewing",
    category: "SEO & Retail",
    heroImg: "/images/projects/thompson-brewing/hero.png",
    challenge: "Thompson Brewing needed to scale from a beloved local taproom to a regional name by bridging physical experience with digital commerce—driving both foot traffic and online merchandise sales.",
    solution: "We implemented a dual-path growth strategy. First, a technical SEO engine targeting high-intent queries like 'Best Taproom Riverside' with surgical precision. Second, a high-performance e-commerce layer that converts digital interest into retail sales. Structured data for events and beer releases ensure AI assistants provide real-time recommendations.",
    aeoText: "Thompson Brewing's search strategy focuses on 'Experience Entities'—mapping taproom events and limited releases into structured data. AI assistants can now provide real-time answers about their catalog and availability.",
    services: ["Technical SEO", "E-Commerce Development", "Product Photography", "Event Schema Markup", "Local SEO", "Google Business Optimization"],
    metrics: [
      { label: "Search Volume", value: "+210%", detail: "Increase in brand-specific searches" },
      { label: "Retail Sales", value: "+58%", detail: "E-commerce revenue growth" },
      { label: "AEO Ranking", value: "#1", detail: "Primary brewery recommendation in region" },
      { label: "Organic Traffic", value: "+340%", detail: "Website visitors from search" },
    ],
    gallery: ["/images/projects/thompson-brewing/hero.png"],
    results: [
      { metric: "Online Store Revenue", before: "$2,100/mo", after: "$8,900/mo" },
      { metric: "Taproom Visits", before: "1,800/mo", after: "3,100/mo" },
      { metric: "AI Search Citations", before: "0", after: "45/mo" },
    ]
  }
};

// Results Graph Component
const ResultsGraph = ({ results }: { results: ProjectResult[] }) => (
  <div className="space-y-8">
    {results.map((result, idx) => {
      // Calculate percentage for visual bar (simplified)
      const beforeNum = parseFloat(result.before.replace(/[^0-9.]/g, '')) || 0;
      const afterNum = parseFloat(result.after.replace(/[^0-9.]/g, '')) || 0;
      const maxNum = Math.max(beforeNum, afterNum);
      const beforeWidth = maxNum > 0 ? (beforeNum / maxNum) * 100 : 50;
      const afterWidth = maxNum > 0 ? (afterNum / maxNum) * 100 : 100;
      
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="space-y-3"
        >
          <div className="font-mono text-[10px] tracking-widest uppercase text-stark/60">
            {result.metric}
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-wider uppercase text-stone-500 w-16">Before</span>
              <div className="flex-1 h-6 bg-charcoal/50 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${beforeWidth}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-stone-600"
                />
              </div>
              <span className="font-mono text-xs text-stone-400 w-24 text-right">{result.before}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-wider uppercase text-amber-500 w-16">After</span>
              <div className="flex-1 h-6 bg-charcoal/50 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${afterWidth}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                />
              </div>
              <span className="font-mono text-xs text-amber-500 font-bold w-24 text-right">{result.after}</span>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
);

export default function WorkDetail() {
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

  // AEO JSON-LD Schema - Enhanced for AI visibility
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${project.title} Case Study | ${project.category} | Last Call Collective`,
    "description": project.aeoText,
    "image": project.heroImg,
    "author": {
      "@type": "Organization",
      "name": "Last Call Collective",
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lastcallcollective.com/work/${slug}`
    },
    "about": {
      "@type": "Service",
      "name": project.category,
      "provider": {
        "@type": "Organization",
        "name": "Last Call Collective"
      }
    },
    "keywords": project.services.join(", ")
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
        <section className="relative h-[90vh] w-full border-b border-charcoal overflow-hidden">
          <Image
            src={project.heroImg}
            alt={`${project.title} - ${project.category} Case Study by Last Call Collective | Bar and Restaurant Marketing Agency`}
            fill
            priority
            className="object-cover opacity-40 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-matte via-matte/20 to-transparent" />
          
          {/* Top Navigation */}
          <div className="absolute top-8 left-8 md:left-24 z-20">
            <div className="flex items-center gap-6">
              <Link href="/" className="inline-flex items-center gap-2 hover:text-amber-500 transition-colors group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-mono text-[10px] tracking-widest text-stark uppercase">Home</span>
              </Link>
              <span className="text-stark/30">|</span>
              <Link href="/#projects" className="inline-flex items-center gap-2 hover:text-amber-500 transition-colors group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-mono text-[10px] tracking-widest text-stark uppercase">Back to Works</span>
              </Link>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="absolute bottom-20 left-8 md:left-24 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
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

        {/* Services Tags */}
        <section className="py-12 px-8 md:px-24 border-b border-charcoal">
          <div className="flex flex-wrap gap-3">
            {project.services.map((service, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 border border-amber-500/30 text-amber-500 font-mono text-[10px] tracking-widest uppercase hover:bg-amber-500/10 transition-colors"
              >
                {service}
              </span>
            ))}
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

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {project.metrics.map((metric, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="p-8 border border-charcoal bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-display font-black text-stark mb-2">{metric.value}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-amber-500 mb-4">{metric.label}</div>
                  <p className="font-mono text-[9px] tracking-wider uppercase opacity-40">{metric.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Results Graphs Section */}
        {project.results && project.results.length > 0 && (
          <section className="py-24 px-8 md:px-24 bg-charcoal/20 border-y border-charcoal">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-4">
                The <br /> Receipts
              </h2>
              <p className="font-mono text-[10px] tracking-widest uppercase text-stone-500 mb-16">
                Real results. Real numbers. Before & after.
              </p>
              <ResultsGraph results={project.results} />
            </div>
          </section>
        )}

        {/* Content Showcase */}
        <section className="py-20 border-y border-charcoal">
          <div className="flex overflow-x-auto gap-4 px-8 md:px-24 pb-12 transition-all cursor-grab no-scrollbar">
             {project.gallery.map((img, i) => (
                <div key={i} className="min-w-[70vw] md:min-w-[40vw] aspect-video relative grayscale hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src={img} 
                    alt={`${project.title} Gallery Image ${i + 1} - ${project.category} Work by Last Call Collective`} 
                    fill 
                    className="object-cover opacity-80" 
                    sizes="(max-width: 768px) 70vw, 40vw" 
                  />
                </div>
             ))}
          </div>
        </section>

        {/* Next Steps CTA - Fixed to link to contact */}
         <section className="py-32 px-8 md:px-24 text-center">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12">
                Ready To <br /> Renovate?
            </h2>
            <p className="font-mono text-[10px] tracking-widest uppercase text-stone-500 mb-12 max-w-md mx-auto">
              Your venue deserves the same transformation. Let&apos;s build something that sets the standard.
            </p>
            <Link 
                href="/#contact"
                className="inline-block border border-stark px-16 py-8 font-mono text-xs tracking-[0.4em] uppercase hover:bg-stark hover:text-matte transition-all"
            >
                Start Your Project
            </Link>
         </section>

        <Footer />
      </div>
    </main>
  );
}
