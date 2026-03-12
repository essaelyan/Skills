"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Globe } from "lucide-react";

const gccFlags = [
  { code: "kw", label: "Kuwait" },
  { code: "ae", label: "UAE" },
  { code: "sa", label: "Saudi Arabia" },
  { code: "bh", label: "Bahrain" },
  { code: "qa", label: "Qatar" },
  { code: "om", label: "Oman" },
];

const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "#shop" },
    { label: "Dresses", href: "#shop" },
    { label: "T-Shirts", href: "#shop" },
    { label: "National Day Collection", href: "#shop" },
    { label: "Bags", href: "#shop" },
    { label: "Winter Collection", href: "#shop" },
    { label: "Kids", href: "#shop" },
    { label: "Sale", href: "#shop" },
  ],
  Help: [
    { label: "Shipping Policy", href: "/policies/shipping-policy" },
    { label: "Refund & Returns", href: "/policies/refund-policy" },
    { label: "Contact Us", href: "mailto:info.byvelvetstore@gmail.com" },
    { label: "Size Guide", href: "#" },
  ],
  Company: [
    { label: "About ByVelvet", href: "#about" },
    { label: "Privacy Policy", href: "/policies/privacy-policy" },
    { label: "Terms of Service", href: "/policies/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span className="font-serif text-2xl tracking-[0.2em] text-cream font-bold">BY</span>
              <span className="font-serif text-2xl tracking-[0.2em] text-velvet-400 font-light">VELVET</span>
            </div>
            <p className="text-warm-gray text-sm leading-relaxed max-w-xs">
              Luxury fashion curated for the modern Middle Eastern woman.
              Timeless designs, exceptional quality, effortless elegance.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/byvelvet.store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center text-warm-gray hover:border-cream/60 hover:text-cream transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center text-warm-gray hover:border-cream/60 hover:text-cream transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Contact */}
            <div className="mt-8 space-y-1.5">
              <a
                href="mailto:info.byvelvetstore@gmail.com"
                className="block text-xs text-warm-gray hover:text-cream transition-colors"
              >
                info.byvelvetstore@gmail.com
              </a>
              <a
                href="tel:+96594990393"
                className="block text-xs text-warm-gray hover:text-cream transition-colors"
              >
                +965 94990393
              </a>
            </div>

            {/* Ships to */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-warm-gray mb-2">Ships to</p>
              <div className="flex flex-wrap gap-2">
                {gccFlags.map((f) => (
                  <span
                    key={f.code}
                    title={f.label}
                    className="w-8 h-6 border border-cream/10 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${f.code}.png`}
                      alt={f.label}
                      className="w-full h-full object-cover"
                    />
                  </span>
                ))}
                <span
                  title="Global"
                  className="w-8 h-6 border border-cream/10 flex items-center justify-center"
                >
                  <Globe className="w-4 h-4 text-cream/50" />
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs tracking-[0.3em] uppercase text-cream font-medium mb-5">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto:") || link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="text-sm text-warm-gray hover:text-cream transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-warm-gray hover:text-cream transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray">
            © {new Date().getFullYear()} By Velvet. CR: 2021/23558 · VAT: 455934
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/policies/privacy-policy" },
              { label: "Terms of Service", href: "/policies/terms-of-service" },
              { label: "Refund Policy", href: "/policies/refund-policy" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-warm-gray hover:text-cream transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          {/* Payment */}
          <div className="flex gap-3 items-center">
            {["VISA", "MC", "AMEX", "MyFatoorah"].map((p) => (
              <span
                key={p}
                className="text-[9px] font-bold text-warm-gray/60 border border-cream/10 px-2 py-1 tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
