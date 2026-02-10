"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: "google_maps",
    text: "Does your bar currently rank in the 'Top 3' on Google Maps for your core keywords?",
    options: [
      { label: "Yes, we own the block", score: 25, value: "yes" },
      { label: "We're there, but buried", score: 10, value: "unsure" },
      { label: "No, we're a digital ghost", score: 0, value: "no" }
    ]
  },
  {
    id: "menu_type",
    text: "Is your menu a mobile-optimized 1-click page (NOT a PDF or image)?",
    options: [
      { label: "Yes, fully digitized", score: 25, value: "yes" },
      { label: "No, still using PDFs/Images", score: 0, value: "no" }
    ]
  },
  {
    id: "data_capture",
    text: "Do you automatically capture guest data (Email/SMS) during the shift?",
    options: [
      { label: "Yes, we own our audience", score: 25, value: "yes" },
      { label: "No, we just hope they come back", score: 0, value: "no" }
    ]
  },
  {
    id: "ai_visibility",
    text: "Does ChatGPT or Apple Intelligence recommend you by name when asked for local spots?",
    options: [
      { label: "Yes, we are the answer", score: 25, value: "yes" },
      { label: "Sometimes / Unsure", score: 10, value: "unsure" },
      { label: "No, we're invisible to robots", score: 0, value: "no" }
    ]
  }
];

const TruthAuditMini = () => {
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnswer = (questionId: string, value: string, points: number) => {
    setAnswers({ ...answers, [questionId]: value });
    setScore(score + points);
    setStep(step + 1);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          type: "mini-audit",
          auditData: {
            score,
            answers,
            grade: getGrade(score)
          }
        })
      });

      if (response.ok) {
        setStep(5);
      }
    } catch (err) {
      console.error("Audit submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  const getGrade = (s: number) => {
    if (s >= 90) return { letter: "A", message: "THE GOLD STANDARD", color: "text-green-500" };
    if (s >= 70) return { letter: "B", message: "THE MID-SHIFT SLUMP", color: "text-amber-500" };
    if (s >= 40) return { letter: "C", message: "LEAKING REVENUE", color: "text-orange-500" };
    return { letter: "F", message: "TOTAL INVISIBILITY", color: "text-red-500" };
  };

  const grade = getGrade(score);

  return (
    <section id="audit" className="bg-matte text-stark py-16 md:py-24 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] z-0 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
           <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <span className="font-mono text-xs tracking-[0.4em] text-amber-500 font-bold uppercase">Truth Audit Engine</span>
           </div>
           <div className="border border-amber-500/30 bg-amber-500/10 px-4 py-1 rounded-full">
              <span className="font-mono text-[10px] tracking-widest text-amber-500 uppercase font-bold">FREE EXPRESS AUDIT</span>
           </div>
        </div>

        <AnimatePresence mode="wait">
          {step < 4 ? (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] opacity-40 tracking-widest uppercase font-bold">DIAGNOSTIC {step + 1} OF 4</span>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase leading-tight tracking-tighter">
                  {questions[step].text}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(questions[step].id, opt.value, opt.score)}
                    className="w-full text-left bg-white/5 border border-white/10 p-6 md:p-8 hover:bg-white/10 hover:border-amber-500/50 transition-all group relative overflow-hidden"
                  >
                    <div className="flex justify-between items-center relative z-10">
                      <span className="font-display text-lg md:text-xl uppercase tracking-widest">{opt.label}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : step === 4 ? (
            <motion.div
              key="lead-capture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10 text-center"
            >
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">Analyzing <br /> Your Signal...</h2>
              <p className="font-mono text-[10px] opacity-60 uppercase tracking-widest max-w-sm mx-auto">Where should we deposit your Express Visibility Scorecard? (Immediate Reveal)</p>

              <form onSubmit={handleSubmitLead} className="max-w-md mx-auto space-y-3">
                <input
                  required
                  type="text"
                  placeholder="Owner Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-5 focus:border-amber-500 outline-none font-display uppercase tracking-widest text-lg"
                />
                <input
                  required
                  type="email"
                  placeholder="Direct Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-5 focus:border-amber-500 outline-none font-display uppercase tracking-widest text-lg"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 text-matte font-display font-black text-xl py-5 uppercase tracking-tighter hover:bg-amber-400 transition-colors"
                >
                  {loading ? "Crunching Data..." : "Reveal My Score"}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-10 border border-amber-500/20 bg-charcoal/30 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-[0.4em] text-amber-500 uppercase">SIGNAL STRENGTH REPORT</span>
                <div className={`text-8xl md:text-[10rem] font-display font-black leading-none ${grade.color}`}>
                  {grade.letter}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter">
                  {grade.message}
                </h2>
              </div>

              <div className="space-y-8 max-w-lg mx-auto">
                <p className="font-mono text-xs opacity-70 leading-relaxed uppercase">
                  Your raw visibility score is <span className="text-amber-500 font-bold">{score}/100</span>. 
                  In your current state, you are bleeding roughly <span className="text-stark font-bold">$3,500 - $8,000 in monthly revenue</span> to competitors who are simply more visible to AI models.
                </p>
                
                <div className="pt-8 border-t border-white/10">
                   <h3 className="text-xl font-display font-black uppercase mb-3 tracking-tight">THE FIX: $97 FULL TRUTH AUDIT</h3>
                   <p className="font-mono text-[10px] opacity-50 mb-8 uppercase leading-relaxed">
                     This express report is just the surface. Our $97 Truth Audit provides the raw data Gemini and ChatGPT uses to ignore you, plus the specific checklist to fix your signal tonight.
                   </p>
                   <a
                    href="/aivisibility"
                    className="inline-block bg-amber-500 text-matte px-10 py-5 font-display font-black text-lg uppercase tracking-widest hover:bg-white transition-colors w-full"
                   >
                    BUY FULL AUDIT ($97) — CREDITABLE TO SERVICES
                   </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default TruthAuditMini;
