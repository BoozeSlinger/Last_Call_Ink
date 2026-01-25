"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const HeroReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Stage 1: Massive Logo landing on Sidebar (Using vw/vh for precise landing)
  const logoScale = useTransform(smoothProgress, [0, 0.25], [1, 0.045]);
  const logoX = useTransform(smoothProgress, [0, 0.3], ["0vw", "-47vw"]);
  const logoY = useTransform(smoothProgress, [0, 0.3], ["0vh", "-37vh"]);
  const logoSplashOpacity = useTransform(smoothProgress, [0.25, 0.35], [1, 0]);
  
  // Stage 2: Background dissolve
  const splashOpacity = useTransform(smoothProgress, [0.2, 0.4], [1, 0]);
  
  // Stage 3: Content reveal
  const iceCubeScale = useTransform(smoothProgress, [0.3, 0.6], [1.1, 1]);
  const iceCubeOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  
  // Text parallax
  const textX = useTransform(smoothProgress, [0.4, 0.8], [100, 0]);
  const textOpacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-matte">
      {/* The Matte Splash (Matching the brand depth) */}
      <motion.div 
        style={{ opacity: splashOpacity }}
        className="fixed inset-0 bg-matte z-40 flex items-center justify-center p-8 md:p-24"
      >
        <motion.div
           style={{ 
             scale: logoScale, 
             x: logoX, 
             y: logoY,
             opacity: logoSplashOpacity
           }}
           className="relative w-full max-w-[1400px] h-[500px] md:h-[800px] will-change-transform"
        >
            <Image 
              src="/logo.png?v=953" 
              alt="LCC Logo" 
              fill 
              priority
              unoptimized
              className="object-contain brightness-125"
            />
        </motion.div>
      </motion.div>

      {/* The Revealed Content (Ice & Iron) */}
      <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden pl-[60px] md:pl-[80px]">
        {/* The Spinning Ice Cube (Matte Moody Backdrop) */}
        <motion.div 
           style={{ scale: iceCubeScale, opacity: iceCubeOpacity }}
           className="relative w-full h-full flex items-center justify-center will-change-transform"
        >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-matte/50 to-matte z-10" />
            
            {/* Using a placeholder for the spinning ice cube visual - can be video or highly stylized img */}
            <div className="relative w-full h-full grayscale brightness-50 contrast-125">
                 <Image 
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000" 
                    alt="Ice Cube Background" 
                    fill 
                    priority
                    className="object-cover"
                 />
            </div>
            
            <div className="absolute z-20 text-center px-4">
                 <motion.h1 
                    style={{ x: textX, opacity: textOpacity }}
                    className="text-4xl md:text-7xl lg:text-9xl font-display font-black text-stark tracking-tighter uppercase leading-[0.8]"
                 >
                    THE HOUSE <br /> STANDARD
                 </motion.h1>
                 <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 md:mt-8 font-mono text-[8px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] text-stark uppercase"
                 >
                    BY THE INDUSTRY, FOR THE INDUSTRY
                 </motion.p>
            </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30 font-mono text-[10px] tracking-widest uppercase opacity-30"
      >
        Scroll to Enter
      </motion.div>
    </div>
  );
};

export default HeroReveal;
