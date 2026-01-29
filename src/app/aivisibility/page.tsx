"use client";

import React from "react";
import { motion } from "framer-motion";
import SidebarBlade from "@/components/SidebarBlade";

const AIVisibilityPage = () => {
  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Header Section */}
        <section className="pt-32 pb-48 px-8 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <div>
              <h1 className="text-8xl md:text-[14rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
                AI <br /> TRUTH <br /> AUDIT
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">
                Service Specialty
              </p>
              <p className="text-xl md:text-2xl font-mono leading-tight border-l border-charcoal pl-6">
                If the Answer Engines don&apos;t know you, you don&apos;t exist. Our deep-dive audit reveals the digital truth.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Placeholder for more content */}
        <section className="px-8 md:px-24 py-32 border-t border-charcoal/30 text-center opacity-20">
          <p className="font-mono text-xs uppercase tracking-[0.5em]">Deep Scan Initializing...</p>
        </section>

        {/* Footer Standard */}
        <footer className="py-20 px-8 border-t border-charcoal bg-matte mt-auto">
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

export default AIVisibilityPage;
