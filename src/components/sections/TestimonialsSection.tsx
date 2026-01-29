"use client";

import React from "react";
import { motion } from "framer-motion";

const receipts = [
  {
    quote: "THE LUXURY REBRAND EXECUTED BY LAST CALL COLLECTIVE TRANSFORMED GRA POW FROM A LOCAL FAVORITE TO A HIGH-END DESTINATION. THE ATTENTION TO DETAIL HAS COMPLETELY ELEVATED OUR BRAND STATUS.",
    author: "OWNER",
    role: "GRA POW RIVERSIDE",
  },
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
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-bone text-matte py-32 overflow-hidden">
      {/* Header Section */}
      <div className="px-8 md:px-24 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div>
            <h2 className="text-8xl md:text-[14rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
              The <br /> Receipts
            </h2>
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
      </div>

      {/* Massive Quote List */}
      <div className="px-8 md:px-24 pb-48">
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
      </div>

      {/* Bottom Callout */}
      <div className="bg-matte text-stark py-48 px-8 md:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-9xl font-display font-black uppercase tracking-tighter mb-12 leading-none">
              Ready to <br /> upgrade your <br /> status?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
                href="#contact"
                className="inline-block border border-stark/30 px-16 py-8 font-mono text-xs tracking-[0.4em] uppercase hover:bg-stark hover:text-matte transition-all"
            >
                Let&apos;s talk shop
            </a>
            <a
                href="/testimonials"
                className="inline-block border border-stark/10 px-16 py-8 font-mono text-[10px] tracking-[0.4em] uppercase hover:bg-stark hover:text-matte transition-all"
            >
                View All Receipts &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
