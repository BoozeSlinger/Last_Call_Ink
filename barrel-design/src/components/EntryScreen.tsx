"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Grain from "./ui/Grain";
import FoundryBackground from "./ui/FoundryBackground";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } },
};

export default function EntryScreen() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="relative min-h-[120vh] w-full bg-black flex flex-col items-center">
      <Grain />
      <FoundryBackground />
      
      <motion.div
        style={{ opacity, scale }}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="sticky top-0 h-screen flex flex-col items-center justify-center gap-24 py-20 px-6 overflow-hidden"
      >
        {/* Cinematic Title/Location Link */}
        <motion.div variants={itemVariants}>
          <Link href="/fullerton" className="group flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-[0.5em] text-white/20 transition-all cursor-pointer group-hover:text-lime-primary group-hover:tracking-[0.6em] group-hover:text-shadow-glow">
              Fullerton
            </span>
            <span className="mt-2 text-[0.6rem] font-sans font-bold tracking-[0.8em] text-white/5 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Taproom & Kitchen
            </span>
          </Link>
        </motion.div>

        {/* Big Centered Logo with Foundry Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: [0.8, 1.05, 1],
            filter: [
              "drop-shadow(0 0 30px rgba(160, 197, 20, 0.2))",
              "drop-shadow(0 0 60px rgba(108, 9, 136, 0.3))",
              "drop-shadow(0 0 30px rgba(160, 197, 20, 0.2))"
            ]
          }}
          transition={{ 
            opacity: { duration: 2, ease: "easeOut" },
            scale: { duration: 2.5, ease: "circOut" },
            filter: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-80 h-80 md:w-[42rem] md:h-[42rem] flex items-center justify-center p-12 transition-all duration-700"
        >
          {/* Faint Brand Green Glow */}
          <div 
            className="absolute inset-0 rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(160,197,20,0.6) 0%, rgba(0,0,0,0) 70%)' }} 
          />
          
          <Image
            src="/images/brand/logo_new.png"
            alt="Barrel & Stave Logo"
            fill
            sizes="(max-width: 768px) 320px, 640px"
            className="object-contain brightness-110 contrast-125 saturate-150 relative z-10"
            priority
          />
        </motion.div>

        {/* Temecula Link */}
        <motion.div variants={itemVariants}>
          <Link href="/temecula" className="group flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-[0.5em] text-white/20 transition-all cursor-pointer group-hover:text-purple-accent group-hover:tracking-[0.6em] group-hover:text-shadow-purple">
              Temecula
            </span>
            <span className="mt-2 text-[0.6rem] font-sans font-bold tracking-[0.8em] text-white/5 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              The Speakeasy
            </span>
          </Link>
        </motion.div>

        {/* Branding Accent Bar */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-12 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-24 bg-linear-to-r from-transparent to-white/20" />
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-lime-primary shadow-[0_0_15px_#a0c514] animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-accent shadow-[0_0_15px_#6c0988] animate-pulse delay-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
            <div className="h-[1px] w-24 bg-linear-to-l from-transparent to-white/20" />
          </div>
          <p className="text-[0.5rem] font-sans font-black tracking-[1em] text-white/20 uppercase">
            Founded in Excellence
          </p>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-linear-to-b from-lime-primary to-transparent" />
      </motion.div>
    </div>
  );
}
