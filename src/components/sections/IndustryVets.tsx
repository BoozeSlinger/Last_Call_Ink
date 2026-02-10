"use client";

import React from "react";
import { motion } from "framer-motion";

const IndustryVets = () => {
  return (
    <section className="bg-matte py-24 md:py-48 px-8 md:px-24 border-y border-charcoal overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-8 block">
              The Real Standard
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-12 text-stark">
              In The <br /> Weeds
            </h2>
            <p className="text-xl md:text-2xl font-mono leading-tight opacity-80 mb-10 border-l-4 border-amber-500 pl-6 uppercase tracking-tight max-w-xl">
              We have experience behind the bar... in the weeds, not just behind a computer screen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-mono text-sm md:text-md opacity-60 uppercase tracking-widest leading-relaxed">
              99% of agencies are staffed by digital generalists who have never pulled a tap or handled a 10:00 PM Saturday rush. They deal in &quot;clicks&quot; and &quot;impressions&quot;—metrics that don&apos;t pay the rent.
            </p>
            <p className="font-mono text-sm md:text-md opacity-60 uppercase tracking-widest leading-relaxed">
              We are hospitality veterans with 15 years in the game. We understand the language of the floor because we&apos;ve lived it. We don&apos;t just build websites; we build revenue engines that fill seats and protect your hard-earned reputation.
            </p>
            <div className="pt-8">
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-px bg-amber-500 group-hover:w-24 transition-all duration-500" />
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-stark group-hover:text-amber-500 transition-colors">By the Industry, For the Industry</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[30rem] font-display font-black text-stark/[0.02] uppercase pointer-events-none select-none -rotate-12">
        GRIT
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 text-[20rem] font-display font-black text-amber-500/[0.03] uppercase pointer-events-none select-none rotate-12">
        VET
      </div>
    </section>
  );
};

export default IndustryVets;
