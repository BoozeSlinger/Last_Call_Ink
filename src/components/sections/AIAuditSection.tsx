"use client";

import React from "react";
import { motion } from "framer-motion";

const AIAuditSection = () => {
  return (
    <section className="bg-matte relative pt-32 pb-32 overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-20">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
            {/* Animated Glow Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-amber-500/10 rounded-xl blur-2xl opacity-50 animate-pulse" />
            
            {/* Main Content Card */}
            <div className="bg-charcoal/60 backdrop-blur-xl text-stark p-10 md:p-20 rounded-xl border border-white/10 relative shadow-2xl overflow-hidden group">
                
                {/* Scanner Line Animation */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent z-10"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
                    <div>
                        <motion.span 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="font-mono text-xs tracking-[0.4em] uppercase mb-8 block text-amber-500 font-bold"
                        >
                          THE DIAGNOSTIC
                        </motion.span>
                        
                        <motion.h2 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-8"
                        >
                          The AI <br /> Truth Audit <span className="text-amber-500 block text-4xl mt-2">— $97</span>
                        </motion.h2>
                        
                        <div className="mb-10 border-l-4 border-amber-500 pl-8">
                           <h3 className="text-2xl font-mono font-bold mb-4 uppercase tracking-tight text-stark">Stop Losing Customers.</h3>
                           <p className="text-xl font-mono leading-tight opacity-70">
                             When someone asks Siri or ChatGPT where to grab a drink, are you the answer? Or are you invisible?
                           </p>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <a
                            href="/aivisibility"
                            className="inline-block bg-amber-500 text-matte border-2 border-amber-500 px-12 py-6 font-display text-xl uppercase tracking-widest hover:bg-transparent hover:text-amber-500 transition-all font-bold"
                          >
                            Get The Truth &rarr;
                          </a>
                        </motion.div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-lg border border-white/10 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stark">
                              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                           </svg>
                        </div>

                        <h4 className="font-display font-black text-2xl uppercase mb-8 border-b border-white/10 pb-4">What We Inspect:</h4>
                        <ul className="space-y-6 mb-8">
                              {[
                                { title: "AI Visibility Score", desc: "Do ChatGPT, Siri, and Gemini actually recommend you?" },
                                { title: "Digital Plumbing Check", desc: "Broken links, bad hours, and data leaks killing your ranking." },
                                { title: "Competitor Spy Report", desc: "Exactly who is stealing your traffic and how they're doing it." }
                              ].map((item, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.4 + (i * 0.1) }}
                                  className="flex gap-4"
                                >
                                    <span className="text-amber-500 text-xl">●</span>
                                    <div>
                                        <span className="block font-bold uppercase tracking-wider text-sm mb-1">{item.title}</span>
                                        <span className="text-sm opacity-60 font-mono text-xs">{item.desc}</span>
                                    </div>
                                </motion.li>
                              ))}
                        </ul>
                        <div className="bg-amber-500/10 p-6 border border-amber-500/30 rounded relative overflow-hidden">
                           <div className="absolute inset-0 bg-amber-500/5 animate-pulse" />
                           <p className="font-mono text-xs text-amber-500 uppercase tracking-widest leading-relaxed relative z-10">
                               <span className="font-bold">THE GUARANTEE:</span> If you move forward with the Foundation Setup, the $97 is credited back 100%. You pay nothing for the truth.
                           </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
      
      {/* Parallax Watermark */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-[20rem] font-display font-black text-stark uppercase pointer-events-none select-none z-0"
      >
        SCAN
      </motion.div>
    </section>
  );
};

export default AIAuditSection;
