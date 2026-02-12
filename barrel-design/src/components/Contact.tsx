"use client";

import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

interface ContactProps {
  accentColor?: string;
}

export default function Contact({ accentColor = "#a0c514" }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-black px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: Form & Info */}
          <div className="lg:col-span-12 xl:col-span-5">
            <span 
              className="font-sans font-black text-xs uppercase tracking-[0.8em] mb-6 block"
              style={{ color: accentColor }}
            >
              Inquiries
            </span>
            <h2 className="text-white font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-12">
              CONTACT <br /> & LOCATIONS
            </h2>
            
            <div className="space-y-12 mb-16">
              <div className="bg-white/5 foundry-border p-10 rounded-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-primary/5 -translate-y-1/2 translate-x-1/2 blur-3xl rounded-full group-hover:bg-lime-primary/10 transition-colors" />
                
                <h3 className="text-white font-display font-black text-3xl uppercase tracking-tighter mb-8 pb-4 border-b border-white/10">
                  Send A Message
                </h3>
                
                <form className="space-y-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="FULL NAME"
                      style={{ focusColor: accentColor } as any}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/10 focus:border-white focus:outline-none transition-all font-display font-bold tracking-widest text-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-10">
                    <input 
                      type="email" 
                      placeholder="EMAIL"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/10 focus:border-white focus:outline-none transition-all font-display font-bold tracking-widest text-lg"
                    />
                    <input 
                      type="text" 
                      placeholder="PHONE"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/10 focus:border-white focus:outline-none transition-all font-display font-bold tracking-widest text-lg"
                    />
                  </div>
                  <textarea 
                    placeholder="YOUR MESSAGE"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/10 focus:border-white focus:outline-none transition-all font-display font-bold tracking-widest text-lg resize-none"
                  />
                  <button className="group relative w-full py-6 overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <div className="absolute inset-0" style={{ backgroundColor: accentColor }} />
                    <span className="relative z-10 text-black font-display font-black text-xl uppercase tracking-[0.2em]">
                      Forge Submission
                    </span>
                  </button>
                </form>
              </div>
              
              <div className="flex flex-col gap-6 font-sans font-bold text-sm tracking-widest text-white/40">
                <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-lime-primary transition-all">
                    <Mail size={18} className="text-lime-primary" />
                  </div>
                  CHEERS@BARRELANDSTAVE.COM
                </div>
                <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-lime-primary transition-all">
                    <Phone size={18} className="text-lime-primary" />
                  </div>
                  +1 (714) 555-0123
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Maps */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Fullerton Map */}
            <div className="flex flex-col h-full">
              <div className="flex items-end justify-between mb-8">
                <h4 className="text-white font-display font-black text-4xl uppercase tracking-tighter">Fullerton</h4>
                <div className="text-[10px] font-sans font-black text-lime-primary px-4 py-1.5 border border-lime-primary/30 rounded-full tracking-[0.2em]">TAPROOM</div>
              </div>
              
              <div className="flex-1 relative foundry-border overflow-hidden min-h-[400px] group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  alt="Fullerton Location"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={20} className="text-lime-primary shadow-[0_0_10px_#a0c514]" />
                    <span className="text-white font-display font-black text-2xl uppercase tracking-tighter">123 N Harbor Blvd</span>
                  </div>
                  <p className="text-white/40 font-sans font-bold text-sm tracking-widest mb-8">FULLERTON, CA 92832</p>
                  <a href="#" className="flex items-center gap-2 text-lime-primary font-display font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
                    View On Maps <ExternalLink size={14} />
                  </a>
                </div>
                {/* Blueprint lines Overlay */}
                <div className="absolute inset-0 pointer-events-none border border-white/5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>
            </div>

            {/* Temecula Map */}
            <div className="flex flex-col h-full">
              <div className="flex items-end justify-between mb-8">
                <h4 className="text-white font-display font-black text-4xl uppercase tracking-tighter">Temecula</h4>
                <div className="text-[10px] font-sans font-black text-purple-accent px-4 py-1.5 border border-purple-accent/30 rounded-full tracking-[0.2em]">BREWERY</div>
              </div>
              
              <div className="flex-1 relative foundry-border overflow-hidden min-h-[400px] group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  alt="Temecula Location"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={20} className="text-purple-accent shadow-[0_0_10px_#6c0988]" />
                    <span className="text-white font-display font-black text-2xl uppercase tracking-tighter">456 Old Town Front St</span>
                  </div>
                  <p className="text-white/40 font-sans font-bold text-sm tracking-widest mb-8">TEMECULA, CA 92590</p>
                  <a href="#" className="flex items-center gap-2 text-purple-accent font-display font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
                    View On Maps <ExternalLink size={14} />
                  </a>
                </div>
                {/* Blueprint lines Overlay */}
                <div className="absolute inset-0 pointer-events-none border border-white/5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
