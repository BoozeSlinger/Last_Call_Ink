"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SidebarBlade from "@/components/SidebarBlade";

const GraPowPage = () => {
  const metrics = [
    { label: "Bookings Increase", value: "+40%", detail: "Post-launch reservation spike" },
    { label: "Brand Interaction", value: "3.2x", detail: "Elevated digital engagement" },
    { label: "AEO Score", value: "98/100", detail: "Optimized for LLM discovery" },
  ];

  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Cinematic Hero */}
        <section className="relative h-[90vh] w-full border-b border-charcoal overflow-hidden pt-20">
          <Image
            src="/images/testimonials/grapow-hero.png"
            alt="Gra Pow Digital Experience"
            fill
            priority
            className="object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-matte via-matte/20 to-transparent" />
          
          <div className="absolute bottom-20 left-8 md:left-24 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-6 block">
                The Foundation / Case Study 001
              </span>
              <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-12">
                Gra <br /> Pow
              </h1>
              <p className="text-xl md:text-3xl font-mono leading-tight border-l-2 border-stark/20 pl-8 max-w-2xl">
                Transforming a local landmark into a high-end destination through cinematic branding and search-optimized infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Strategy: AEO & SEO */}
        <section className="py-32 px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-12">
                The <br /> Digital <br /> Truth
              </h2>
              <div className="space-y-8 font-mono text-[10px] md:text-xs tracking-widest uppercase opacity-60 leading-relaxed max-w-md">
                <p>
                  Gra Pow Riverside wasn&apos;t just looking for a website; they needed to be found by the future. 
                  We rebuilt their entire digital presence from the database up to be fully discoverable by LLMs like Perplexity and Gemini.
                </p>
                <p>
                  Every menu item, every cocktail, and every hour of operation was mapped and structured for the Answer Engines.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {metrics.map((metric, idx) => (
                <div key={idx} className="p-8 border border-charcoal bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-4xl md:text-5xl font-display font-black text-stark mb-2">{metric.value}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-amber-500 mb-4">{metric.label}</div>
                  <p className="font-mono text-[9px] tracking-wider uppercase opacity-40">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <section className="py-20 border-y border-charcoal">
          <div className="flex overflow-x-auto gap-4 px-8 md:px-24 pb-12 transition-all cursor-grab no-scrollbar">
             {[
               "/images/testimonials/grapow-thumb.png",
               "/images/testimonials/grapow-thumb.png", // Reuse for placeholder demo
               "/images/testimonials/grapow-thumb.png"
             ].map((img, i) => (
                <div key={i} className="min-w-[70vw] md:min-w-[40vw] aspect-video relative grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src={img} alt={`Gallery ${i}`} fill className="object-cover opacity-80" />
                </div>
             ))}
          </div>
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
              href="/contact"
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

export default GraPowPage;
