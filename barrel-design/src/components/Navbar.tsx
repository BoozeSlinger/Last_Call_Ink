"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

interface NavbarProps {
  accentColor?: string;
}

export default function Navbar({ accentColor = "#a0c514" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "On Tap", href: "#beers" },
    { name: "Events", href: "#events" },
    { name: "Beer Club", href: "#club" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-500
          ${scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"}
        `}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
              <Image 
                src="/images/brand/logo_new.png" 
                alt="Barrel & Stave" 
                fill 
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-white font-display font-black text-xs uppercase tracking-[0.3em] hidden sm:block">
              BARREL & STAVE <br />
              <span className="text-white/40 text-[8px] tracking-[0.6em]">Brewing Co.</span>
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm uppercase tracking-[0.3em] text-white/50 transition-all font-black relative group"
                style={{ color: scrolled ? 'white' : undefined }}
              >
                <span className="group-hover:text-white transition-colors" style={{ color: scrolled ? undefined : 'rgba(255,255,255,0.5)' }}>{item.name}</span>
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all group-hover:w-full" 
                  style={{ backgroundColor: accentColor }}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="text-white/40 hover:text-white transition-colors">
              <Search size={18} />
            </button>
            <button className="group relative px-6 py-2.5 overflow-hidden transition-all hover:scale-105 active:scale-95 hidden sm:block">
              <div className="absolute inset-0" style={{ backgroundColor: accentColor }} />
              <span className="relative z-10 text-black font-display font-black text-[10px] uppercase tracking-widest">
                Explore Our Beers
              </span>
            </button>
            <button 
              className="lg:hidden text-white transition-colors hover:scale-110"
              style={{ color: isMenuOpen ? '#fff' : scrolled ? '#fff' : '#fff' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
        `}
      >
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-display font-black uppercase tracking-widest text-white hover:scale-110 transition-all"
            style={{ '--hover-color': accentColor } as any}
          >
            <span className="hover:text-(--hover-color) transition-colors">{item.name}</span>
          </Link>
        ))}
        <button className="mt-8 group relative px-10 py-4 overflow-hidden transition-all hover:scale-105 active:scale-95">
          <div className="absolute inset-0" style={{ backgroundColor: accentColor }} />
          <span className="relative z-10 text-black font-display font-black text-xs uppercase tracking-widest">
            Join The Club
          </span>
        </button>
      </div>
    </>
  );
}
