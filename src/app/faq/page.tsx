"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SidebarBlade from "@/components/SidebarBlade";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Bar Operational Audit and does my venue need one?",
    answer: "Think of it as a financial health check for your P&L. If your venue is seeing over 15% shrinkage or stagnant weeknight sales, you aren't just 'slowing down'—you're leaking cash. An operational audit identifies exactly where the bleed is happening so we can plug it before we start scaling.",
    leverage: "Business Consultant Strategy"
  },
  {
    question: "How can I stop bartenders from stealing or over-pouring without firing my whole staff?",
    answer: "We focus on Systems over People. Last Call Collective implements automated inventory tracking and 'blind drop' cash systems that remove the opportunity and temptation for theft. It's not about being a 'snitch'; it's about building a system that protects the owner's margin and rewards the honest staff who actually do the work.",
    leverage: "Systemic Protection"
  },
  {
    question: "Why isn't my bar showing up in 'Best Bars Near Me' on AI search engines?",
    answer: "Because traditional SEO is dead. AI engines like Perplexity, ChatGPT, and Gemini look for AEO (AI Engine Optimization). They don't just scan keywords; they analyze specific data points, review sentiment, and structured citations. If you aren't optimized for AEO, your competitors' 2010-era SEO packages are making you invisible to the future of search.",
    leverage: "AEO Dominance",
    hasCTA: true
  },
  {
    question: "How do I get more customers into my Riverside or Temecula bar on slow weeknights?",
    answer: "The answer isn't 'discounts'—it's Programmatic Traffic. We use AEO to capture high-intent queries like 'Things to do in Riverside tonight' and combine it with automated SMS re-engagement for your regulars. We know the IE and OC geography, and we know that IE weeknights require a specific 'Local Intent' strategy, not a generic marketing blast.",
    leverage: "Local Intent Strategy"
  },
  {
    question: "Is there a better alternative to paying for Yelp Ads for my restaurant?",
    answer: "Yes: Owned Distribution. Every owner hates their Yelp bill because they are 'renting' traffic they should already own. By building an automated database and optimizing for Google/AI search engines, you create a distribution channel that YOU control, providing a significantly higher ROI than paying Yelp for the privilege of seeing your own customers.",
    leverage: "Yelp Killer Strategy"
  }
];

const FAQItem = ({ question, answer, hasCTA, isOpen, onClick, index }: { 
  question: string; 
  answer: string; 
  hasCTA?: boolean;
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}) => {
  return (
    <div className="border-b border-charcoal/30 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group transition-all"
      >
        <span className="text-xl md:text-2xl font-display font-black uppercase tracking-tighter leading-tight pr-8 group-hover:text-amber-500 transition-colors">
          <span className="font-mono text-[10px] text-amber-500/50 mr-4 tracking-normal">0{index + 1}</span>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-amber-500 flex-shrink-0"
        >
          <ChevronDown size={24} strokeWidth={3} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12">
              <p className="font-mono text-sm md:text-base text-stark/70 uppercase leading-relaxed tracking-wide border-l-2 border-amber-500 pl-6 mb-6">
                {answer}
              </p>
              
              {hasCTA && (
                <Link 
                  href="/contact" 
                  className="inline-block mt-4 bg-amber-500 text-matte px-6 py-3 font-mono text-[10px] tracking-[0.2em] uppercase font-black hover:bg-white transition-colors"
                >
                  Want to see the math on this for your bar? Book a 15-min Audit.
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main className="min-h-screen bg-matte text-stark selection:bg-stark selection:text-matte overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SidebarBlade />

            <div className="pl-[60px] md:pl-[80px]">
                {/* Hero section */}
                <section className="pt-32 pb-16 px-8 md:px-24 border-b border-charcoal/30">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 mb-12 font-mono text-[10px] tracking-widest uppercase text-stark/60 hover:text-amber-500 transition-colors group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="font-mono text-xs tracking-[0.5em] text-amber-500 uppercase mb-4 block font-bold">The Standard FAQ</span>
                            <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-8">
                                ASK THE <br /> HOUSE
                            </h1>
                            <p className="text-xl md:text-2xl font-mono leading-tight uppercase font-black text-stark/90 max-w-2xl">
                                We don&apos;t just answer questions—we provide the framework for your venue to become the only logical solution in your market.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Accordion Section */}
                <section className="px-8 md:px-24 py-24 max-w-6xl">
                    <div className="mb-16">
                        <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">Leveraging AEO</h2>
                        <p className="font-mono text-[10px] tracking-widest text-stark/40 uppercase leading-relaxed max-w-xl">
                            Building an FAQ section from scratch is one of the fastest ways to win at AEO (AI Engine Optimization) because it provides the &quot;structured data&quot; that AI engines like Perplexity and ChatGPT crave.
                        </p>
                    </div>

                    <div className="border-t border-charcoal/30">
                        {faqs.map((faq, idx) => (
                            <FAQItem 
                                key={idx}
                                index={idx}
                                question={faq.question}
                                answer={faq.answer}
                                hasCTA={faq.hasCTA}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>
                    
                    <div className="mt-24 p-12 bg-white/5 border border-charcoal/50 relative overflow-hidden group">
                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl font-display font-black uppercase mb-6">Still Leaking Cash?</h3>
                            <p className="font-mono text-xs tracking-widest text-stark/60 uppercase mb-10 max-w-md mx-auto">
                                If you&apos;re tired of renting traffic and ready to own your market, let&apos;s talk numbers.
                            </p>
                            <Link 
                                href="/contact" 
                                className="inline-block bg-stark text-matte px-10 py-5 font-mono text-xs tracking-[0.3em] uppercase font-black hover:bg-amber-500 transition-all transform hover:scale-105"
                            >
                                Book Your Audit →
                            </Link>
                        </div>
                        {/* Background text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-display font-black text-stark/5 uppercase pointer-events-none select-none -rotate-6">
                            AUDIT
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
};

export default FAQPage;
