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
      "Reputation Defense (All Reviews Response within 48hrs)",
      "The Active Signal (Weekly GMB Updates + Monthly Blog)",
      "Listing Maintenance (24/7 Hours/Menu Sync)",
      "Equity Vault Management (Own Your Data)",
    ],
  },
  {
    name: "THE CALL",
    price: "1,149",
    period: "monthly",
    description: "The 'Fill The Seats' Button. The engine that drives revenue.",
    features: [
      "Everything in The Well",
      "The Liquid Asset System (12 SMS + Monthly Email)",
      "Missed Call Recovery (Auto Text-Back)",
      "Group Revenue Engine (Birthday/Anniv Offers)",
      "Social Media Autopilot (3x/Week, 12 Posts/Mo)",
      "Influencer Outreach (6 Invites/Mo)",
      "Monthly Strategy & ROI Reports (1hr Zoom)",
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
      "Monthly Content Studio (50 Photos + 5 Reels)",
      "Daily Social Management (5-7x/Week)",
      "Aggressive Influencer Outreach (10+/mo)",
      "Priority VIP Access (24/7 Agency Owner Text)",
    ],
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-matte text-stark pt-0 pb-0 relative z-10">
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
           <div className="max-w-5xl relative z-10">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 mb-4 block">PHASE 1 / THE DIGITAL RENOVATION</span>
              <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-12 text-stark group-hover:text-white transition-colors">
                The <br /> Foundation 
              </h3>
              
              {/* Tagline + Pricing Row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
                 <p className="text-xl md:text-2xl font-mono leading-tight opacity-80 border-l-4 border-amber-500 pl-6 uppercase tracking-tight max-w-xl">
                    WE BUILD THE MACHINE TO MAKE YOU A TOP RECOMMENDATION. STOP LOSING CUSTOMERS TO THE BAR DOWN THE STREET BEFORE THEY EVEN WALK IN.
                 </p>
                 <div className="flex flex-col items-end shrink-0">
                     <div className="flex items-baseline gap-4">
                         <span className="text-2xl md:text-3xl font-display font-black tracking-tighter text-stark/40 line-through">$2,500</span>
                         <span className="text-5xl md:text-6xl font-display font-black tracking-tighter text-amber-500">$1,500*</span>
                     </div>
                     <span className="block font-mono text-xs tracking-widest text-amber-600 mt-2 uppercase font-bold">*Partner Case Study Pricing</span>
                 </div>
              </div>

              {/* 2-Column Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                 {[
                     { id: "01", title: "High-Converting Website", desc: "AEO/SEO/GEO optimized. Show up as a Top Recommendation when people search 'Best Bar Near Me' or ask AI where to go tonight." },
                     { id: "02", title: "2-Hour Content Studio", desc: "50 edited photos + 5 high-impact short-form videos. We make your cocktails look like $15 instead of $6." },
                     { id: "03", title: "Digital Infrastructure", desc: "Sync across Google, Yelp, Apple Maps, and 20+ directories. No more 'I showed up and you were closed' reviews." },
                     { id: "04", title: "The Equity Vault", desc: "Custom landing page and database to capture guest data. You own your customers—not Yelp, not Instagram." },
                     { id: "05", title: "Custom Asset Design", desc: "On-brand QR designs for stickers, signage, and table tents. Physical hooks that capture data automatically." },
                     { id: "06", title: "Missed Call Text-Back", desc: "The ultimate safety net. Auto-text guests back to book a table or check tonight's specials when you can't answer." }
                 ].map((item, idx) => (
                     <motion.div 
                         key={idx} 
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.1 + (idx * 0.05) }}
                         className="group flex gap-3"
                     >
                         <span className="text-amber-600 text-sm font-mono shrink-0 mt-1 group-hover:text-amber-500">{item.id}</span>
                         <div>
                             <h4 className="font-display font-black text-lg uppercase mb-1 group-hover:text-amber-500 transition-colors">{item.title}</h4>
                             <p className="font-mono text-[10px] opacity-60 leading-relaxed uppercase tracking-wide">{item.desc}</p>
                         </div>
                     </motion.div>
                 ))}
              </div>

              {/* CTA */}
              <a href="/contact" className="inline-block border-2 border-stark px-10 py-5 font-mono text-xs tracking-[0.3em] uppercase hover:bg-stark hover:text-matte transition-all font-bold">
                 Start Renovation
              </a>
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
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 mb-4 block">PHASE 2 / REVENUE ENGINES</span>
                <h2 className="text-6xl md:text-8xl font-display font-black leading-[0.8] tracking-tighter uppercase">
                    Build The Bar <br /> Then Fill It
                </h2>
            </div>
            <p className="max-w-md text-right font-mono opacity-50 text-sm leading-relaxed uppercase tracking-widest">
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

                <p className="font-mono text-xs uppercase tracking-wide leading-relaxed opacity-70 mb-12 border-l border-amber-500/20 pl-4">
                   &ldquo;{tier.description}&rdquo;
                </p>

                <ul className="space-y-6 mb-16">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-4 items-start font-mono text-[11px] tracking-wide uppercase opacity-50 group-hover:opacity-90 transition-opacity">
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
                         <p className="font-mono text-xs opacity-80 leading-relaxed font-bold uppercase tracking-widest">
                             Month-to-month. Cancel anytime with 30 days notice. You own everything we build (website, photos, data).
                         </p>
                     </div>
                     <div>
                         <h4 className="font-display font-black text-lg uppercase mb-4 border-b border-matte/20 pb-2">Partner Offer</h4>
                         <p className="font-mono text-xs opacity-80 leading-relaxed font-bold uppercase tracking-widest">
                             Commit to 6 months to THE CALL tier or higher to unlock the <span className="text-amber-600 font-black">$1,500 Foundation Setup</span> (Save $1,000 off standard $2,500).
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
