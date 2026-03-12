"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Noor Al-Hassan",
    location: "Kuwait City",
    rating: 5,
    text: "ByVelvet completely transformed my wardrobe. The quality of every piece is exceptional — you can feel the luxury the moment you put it on. My go-to for special occasions and everyday elegance.",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
  },
  {
    name: "Layla Mahmoud",
    location: "Dubai, UAE",
    rating: 5,
    text: "I've shopped with many luxury brands, but ByVelvet stands apart. The curation is impeccable and every piece feels like it was made just for me. Absolutely obsessed with my Velvet Slip Dress.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
  },
  {
    name: "Sara Al-Rashidi",
    location: "Riyadh, Saudi Arabia",
    rating: 5,
    text: "Fast shipping, stunning packaging, and clothes that look even better in person. ByVelvet has mastered the art of online luxury fashion. My entire family now orders from them!",
    avatar: "https://tempfile.redpandaai.co/kieai/661779/creative-content-engine/1773010126333-5gbxlbe0yda.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#111111] py-24 px-6 relative overflow-hidden">
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-velvet-950/40 via-transparent to-velvet-900/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-velvet-400 font-medium">
            What They Say
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-cream mt-3">
            Our <span className="italic text-velvet-300">Community</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#161616] p-8 flex flex-col gap-5 hover:bg-[#1c1c1c] transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-velvet-400 text-velvet-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream/60 text-sm leading-relaxed flex-1 font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-cream/10">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-velvet-700/50">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-cream">{t.name}</p>
                  <p className="text-xs text-cream/40">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-cream/10"
        >
          {[
            { icon: "🚀", label: "Fast Delivery", sub: "2–5 business days" },
            { icon: "↩️", label: "Easy Returns", sub: "14-day policy" },
            { icon: "🔒", label: "Secure Payment", sub: "Encrypted checkout" },
            { icon: "✨", label: "Luxury Quality", sub: "Premium fabrics" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-3xl mb-3">{badge.icon}</div>
              <p className="text-xs tracking-widest uppercase font-medium text-cream/80">
                {badge.label}
              </p>
              <p className="text-xs text-cream/40 mt-1">{badge.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
