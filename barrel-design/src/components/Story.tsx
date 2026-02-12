"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StoryProps {
  images?: string[];
}

export default function Story({ images = [] }: StoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const defaultImages = [
    "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=1000&auto=format&fit=crop",
    "/images/gallery/hero.png",
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop"
  ];

  const storyBeats = [
    {
      title: "The Source",
      text: "It starts with the water. Pure, filtered, and mineral-balanced. The foundation of every legendary brew.",
      img: images[0] || defaultImages[0]
    },
    {
      title: "The Stave",
      text: "We age our signature series in charred oak barrels. The wood breathes life, vanilla, and smoke into the liquid.",
      img: images[1] || defaultImages[1]
    },
    {
      title: "The Foundry",
      text: "Our taprooms are built from steel and sweat. A place for the community to forge bonds over the perfect pour.",
      img: images[2] || defaultImages[2]
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Background Images Layer */}
        {storyBeats.map((beat, index) => {
          const start = index / storyBeats.length;
          const end = (index + 1) / storyBeats.length;
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, 
            [start, index === 0 ? 0 : start + 0.1, end - 0.1, end], 
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute inset-0 bg-black/60 z-10" />
              <img
                src={beat.img}
                alt={beat.title}
                className="w-full h-full object-cover grayscale brightness-50"
              />
            </motion.div>
          );
        })}

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            {storyBeats.map((beat, index) => {
              const start = index / storyBeats.length;
              const end = (index + 1) / storyBeats.length;
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(scrollYProgress, 
                [start, index === 0 ? 0 : start + 0.1, end - 0.1, end], 
                [index === 0 ? 0 : 50, 0, 0, -50]
              );
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, 
                [start, index === 0 ? 0 : start + 0.1, end - 0.1, end], 
                [0, 1, 1, 0]
              );

              return (
                <motion.div
                  key={index}
                  style={{ y, opacity, display: opacity.get() === 0 ? "none" : "block" }}
                  className="absolute"
                >
                  <span className="text-lime-primary font-sans font-bold text-xs uppercase tracking-[0.6em] mb-4 block">
                    0{index + 1} — THE STORY
                  </span>
                  <h2 className="text-white font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
                    {beat.title}
                  </h2>
                  <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed max-w-md">
                    {beat.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Scroll Bar */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-48 w-[2px] bg-white/10 overflow-hidden">
          <motion.div 
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="w-full h-full bg-lime-primary"
          />
        </div>
      </div>
    </section>
  );
}
