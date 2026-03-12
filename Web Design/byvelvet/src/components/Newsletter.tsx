"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-velvet-800 py-24 px-6 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cream rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-velvet-300 font-medium">
            Join the Inner Circle
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 leading-tight">
            First to know,
            <br />
            <span className="italic">first to wear.</span>
          </h2>
          <p className="text-velvet-300 text-sm leading-relaxed mt-4">
            Subscribe for exclusive access to new arrivals, styling tips, and
            members-only offers. No spam — only beauty.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 py-4 px-8 bg-cream/10 border border-cream/20 text-cream text-sm tracking-widest uppercase"
            >
              Thank you for subscribing ✓
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder:text-velvet-400 px-5 py-3.5 text-sm outline-none focus:border-cream/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-cream text-charcoal px-6 py-3.5 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-velvet-200 transition-colors group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-velvet-500 text-xs mt-4">
            By subscribing you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
