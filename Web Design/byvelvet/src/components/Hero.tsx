"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ShaderBackground } from "@/components/ui/animated-shader-hero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-charcoal relative overflow-hidden">
      {/* Animated WebGL shader — sits behind all hero content */}
      <ShaderBackground className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />
      <div className="relative z-10">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs tracking-[0.5em] uppercase text-velvet-300 font-medium"
            >
              Luxury Fashion · Kuwait
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight"
            >
              Draped in
              <br />
              <span className="italic text-velvet-200">Elegance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-cream/55 text-sm md:text-base max-w-sm leading-relaxed"
            >
              Curated luxury fashion for the modern woman. Timeless pieces
              crafted with intention and worn with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2"
            >
              <Button variant="cream" size="lg" className="gap-3 group min-w-[200px] h-14 text-sm">
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cream/25 text-cream hover:bg-cream/10 hover:text-cream hover:border-cream/50 min-w-[200px] h-14 text-sm"
              >
                Shop Now
              </Button>
            </motion.div>
          </div>
        }
      >
        <Image
          src="/hero.png"
          alt="ByVelvet Collection"
          width={900}
          height={1200}
          quality={100}
          className="mx-auto object-contain w-full h-full"
          draggable={false}
        />
      </ContainerScroll>
      </div>
    </section>
  );
}
