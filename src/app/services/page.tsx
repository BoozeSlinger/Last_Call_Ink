"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";
import Footer from "@/components/Footer";

const ServicesPage = () => {
    const aiSolutions = [
        { title: "THE AI TRUTH AUDIT", price: "$97", desc: "A brutal, data-backed diagnosis of your venue's 'AI Invisibility.' We show you exactly why Gemini, ChatGPT, and Apple Intelligence are ignoring your bar and recommending the one down the street instead." },
        { title: "THE STEALTH AUDIT", price: "$399 – $699", desc: "A one-time operational deep dive to stop the 'bleeding.' We identify leakage, theft, and inventory waste to protect your profit margins before we start growing them." },
        { title: "THE EVENT BLITZ", price: "$750 + AD SPEND", desc: "A 14-day intensive traffic campaign designed for a specific date (Anniversary, Holiday, or Grand Opening). We fire The Pour and run hyper-local ads to drive a massive spike in asses in seats immediately." },
        { title: "MENU ENGINEERING", price: "$499", desc: "We use the Signature Menu System to redesign your layout based on sales data. By moving your 'Margin Heroes' into high-visibility zones, we increase your Average Order Value (AOV) by 10-15% on every guest." }
    ];

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

  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-8 md:px-24">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-12 font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-8xl md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
                House <br /> Menu
              </h1>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="max-w-xl border-l-4 border-amber-500 pl-8 pb-4"
            >
              <span className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-4 block font-bold">In The Weeds</span>
              <p className="text-xl md:text-2xl font-mono leading-tight uppercase font-black text-stark/90 mb-4">
                We have experience behind the bar... in the weeds, not just behind a computer screen.
              </p>
              <p className="font-mono text-[10px] tracking-widest opacity-40 uppercase leading-relaxed">
                99% of agencies are staffed by digital generalists who have never pulled a tap or handled a 10:00 PM Saturday rush. We understand the language of the floor because we&apos;ve lived it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 01. The Diagnostic (Truth Audit) */}
        <section className="px-8 md:px-24 mb-24">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bone text-matte p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden"
           >
              <div className="flex-1">
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-amber-600 font-bold mb-2 block">FIRST STEP</span>
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase leading-none">THE AI TRUTH AUDIT <span className="text-amber-600">— $97</span></h2>
                <p className="font-mono text-[10px] opacity-70 mt-4 uppercase tracking-widest max-w-xl">
                   A brutal diagnosis of your venue&apos;s &quot;AI Invisibility.&quot; We show you exactly why Gemini, ChatGPT, and Apple Intelligence are ignoring your bar.
                </p>
              </div>
              <Link href="/aivisibility" className="bg-matte text-stark px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-amber-600 transition-colors font-bold whitespace-nowrap z-10">
                 Get The Truth →
              </Link>
              {/* Abstract Watermark */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-8xl font-display font-black text-matte/5 uppercase select-none pointer-events-none">TRUTH</div>
           </motion.div>
        </section>

        {/* Core Services: Side-by-Side */}
        <section className="px-8 md:px-24 mb-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Web Design */}
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="p-10 border border-charcoal/30 flex flex-col justify-between"
              >
                 <div>
                    <span className="font-mono text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-6 block">01 / THE ENGINE</span>
                    <h3 className="text-5xl font-display font-black tracking-tighter uppercase mb-8">WEB DESIGN</h3>
                    <p className="font-mono text-lg uppercase leading-tight opacity-80 mb-6 border-l-2 border-amber-500 pl-4">
                       No templates. No AI slop. No old junk.
                    </p>
                    <p className="font-mono text-xs opacity-50 uppercase tracking-widest leading-relaxed">
                       Mobile-first, quick and responsive. Built from the ground up to ensure you show up as a Top Recommendation on Google, AI search assistants, and GEO.
                    </p>
                 </div>
              </motion.div>

              {/* Branding */}
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="p-10 border border-charcoal/30 flex flex-col justify-between"
              >
                 <div>
                    <span className="font-mono text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-6 block">02 / THE DNA</span>
                    <h3 className="text-5xl font-display font-black tracking-tighter uppercase mb-8">BRANDING</h3>
                    <p className="font-mono text-lg uppercase leading-tight opacity-80 mb-6 border-l-2 border-amber-500 pl-4">
                       Logo is a commodity. Brand Identity is a force multiplier.
                    </p>
                    <p className="font-mono text-xs opacity-50 uppercase tracking-widest leading-relaxed">
                       We justify your premium pricing and ensure you aren&apos;t just &quot;another bar&quot;. STOP LOOKING LIKE A HOBBY. START LOOKING LIKE A LANDMARK.
                    </p>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* 03. AI A La Carte */}
        <section className="px-8 md:px-24 mb-32">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-4 block">03 / A La Carte</span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase">HIGH-IMPACT SOLUTIONS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiSolutions.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-charcoal/50 hover:bg-white/5 transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h4 className="text-xl font-display font-black uppercase group-hover:text-amber-500 transition-colors leading-tight max-w-[70%]">{item.title}</h4>
                  <span className="font-mono text-sm font-bold text-amber-500">{item.price}</span>
                </div>
                <p className="font-mono text-[10px] opacity-50 uppercase leading-relaxed tracking-widest relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 04. The Foundation (Renovated Card) */}
        <section className="px-8 md:px-24 mb-32">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-full border border-white/10 bg-matte/40 backdrop-blur-md p-10 md:p-16 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8">
                  <span className="font-mono text-lg tracking-widest text-amber-600 uppercase font-bold opacity-60">PHASE 1</span>
               </div>
               
               <div className="max-w-4xl relative z-10">
                  <span className="font-mono text-[10px] tracking-[0.5em] text-stone-500 uppercase mb-8 block">THE DIGITAL RENOVATION</span>
                  <h3 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-12">THE <br /> FOUNDATION</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                     <p className="text-lg md:text-xl font-mono leading-tight opacity-80 border-l-4 border-amber-500 pl-6 uppercase tracking-tight">
                        WE BUILD THE MACHINE TO MAKE YOU A TOP RECOMMENDATION. STOP LOSING CUSTOMERS TO THE BAR DOWN THE STREET BEFORE THEY EVEN WALK IN.
                     </p>
                     <div className="flex flex-col justify-end">
                        <div className="flex items-baseline gap-4">
                            <span className="text-2xl font-display font-black tracking-tighter opacity-20 line-through">$2,500</span>
                            <span className="text-5xl font-display font-black tracking-tighter text-amber-500">$1,500*</span>
                        </div>
                        <span className="block font-mono text-[10px] tracking-widest text-amber-600 mt-2 uppercase font-bold">*Partner Case Study Pricing</span>
                     </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 opacity-50">
                     {[
                        "High-Converting AEO/SEO Website",
                        "2-Hour Content Studio (50 Photos + 5 Videos)",
                        "Digital Infrastructure Sync (20+ Directories)",
                        "The Equity Vault (Guest Data Capture)",
                        "Custom QR & Print Asset Design",
                        "Automated Missed Call Text-Back"
                     ].map((item) => (
                        <li key={item} className="font-mono text-[10px] tracking-widest uppercase flex gap-3">
                           <span className="text-amber-500">→</span> {item}
                        </li>
                     ))}
                  </ul>

                  <Link href="/contact" className="inline-block mt-12 border-2 border-stark px-8 py-4 font-mono text-xs tracking-widest uppercase hover:bg-stark hover:text-matte transition-all font-bold">
                     Start Foundation →
                  </Link>
               </div>
               {/* Watermark */}
               <div className="absolute -bottom-20 -right-20 text-[20rem] font-display font-black text-stark/5 pointer-events-none select-none uppercase -rotate-6">BUILD</div>
            </motion.div>
        </section>

        {/* 05. Monthly Engines (Tiers) */}
        <section className="px-8 md:px-24 mb-48">
          <div className="mb-12">
            <span className="font-mono text-lg tracking-[0.4em] uppercase text-amber-500 font-bold block mb-2">PHASE 2</span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase">MONTHLY ENGINES</h2>
            <p className="font-mono opacity-40 text-xs mt-4 uppercase tracking-widest">We build the bar, then we fill it. Pick your speed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-charcoal/30 pt-12">
            {tiers.map((tier) => (
              <div key={tier.name} className={`p-8 border border-charcoal/30 relative flex flex-col justify-between ${tier.isPopular ? 'bg-white/5 border-amber-500/30' : ''}`}>
                {tier.isPopular && <span className="absolute top-0 right-0 bg-amber-500 text-matte text-[8px] font-mono px-3 py-1 uppercase font-bold">Recommended</span>}
                <div>
                  <h4 className="text-3xl font-display font-black uppercase mb-4">{tier.name}</h4>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-3xl font-display font-black tracking-tighter">${tier.price}</span>
                    <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">/ MO</span>
                  </div>
                  <ul className="space-y-4 mb-12">
                     {tier.features.map(f => (
                        <li key={f} className="font-mono text-[10px] tracking-wide uppercase opacity-50 flex gap-2">
                           <span className="text-amber-500">→</span> {f}
                        </li>
                     ))}
                  </ul>
                </div>
                <Link href="/contact" className="block text-center border border-stark/20 py-4 font-mono text-[10px] tracking-widest uppercase hover:bg-stark hover:text-matte transition-all">
                   Inquire
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default ServicesPage;
