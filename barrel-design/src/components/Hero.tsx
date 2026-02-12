"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  location: string;
  image?: string;
  accentColor?: string;
}

export default function Hero({ location, image = "/images/gallery/hero.png", accentColor = "#a0c514" }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Foundry Filter */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black z-10" />
        <Image
          src={image}
          alt={`${location} Brewery`}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale brightness-50 contrast-125 saturate-[0.2] transition-transform duration-[20s] hover:scale-110"
        />
        {/* Color wash accent */}
        <div 
          className="absolute inset-0 mix-blend-overlay z-5" 
          style={{ backgroundColor: `${accentColor}20` }}
        />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <span 
            className="font-sans font-black text-xs md:text-sm uppercase tracking-[1em] mb-4 block"
            style={{ color: accentColor }}
          >
            EST. 2021 — {location}
          </span>
          <h1 
            ref={titleRef}
            className="text-white font-display font-black text-7xl md:text-[14rem] tracking-tighter leading-[0.8] uppercase mb-12 select-none"
          >
            BARREL <br />
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: "1px white" }}>
              & STAVE
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-12"
        >
          <p className="text-white/40 max-w-lg font-sans text-sm md:text-base leading-relaxed tracking-wide">
            Where industrial tradition meets modern craft. We don't just brew beer; we build culture from the stave up.
          </p>
          
          <Link 
            href="/locals-only"
            className="group relative px-10 py-5 overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
          >
            <div 
              className="absolute inset-0 transition-all group-hover:bg-white" 
              style={{ backgroundColor: accentColor }}
            />
            <span className="relative z-10 text-black font-display font-black text-xl uppercase tracking-widest leading-none">
              want a beer for a buck? join our locals only!
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-white/10" />
      <div className="absolute top-12 right-12 w-24 h-24 border-t-2 border-r-2 border-white/10" />
      <div className="absolute bottom-12 left-12 w-24 h-24 border-b-2 border-l-2 border-white/10" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-white/10" />
    </section>
  );
}
