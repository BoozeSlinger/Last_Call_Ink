"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface BeerClubProps {
  accentColor?: string;
  bgImage?: string;
}

export default function BeerClub({ 
  accentColor = "#a0c514", 
  bgImage = "https://images.unsplash.com/photo-1571767475355-667746142106?q=80&w=2070&auto=format&fit=crop" 
}: BeerClubProps) {
  const benefits = [
    "2 Free pints a week",
    "2 Crowler fills a month",
    "Exclusive discounts & orders",
    "Members-only parties",
    "Members-only pours",
    "The Brewery Secret newsletter",
    "Join our podcast guest list"
  ];

  return (
    <section id="club" className="relative py-24 overflow-hidden px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 scale-110">
        <Image 
          src={bgImage} 
          alt="Brewery Background"
          fill
          className="object-cover grayscale brightness-50 contrast-125 saturate-[0.2] opacity-40 transition-transform duration-[20s] hover:scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/40 to-black z-10" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] p-10 md:p-16 overflow-hidden relative foundry-border">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-primary/20 blur-[100px] rounded-full opacity-20" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Benefits Column */}
            <div>
              <span 
                className="font-sans font-black text-xs uppercase tracking-[0.8em] mb-4 block"
                style={{ color: accentColor }}
              >
                Exclusive Access
              </span>
              <h2 className="text-white font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-8">
                BEER <br /> CLUB
              </h2>
              <div className="mb-10">
                <p className="text-white/60 font-sans text-lg mb-6 leading-relaxed max-w-md">
                  Join the <span className="font-black uppercase" style={{ color: accentColor }}>Inner Circle</span>. Forge your legacy with exclusive perks and small-batch access.
                </p>
                <div className="inline-block px-6 py-3 bg-white/5 border border-white/10">
                  <span className="text-white font-display font-black text-3xl uppercase tracking-widest">$40/MO</span>
                  <span className="text-white/40 font-sans text-xs uppercase ml-4 tracking-[0.2em] opacity-40">(Paid Quarterly)</span>
                </div>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 group">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center transition-all group-hover:bg-white shrink-0"
                      style={{ backgroundColor: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
                    >
                      <CheckCircle2 size={12} style={{ color: accentColor }} className="group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-white/80 font-sans font-black uppercase text-[10px] tracking-[0.2em]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Column */}
            <div className="relative">
              <div className="bg-black/60 backdrop-blur-2xl p-10 md:p-12 rounded-[2rem] border border-white/10 shadow-3xl">
                <h3 className="text-white font-display font-black text-2xl uppercase tracking-tighter mb-8 text-center">
                  JOIN THE INNER CIRCLE
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:border-white transition-all outline-none font-sans text-sm"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:border-white transition-all outline-none font-sans text-sm"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:border-white transition-all outline-none font-sans text-sm"
                  />
                  <button 
                    className="w-full text-black py-5 rounded-xl font-display font-black text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-all mt-4"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 40px ${accentColor}40` }}
                  >
                    Forge My Membership
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
