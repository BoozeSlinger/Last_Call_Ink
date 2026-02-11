"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const SidebarBlade = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const logoOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const navLinks = [
    { name: "HOUSE MENU", href: "/services", stagger: -10 },
    { name: "THE TRUTH AUDIT", href: "/audit", stagger: 10 },
    { name: "THE PROOF", href: "/theproof", stagger: 20 },
    { name: "THE RECEIPTS", href: "/testimonials", stagger: -5 },
    { name: "PULL UP A STOOL", href: "/contact", stagger: 15 },
    { name: "SHIFT NOTES", href: "/blog", stagger: 25 },
    { name: "FAQ", href: "/faq", stagger: 5 },
  ];

  return (
    <>
      {/* Desktop Blade (Hidden on Mobile) */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 h-full w-[80px] bg-matte border-r border-charcoal z-50 flex flex-col items-center py-10 transition-all duration-300 hidden md:flex"
      >
        {/* Authority Seal (Menu Trigger) */}
        <motion.button 
            whileHover={{ rotate: 15, scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="relative h-14 w-14 mb-8 grayscale invert opacity-90 brightness-125 transition-all duration-500 cursor-pointer"
        >
          <Image
            src="/badge.png"
            alt="LCC Badge"
            fill
            priority
            className="object-contain"
          />
        </motion.button>

        <button 
          onClick={() => setIsOpen(true)}
          className="h-[100px] flex items-center justify-center mb-2 cursor-pointer group"
        >
            <div className="-rotate-90 whitespace-nowrap text-stark/80 font-mono text-xs tracking-[0.5em] uppercase group-hover:text-amber-500 transition-colors font-black">
                [ Menu ]
            </div>
        </button>

        <Link 
          href="/faq"
          className="h-[100px] flex items-center justify-center mb-12 cursor-pointer group"
        >
            <div className="-rotate-90 whitespace-nowrap text-stark/80 font-mono text-xs tracking-[0.5em] uppercase group-hover:text-amber-500 transition-colors font-black">
                [ FAQ ]
            </div>
        </Link>

        {/* Updated Logo (Coupe Glass) - Also triggers menu */}
        <motion.button 
            style={{ opacity: logoOpacity }}
            onClick={() => setIsOpen(true)}
            className="relative h-16 w-16 grayscale opacity-80 brightness-150 cursor-pointer mb-12"
        >
          <Image
            src="/logo.png?v=953"
            alt="LCC Logo"
            fill
            priority
            unoptimized
            className="object-contain"
          />
        </motion.button>
      </motion.div>

      {/* Mobile Burger (Hidden on Desktop) */}
      <motion.button
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        aria-label="Open Menu"
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-matte border border-charcoal flex items-center justify-center text-stark md:hidden hover:bg-charcoal transition-colors"
      >
        <Menu size={24} />
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
                width: "100%"
            }}
          >
            {/* Background Watermark Badge */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
               animate={{ opacity: 0.03, scale: 1, rotate: 0 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[120vw] h-[150vh] md:h-[120vh] pointer-events-none"
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
              className="absolute top-6 md:top-10 right-6 md:right-10 text-matte hover:scale-110 transition-transform p-4 cursor-pointer z-[60]"
            >
              <X size={40} strokeWidth={1} className="md:w-20 md:h-20 w-10 h-10" />
            </motion.button>

            {/* Links */}
            <nav className="flex flex-col gap-6 md:gap-8 relative z-10 transition-all">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20, x: link.stagger }}
                  animate={{ opacity: 1, y: 0, x: link.stagger }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ x: link.stagger + 20, color: "#1A1A1A" }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-matte/20 uppercase tracking-tighter leading-none hover:text-matte active:text-matte transition-all"
                  style={{ 
                    fontFamily: "var(--font-inter-tight)",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* FAQ Preview in Sidebar */}
            <div className="absolute top-24 right-32 hidden xl:flex flex-col gap-8 max-w-sm pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="font-mono text-[10px] tracking-[0.5em] text-matte uppercase font-bold">House Rules</span>
                <div className="space-y-6">
                    <div>
                        <div className="font-display font-black text-sm uppercase mb-2">01 Operational Audit?</div>
                        <div className="font-mono text-[9px] uppercase leading-relaxed tracking-widest">A financial health check for your P&L. We plug the cash leaks before scaling.</div>
                    </div>
                    <div>
                        <div className="font-display font-black text-sm uppercase mb-2">02 Why AEO?</div>
                        <div className="font-mono text-[9px] uppercase leading-relaxed tracking-widest">SEO is dead. AI engines crave semantic data. Without AEO, you&apos;re invisible.</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-12 md:left-64 flex flex-col md:flex-row gap-4 md:gap-12 font-mono text-[8px] md:text-[10px] tracking-widest text-matte/40 uppercase font-bold">
                <div>IN THE WEEDS SINCE WAY BACK</div>
                <div>Last Call Collective</div>
                <div>BY THE INDUSTRY / FOR THE INDUSTRY</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarBlade;

