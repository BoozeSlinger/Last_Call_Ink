"use client";

import React from "react";
import TruthAuditMini from "@/components/sections/TruthAuditMini";
import SidebarBlade from "@/components/SidebarBlade";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Header Section */}
        <section className="pt-32 pb-12 px-8 md:px-24">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-12 font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter uppercase mb-8">
              THE TRUTH <br /> AUDIT
            </h1>
            <p className="font-mono text-xs tracking-[0.3em] uppercase leading-relaxed max-w-sm opacity-60">
              YOUR SIGNAL IS EITHER MAKING YOU RICH OR KEEPING YOU HIDDEN. LET&apos;S FIND OUT WHICH ONE.
            </p>
          </motion.div>
        </section>

        <TruthAuditMini />

        <Footer />
      </div>
    </main>
  );
}
