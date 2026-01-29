"use client";

import React, { memo } from "react";
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

const BentoCard = memo(({ project, idx }: { project: Project, idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className={`${project.size} relative group overflow-hidden border border-charcoal cursor-pointer`}
  >
     {/* Inversion Hover Effect */}
    <motion.div
       whileHover={{ scale: 1.05 }}
       transition={{ duration: 0.6 }}
       className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
    >
      <Image
        src={project.img}
        alt={`Project: ${project.title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
      />
    </motion.div>

    <div className="absolute inset-0 bg-linear-to-t from-matte via-transparent to-transparent opacity-80" />
    
    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
      <div>
        <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase">
          {project.category}
        </span>
        <h3 className="text-3xl font-display font-black text-stark uppercase tracking-tighter">
          {project.title}
        </h3>
      </div>
      <a 
        href={project.href || "#"} 
        className="w-12 h-12 rounded-full border border-stark/20 flex items-center justify-center text-stark hover:bg-stark hover:text-matte transition-all"
      >
          <span className="text-xl">↗</span>
      </a>
    </div>
  </motion.div>
));

BentoCard.displayName = "BentoCard";

const BentoSection = () => {
  const projects = [
    {
      title: "Gra Pow",
      category: "The Foundation",
      size: "col-span-2 row-span-2",
      img: "/images/testimonials/grapow-thumb.png",
      href: "/grapow",
      speed: 1.1,
    },
    {
      title: "The Standard",
      category: "Interior Design",
      size: "col-span-1 row-span-1",
      img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000",
      href: "#",
      speed: 1.3,
    },
    {
        title: "Liquid Gold",
        category: "Creative Dir.",
        size: "col-span-1 row-span-2",
        img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
        href: "#",
        speed: 1.2,
    },
    {
      title: "Late Night",
      category: "Strategy",
      size: "col-span-1 row-span-1",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
      href: "#",
      speed: 1.4,
    },
    {
      title: "Velvet Rope",
      category: "Web Design",
      size: "col-span-1 row-span-1",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
      href: "#",
      speed: 1.25,
    },
    {
      title: "Copper Still",
      category: "Branding",
      size: "col-span-1 row-span-1",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
      href: "#",
      speed: 1.35,
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-matte py-20 md:py-32 pl-[80px] md:pl-24 pr-4 md:pr-24 lg:px-48 relative z-20">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[400px]">
        {projects.map((project, idx) => (
          <BentoCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default BentoSection;
