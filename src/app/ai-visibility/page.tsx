"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle2, 
  Search, 
  Smartphone, 
  MapPin, 
  AlertTriangle, 
  ArrowRight,
  ChevronDown
} from "lucide-react";

export default function AiVisibilityPage() {
  return (
    <main className="bg-matte text-stark min-h-screen font-sans selection:bg-amber-500 selection:text-matte overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 bg-matte/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase relative group">
          Last Call
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full"></span>
        </Link>
        <Link 
          href="#audit"
          className="font-mono text-[10px] md:text-xs tracking-[0.2em] border border-stark/20 bg-stark/5 px-4 md:px-6 py-2 md:py-3 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all uppercase"
        >
          Get The Proof
        </Link>
      </nav>

      {/* HERO SECTION: Agitation & High Stakes */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 flex flex-col items-center text-center border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,rgba(0,0,0,0)_60%)] pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs text-amber-500 tracking-widest uppercase">
              Urgent Advisory for Bar Owners
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black leading-[0.9] tracking-tighter uppercase mb-8">
            Are You <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-stark/90 to-stark/50 pb-2">
              Invisible?
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-mono leading-relaxed max-w-3xl mx-auto opacity-70 mb-12">
            The world stopped searching and started <span className="text-amber-500 font-bold">asking</span>.  
            If ChatGPT, Siri, and Gemini don&apos;t know you exist, you aren&apos;t just losing customized searches—you&apos;re losing revenue every single night.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="#audit"
              className="group bg-amber-500 text-black px-8 py-4 font-display text-lg uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Test My Visibility
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#why-it-matters"
              className="px-8 py-4 font-mono text-xs uppercase tracking-widest border border-white/20 hover:border-white/50 transition-colors flex items-center justify-center"
            >
              How It Works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* PROBLEM SECTION: The "Silent Killer" */}
      <section id="why-it-matters" className="py-24 md:py-32 px-6 md:px-24 bg-charcoal/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Simulation UI */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl blur opacity-75"></div>
            <div className="bg-matte border border-white/10 rounded-xl p-6 md:p-8 relative z-10 shadow-2xl">
              <div className="flex gap-2 mb-6 opacity-30">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="space-y-6 font-sans">
                {/* User Query */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-xs">U</div>
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-sm md:text-base">
                    &quot;Find me a high-energy sports bar near downtown for the fight tonight.&quot;
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-xs text-black font-bold">AI</div>
                  <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl rounded-tr-none text-sm md:text-base text-stark/90">
                    <p className="mb-2">Here are the top recommendations based on reviews and atmosphere:</p>
                    <ul className="list-disc pl-4 space-y-1 text-amber-500/80">
                      <li>The Locker Room</li>
                      <li>Victory Pint House</li>
                      <li>Stadium Club</li>
                    </ul>
                  </div>
                </div>

                {/* The Warning */}
                <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-red-500 font-bold uppercase text-sm tracking-wide">Critical Error</h3>
                    <p className="text-xs text-red-400 mt-1 opacity-80">
                      Your bar was excluded because your digital footprint is incomplete. You just lost a table of 6 without knowing it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Agitation */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-6">
              The Gatekeepers <br/> Have Shifted
            </h2>
            <p className="text-lg text-bone/70 leading-relaxed mb-8">
              Old way: Optimize for keywords on a website nobody visits.<br/>
              <strong className="text-stark">New way: Optimize for the Artificial Intelligence that tells people where to spend their money.</strong>
            </p>
            <p className="text-lg text-bone/70 leading-relaxed mb-8">
              If your hours are wrong on Apple Maps, if your menu isn&apos;t readable by robots, and if your reputation is silent... you are invisible to the algorithms that matter.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CheckCircle2 className="text-amber-500 w-6 h-6" />
                <span className="font-mono text-sm uppercase tracking-widest">Siri runs on Google Gemini</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="text-amber-500 w-6 h-6" />
                <span className="font-mono text-sm uppercase tracking-widest">ChatGPT Search is the new Default</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="text-amber-500 w-6 h-6" />
                <span className="font-mono text-sm uppercase tracking-widest">Perplexity Answers 1M+ Questions/Day</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION: What We Fix */}
      <section className="py-24 px-6 md:px-24 bg-matte text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-amber-500 tracking-[0.4em] uppercase block mb-4">The Solution</span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase">
            Total Visibility Protocol
          </h2>
          <p className="mt-6 text-bone/60">We fix the plumbing so the money can flow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "Search Domination",
              desc: "We engineer your profile to rank when locals type 'Best drinks near me' or 'Sports bar [City]'."
            },
            {
              icon: MapPin,
              title: "Listing Sync",
              desc: "We force-update your info across Apple Maps, Yelp, TripAdvisor, and 50+ networks instantly."
            },
            {
              icon: Smartphone,
              title: "Mobile Optimization",
              desc: "Menu digitization and site speed fixes so AI can actually read what you sell."
            }
          ].map((feature, i) => (
            <div key={i} className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:-translate-y-2">
              <feature.icon className="w-10 h-10 text-amber-500 mb-6 mx-auto opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-display font-bold text-xl uppercase mb-3 text-stark">{feature.title}</h3>
              <p className="font-sans text-sm text-bone/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 border-y border-white/5 bg-charcoal/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-10">
             Trusted by venues that want to be found
           </p>
           <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for partner logos - using text for now to maintain aesthetic */}
             <div className="font-display font-black text-2xl">THE STAND</div>
             <div className="font-display font-black text-2xl">OAK & IRON</div>
             <div className="font-display font-black text-2xl">MIDNIGHT RAMBLER</div>
             <div className="font-display font-black text-2xl">COMMON GROUND</div>
           </div>
        </div>
      </section>

      {/* PRICING / CTA SECTION */}
      <section id="audit" className="py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase mb-6">
            The Proof
          </h2>
          <p className="text-xl text-bone/80 mb-12 max-w-2xl mx-auto">
            Stop guessing. Get the raw data. We audit your digital existence across the Neural Web and tell you exactly what needs to be fixed.
          </p>

          <div className="bg-matte border border-amber-500/30 p-8 md:p-12 max-w-2xl mx-auto relative group">
            <div className="absolute top-0 right-0 bg-amber-500 text-black font-mono text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Limited Intake
            </div>
            
            <div className="flex flex-col md:flex-row items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl md:text-7xl font-display font-black text-white">$97</span>
              <span className="text-bone/40 font-mono text-sm uppercase line-through">was $250</span>
            </div>
            <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-8">
              100% Credited towards any service package
            </p>

            <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto text-sm text-bone/70">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> ChatGPT & Gemini Sentiment Analysis
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Competitor Ranking Report
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> 48-Hour Turnaround Guarantee
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-500" /> Actionable Fix Checklist
              </li>
            </ul>

            <a 
              href="mailto:ryanstevens@lastcallcollective.com?subject=I want The Proof - AI Audit"
              className="block w-full bg-amber-500 text-black py-5 font-display text-xl uppercase tracking-widest hover:bg-white transition-all transform hover:scale-[1.02]"
            >
              Get The Proof
            </a>
            <p className="mt-6 text-[10px] text-bone/30 font-mono uppercase">
              No contracts. No hidden fees. Just the truth.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl uppercase mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            <details className="group border border-white/10 p-6 open:bg-white/[0.02] cursor-pointer transition-all">
              <summary className="flex justify-between items-center font-mono text-sm uppercase tracking-widest list-none">
                Why does AI visibility matter?
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-bone/60 text-sm leading-relaxed">
                Because search habits have changed. If a user asks Siri &quot;Where should I get a burger?&quot;, Siri doesn&apos;t give a list of 10 links—she gives 1 recommendation. If that&apos;s not you, you don&apos;t exist.
              </p>
            </details>
            <details className="group border border-white/10 p-6 open:bg-white/[0.02] cursor-pointer transition-all">
              <summary className="flex justify-between items-center font-mono text-sm uppercase tracking-widest list-none">
                What do I get for $97?
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-bone/60 text-sm leading-relaxed">
                You get a comprehensive PDF report showing exactly how the major AI models perceive your brand, where you rank against local competitors, and a specific checklist of technical issues (hours, broken links, menu data) that are hurting your score.
              </p>
            </details>
            <details className="group border border-white/10 p-6 open:bg-white/[0.02] cursor-pointer transition-all">
              <summary className="flex justify-between items-center font-mono text-sm uppercase tracking-widest list-none">
                Can&apos;t I just fix this myself?
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-bone/60 text-sm leading-relaxed">
                You can try, but manually updating 50+ directories and ensuring schema markup is correct on your site is a technical job. We use proprietary software to force-sync this data instantly.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center">
        <p className="font-mono text-[10px] text-bone/40 uppercase tracking-widest">
          Last Call Collective &copy; 2026<br />
          Built for the industry, by the industry.
        </p>
      </footer>
    </main>
  );
}
