"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "Collections",
    href: "#collections",
    children: ["New Arrivals", "Dresses", "Tops", "Bottoms", "Accessories"],
  },
  { label: "Shop All", href: "#shop" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span
              className={`font-serif text-2xl tracking-[0.2em] font-bold transition-colors ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
            >
              BY
            </span>
            <span
              className={`font-serif text-2xl tracking-[0.2em] font-light transition-colors ${
                scrolled ? "text-velvet-700" : "text-cream/80"
              }`}
            >
              VELVET
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-xs tracking-widest uppercase font-medium transition-colors hover:opacity-70 ${
                    scrolled ? "text-charcoal" : "text-cream"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </a>
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 bg-cream border border-charcoal/10 shadow-xl min-w-[160px] py-2"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-5 py-2.5 text-xs tracking-widest uppercase text-charcoal hover:bg-charcoal/5 transition-colors"
                        >
                          {child}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className={`transition-colors hover:opacity-70 ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative transition-colors hover:opacity-70 ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-velvet-700 text-cream text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                2
              </span>
            </button>
            <button
              className={`md:hidden transition-colors hover:opacity-70 ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-50 bg-cream flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
              <span className="font-serif text-2xl tracking-[0.2em] text-charcoal font-bold">
                BY <span className="font-light text-velvet-700">VELVET</span>
              </span>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6 text-charcoal" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-serif text-charcoal border-b border-charcoal/10 pb-6"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-6 mt-auto pb-10">
              <Button variant="default" className="w-full">
                Shop Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
