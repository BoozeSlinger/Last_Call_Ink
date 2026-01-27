"use client";

import React from "react";
import { motion } from "framer-motion";
import SidebarBlade from "@/components/SidebarBlade";

const TestimonialsPage = () => {
  const receipts = [
    {
      quote: "THEY DON'T JUST BUILD WEBSITES. THEY BUILD ATMOSPHERES. OUR BOOKINGS ARE UP 40% SINCE THE LAUNCH.",
      author: "MARCUS REED",
      role: "FOUNDER, THE NEON WHISKEY",
    },
    {
      quote: "THE AI AUDIT WAS A WAKE-UP CALL. WE WERE INVISIBLE TO CHATGPT. NOW WE'RE THE FIRST RECOMMENDATION FOR COCKTAILS IN BROOKLYN.",
      author: "SARAH JENKINS",
      role: "GM, THE STANDARD",
    },
    {
      quote: "A RARE PARTNER WHO ACTUALLY UNDERSTANDS THE FLOW OF A BUSY SERVICE AND HOW THAT TRANSLATES TO DIGITAL.",
      author: "JULIAN VANCE",
      role: "BEVERAGE DIRECTOR, LIQUID GOLD",
    },
    {
        quote: "BEST IN THE BUSINESS. EFFICIENT, BRUTAL, AND EFFECTIVE.",
        author: "ALEX CHOW",
        role: "OWNER, LATE NIGHT GROUP",
    },
  ];

  return (
    <main className="min-h-screen bg-bone text-matte selection:bg-matte selection:text-bone overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Header Section */}
        <section className="pt-32 pb-12 px-8 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <div>
              <h1 className="text-8xl md:text-[14rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
                The <br /> Receipts
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">
                Social Proof
              </p>
              <p className="text-xl md:text-2xl font-mono leading-tight border-l border-matte/20 pl-6">
                Verified feedback from the front lines of global hospitality.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Massive Quote List */}
        <section className="px-8 md:px-24 pb-48">
          <div className="space-y-48 mt-32">
            {receipts.map((receipt, idx) => (
              <motion.div
                key={receipt.author}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[1200px] mx-auto"
              >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                   <span className="font-mono text-[10px] tracking-[0.4em] opacity-30 uppercase pt-4">
                        [ RECPT#{idx + 101} ]
                   </span>
                   <div className="flex-1">
                        <blockquote className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-12">
                            &quot;{receipt.quote}&quot;
                        </blockquote>
                        <div className="flex items-center gap-8">
                            <div className="h-[1px] w-12 bg-matte/20" />
                            <div>
                                <p className="font-display font-bold text-xl uppercase tracking-tight">{receipt.author}</p>
                                <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">{receipt.role}</p>
                            </div>
                        </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Callout */}
        <section className="bg-matte text-stark py-48 px-8 md:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-9xl font-display font-black uppercase tracking-tighter mb-12 leading-none">
                Ready to <br /> upgrade your <br /> status?
            </h2>
            <a
                href="/contact"
                className="inline-block border border-stark/30 px-16 py-8 font-mono text-xs tracking-[0.4em] uppercase hover:bg-stark hover:text-matte transition-all"
            >
                Let&apos;s talk shop
            </a>
          </motion.div>
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

export default TestimonialsPage;
