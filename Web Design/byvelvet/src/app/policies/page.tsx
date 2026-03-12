import Link from "next/link";
import { ArrowRight } from "lucide-react";

const policies = [
  {
    slug: "refund-policy",
    title: "Refund Policy",
    summary:
      "14-day return window on unworn items in original condition with tags and packaging.",
  },
  {
    slug: "shipping-policy",
    title: "Shipping Policy",
    summary:
      "Orders processed in 3–7 business days. Delivery to Kuwait, GCC, and worldwide via DHL.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary:
      "How we collect, use, and protect your personal information on byvelvet.store.",
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    summary:
      "The legal terms governing your use of the By Velvet website and services.",
  },
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-velvet-600 font-medium mb-4">
          Legal
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-16">
          Our <span className="italic">Policies</span>
        </h1>

        <div className="divide-y divide-charcoal/10">
          {policies.map((policy) => (
            <Link
              key={policy.slug}
              href={`/policies/${policy.slug}`}
              className="group flex items-start justify-between gap-6 py-8 hover:pl-2 transition-all duration-300"
            >
              <div>
                <h2 className="font-serif text-xl text-charcoal group-hover:text-velvet-700 transition-colors">
                  {policy.title}
                </h2>
                <p className="text-warm-gray text-sm mt-1 leading-relaxed">
                  {policy.summary}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-warm-gray group-hover:text-velvet-700 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/10 text-sm text-warm-gray space-y-1">
          <p>
            Questions?{" "}
            <a
              href="mailto:info.byvelvetstore@gmail.com"
              className="text-charcoal underline underline-offset-4"
            >
              info.byvelvetstore@gmail.com
            </a>
          </p>
          <p>+965 94990393 &nbsp;·&nbsp; Rashed Boresli Street, Block 1, Kuwait</p>
        </div>
      </div>
    </main>
  );
}
