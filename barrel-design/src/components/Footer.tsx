"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin } from "lucide-react";

interface FooterProps {
  accentColor?: string;
  currentLocation?: string;
}

export default function Footer({ accentColor = "#a0c514", currentLocation = "fullerton" }: FooterProps) {
  const isFullerton = currentLocation.toLowerCase() === "fullerton";
  const otherLocation = isFullerton ? "Temecula" : "Fullerton";
  const otherHref = isFullerton ? "/temecula" : "/fullerton";
  return (
    <footer className="bg-black pt-12 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] grayscale pointer-events-none select-none">
        <h1 className="text-[20rem] font-display font-black uppercase text-center translate-y-10">
          BARREL
        </h1>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <div className="relative w-24 h-24 mb-6">
              <Image 
                src="/images/brand/logo_new.png" 
                alt="Barrel & Stave Logo" 
                fill 
                className="object-contain"
                sizes="96px"
              />
            </div>
            <p className="text-white/40 font-sans text-xs leading-relaxed mb-6 max-w-xs">
              Forging the future of craft beer in Temecula and Fullerton.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all group"
                  style={{ '--hover-color': accentColor } as any}
                >
                  <Icon size={14} className="group-hover:drop-shadow-[0_0_8px_var(--hover-color)]" style={{ color: 'inherit' }} />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-display font-black text-[10px] uppercase tracking-[0.4em] mb-6">THE BREWERY</h4>
            <nav className="flex flex-col gap-3">
              {["Our Story", "The Process", "Events", "Beer Club", "Press"].map((link) => (
                <Link key={link} href="#" className="text-white/40 font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:text-white hover:translate-x-1 transition-all">
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-white font-display font-black text-[10px] uppercase tracking-[0.4em] mb-6">SUPPORT</h4>
            <nav className="flex flex-col gap-3">
              {["Contact Us", "Gift Cards", "FAQ", "Terms", "Privacy"].map((link) => (
                <Link key={link} href="#" className="text-white/40 font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:text-white hover:translate-x-1 transition-all">
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-display font-black text-[10px] uppercase tracking-[0.4em] mb-6">FOUNDRIES</h4>
            <div className="space-y-6">
              <Link href="/fullerton" className={`block group ${isFullerton ? 'pointer-events-none' : ''}`}>
                <p className={`font-display font-black text-xs uppercase tracking-widest mb-1 transition-colors ${isFullerton ? 'text-white' : 'text-white/40 group-hover:text-white'}`}
                   style={{ color: isFullerton ? accentColor : undefined }}>
                  Fullerton {isFullerton && "— Active"}
                </p>
                <p className="text-white/40 font-sans text-[10px] leading-relaxed uppercase tracking-tighter group-hover:text-white/60 transition-colors">
                  123 N Harbor Blvd
                </p>
              </Link>
              <Link href="/temecula" className={`block group ${!isFullerton ? 'pointer-events-none' : ''}`}>
                <p className={`font-display font-black text-xs uppercase tracking-widest mb-1 transition-colors ${!isFullerton ? 'text-white' : 'text-white/40 group-hover:text-white'}`}
                   style={{ color: !isFullerton ? accentColor : undefined }}>
                  Temecula {!isFullerton && "— Active"}
                </p>
                <p className="text-white/40 font-sans text-[10px] leading-relaxed uppercase tracking-tighter group-hover:text-white/60 transition-colors">
                  456 Old Town Front St
                </p>
              </Link>
              
              <div className="pt-4 border-t border-white/5">
                <Link 
                  href={otherHref}
                  className="inline-flex items-center gap-2 group/btn px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <span className="text-[8px] font-display font-black uppercase tracking-widest">Swap to {otherLocation}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/5 group-hover/btn:bg-black group-hover/btn:text-white transition-colors">
                    <MapPin size={10} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 font-sans font-bold text-[8px] uppercase tracking-[0.5em]">
            &copy; 2024 Barrel & Stave Brewing Co.
          </p>
          <div className="flex gap-6 text-white/10 font-sans font-black text-[8px] uppercase tracking-widest">
            <span>By Last Call Collective</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
