"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  "New Arrivals",
  "Free Shipping Over 150 KWD",
  "Luxury Fabrics",
  "Curated Collections",
  "Exclusive Designs",
  "Handcrafted Quality",
  "Middle East Delivery",
  "New Arrivals",
  "Free Shipping Over 150 KWD",
  "Luxury Fabrics",
  "Curated Collections",
  "Exclusive Designs",
  "Handcrafted Quality",
  "Middle East Delivery",
];

export default function Marquee() {
  return (
    <section className="bg-velvet-700 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 text-cream text-xs tracking-widest uppercase font-medium px-6"
          >
            {item}
            <Star className="w-2.5 h-2.5 fill-cream/60 text-cream/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
