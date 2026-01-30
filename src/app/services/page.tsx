"use client";

import React from "react";
import { motion } from "framer-motion";
import SidebarBlade from "@/components/SidebarBlade";

const ServicesPage = () => {
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

  const customServices = [
    {
      title: "FOUNDATION",
      subtitle: "THE DIGITAL RENOVATION",
      description: "Mobile-first website, pro photography, and digital plumbing fix. The one-time setup that builds the machine. ($2,500)",
    },
    {
      title: "WEB DESIGN",
      subtitle: "AEO OPTIMIZED",
      description: "We don't just build sites; we build answer-engine machines. Fast, cinematic, and built for discovery.",
    },
    {
      title: "BRANDING",
      subtitle: "VISUAL IDENTITY",
      description: "Industrial-grade logos, typography, and brand systems that cut through the noise of the industry.",
    },
  ];

  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 md:px-24">
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

        {/* Pricing Tiers Section */}
        <section className="px-8 md:px-24 pb-32">
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
                
                <div className="mb-12">
                  <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase">[ PH. 2 ]</span>
                  <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mt-4">
                    {tier.name}
                  </h2>
                </div>

                <div className="mb-12 flex items-baseline gap-2">
                  <span className="text-5xl font-display font-black tracking-tighter text-stark/90">${tier.price}</span>
                  <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">/ {tier.period}</span>
                </div>

                <p className="font-sans text-sm md:text-base opacity-70 mb-12 leading-relaxed min-h-[4rem]">
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-16">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start font-mono text-[10px] tracking-widest uppercase opacity-60">
                      <span className="text-amber-600 font-bold">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full text-center border border-stark/20 py-6 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-stark hover:text-matte transition-all group-hover:border-stark"
                >
                  Inquire
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI Audit Callout */}
        <section className="bg-bone text-matte py-32 px-8 md:px-24 relative overflow-hidden">
          <div className="max-w-4xl relative z-10">
            <span className="font-mono text-xs tracking-[0.4em] uppercase mb-8 block text-amber-600 font-bold">THE DIAGNOSTIC</span>
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-8">
              The AI <br /> Truth <br /> Audit <span className="text-amber-600 text-4xl align-top block mt-4 md:inline md:mt-0">— $97</span>
            </h2>
            <div className="mb-12 border-l-4 border-amber-600 pl-8">
               <h3 className="text-xl md:text-2xl font-bold font-mono uppercase mb-4">Stop Losing Customers to the Bar Down the Street.</h3>
               <p className="text-2xl md:text-3xl font-mono leading-tight opacity-80">
                 When someone asks Siri or ChatGPT where to grab a drink, are you the answer? Or are you invisible?
               </p>
            </div>
            
            <p className="font-sans text-lg opacity-70 mb-12 max-w-2xl leading-relaxed">
               We run a full diagnostic on how AI sees your bar. We check if you&apos;re recommended, find broken digital plumbing, and show you exactly who is stealing your traffic. <br/><br/>
               <span className="font-black">The Catch:</span> If you move forward with the Foundation Setup, the $97 is credited back. You pay nothing for the truth.
            </p>

            <a
              href="/aivisibility"
              className="inline-block border-2 border-matte px-12 py-6 font-display text-xl uppercase tracking-widest hover:bg-matte hover:text-bone transition-all font-bold"
            >
              Book Audit &rarr;
            </a>
          </div>
          
          {/* Subtle Watermark Decoration */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-[30rem] font-display font-black text-matte opacity-[0.03] uppercase pointer-events-none select-none">
            DEEP
          </div>
        </section>

        {/* Custom Services Section */}
        <section className="py-32 px-8 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {customServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-display font-black tracking-tighter uppercase">{service.title}</h3>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-amber-500">{service.subtitle}</span>
                </div>
                <p className="font-sans text-lg opacity-60 leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Standard */}
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
