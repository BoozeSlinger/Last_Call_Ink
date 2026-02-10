"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
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
  
  // Responsive transform for landing position
  const mobileLogoX = useTransform(smoothProgress, [0, 0.3], ["0vw", "0vw"]); // Stay centered or different landing on mobile
  const mobileLogoY = useTransform(smoothProgress, [0, 0.3], ["0vh", "-45vh"]);

  const logoSplashOpacity = useTransform(smoothProgress, [0.25, 0.35], [1, 0]);
  
  // Stage 2: Background dissolve
  const splashOpacity = useTransform(smoothProgress, [0.2, 0.4], [1, 0]);
  
  // Stage 3: Content reveal
  const iceCubeScale = useTransform(smoothProgress, [0.3, 0.6], [1.1, 1]);
  const iceCubeOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  
  // Text parallax and auto-dimming on scroll
  const textX = useTransform(smoothProgress, [0.4, 0.8], [100, 0]);
  const textOpacity = useTransform(smoothProgress, [0.4, 0.6, 0.8, 0.95], [0, 1, 0.3, 0.1]);
  const textBlur = useTransform(smoothProgress, [0.7, 0.95], ["0px", "10px"]);

  const blurValue = useMotionTemplate`blur(${textBlur})`;

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-matte">
      {/* The Matte Splash (Matching the brand depth) */}
      <motion.div 
        style={{ opacity: splashOpacity }}
        className="fixed inset-0 bg-matte z-40 flex items-center justify-center p-8 md:p-24 pointer-events-none"
      >
        <motion.div
           className="relative w-full max-w-[1400px] h-[500px] md:h-[800px] will-change-transform flex items-center justify-center"
           style={{ 
             scale: logoScale, 
             x: typeof window !== "undefined" && window.innerWidth < 768 ? mobileLogoX : logoX, 
             y: typeof window !== "undefined" && window.innerWidth < 768 ? mobileLogoY : logoY,
             opacity: logoSplashOpacity
           }}
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
      <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden md:pl-[80px]">
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
                    style={{ x: textX, opacity: textOpacity, filter: blurValue }}
                    className="text-4xl md:text-7xl lg:text-9xl font-display font-black text-stark tracking-tighter uppercase leading-[0.8]"
                 >
                    THE HOUSE <br /> STANDARD
                 </motion.h1>
                 <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ opacity: textOpacity, filter: blurValue }}
                    className="mt-8 space-y-4"
                 >
                    <p className="font-mono text-xs md:text-xl tracking-[0.3em] md:tracking-[0.5em] text-stark uppercase font-black">
                        BY THE INDUSTRY, FOR THE INDUSTRY
                    </p>
                    <p className="font-mono text-[10px] md:text-xs tracking-widest text-amber-500 uppercase opacity-80 max-w-lg mx-auto leading-relaxed border-t border-white/10 pt-4">
                        We have experience in the bar and behind the bar, <br className="hidden md:block" /> not just a computer screen.
                    </p>
                 </motion.div>
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
