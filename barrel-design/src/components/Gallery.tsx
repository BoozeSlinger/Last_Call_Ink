"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery/hero.png", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery/chingon.png", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery/neon.png", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery/giftcard.png", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery/download.png", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery/hero.png", span: "md:col-span-2 md:row-span-1" },
];

interface GalleryProps {
  accentColor?: string;
}

export default function Gallery({ accentColor = "#a0c514" }: GalleryProps) {
  return (
    <section id="gallery" className="py-32 bg-black px-6">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <span 
            className="font-sans font-black text-xs uppercase tracking-[0.8em] mb-4 block"
            style={{ color: accentColor }}
          >
            Visual Story
          </span>
          <h2 className="text-white font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
            THE GALLERY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden group foundry-border ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={`Foundry Shot ${i}`} 
                fill
                className="w-full h-full object-cover transition-all duration-700 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-display font-black text-xs uppercase tracking-[0.3em]">
                  View — 0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
