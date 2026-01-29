"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AiVisibilityPage() {
  return (
    <main className="bg-matte text-stark min-h-screen font-sans selection:bg-stark selection:text-matte">
      {/* Navigation (Simplified for LP focus) */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <a href="/" className="font-display font-black text-2xl tracking-tighter uppercase">
          Last Call
        </a>
        <a 
          href="#audit"
          className="font-mono text-xs tracking-[0.2em] border border-stark px-6 py-3 hover:bg-stark hover:text-matte transition-colors uppercase"
        >
          Get The Proof
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-8 md:px-24 border-b border-charcoal/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <span className="font-mono text-xs text-amber-500 tracking-[0.4em] uppercase mb-8 block">
            The AI Visibility Package
          </span>
          <h1 className="text-6xl md:text-[8rem] font-display font-black leading-[0.85] tracking-tighter uppercase mb-12">
            Are You <br />
            <span className="text-charcoal stroke-stark text-transparent bg-clip-text bg-gradient-to-b from-stark/10 to-stark/0">Invisible?</span>
          </h1>
          <p className="text-xl md:text-3xl font-mono leading-tight max-w-3xl opacity-80 border-l-4 border-amber-500 pl-8">
            The way the world finds a drink has changed. <br/>
            They don't search anymore. They ask.
          </p>
        </motion.div>
      </section>

      {/* The Problem / Data Section */}
      <section className="py-32 px-8 md:px-24 bg-bone text-matte relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase mb-8">
              The Gatekeepers <br/> Have Shifted
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-8">
              Google Maps is no longer the only game in town. Your customers are holding AI supercomputers in their hands, and they are talking to them.
            </p>
            <ul className="space-y-6 font-mono text-sm uppercase tracking-widest">
              <li className="flex items-center gap-4 border-b border-matte/20 pb-4">
                <span className="text-2xl">🤖</span>
                <span>Siri now runs on Google Gemini</span>
              </li>
              <li className="flex items-center gap-4 border-b border-matte/20 pb-4">
                <span className="text-2xl">🍏</span>
                <span>Apple Intelligence is Live</span>
              </li>
              <li className="flex items-center gap-4 border-b border-matte/20 pb-4">
                <span className="text-2xl">💬</span>
                <span>ChatGPT Search is Default for Millions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-matte text-stark p-12 relative">
            <span className="absolute top-4 right-4 text-xs font-mono opacity-50">SIMULATION</span>
            <div className="space-y-8 mt-8 font-sans">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stark/20 flex-shrink-0"></div>
                <div className="bg-stark/10 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl text-sm">
                  "Hey, what's the best spot for a craft cocktail near downtown that isn't too loud?"
                </div>
              </div>
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex-shrink-0"></div>
                <div className="bg-amber-500/20 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl text-sm border border-amber-500/50">
                  "I recommend <strong>The Library</strong> and <strong>Onyx Room</strong>. Both have high ratings for atmosphere and mixology."
                </div>
              </div>
              <div className="text-center pt-8">
                <p className="font-mono text-xs text-red-500 tracking-widest uppercase animate-pulse">
                  ⚠️ Your Bar Was Not Mentioned
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution / "The Proof" */}
      <section id="audit" className="py-32 px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="font-mono text-xs tracking-[0.4em] uppercase opacity-50">Introducing</span>
          <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase my-8 text-amber-500">
            The Proof
          </h2>
          <p className="text-xl md:text-2xl font-sans opacity-70 max-w-2xl mx-auto">
            We audit your digital existence across the Neural Web. <br/>
            Stop guessing. Know exactly what the AI thinks of you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="border border-stark/20 p-8 hover:bg-stark/5 transition-colors">
            <h3 className="font-mono text-xl mb-4 text-amber-500">01. PERCEPTION</h3>
            <p className="text-sm opacity-60">We ask ChatGPT, Claude, Gemini, and Perplexity specifically about your venue to see how they describe your vibe, menu, and pricing.</p>
          </div>
          <div className="border border-stark/20 p-8 hover:bg-stark/5 transition-colors">
            <h3 className="font-mono text-xl mb-4 text-amber-500">02. RANKING</h3>
            <p className="text-sm opacity-60">We run comparative queries ("Best dive bar in [City]") to see if you make the shortlist against your competitors.</p>
          </div>
          <div className="border border-stark/20 p-8 hover:bg-stark/5 transition-colors">
            <h3 className="font-mono text-xl mb-4 text-amber-500">03. DATA</h3>
            <p className="text-sm opacity-60">You get a raw, unfiltered PDF report of your AI footprint, plus a tactical checklist to fix the gaps.</p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="border border-amber-500/50 bg-amber-500/5 p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-display font-black uppercase mb-4">
              $97.00
            </h3>
            <p className="font-mono text-sm tracking-widest uppercase mb-12 opacity-80">
              One-Time Audit Fee &bull; 100% Credited towards any Monthly Package
            </p>
            <a 
              href="mailto:service@lastcallcollective.com?subject=Requesting The Proof Audit" 
              className="inline-block bg-amber-500 text-black px-12 py-6 font-display text-xl uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
            >
              Get The Proof
            </a>
            <p className="mt-8 text-xs font-mono opacity-40">
              Turnaround time: 48 Hours
            </p>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-charcoal/30 text-center font-mono text-xs opacity-40 uppercase tracking-widest">
        Last Call Collective &copy; 2026 &bull; The Proof AI Audit
      </footer>
    </main>
  );
}
