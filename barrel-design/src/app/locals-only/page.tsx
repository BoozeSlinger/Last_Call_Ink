"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import Grain from "@/components/ui/Grain";

export default function LocalsOnly() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center py-20 px-6">
      <Grain />
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-2xl relative z-10 text-center">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-20 font-sans font-black text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          Back to Brewery
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-lime-primary font-sans font-black text-xs uppercase tracking-[0.8em] mb-6 block">
            Inner Circle
          </span>
          <h1 className="text-white font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-10">
            JOIN OUR <br /> LOCALS LIST
          </h1>
          <p className="text-white/60 font-sans text-lg mb-16 leading-relaxed">
            Get your first pour for <span className="text-white font-black">$1</span>. <br />
            Sign up below to access exclusive local-only rewards and events.
          </p>

          <form className="bg-white/5 backdrop-blur-xl foundry-border p-10 md:p-16 space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <label className="block text-[10px] font-sans font-black uppercase tracking-widest text-white/20 mb-3">First Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-lime-primary transition-all outline-none font-display text-2xl uppercase tracking-wider"
                />
              </div>
              <div className="relative">
                <label className="block text-[10px] font-sans font-black uppercase tracking-widest text-white/20 mb-3">Last Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-lime-primary transition-all outline-none font-display text-2xl uppercase tracking-wider"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <label className="block text-[10px] font-sans font-black uppercase tracking-widest text-white/20 mb-3">Birthday</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-lime-primary transition-all outline-none font-display text-2xl uppercase tracking-wider appearance-none"
                />
              </div>
              <div className="relative">
                <label className="block text-[10px] font-sans font-black uppercase tracking-widest text-white/20 mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="(000) 000-0000"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-lime-primary transition-all outline-none font-display text-2xl uppercase tracking-wider"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="group relative w-full py-8 mt-10 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-lime-primary" />
              <div className="relative z-10 flex items-center justify-center gap-4 text-black font-display font-black text-xl uppercase tracking-widest">
                Access The List <Send size={20} />
              </div>
            </button>
            <p className="text-center text-white/10 font-sans text-[10px] uppercase tracking-widest">
              By joining, you agree to receive SMS alerts regarding pours and events.
            </p>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
