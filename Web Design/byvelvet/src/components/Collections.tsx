"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    name: "Evening Wear",
    count: "24 pieces",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    size: "large",
  },
  {
    name: "Casual Luxe",
    count: "18 pieces",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    size: "small",
  },
  {
    name: "Resort Collection",
    count: "32 pieces",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    size: "small",
  },
  {
    name: "Accessories",
    count: "45 pieces",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    size: "large",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Collections() {
  return (
    <section id="collections" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-velvet-600 font-medium">
              Our World
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-3 leading-tight">
              Shop by
              <br />
              <span className="italic">Collection</span>
            </h2>
          </div>
          <p className="text-warm-gray text-sm leading-relaxed max-w-xs">
            Each collection is thoughtfully curated to bring you timeless pieces
            that elevate your everyday wardrobe.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Large left */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
            <CollectionCard collection={collections[0]} tall />
          </motion.div>

          {/* Top right two */}
          <motion.div variants={itemVariants}>
            <CollectionCard collection={collections[1]} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CollectionCard collection={collections[2]} />
          </motion.div>

          {/* Bottom wide */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <CollectionCard collection={collections[3]} wide />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CollectionCard({
  collection,
  tall,
  wide,
}: {
  collection: (typeof collections)[0];
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative group overflow-hidden bg-charcoal cursor-pointer ${
        tall ? "h-[500px] md:h-full min-h-[500px]" : wide ? "h-56 md:h-64" : "h-56 md:h-60"
      }`}
    >
      <Image
        src={collection.image}
        alt={collection.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <p className="text-cream/60 text-xs tracking-widest uppercase mb-1">
            {collection.count}
          </p>
          <h3 className="font-serif text-2xl text-cream">{collection.name}</h3>
        </div>
        <div className="w-10 h-10 bg-cream/10 border border-cream/20 rounded-full flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-cream group-hover:text-charcoal transition-colors" />
        </div>
      </div>
    </div>
  );
}
