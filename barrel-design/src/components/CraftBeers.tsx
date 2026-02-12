"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const beers = [
  {
    title: "Chingon",
    category: "West Coast IPA",
    description: "Our flagship IPA. High bitterness, piney aromas, and a crisp citrus finish.",
    img: "/images/gallery/chingon.png",
    color: "#a0c514",
    featured: true
  },
  {
    title: "Neon Nights",
    category: "Hazy IPA",
    description: "A tropical explosion of mango and passionfruit with a silky smooth mouthfeel.",
    img: "/images/gallery/neon.png",
    color: "#6c0988"
  },
  {
    title: "Apricot Peach",
    category: "Sour Ale",
    description: "A tart and refreshing sour ale bursting with fresh orchard flavors.",
    img: "/images/gallery/download.png",
    color: "#f39c12"
  },
  {
    title: "The Stout",
    category: "Imperial Stout",
    description: "Deep, rich, and roasted flavor with notes of coffee and chocolate.",
    img: "/images/gallery/download.png",
    color: "#ffffff"
  }
];

interface CraftBeersProps {
  accentColor?: string;
}

export default function CraftBeers({ accentColor = "#a0c514" }: CraftBeersProps) {
  return (
    <section id="beers" className="relative py-16 bg-black px-6 overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <h1 className="text-[30rem] font-display font-black uppercase leading-none transform -rotate-12 translate-x-[-10%] translate-y-[-10%]">
          FOUNDRY
        </h1>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <span 
              className="font-sans font-bold text-sm uppercase tracking-[0.5em] mb-4 block"
              style={{ color: accentColor }}
            >
              The Forge
            </span>
            <h2 className="text-white font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
              OUR CRAFT <br />
              BEERS
            </h2>
          </div>
          <p className="text-white/40 max-w-sm font-sans text-sm leading-relaxed mb-4">
            Forged in small batches with premium ingredients. Every pour tells a story of dedication to the craft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {beers.map((beer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group bg-white/5 foundry-border rounded-none overflow-hidden transition-all duration-700 hover:bg-white/[0.08]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative h-80 md:h-[400px] md:w-1/2 overflow-hidden border-b md:border-b-0 md:border-r border-white/10 p-4 bg-black/20">
                  <Image
                    src={beer.img}
                    alt={beer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-700" />
                </div>
                
                {/* Content Section */}
                <div className="p-10 flex flex-col justify-between md:w-1/2">
                  <div>
                    <span 
                      className="text-[0.6rem] font-sans font-bold uppercase tracking-[0.5em] mb-3 block"
                      style={{ color: beer.color }}
                    >
                      {beer.category}
                    </span>
                    <h3 className="text-white font-display font-black text-4xl uppercase tracking-tight mb-6">
                      {beer.title}
                    </h3>
                    <p className="text-white/40 font-sans text-sm leading-relaxed line-clamp-3 mb-8">
                      {beer.description}
                    </p>
                  </div>
                  
                  <button 
                    className="w-full py-4 border border-white/10 text-white font-display font-bold text-xs uppercase tracking-widest transition-all hover:bg-white hover:text-black"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
