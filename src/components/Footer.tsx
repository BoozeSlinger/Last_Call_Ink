"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-matte text-stark py-16 px-8 md:px-16 border-t border-charcoal/30 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[20rem] font-display font-black text-white/[0.01] uppercase pointer-events-none select-none -rotate-12">
        COLLECTIVE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Brand Block */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-6">
              LAST CALL <br /> COLLECTIVE
            </h2>
            <div className="flex items-center gap-4">
               <div className="w-8 h-px bg-amber-500/50" />
               <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-amber-500/80 font-bold">BY THE INDUSTRY, FOR THE INDUSTRY</span>
            </div>
          </div>

          {/* Nav Blocks - Condensed */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-mono text-[8px] tracking-[0.4em] text-stark/20 uppercase font-black">House</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/services" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">House Menu</Link>
                <Link href="/#projects" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">The Proof</Link>
                <Link href="/testimonials" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">The Receipts</Link>
                <Link href="/blog" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">Shift Notes</Link>
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-[8px] tracking-[0.4em] text-stark/20 uppercase font-black">Support</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/faq" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">FAQ</Link>
                <Link href="/aivisibility" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">AI Vision Check</Link>
                <Link href="/contact" className="font-mono text-[10px] tracking-widest uppercase text-amber-500 hover:text-stark transition-colors font-bold">Contact Us</Link>
              </nav>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-3">
              <h4 className="font-mono text-[8px] tracking-[0.4em] text-stark/20 uppercase font-black">Connect</h4>
              <nav className="flex flex-col gap-2">
                <a href="mailto:ryan@lastcall.marketing" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">Inquiries</a>
                <a href="https://instagram.com/lastcall.marketing" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">Instagram</a>
                <a href="#" className="font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors">LinkedIn</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Fixed Positions */}
        <div className="pt-6 border-t border-charcoal/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] tracking-[0.4em] text-amber-500/50 uppercase font-black italic">
            IN THE WEEDS SINCE WAY BACK
          </div>
          <div className="font-mono text-[8px] tracking-[0.4em] text-stark/10 uppercase">
            © 2026 LAST CALL COLLECTIVE // THE HOUSE STANDARD
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
