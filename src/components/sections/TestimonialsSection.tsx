"use client";

import React from "react";
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

const TestimonialsSection = () => {
  return (
    <section className="bg-matte text-stark py-32 px-8 md:px-24 overflow-hidden">
      <div className="flex flex-col gap-24 relative">
        {snippets.map((snippet, idx) => (
          <motion.div
            key={idx}
            initial={{ 
              opacity: 0, 
              x: snippet.side === "left" ? -150 : 150, 
              rotate: snippet.side === "left" ? -10 : 10 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              rotate: 0 
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1], 
              delay: idx * 0.1 
            }}
            className={`flex ${snippet.side === "right" ? "justify-end" : "justify-start"}`}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 p-8 border border-charcoal bg-white/5 backdrop-blur-sm relative group hover:bg-white/10 transition-all duration-500 flex flex-col justify-center items-center text-center">
               <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/0 group-hover:border-amber-500 transition-all duration-500" />
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/0 group-hover:border-amber-500 transition-all duration-500" />
               
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 0.2 }}
                 className="absolute top-4 left-4 text-4xl font-display font-black text-amber-500 pointer-events-none"
               >
                 &ldquo;
               </motion.span>

               <blockquote className="text-xl md:text-2xl font-display font-black tracking-tighter uppercase leading-tight mb-6">
                  {snippet.quote}
               </blockquote>
               <p className="font-mono text-[8px] tracking-[0.4em] uppercase opacity-40">— {snippet.author}</p>
            </div>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-20"
        >
          <a 
            href="/testimonials"
            className="group flex items-center gap-4 font-mono text-[10px] tracking-[0.4em] uppercase border border-stark/10 hover:border-stark px-10 py-5 transition-all"
          >
            The Full Receipts 
            <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
