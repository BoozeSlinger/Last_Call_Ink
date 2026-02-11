"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  size: string;
  img: string;
  hoverImg?: string;
  href: string;
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
  <Link href={project.href} className={`${project.size} block`}>
    <SpotlightCard
      className="relative w-full h-full group border border-charcoal/50 hover:border-amber-500/50 transition-all duration-700 cursor-pointer bg-matte/40 backdrop-blur-md overflow-hidden transform-gpu"
    >
      {/* Animated Neon Border */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute inset-0 border-[3px] border-amber-500/0 group-hover:border-amber-500/40 transition-all duration-500" />
        <div className="absolute inset-0 border-[3px] border-amber-500/0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 blur-[4px]" />
      </div>
      
      {/* Color Sweep Overlay Effect */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />
      
      {/* Image Container with Zoom & Color Reveal Effect */}
      <div className="relative w-full h-full z-10 transition-transform duration-700 ease-out group-hover:scale-110">
        {/* Primary Image - Grayscale to Vivid Color on Hover */}
        <Image
          src={project.img}
          alt={`${project.title} - ${project.category} Case Study | Last Call Collective Portfolio`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 ease-out
            grayscale opacity-50 brightness-75 contrast-90
            group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-110 group-hover:contrast-100 group-hover:saturate-125
            ${project.hoverImg ? "group-hover:opacity-0" : ""}`}
        />

        {/* Hover Reveal Image (if available) */}
        {project.hoverImg && (
          <Image
            src={project.hoverImg}
            alt={`${project.title} Project Detail - ${project.category} Work by Last Call Collective`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out saturate-125 brightness-110 contrast-100"
          />
        )}
        
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/30 to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-40">
        <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase block mb-2 opacity-80 group-hover:opacity-100 transition-opacity font-bold">
            {project.category}
          </span>
          <h3 className="text-3xl font-display font-black text-stark uppercase tracking-tighter group-hover:text-white transition-colors">
            {project.title}
          </h3>
        </div>
        <motion.div 
          whileHover={{ rotate: 135, scale: 1.2 }}
          className="w-12 h-12 rounded-full border border-stark/20 flex items-center justify-center text-stark bg-white/5 backdrop-blur-md hover:bg-amber-500 hover:border-amber-500 hover:text-matte transition-all duration-500 shadow-2xl group-hover:shadow-amber-500/20"
        >
          <span className="text-xl">↗</span>
        </motion.div>
      </div>

      {/* Subtle Scanline Effect - Neon Retro feel */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-35 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px]" />
    </SpotlightCard>
  </Link>
);

const BentoSection = () => {
  const projects: Project[] = [
    {
      title: "Gra Pow Riverside",
      category: "AEO + AI Receptionist",
      size: "md:col-span-2 md:row-span-2",
      img: "/images/projects/grapow/gra-pow-riverside-thai-restaurant-bar-hero.jpg",
      hoverImg: "/images/projects/grapow/pow1.jpeg",
      href: "/work/gra-pow",
      speed: 1.1,
    },
    {
      title: "Killer Queens Social House",
      category: "Design + Marketing",
      size: "col-span-1 md:row-span-2",
      img: "/images/projects/killer-queens/thursday-night-martinis-kq-social-house.jpg",
      hoverImg: "/images/projects/killer-queens/beer-pong-tournament-bar-nightlife.jpg",
      href: "/work/killer-queens",
      speed: 1.3,
    },
    {
      title: "Happy Dad Hard Seltzer",
      category: "Local Marketing",
      size: "col-span-1 md:col-span-2 row-span-1",
      img: "/images/projects/happy-dad/happy-dad-hero.png",
      hoverImg: "/images/projects/happy-dad/happy-dad-activation-1.png",
      href: "/work/happy-dad",
      speed: 1.2,
    },
    {
      title: "Proabition",
      category: "CRM & Automation",
      size: "col-span-1 row-span-1",
      img: "/images/projects/proabition/hero.png",
      href: "/work/proabition",
      speed: 1.25,
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
        <p className="max-w-xl font-mono text-[10px] md:text-xs tracking-widest text-amber-500 uppercase leading-relaxed font-bold">
           STOP PAYING FOR MARKETING AGENCIES WHO POST AI SLOP AND NEVER BEEN IN THE WEEDS ON A SATURDAY NIGHT. WE BUILD THE REVENUE ENGINE THAT PUTS ASSES IN YOUR BARSTOOLS.
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
