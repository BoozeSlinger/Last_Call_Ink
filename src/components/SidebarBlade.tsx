"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X } from "lucide-react";

const SidebarBlade = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const logoOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const navLinks = [
    { name: "HOUSE MENU", href: "/services", stagger: -10 },
    { name: "THE PROOF", href: "/projects", stagger: 20 },
    { name: "THE RECEIPTS", href: "/testimonials", stagger: -5 },
    { name: "PULL UP A STOOL", href: "/contact", stagger: 15 },
    { name: "SHIFT NOTES", href: "/blog", stagger: 25 },
  ];

  return (
    <>
      {/* The Blade */}
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        aria-label="Open Menu"
        className="fixed left-0 top-0 h-full w-[60px] md:w-[80px] bg-matte border-r border-charcoal z-50 cursor-pointer flex flex-col items-center py-6 md:py-10 transition-all duration-300 hover:bg-charcoal/80"
        onClick={() => setIsOpen(true)}
      >
        {/* New Circular Badge (Authority Seal) */}
        <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="relative h-10 w-10 md:h-14 md:w-14 mb-8 grayscale invert opacity-90 brightness-125 transition-all duration-500"
        >
          <Image
            src="/badge.png"
            alt="LCC Badge"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Updated Logo (Coupe Glass) - Now fades in as the splash 'lands' */}
        <motion.div 
            style={{ opacity: logoOpacity }}
            className="relative h-12 md:h-16 w-12 md:w-16 grayscale opacity-80 brightness-150 pointer-events-none mb-10"
        >
          <Image
            src="/logo.png?v=953"
            alt="LCC Logo"
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </motion.div>
        <div className="mt-auto h-[60px] md:h-[100px] flex items-center justify-center">
            <div className="-rotate-90 whitespace-nowrap text-stone-500 font-mono text-[8px] md:text-[10px] tracking-[0.4em] uppercase pointer-events-none">
                [ Menu ]
            </div>
        </div>
      </motion.button>

      {/* The Vault (Menu Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 100, stiffness: 200, mass: 2 }}
            className="fixed inset-0 z-50 bg-bone flex flex-col justify-center px-12 md:px-32 lg:px-64 overflow-hidden"
            style={{ 
                backgroundImage: "url('https://www.transparenttextures.com/patterns/fiber-paper.png')",
                width: "95%"
            }}
          >
            {/* Background Watermark Badge */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
               animate={{ opacity: 0.03, scale: 1, rotate: 0 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] pointer-events-none"
            >
                <Image 
                    src="/badge.png" 
                    alt="" 
                    fill 
                    className="object-contain grayscale"
                />
            </motion.div>
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              aria-label="Close Menu"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-10 right-10 text-matte hover:scale-110 transition-transform p-4 cursor-pointer"
            >
              <X size={80} strokeWidth={1} />
            </motion.button>

            {/* Links */}
            <nav className="flex flex-col gap-4 md:gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20, x: link.stagger }}
                  animate={{ opacity: 1, y: 0, x: link.stagger }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ x: link.stagger + 20, color: "#1A1A1A" }}
                  className="text-4xl md:text-7xl lg:text-8xl font-display font-black text-matte/20 uppercase tracking-tighter leading-none hover:text-reveal transition-all"
                  style={{ 
                    fontFamily: "var(--font-inter-tight)",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-10 left-32 md:left-64 flex gap-12 font-mono text-[10px] tracking-widest text-matte/40 uppercase">
                <div>EST. 2024</div>
                <div>Last Call Collective</div>
                <div>By the Industry</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarBlade;
