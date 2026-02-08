"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";

const ServicesPage = () => {
  // Quick Services Strip - compact overview
  const quickServices = [
    {
      title: "WEB DESIGN",
      subtitle: "AEO OPTIMIZED",
      description: "Answer-engine machines. Fast, cinematic, built for discovery.",
    },
    {
      title: "BRANDING",
      subtitle: "VISUAL IDENTITY",
      description: "Industrial-grade logos and brand systems that cut through noise.",
    },
    {
      title: "MARKETING",
      subtitle: "GROWTH SYSTEMS",
      description: "Campaigns that fill seats. Social, email, and local dominance.",
    },
    {
      title: "GRAPHIC DESIGN",
      subtitle: "VISUAL ASSETS",
      description: "Menus, signage, merch, and everything your brand touches.",
    },
  ];

  // Foundation Package - expanded details
  const foundationDetails = [
    { 
      label: "High-End Custom Website", 
      value: "Speed-optimized, mobile-first design built to outrank competitors. Includes responsive layouts, SEO architecture, Google Analytics integration, and a simple CMS for easy updates." 
    },
    { 
      label: "Professional Photography", 
      value: "2-3 hour on-site shoot with a professional photographer. Receive 40-50 expertly edited photos capturing your venue's atmosphere, signature drinks, food, and team." 
    },
    { 
      label: "Digital Infrastructure", 
      value: "Complete listing sync across Google, Yelp, TripAdvisor, and 30+ directories. Reservation system integration, hours sync, and backend connections that make everything work seamlessly." 
    },
    { 
      label: "Guest Capture System", 
      value: "Branded QR code marketing materials + custom landing page. Build your own customer database—own your audience and guarantee repeat visits." 
    },
    { 
      label: "Menu & Print Design", 
      value: "Professional menu design (digital + print-ready), plus essential collateral: table tents, coasters, or signage to match your brand." 
    },
    { 
      label: "Launch & Handoff", 
      value: "Full walkthrough of your new digital presence. Staff training on the CMS, analytics overview, and 30-day post-launch support." 
    },
  ];

  // Monthly Tiers
  const tiers = [
    {
      name: "THE WELL",
      price: "449",
      period: "monthly",
      description: "The Insurance Policy. Protect your reputation without the busy work.",
      features: [
        "Reputation Defense (All Reviews w/in 24hr)",
        "Active Search Signal (Weekly Profile Updates)",
        "Listing Maintenance",
        "Data Collection Management",
      ],
      isPopular: false,
    },
    {
      name: "THE CALL",
      price: "1,149",
      period: "monthly",
      description: "The 'Fill The Seats' Button. The engine that drives revenue.",
      features: [
        "Everything in The Well",
        "The Birthday Machine (Auto-Texts)",
        "Missed Call Recovery System",
        "Slow Night Blasts (6x/Month)",
        "Social Media Autopilot (3x/Week)",
      ],
      isPopular: true,
    },
    {
      name: "TOP SHELF",
      price: "2,449",
      period: "monthly",
      description: "The Household Name. For the venue that wants to be #1 in the city.",
      features: [
        "Everything in The Call",
        "Monthly Content Shoots (Photo/Video)",
        "Daily Social Management",
        "Aggressive Influencer Outreach",
        "VIP Access (24/7 Owner Line)",
      ],
      isPopular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-8 md:px-24">
          {/* Home Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-12 font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <div>
              <h1 className="text-8xl md:text-[12rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
                House <br /> Menu
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6 font-bold text-amber-600">
                Growth Engines
              </p>
              <p className="text-xl md:text-2xl font-mono leading-tight border-l-2 border-charcoal pl-6">
                Turn visibility into revenue. We build the machine, then we run it.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Quick Services Strip */}
        <section className="px-8 md:px-24 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {quickServices.map((service, idx) => (
              <motion.a
                key={service.title}
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 border border-charcoal/30 hover:border-amber-600/50 hover:bg-white/5 transition-all"
              >
                <h3 className="text-lg md:text-xl font-display font-black tracking-tighter uppercase mb-1 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <span className="font-mono text-[8px] tracking-widest uppercase text-amber-600 block mb-3">
                  {service.subtitle}
                </span>
                <p className="font-sans text-xs opacity-50 leading-relaxed">
                  {service.description}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* AI Audit Callout - Compact */}
        <section className="bg-bone text-matte py-16 px-8 md:px-24 relative overflow-hidden">
          <div className="max-w-4xl relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block text-amber-600 font-bold">THE DIAGNOSTIC</span>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-4">
                The AI Truth Audit <span className="text-amber-600">— $97</span>
              </h2>
              <p className="font-sans text-base opacity-70 leading-relaxed max-w-xl">
                When someone asks Siri or ChatGPT where to grab a drink, are you the answer? We run a full diagnostic on how AI sees your bar.
                <span className="font-bold"> The $97 is credited back if you move forward with Foundation.</span>
              </p>
            </div>
            <a
              href="/aivisibility"
              className="inline-block border-2 border-matte px-8 py-4 font-display text-lg uppercase tracking-widest hover:bg-matte hover:text-bone transition-all font-bold whitespace-nowrap"
            >
              Book Audit →
            </a>
          </div>
        </section>

        {/* Foundation Section - Expanded */}
        <section className="py-24 px-8 md:px-24 border-b border-charcoal/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-amber-600 font-bold block mb-4">PHASE 1 — ONE-TIME SETUP</span>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-4">
                Foundation
              </h2>
              <p className="text-xl md:text-2xl font-mono leading-tight border-l-2 border-amber-600 pl-6 max-w-2xl opacity-80">
                The digital renovation. Everything you need to compete—and win. <span className="text-amber-500 font-bold">$2,500 one-time.</span>
              </p>
            </div>
            
            {/* Foundation Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {foundationDetails.map((detail, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-l-2 border-amber-600/40 pl-6 hover:border-amber-600 transition-colors"
                >
                  <h4 className="font-mono text-xs tracking-widest uppercase text-stark mb-3 font-bold">
                    {detail.label}
                  </h4>
                  <p className="font-sans text-sm opacity-60 leading-relaxed">
                    {detail.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Foundation CTA */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="/contact"
                className="inline-block bg-stark text-matte px-10 py-5 font-display text-lg uppercase tracking-widest hover:bg-amber-500 transition-all font-bold"
              >
                Start Foundation →
              </a>
              <p className="font-mono text-xs opacity-40 max-w-sm pt-2">
                Already have a site? Ask about à la carte services—photography, listings fix, or guest capture only.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Monthly Tiers Section */}
        <section className="py-24 px-8 md:px-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-amber-600 font-bold block mb-4">PHASE 2 — ONGOING GROWTH</span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mb-4">
              Monthly Engines
            </h2>
            <p className="text-lg font-mono opacity-60 max-w-xl">
              We build the machine, then we run it. Pick your speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-charcoal/30">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 border-b md:border-b-0 border-charcoal/30 md:border-r last:border-r-0 relative group hover:bg-white/5 transition-colors`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 bg-stark text-matte font-mono text-[8px] tracking-widest px-4 py-1 uppercase">
                    Revenue Engine
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-display font-black tracking-tighter uppercase">
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black tracking-tighter text-stark/90">${tier.price}</span>
                  <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">/ {tier.period}</span>
                </div>

                <p className="font-sans text-sm opacity-70 mb-8 leading-relaxed min-h-[3rem]">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-12">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start font-mono text-[10px] tracking-widest uppercase opacity-60">
                      <span className="text-amber-600 font-bold">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full text-center border border-stark/20 py-5 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-stark hover:text-matte transition-all group-hover:border-stark"
                >
                  Inquire
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-8 border-t border-charcoal bg-matte">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-4xl font-display font-black text-stark/20 uppercase tracking-tighter">
              LAST CALL <br /> COLLECTIVE
            </div>
            <div className="text-center font-mono text-[10px] tracking-[0.4em] text-stone-600 uppercase">
              © 2024 / The House Standard
            </div>
            <a 
              href="mailto:contact@lastcall.co"
              className="font-mono text-[10px] tracking-widest text-stark border border-stark/20 px-8 py-4 uppercase hover:bg-stark hover:text-matte transition-all"
            >
              Inquiries
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default ServicesPage;
