"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = ["All", "Dresses", "T-Shirts", "National Day Collection", "Bags", "Winter Collection", "Kids"];

const products = [
  {
    id: 1,
    name: "Classic Drape Abaya",
    category: "Dresses",
    price: 38,
    currency: "KWD",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    badge: "new" as const,
    badgeLabel: "New",
    colors: ["#1A1A1A", "#3D2B1F", "#2C2C2C"],
  },
  {
    id: 2,
    name: "Linen Coord Set",
    category: "T-Shirts",
    price: 45,
    currency: "KWD",
    image: "/velvet-bag.png",
    badge: null,
    badgeLabel: null,
    colors: ["#E8DDD0", "#C4B49A", "#1A1A1A"],
  },
  {
    id: 3,
    name: "Velvet Slip Midi",
    category: "Dresses",
    price: 32,
    currency: "KWD",
    image: "/velvet-slip-midi.png",
    badge: "sale" as const,
    badgeLabel: "Sale",
    originalPrice: 42,
    colors: ["#1A1A1A", "#6B4F3A", "#8B7355"],
  },
  {
    id: 4,
    name: "Oversized Wool Coat",
    category: "National Day Collection",
    price: 68,
    currency: "KWD",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    badge: "new" as const,
    badgeLabel: "New",
    colors: ["#D4C5B0", "#7B6B5E", "#1A1A1A"],
  },
  {
    id: 5,
    name: "Wide Leg Trouser Set",
    category: "T-Shirts",
    price: 42,
    currency: "KWD",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    badge: null,
    badgeLabel: null,
    colors: ["#FAF9F6", "#C9B8A8", "#3D3530"],
  },
  {
    id: 6,
    name: "Open Front Abaya",
    category: "Dresses",
    price: 35,
    currency: "KWD",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    badge: null,
    badgeLabel: null,
    colors: ["#1A1A1A", "#2C2C2C"],
  },
  {
    id: 7,
    name: "Satin Wrap Dress",
    category: "Dresses",
    price: 29,
    currency: "KWD",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    badge: null,
    badgeLabel: null,
    colors: ["#C9B8A8", "#7B6B5E", "#1A1A1A"],
  },
  {
    id: 8,
    name: "Leather Tote Bag",
    category: "Bags",
    price: 55,
    currency: "KWD",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    badge: "new" as const,
    badgeLabel: "New",
    colors: ["#3D2B1F", "#1A1A1A", "#C9B8A8"],
  },
];

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="shop" className="bg-[#F7F5F2] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-velvet-600 font-medium">
            Carefully Selected
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mt-3">
            Your Journey <span className="italic">Starts Here</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 justify-center mb-12 flex-wrap"
        >
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`text-xs tracking-widest uppercase px-5 py-2 border transition-all ${
                activeCategory === tab
                  ? "border-charcoal bg-charcoal text-cream"
                  : "border-charcoal/20 text-warm-gray hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge variant={product.badge}>{product.badgeLabel}</Badge>
                    </div>
                  )}

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-cream/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cream"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        wishlist.includes(product.id)
                          ? "fill-velvet-700 text-velvet-700"
                          : "text-charcoal"
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-charcoal text-cream py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-velvet-700 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-3 h-3 rounded-full border border-charcoal/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <h3 className="font-serif text-charcoal text-base mt-2 group-hover:text-velvet-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-charcoal">
                      {product.price} {product.currency}
                    </span>
                    {"originalPrice" in product && product.originalPrice && (
                      <span className="text-xs text-warm-gray line-through">
                        {product.originalPrice} {product.currency}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg">
            View All {products.length}+ Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
