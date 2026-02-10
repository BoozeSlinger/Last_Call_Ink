"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Bar Operational Audit and does my venue need one?",
    answer: "Think of it as a financial health check for your P&L. If your venue is seeing over 15% shrinkage or stagnant weeknight sales, you aren't just 'slowing down'—you're leaking cash. An operational audit identifies exactly where the bleed is happening so we can plug it before we start scaling."
  },
  {
    question: "How can I stop bartenders from stealing or over-pouring without firing my whole staff?",
    answer: "We focus on Systems over People. Last Call Collective implements automated inventory tracking and 'blind drop' cash systems that remove the opportunity and temptation for theft. It's not about being a 'snitch'; it's about building a system that protects the owner's margin and rewards the honest staff who actually do the work."
  },
  {
    question: "Why isn't my bar showing up in 'Best Bars Near Me' on AI search engines?",
    answer: "Because traditional SEO is dead. AI engines like Perplexity, ChatGPT, and Gemini look for AEO (AI Engine Optimization). They don't just scan keywords; they analyze specific data points, review sentiment, and structured citations. If you aren't optimized for AEO, your competitors' 2010-era SEO packages are making you invisible to the future of search.",
    hasCTA: true
  },
  {
    question: "How do I get more customers into my Riverside or Temecula bar on slow weeknights?",
    answer: "The answer isn't 'discounts'—it's Programmatic Traffic. We use AEO to capture high-intent queries like 'Things to do in Riverside tonight' and combine it with automated SMS re-engagement for your regulars. We know the IE and OC geography, and we know that IE weeknights require a specific 'Local Intent' strategy, not a generic marketing blast."
  },
  {
    question: "Is there a better alternative to paying for Yelp Ads for my restaurant?",
    answer: "Yes: Owned Distribution. Every owner hates their Yelp bill because they are 'renting' traffic they should already own. By building an automated database and optimizing for Google/AI search engines, you create a distribution channel that YOU control, providing a significantly higher ROI than paying Yelp for the privilege of seeing your own customers."
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
        className="w-full py-6 flex justify-between items-center text-left group transition-all"
      >
        <span className="text-lg md:text-xl font-display font-black uppercase tracking-tighter leading-tight pr-8 group-hover:text-amber-500 transition-colors">
          <span className="font-mono text-[8px] text-amber-500/50 mr-4 tracking-normal">0{index + 1}</span>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-amber-500 flex-shrink-0"
        >
          <ChevronDown size={20} strokeWidth={3} />
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
            <div className="pb-6 pr-12">
              <p className="font-mono text-[10px] md:text-xs text-stark/60 uppercase leading-relaxed tracking-widest border-l border-amber-500/50 pl-4 mb-4">
                {answer}
              </p>
              
              {hasCTA && (
                <Link 
                  href="/contact" 
                  className="inline-block mt-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-2 font-mono text-[8px] tracking-[0.2em] uppercase font-black hover:bg-amber-500 hover:text-matte transition-colors"
                >
                  Want to see the math on this for your bar? Book a audit.
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-8 md:px-16 bg-matte border-t border-charcoal/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="font-mono text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-4 block font-bold">The Standard FAQ</span>
          <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-8">
            ASK THE <br /> HOUSE
          </h2>
          <p className="font-mono text-[10px] tracking-widest text-stark/40 uppercase leading-relaxed max-w-xs mb-8">
             Building an FAQ section is one of the fastest ways to win at AEO (AI Engine Optimization). It provides the structured data that AI engines crave.
          </p>
          <Link 
            href="/faq" 
            className="inline-block font-mono text-[10px] tracking-widest text-stark border border-stark/20 px-8 py-4 uppercase hover:bg-stark hover:text-matte transition-all"
          >
            View All Questions →
          </Link>
        </div>
        
        <div className="lg:col-span-8 border-t border-charcoal/30 lg:border-t-0">
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
      </div>
    </section>
  );
};

export default FAQSection;
