"use client";

import React from "react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "THE WELL",
    price: "449",
    period: "monthly",
    description: "Essential visibility. Passive customer gathering. The 'bucket' you need to survive.",
    features: [
      "Discovery & AI Audit",
      "Core Visibility Layer (GBP/NAP)",
      "Essential SEO Pipeline",
      "Reputation Shield (24h Response)",
      "Passive Gathering (QR/Landing Page)",
      "Secure Hosting & 'Inner Circle' Access",
    ],
    isPopular: false,
  },
  {
    name: "THE CALL",
    price: "1,149",
    period: "monthly",
    description: "The Growth Engine. We fill the bucket and pour it back. Active traffic on demand.",
    features: [
      "Everything in The Well",
      "Active Gathering (Email/SMS)",
      "10x 'Slow Day' SMS Blasts",
      "Social Syndication (8 Posts/mo)",
      "Local Events & Menu SEO",
      "Monthly Strategy Call",
    ],
    isPopular: true,
  },
  {
    name: "TOP SHELF",
    price: "2,449",
    period: "monthly",
    description: "Absolute market dominance. High-end content production and white-glove management.",
    features: [
      "Everything in The Call",
      "On-site Content Shoot (Photo/Video)",
      "Full Social Management (Daily)",
      "Deep Dive Competitor Strategy",
      "Priority 24/7 Response",
      "Executive Growth Dashboard",
    ],
    isPopular: false,
  },
];

const customServices = [
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
  {
    title: "CONTENT",
    subtitle: "PRODUCTION",
    description: "High-end photography and video that captures the mood, the movement, and the character of your space.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-matte text-stark pt-32 pb-48">
      {/* Hero Section */}
      <div className="px-8 md:px-24 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div>
            <h2 className="text-8xl md:text-[12rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
              House <br /> Menu
            </h2>
          </div>
          <div className="max-w-md pb-4">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">
              Service Packages
            </p>
            <p className="text-xl md:text-2xl font-mono leading-tight border-l-2 border-charcoal pl-6">
              Tailored digital solutions for the industry. From basic foundation to absolute dominance.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="px-8 md:px-24 mb-32">
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
                  Recommended
                </div>
              )}
              
              <div className="mb-12">
                <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase">[ {idx + 1} ]</span>
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mt-4">
                  {tier.name}
                </h2>
              </div>

              <div className="mb-12 flex items-baseline gap-2">
                <span className="text-5xl font-display font-black tracking-tighter text-stark/90">${tier.price}</span>
                <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">/ {tier.period}</span>
              </div>

              <p className="font-sans text-sm md:text-base opacity-70 mb-12 leading-relaxed min-h-16">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-16">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-4 items-start font-mono text-[10px] tracking-widest uppercase opacity-60">
                    <span className="text-stark">→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full text-center border border-stark/20 py-6 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-stark hover:text-matte transition-all group-hover:border-stark"
              >
                Request Seat
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Audit Callout */}
      <div className="bg-matte text-stark py-32 px-8 md:px-24 relative overflow-hidden mb-32 border-y border-charcoal/30">
        <div className="max-w-4xl relative z-10">
          <span className="font-mono text-xs tracking-[0.4em] uppercase mb-8 block text-amber-500">SPECIALTY COCKTAIL</span>
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-12">
            The AI <br /> Visibility <br /> Audit
          </h2>
          <p className="text-2xl md:text-3xl font-mono leading-tight mb-16 opacity-80 border-l border-stark/20 pl-8">
            If the AI doesn&apos;t know you exist, you don&apos;t. We deep-dive into how Perplexity, ChatGPT, and Gemini perceive your brand.
          </p>
          <a
            href="/aivisibility"
            className="inline-block border-2 border-stark px-12 py-6 font-display text-xl uppercase tracking-widest hover:bg-stark hover:text-matte transition-all"
          >
            Get Audited &rarr;
          </a>
        </div>
        
        {/* Subtle Watermark Decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-[30rem] font-display font-black text-stark opacity-[0.03] uppercase pointer-events-none select-none">
          DEEP
        </div>
      </div>

      {/* Testimonial Snippets (Alternating) */}
      <div className="px-8 md:px-24 mb-32 overflow-hidden">
        <div className="space-y-32">
          {[
            {
              quote: "THEY DON'T JUST BUILD WEBSITES. THEY BUILD ATMOSPHERES.",
              author: "MARCUS REED",
              side: "left"
            },
            {
              quote: "A RARE PARTNER WHO ACTUALLY UNDERSTANDS THE FLOW OF BUSY SERVICE.",
              author: "JULIAN VANCE",
              side: "right"
            },
            {
              quote: "THE AI AUDIT WAS A WAKE-UP CALL. WE WERE INVISIBLE TO CHATGPT.",
              author: "SARAH JENKINS",
              side: "left"
            }
          ].map((snippet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: snippet.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${snippet.side === "right" ? "items-end text-right" : "items-start text-left"}`}
            >
              <div className="max-w-xl">
                 <blockquote className="text-2xl md:text-4xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-6">
                    &quot;{snippet.quote}&quot;
                 </blockquote>
                 <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">— {snippet.author}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center pt-12"
          >
            <a 
              href="/testimonials"
              className="font-mono text-[10px] tracking-[0.4em] uppercase border-b border-stark/20 pb-2 hover:border-stark transition-all"
            >
              View All Receipts &rarr;
            </a>
          </motion.div>
        </div>
      </div>

      {/* Custom Services Section */}
      <div className="px-8 md:px-24">
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
      </div>
    </section>
  );
};

export default ServicesSection;
