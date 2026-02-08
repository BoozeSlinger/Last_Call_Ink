"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";

const ProjectCard = ({ project, idx }: { project: any, idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className={`${project.gridClass} relative group overflow-hidden border border-charcoal/20 bg-charcoal/5`}
  >
    <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700">
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
      />
    </div>

    <div className="absolute inset-0 bg-linear-to-t from-matte via-transparent to-transparent opacity-60" />

    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-stark/10 pt-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
      <div>
        <p className="font-mono text-[10px] tracking-widest text-amber-500 uppercase mb-2">
          {project.category}
        </p>
        <h3 className="text-3xl md:text-4xl font-display font-black text-stark uppercase tracking-tighter">
          {project.title}
        </h3>
      </div>
      <div className="w-12 h-12 rounded-full border border-stark/20 flex items-center justify-center text-stark group-hover:bg-stark group-hover:text-matte transition-all">
        <span className="text-xl">↗</span>
      </div>
    </div>
  </motion.div>
);

const ProofPage = () => {
  const projects = [
    {
      title: "Neon Whiskey",
      category: "Branding",
      gridClass: "col-span-1 md:col-span-2 row-span-2 min-h-[500px]",
      img: "https://images.unsplash.com/photo-1516997121675-4c2d04fe13bc?q=80&w=1000",
    },
    {
      title: "The Standard",
      category: "Interior Design",
      gridClass: "col-span-1 row-span-1 min-h-[300px]",
      img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000",
    },
    {
      title: "Liquid Gold",
      category: "Creative Dir.",
      gridClass: "col-span-1 row-span-2 min-h-[500px]",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
    },
    {
      title: "Late Night",
      category: "Strategy",
      gridClass: "col-span-1 row-span-1 min-h-[300px]",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
    },
    {
      title: "Velvet Rope",
      category: "Web Design",
      gridClass: "col-span-1 md:col-span-2 row-span-1 min-h-[300px]",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
    },
    {
        title: "Copper Still",
        category: "Branding",
        gridClass: "col-span-1 row-span-2 min-h-[500px]",
        img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
    },
  ];

  return (
    <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Header Section */}
        <section className="pt-32 pb-24 px-8 md:px-24">
          {/* Home Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-12 font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-charcoal pb-24"
          >
            <div>
              <h1 className="text-8xl md:text-[14rem] font-display font-black leading-[0.8] tracking-tighter uppercase">
                The <br /> Proof
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">
                Case Studies
              </p>
              <p className="text-xl md:text-2xl font-mono leading-tight">
                Standard-defining digital assets and visual identities for those who own the night.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Masonry-ish Grid */}
        <section className="px-8 md:px-24 pb-48">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-48 px-8 md:px-24 text-center border-t border-charcoal">
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter mb-12">
            Want your brand <br /> featured here?
          </h2>
          <a
            href="/contact"
            className="inline-block border border-stark px-16 py-8 font-mono text-xs tracking-[0.4em] uppercase hover:bg-stark hover:text-matte transition-all"
          >
            Apply for Membership
          </a>
        </section>

        {/* Footer Standard */}
        <footer className="py-20 px-8 border-t border-charcoal bg-matte">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-4xl font-display font-black text-stark/20 uppercase tracking-tighter">
              LAST CALL <br /> COLLECTIVE
            </div>
            <div className="text-center font-mono text-[10px] tracking-[0.4em] text-stone-600 uppercase">
              © 2024 / The House Standard
            </div>
            <a 
              href="mailto:contact@lastcall.co"
              className="font-mono text-[10px] tracking-widest text-stark border border-stark/20 px-8 py-4 uppercase hover:bg-stark hover:text-matte transition-all"
            >
              Inquiries
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default ProofPage;
