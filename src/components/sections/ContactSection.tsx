"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'contact',
          message: `Service: ${formData.service}${formData.otherService ? ` (${formData.otherService})` : ''}\n\nNotes: ${formData.message}`
        }),
      });

      if (!response.ok) throw new Error('Failed to send inquiry. Please try again.');

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="flex flex-col lg:flex-row bg-bone selection:bg-matte selection:text-bone">
      {/* Left Side: Branding/Intro */}
      <div className="w-full lg:w-2/5 p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-matte text-bone border-r border-charcoal/20">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-display font-black leading-[0.8] tracking-tighter uppercase mb-4"
          >
            Pull up <br /> a stool
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-[0.3em] uppercase leading-relaxed max-w-sm"
          >
            The industry never sleeps, but we take appointments. Tell us what you&apos;re pouring, and we&apos;ll build the glass.
          </motion.p>
        </div>

        <div className="mt-6 lg:mt-0">
          <div className="space-y-3">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase opacity-40 mb-2">Inquiries</p>
              <p className="text-xl font-display uppercase tracking-tight font-bold text-amber-500">ryan@lastcall.marketing</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase opacity-40 mb-2">Social</p>
              <p className="text-xl font-display uppercase tracking-tight">@lastcall.marketing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: The Form */}
      <div className="w-full lg:w-3/5 p-6 md:p-8 lg:p-10 bg-bone text-matte">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form 
              key="contact-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="max-w-2xl space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  rows={2}
                  placeholder="Tell us about your venue, your vibe, or your vision..."
                  className="w-full bg-transparent border border-charcoal/10 p-6 focus:border-charcoal outline-hidden transition-colors font-sans text-lg placeholder:opacity-30 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="space-y-4">
                {error && (
                  <p className="text-red-500 font-mono text-xs uppercase tracking-widest">{error}</p>
                )}
                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-auto bg-matte text-bone px-10 py-4 font-display text-lg uppercase tracking-widest transition-colors cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-charcoal'}`}
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </motion.button>
              </div>
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
      </div>
    </section>
  );
};

export default ContactSection;
