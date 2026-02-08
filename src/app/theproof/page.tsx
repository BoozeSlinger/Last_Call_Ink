"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";
import BentoSection from "@/components/BentoSection";

const TheProofPage = () => {
  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Header Section */}
        <section className="pt-32 pb-12 px-8 md:px-24">
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
              <h1 className="text-8xl md:text-[14rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
                The <br /> Proof
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">
                Selected Works
              </p>
              <p className="text-xl md:text-2xl font-mono leading-tight border-l border-stark/20 pl-6">
                Standard-defining digital assets for those who own the night.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Bento Section Inclusion */}
        <div className="mt-[-80px] md:mt-[-120px]">
          <BentoSection />
        </div>

        {/* Footer Standard */}
        <footer className="py-20 px-8 border-t border-charcoal bg-matte mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-4xl font-display font-black text-stark/20 uppercase tracking-tighter">
              LAST CALL <br /> COLLECTIVE
            </div>
            <div className="text-center font-mono text-[10px] tracking-[0.4em] text-stone-600 uppercase">
              © 2024 / The House Standard
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default TheProofPage;
