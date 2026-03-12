"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const lookbookImages = [
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    alt: "Lookbook 1",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    alt: "Lookbook 2",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    alt: "Lookbook 3",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    alt: "Lookbook 4",
    className: "col-span-2",
  },
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="bg-charcoal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-cream mt-4 leading-tight">
              The Art of
              <br />
              <span className="italic text-velvet-300">Dressing Well</span>
            </h2>
            <p className="text-warm-gray text-sm leading-relaxed mt-6 max-w-md">
              Our lookbook is a visual exploration of femininity, strength, and
              quiet luxury. Each look is styled to inspire confidence and tell a
              story of effortless elegance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="velvet" size="lg">
                Shop the Look
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-cream hover:text-cream hover:bg-cream/10"
              >
                View Full Lookbook
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-cream/10">
              {[
                { value: "500+", label: "Pieces" },
                { value: "12", label: "Collections" },
                { value: "50K+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-cream">{stat.value}</p>
                  <p className="text-xs tracking-widest uppercase text-warm-gray mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Images grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 h-[560px]"
          >
            {lookbookImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
