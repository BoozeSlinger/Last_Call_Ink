"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";
import Footer from "@/components/Footer";

const TestimonialsPage = () => {
  const featuredTestimonial = {
    quote: "THE LUXURY REBRAND EXECUTED BY LAST CALL COLLECTIVE TRANSFORMED GRA POW FROM A LOCAL FAVORITE TO A HIGH-END DESTINATION. THE ATTENTION TO DETAIL IN THE VISUAL IDENTITY AND THE CINEMATIC WEB EXPERIENCE HAS COMPLETELY ELEVATED OUR BRAND STATUS.",
    author: "OWNER",
    company: "GRA POW RIVERSIDE",
    img: "/images/testimonials/grapow-thumb.png",
    logo: "/images/testimonials/grapow-logo.png",
  };

  const receipts = [
    {
      quote: "THEY DON'T JUST BUILD WEBSITES. THEY BUILD ATMOSPHERES. OUR BOOKINGS ARE UP 40% SINCE THE LAUNCH.",
      author: "MARCUS REED",
      role: "FOUNDER, THE NEON WHISKEY",
    },
    {
      quote: "THE AI AUDIT WAS A WAKE-UP CALL. WE WERE INVISIBLE TO CHATGPT. NOW WE'RE THE FIRST RECOMMENDATION FOR COCKTAILS IN BROOKLYN.",
      author: "SARAH JENKINS",
      role: "GM, THE STANDARD",
    },
    {
      quote: "A RARE PARTNER WHO ACTUALLY UNDERSTANDS THE FLOW OF A BUSY SERVICE AND HOW THAT TRANSLATES TO DIGITAL.",
      author: "JULIAN VANCE",
      role: "BEVERAGE DIRECTOR, LIQUID GOLD",
    },
    {
        quote: "BEST IN THE BUSINESS. EFFICIENT, BRUTAL, AND EFFECTIVE.",
        author: "ALEX CHOW",
        role: "OWNER, LATE NIGHT GROUP",
    },
    {
      quote: "CLEAN, SHARP, AND BUILT FOR SPEED. THE VELVET ROPE WEB EXPERIENCE IS EXACTLY WHAT WE NEEDED TO MATCH OUR EXCLUSIVE VIBE.",
      author: "ELENA ROSSI",
      role: "CREATIVE DIRECTOR, VELVET ROPE",
    },
    {
      quote: "INDUSTRIAL-GRADE BRANDING THAT CUTS THROUGH THE NOISE. THE COPPER STILL IDENTITY IS LEGENDARY.",
      author: "SAM HOUSTON",
      role: "FOUNDER, COPPER STILL",
    }
  ];

  return (
    <main className="min-h-screen bg-bone text-matte selection:bg-matte selection:text-bone overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px]">
        {/* Header Section */}
        <section className="pt-32 pb-12 px-8 md:px-24">
          {/* Home Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mb-12 font-mono text-[10px] tracking-widest uppercase text-matte/60 hover:text-amber-600 transition-colors group"
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
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <div>
              <h1 className="text-8xl md:text-[14rem] font-display font-black leading-[0.8] tracking-tighter uppercase text-matte">
                The <br /> Receipts
              </h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">
                Social Proof
              </p>
              <p className="text-xl md:text-2xl font-mono leading-tight border-l border-matte/20 pl-6">
                Verified feedback from the front lines of global hospitality.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Featured: Gra Pow */}
        <section className="px-8 md:px-24 py-32 border-t border-matte/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video grayscale hover:grayscale-0 transition-all duration-1000 border border-matte/5 overflow-hidden group"
            >
              <Image 
                src={featuredTestimonial.img}
                alt="Gra Pow Website"
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bone to-transparent opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="relative h-16 w-48 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                <Image 
                  src={featuredTestimonial.logo}
                  alt="Gra Pow Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <blockquote className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase leading-[0.9]">
                &quot;{featuredTestimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center gap-8">
                <div className="h-px w-12 bg-matte/20" />
                <div>
                  <p className="font-display font-bold text-xl uppercase tracking-tight">{featuredTestimonial.author}</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">{featuredTestimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Massive Quote List */}
        <section className="px-8 md:px-24 pb-48 border-t border-matte/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-48 mt-32">
            {receipts.map((receipt, idx) => (
              <motion.div
                key={receipt.author + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="max-w-xl"
              >
                <div className="flex flex-col gap-12 items-start">
                   <span className="font-mono text-[10px] tracking-[0.4em] opacity-30 uppercase">
                        [ RECPT#{idx + 101} ]
                   </span>
                   <div className="flex-1">
                        <blockquote className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-12">
                            &quot;{receipt.quote}&quot;
                        </blockquote>
                        <div className="flex items-center gap-8">
                            <div className="h-px w-12 bg-matte/20" />
                            <div>
                                <p className="font-display font-bold text-xl uppercase tracking-tight">{receipt.author}</p>
                                <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">{receipt.role}</p>
                            </div>
                        </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Callout */}
        <section className="bg-matte text-stark py-48 px-8 md:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-9xl font-display font-black uppercase tracking-tighter mb-12 leading-none">
                Ready to <br /> upgrade your <br /> status?
            </h2>
            <a
                href="/contact"
                className="inline-block border border-stark/30 px-16 py-8 font-mono text-xs tracking-[0.4em] uppercase hover:bg-stark hover:text-matte transition-all"
            >
                Let&apos;s talk shop
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default TestimonialsPage;
