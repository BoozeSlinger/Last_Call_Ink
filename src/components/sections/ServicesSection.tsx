"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialsSection from "./TestimonialsSection";

const tiers = [
  {
    name: "THE WELL",
    price: "449",
    period: "monthly",
    description: "The Insurance Policy. Protect your reputation without the busy work.",
    features: [
      "Reputation Defense (All Reviews w/in 24hr)",
      "Active Search Signal (Weekly Profile Updates)",
      "Listing Maintenance (Holiday Hours/Details)",
      "Data Collection Management",
    ],
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
      "Influencer Invites (6/Month)",
      "Real ROI Reports",
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
      "Daily Social Management (5-7x/Week)",
      "Aggressive Influencer Outreach (10+/mo)",
      "VIP Access (24/7 Owner Line)",
    ],
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-matte text-stark pt-0 pb-32 relative z-10">
       {/* Visual Connector Line */}
       <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-24 w-px bg-linear-to-b from-amber-500 to-transparent opacity-50" />

      {/* THE FOUNDATION: Pop-out Card Style */}
      <div className="px-8 md:px-24 mb-32 -mt-12 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="w-full border border-white/10 bg-matte/40 backdrop-blur-md text-stark p-12 md:p-24 relative overflow-hidden group shadow-2xl hover:border-white/20 transition-all duration-500"
        >
           <div className="absolute top-0 right-0 p-8">
             <span className="font-mono text-xs tracking-widest text-amber-600 uppercase opacity-60 group-hover:opacity-100 transition-opacity font-bold">PHASE 1</span>
           </div>
           
           <div className="max-w-5xl relative z-10">
              <span className="font-mono text-[10px] tracking-[0.5em] text-stone-500 uppercase mb-8 block">THE DIGITAL RENOVATION</span>
              <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-12 text-stark group-hover:text-white transition-colors">
                The <br /> Foundation 
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                 <div>
                    <p className="text-xl md:text-2xl font-mono leading-tight opacity-80 mb-10 border-l-4 border-amber-500 pl-6">
                       Stop losing customers before they even walk in. We fix the plumbing once, so you&apos;re ready to receive traffic.
                    </p>
                    <div className="flex flex-col justify-between h-full">
                         <div className="mt-8">
                            <span className="block font-mono text-[10px] tracking-widest opacity-40 mb-2 uppercase text-stark">Standard Setup</span>
                            <div className="flex items-baseline gap-4">
                                <span className="text-5xl md:text-6xl font-display font-black tracking-tighter text-stark">$2,500</span>
                            </div>
                            <span className="block font-mono text-xs tracking-widest text-amber-600 mt-2 uppercase font-bold">One-Time Investment</span>
                         </div>
                         <a href="/contact" className="w-full md:w-auto text-center border-2 border-stark px-10 py-5 font-mono text-xs tracking-[0.3em] uppercase hover:bg-stark hover:text-matte transition-all mt-10 md:mt-0 font-bold">
                            Start Renovation
                         </a>
                    </div>
                 </div>

                 {/* Detailed Services List */}
                 <ul className="space-y-8">
                    {[
                        { id: "01", title: "Mobile-First Custom Website", desc: "80% of customers decide on their phone. We build for speed and menus, not flashy nonsense. Designed to rank for \"Best drinks near me\"." },
                        { id: "02", title: "Pro Photography", desc: "No more iPhone pics. We shoot 20-30 professional photos of your food, drinks, and venue so your online vibe matches your real-life vibe." },
                        { id: "03", title: "Digital Plumbing Fix", desc: "We force-update your info across 50+ platforms (Google, Yelp, Apple Maps, etc.) so customers never show up to a locked door." },
                        { id: "04", title: "List Builder System", desc: "QR codes and landing pages that turn random guests into a contact list you can actually use." }
                    ].map((item, idx) => (
                        <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="group"
                        >
                            <h4 className="font-display font-black text-xl uppercase mb-2 flex items-center gap-3 group-hover:text-amber-500 transition-colors">
                                <span className="text-amber-600 text-sm group-hover:text-amber-500">{item.id}</span> {item.title}
                            </h4>
                            <p className="font-mono text-xs opacity-70 leading-relaxed uppercase tracking-wide">
                                {item.desc}
                            </p>
                        </motion.li>
                    ))}
                 </ul>
              </div>
           </div>
           
           {/* Abstract Watermark */}
           <div className="absolute -bottom-20 -right-20 text-[20rem] font-display font-black text-stark/5 pointer-events-none select-none uppercase -rotate-6">
              FIX
           </div>
        </motion.div>
      </div>

      {/* Header for Monthly Tiers */}
      <div className="px-8 md:px-24 mb-24">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="border-t border-charcoal/30 pt-12 flex flex-col md:flex-row justify-between items-end gap-8"
        >
            <div>
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 mb-4 block">PHASE 2 / GROWTH ENGINES</span>
                <h2 className="text-6xl md:text-8xl font-display font-black leading-[0.8] tracking-tighter uppercase">
                    Build The Bar <br /> Then Fill It
                </h2>
            </div>
            <p className="max-w-md text-right font-mono opacity-50 text-sm leading-relaxed">
                Most agencies sell clicks. We deal in Revenue and Regulars. <br/>
                Choose your engine.
            </p>
        </motion.div>
      </div>

      {/* Monthly Tiers: Staggered Cards */}
      <div className="px-8 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`p-10 border border-charcoal relative group hover:border-stark/40 transition-colors flex flex-col justify-between min-h-[600px] ${
                idx === 1 ? "md:-translate-y-8 bg-white/5 border-amber-500/30" : idx === 2 ? "md:translate-y-8" : ""
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase">[ PH. 2 ]</span>
                  {tier.isPopular && (
                    <span className="bg-amber-500 text-matte font-mono text-[8px] tracking-widest px-3 py-1 uppercase font-bold">Most Popular</span>
                  )}
                </div>
                
                <h4 className="text-4xl lg:text-5xl font-display font-black tracking-tighter uppercase mb-2">
                  {tier.name}
                </h4>
                <div className="flex items-baseline gap-2 mb-12">
                  <span className="text-4xl font-display font-black tracking-tighter text-stark/90">${tier.price}</span>
                  <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">/ {tier.period}</span>
                </div>

                <p className="font-mono text-[10px] uppercase tracking-widest leading-relaxed opacity-60 mb-12 border-l border-amber-500/20 pl-4">
                  {tier.description}
                </p>

                <ul className="space-y-6 mb-16">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start font-mono text-[9px] tracking-widest uppercase opacity-40 group-hover:opacity-80 transition-opacity">
                      <span className="text-amber-500">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/contact"
                className="block w-full text-center border border-stark/20 py-6 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-stark hover:text-matte transition-all group-hover:border-stark"
              >
                Inquire
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Terms & Guarantees */}
      <div className="px-8 md:px-24 pb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-stark/90 backdrop-blur-md text-matte p-12 md:p-20 relative overflow-hidden"
          >
             <div className="max-w-4xl relative z-10">
                 <h3 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-8">
                     Terms & <br/> Guarantees
                 </h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                     <div>
                         <h4 className="font-display font-black text-lg uppercase mb-4 border-b border-matte/20 pb-2">Standard Terms</h4>
                         <p className="font-mono text-xs opacity-80 leading-relaxed font-bold">
                             Month-to-month. Cancel anytime with 30 days notice. You own everything we build (website, photos, data).
                         </p>
                     </div>
                     <div>
                         <h4 className="font-display font-black text-lg uppercase mb-4 border-b border-matte/20 pb-2">Partner Offer</h4>
                         <p className="font-mono text-xs opacity-80 leading-relaxed font-bold">
                             Commit to 6 months to unlock the <span className="text-amber-600">$1,500 Foundation Setup</span> (Save $1,000 off standard $2,500). Early cancellation requires paying the difference on the setup fee.
                         </p>
                     </div>
                 </div>
             </div>
             
             {/* Watermark */}
             <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[20rem] font-display font-black text-matte opacity-[0.05] uppercase pointer-events-none select-none">
                TERMS
             </div>
          </motion.div>
      </div>

      {/* Embedded Testimonials */}
      <div className="border-t border-charcoal/30">
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default ServicesSection;
