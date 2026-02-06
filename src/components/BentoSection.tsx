"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  size: string;
  img: string;
  href?: string;
  speed: number;
}

const SpotlightCard = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(245, 158, 11, 0.25)" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  spotlightColor?: string;
}) => {
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
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
    >
      {/* Spotlight Halo */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-30 mix-blend-screen"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

const BentoCard = ({ project }: { project: Project }) => (
  <SpotlightCard
    className={`${project.size} relative group border border-charcoal/50 hover:border-amber-500/50 transition-colors cursor-pointer bg-charcoal`}
  >
     {/* Image Container with Zoom Effect */}
    <motion.div
       className="relative w-full h-full z-10"
    >
        <Image
          src={project.img}
          alt={`Project: ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
    </motion.div>

    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 relative z-20">
      <div>
        <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase block mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {project.category}
        </span>
        <h3 className="text-3xl font-display font-black text-stark uppercase tracking-tighter drop-shadow-lg group-hover:text-white transition-colors">
          {project.title}
        </h3>
      </div>
      <motion.div 
        whileHover={{ rotate: 45, scale: 1.1 }}
        className="w-12 h-12 rounded-full border border-stark/20 flex items-center justify-center text-stark bg-white/5 backdrop-blur-sm hover:bg-amber-500 hover:border-amber-500 hover:text-matte transition-all duration-300 shadow-xl"
      >
          <span className="text-xl">↗</span>
      </motion.div>
    </div>
  </SpotlightCard>
);

const BentoSection = () => {
  const projects = [
    {
      title: "Gra Pow Riverside",
      category: "The Foundation",
      size: "md:col-span-2 md:row-span-2",
      img: "/images/projects/grapow/thumb.png",
      href: "/work/gra-pow",
      speed: 1.1,
    },
    {
      title: "Killer Queens Social House",
      category: "Design",
      size: "col-span-1 row-span-1",
      img: "/images/projects/killer-queens/logo.png",
      href: "/work/killer-queens",
      speed: 1.3,
    },
    {
      title: "The Salted Lime",
      category: "AEO Strategy",
      size: "col-span-1 md:row-span-2",
      img: "/images/projects/salted-lime/hero.png",
      href: "/work/salted-lime",
      speed: 1.2,
    },
    {
      title: "Wolfskill",
      category: "Content Engine",
      size: "col-span-1 row-span-1",
      img: "/images/projects/wolfskill/hero.png",
      href: "/work/wolfskill",
      speed: 1.4,
    },
    {
      title: "Proabition",
      category: "CRM & Auto",
      size: "col-span-1 row-span-1",
      img: "/images/projects/proabition/hero.png",
      href: "/work/proabition",
      speed: 1.25,
    },
    {
      title: "Barrel and Stave Brewing",
      category: "Branding",
      size: "col-span-1 row-span-1",
      img: "/images/projects/barrel-and-stave/chingon.png",
      href: "/work/barrel-and-stave",
      speed: 1.35,
    },
  ];

  return (
    <section id="projects" className="bg-matte/10 backdrop-blur-xs py-20 md:py-32 px-6 md:pl-32 md:pr-12 lg:px-48 relative z-20">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-charcoal pt-12">
        <div>
          <h2 className="text-4xl md:text-8xl font-display font-black text-stark uppercase tracking-tighter leading-none">
            Selected <br /> Works
          </h2>
        </div>
        <p className="max-w-xs font-mono text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-widest text-stone-500 uppercase leading-relaxed">
           We don&apos;t build websites for everyone. We build standard-defining digital assets for those who own the night.
        </p>
      </div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[400px]"
      >
        {projects.map((project) => (
          <BentoCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default BentoSection;
