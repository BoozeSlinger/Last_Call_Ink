"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SidebarBlade from "@/components/SidebarBlade";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    social: "",
    service: "web-design",
    otherService: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend/form service
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-bone text-matte selection:bg-matte selection:text-bone overflow-x-hidden">
      <SidebarBlade />

      <div className="pl-[60px] md:pl-[80px] min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Side: Branding/Intro */}
        <section className="w-full lg:w-2/5 p-8 md:p-16 lg:p-24 flex flex-col justify-between bg-matte text-bone border-r border-charcoal/20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.8] tracking-tighter uppercase mb-8"
            >
              Pull up <br /> a stool
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs tracking-[0.3em] uppercase leading-relaxed max-w-sm"
            >
              The industry never sleeps, but we take appointments. Tell us what you&apos;re pouring, and we&apos;ll build the glass.
            </motion.p>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase opacity-40 mb-2">Inquiries</p>
                <p className="text-xl font-display uppercase tracking-tight">service@lastcallcollective.com</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase opacity-40 mb-2">Social</p>
                <p className="text-xl font-display uppercase tracking-tight">@lastcallcollective</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: The Form */}
        <section className="w-full lg:w-3/5 p-8 md:p-16 lg:p-24 bg-bone">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="max-w-2xl space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/60">Your Name *</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Johnny Walker"
                      className="w-full bg-transparent border-b border-charcoal/20 py-4 focus:border-charcoal outline-hidden transition-colors font-display text-2xl uppercase placeholder:opacity-20"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/60">Email Address *</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="j.walker@distillery.com"
                      className="w-full bg-transparent border-b border-charcoal/20 py-4 focus:border-charcoal outline-hidden transition-colors font-display text-2xl uppercase placeholder:opacity-20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/60">Telephone *</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 555 0123"
                      className="w-full bg-transparent border-b border-charcoal/20 py-4 focus:border-charcoal outline-hidden transition-colors font-display text-2xl uppercase placeholder:opacity-20"
                    />
                  </div>

                  {/* Social Handle */}
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/60">Social Handle (Optional)</label>
                    <input 
                      type="text" 
                      name="social"
                      value={formData.social}
                      onChange={handleChange}
                      placeholder="@yourbrand"
                      className="w-full bg-transparent border-b border-charcoal/20 py-4 focus:border-charcoal outline-hidden transition-colors font-display text-2xl uppercase placeholder:opacity-20"
                    />
                  </div>
                </div>

                {/* Dropdown */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/60">How can we help? *</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 focus:border-charcoal outline-hidden transition-colors font-display text-2xl uppercase appearance-none cursor-pointer"
                  >
                    <option value="web-design" className="bg-bone">Web Design & AEO</option>
                    <option value="graphic-design" className="bg-bone">Branding & Graphic Design</option>
                    <option value="marketing" className="bg-bone">Content & Marketing</option>
                    <option value="other" className="bg-bone">Something Else</option>
                  </select>
                </div>

                {/* Conditional Other */}
                <AnimatePresence>
                  {formData.service === "other" && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-4">
                        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/60">Please specify</label>
                        <input 
                          type="text" 
                          name="otherService"
                          value={formData.otherService}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-charcoal/20 py-4 focus:border-charcoal outline-hidden transition-colors font-display text-2xl uppercase"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-charcoal/60">Additional Notes</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your venue, your vibe, or your vision..."
                    className="w-full bg-transparent border border-charcoal/10 p-6 focus:border-charcoal outline-hidden transition-colors font-sans text-lg placeholder:opacity-30 resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full md:w-auto bg-matte text-bone px-12 py-6 font-display text-xl uppercase tracking-widest hover:bg-charcoal transition-colors cursor-pointer"
                >
                  Send Inquiry
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col justify-center items-start space-y-8"
              >
                <div className="w-20 h-20 rounded-full border-2 border-charcoal flex items-center justify-center text-4xl">
                  ✓
                </div>
                <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
                  Check <br /> The Tab
                </h2>
                <p className="max-w-md font-mono text-xs tracking-widest uppercase text-charcoal/60">
                  Your inquiry has been received. Our team will review your business and reach out within 24 hours to schedule a deep-dive call.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-[10px] tracking-[0.3em] uppercase underline hover:text-charcoal transition-colors"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
