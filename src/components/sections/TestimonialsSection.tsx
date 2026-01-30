"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const snippets = [
  {
    quote: "THEY DON'T JUST BUILD WEBSITES. THEY BUILD ATMOSPHERES.",
    author: "MARCUS REED",
    side: "left"
  },
  {
    quote: "A RARE PARTNER WHO UNDERSTANDS THE FLOW OF BUSY SERVICE.",
    author: "JULIAN VANCE",
    side: "right"
  },
  {
    quote: "THE AI AUDIT WAS A WAKE-UP CALL. WE WERE INVISIBLE.",
    author: "SARAH JENKINS",
    side: "left"
  },
  {
    quote: "SOPHISTICATED DIGITAL ASSETS THAT ACTUALLY COLLECT DATA.",
    author: "TOM BRAINERD",
    side: "right"
  }
];

const ReceiptCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.08), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-matte text-stark py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Vertical divider line for receipt feel */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-white/10 -ml-px" />

          {snippets.map((snippet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut", 
                delay: idx * 0.1 
              }}
              className={`flex flex-col ${idx % 2 === 0 ? "md:items-end md:pr-12 md:text-right" : "md:items-start md:pl-12 md:text-left"} relative`}
            >
              {/* Receipt-style timestamp or marker */}
               <div className={`font-mono text-[9px] text-amber-500 opacity-60 mb-2 uppercase tracking-widest ${idx % 2 === 0 ? "" : ""}`}>
                  {idx % 2 === 0 ? `REF: 00${idx + 1}` : `LOG: 00${idx + 1}`}
               </div>
               
              <ReceiptCard className="w-full max-w-sm border border-white/10 bg-white/5 backdrop-blur-sm group">
                 <div className="p-8 md:p-10 relative z-10">
                    <span className="text-4xl text-amber-500 font-display font-black absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">&ldquo;</span>
                    
                    <blockquote className="text-xl md:text-2xl font-display font-black tracking-tighter uppercase leading-tight mb-6 relative z-10 text-stark group-hover:text-white transition-colors">
                      {snippet.quote}
                    </blockquote>
                    <p className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-50 text-amber-500 group-hover:opacity-100 transition-opacity">
                      — {snippet.author}
                    </p>
                 </div>
              </ReceiptCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center pt-24"
        >
          <a 
            href="/testimonials"
            className="group flex items-center gap-4 font-mono text-[10px] tracking-[0.4em] uppercase border border-stark/10 hover:border-stark hover:bg-stark hover:text-matte px-10 py-5 transition-all duration-300"
          >
            The Full Receipts 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
