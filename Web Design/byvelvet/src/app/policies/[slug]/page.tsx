import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const policies: Record<string, { title: string; lastUpdated?: string; content: string }> = {
  "refund-policy": {
    title: "Refund Policy",
    content: `## Overview

We have a **14-day return policy**, which means you have 14 days after receiving your item to request a return.

To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.

To start a return, you can contact us at **info.byvelvetstore@gmail.com**. Please note that returns will need to be sent to the following address:

> Kuwait Block 1, Rashed Burisly Street, House 3, 72255 Abdullah Alsalem, Al Asimah, Kuwait

If your return is accepted, we'll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.

---

## Damages and Issues

Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right.

---

## Exceptions / Non-Returnable Items

Certain types of items cannot be returned, like perishable goods, custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases.

Unfortunately, **we cannot accept returns on sale items or gift cards**.

---

## Exchanges

The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.

---

## European Union 14-Day Cooling Off Period

If the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. Your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.

---

## Refunds

We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method within **14–30 business days**. Please remember it can take some time for your bank or credit card company to process and post the refund.

If more than 30 business days have passed since we've approved your return, please contact us at **info.byvelvetstore@gmail.com**.`,
  },

  "shipping-policy": {
    title: "Shipping Policy",
    content: `## Processing Time

All orders are processed within **3 to 7 business days** (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.

---

## Shipping Options

| Destination | Carrier | Estimated Delivery | Price |
|---|---|---|---|
| Kuwait | Local Delivery | 3–5 business days | 4 KWD |
| GCC Countries | DHL | 7–10 business days | 12 KWD + 2 KWD per extra item |
| Global | DHL | 7–10 business days | 20 KWD + 3 KWD per extra item |

Your order may be subject to import duties and taxes, which are incurred once a shipment reaches your destination country. By Velvet is not responsible for these charges — they are your responsibility as the customer.

---

## Order Tracking

When your order has shipped, you will receive an email notification including a tracking number you can use to check its status. Please allow **48 hours** for tracking information to become available.

If you haven't received your order within 3–10 working days of your shipping confirmation email, please contact us at **info.byvelvetstore@gmail.com** with your name and order number.

---

## Refunds, Returns & Exchanges

We accept returns up to 14 days after delivery, if the item is unused and in its original condition. We will refund the full order amount minus the shipping costs for the return.

In the event that your order arrives damaged, please email us as soon as possible at **info.byvelvetstore@gmail.com** with your order number and a photo of the item's condition.

---

## Contact

**info.byvelvetstore@gmail.com** · +965 94990393`,
  },

  "privacy-policy": {
    title: "Privacy Policy",
    lastUpdated: "October 18, 2023",
    content: `This Privacy Policy describes how **By Velvet** (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from byvelvet.store.

---

## How We Collect Your Personal Information

### Information You Give Us Directly
- Basic contact details: name, address, phone number, email
- Order information: billing/shipping address, payment confirmation
- Account information: username, password, security questions
- Shopping information: items viewed, cart contents, wishlist
- Customer support communications

### Information Collected Automatically (Cookies)
We use cookies, pixels, and similar technologies to collect usage data — including device information, browser type, IP address, and interaction data — to improve our services.

### Information from Third Parties
- **Shopify** — our e-commerce platform
- **MyFatoorah** — our payment processor
- Analytics and advertising partners

---

## How We Use Your Information

- **Fulfillment** — processing payments, shipping orders, managing returns
- **Marketing** — sending promotional emails and tailored advertisements
- **Security** — detecting and preventing fraud
- **Support** — responding to your inquiries

---

## Cookies

We use cookies to power our store and improve your experience. You can disable cookies through your browser settings, though this may affect certain site features.

> By using our website, you agree to allow third parties to process your IP address to determine your location for currency conversion purposes.

---

## Your Rights

Depending on your location, you may have the right to:

- **Access** personal information we hold about you
- **Delete** your personal information
- **Correct** inaccurate information
- **Portability** — receive a copy of your data
- **Restrict** or **withdraw consent** for processing
- **Appeal** decisions we make about your data requests

To exercise any right, contact us at **info.byvelvetstore@gmail.com**.

---

## Children's Data

The Services are not intended for children. We do not knowingly collect personal information from anyone under 16.

---

## Contact

By Velvet · Rashed Boresli Street, Block 1, 72255 Abdullah al-Salem, Kuwait
**info.byvelvetstore@gmail.com** · +965 94990393`,
  },

  "terms-of-service": {
    title: "Terms of Service",
    content: `## Overview

This website is operated by **By Velvet**. By visiting our site and/or purchasing something from us, you agree to be bound by the following Terms of Service. Please read them carefully.

Our store is hosted on **Shopify Inc.**

---

## Section 1 — Online Store Terms

By using the site you confirm that you are of legal age in your jurisdiction. You may not use our products for any illegal purpose or violate any laws.

---

## Section 2 — General Conditions

We reserve the right to refuse service to anyone at any time. You agree not to reproduce, duplicate, copy, sell, or exploit any portion of the Service without our express written permission.

---

## Section 3 — Accuracy of Information

We are not responsible if information on this site is not accurate, complete, or current. We reserve the right to modify site contents at any time.

---

## Section 4 — Modifications to Service & Prices

Prices are subject to change without notice. We may modify or discontinue the Service at any time without liability to you or any third party.

---

## Section 5 — Products & Services

Products may have limited quantities. We have made every effort to display colors and images accurately, but cannot guarantee monitor accuracy.

---

## Section 6 — Billing & Account Information

We reserve the right to refuse or cancel any order. You agree to provide current, complete, and accurate purchase information.

---

## Section 12 — Prohibited Uses

You are prohibited from using the site for any unlawful purpose, to infringe intellectual property rights, to transmit malicious code, or to harass or discriminate against any person.

---

## Section 13 — Disclaimer of Warranties

The Service is provided "as is" and "as available" without warranties of any kind. In no case shall By Velvet be liable for any indirect, incidental, or consequential damages.

---

## Section 14 — Indemnification

You agree to indemnify and hold harmless By Velvet and its affiliates from any claims arising from your breach of these Terms.

---

## Section 18 — Governing Law

These Terms shall be governed by and construed in accordance with the **laws of Kuwait**.

---

## Section 20 — Contact Information

**By Velvet Store**
info.byvelvetstore@gmail.com
Rashed Boresli Street, Block 1, 72255 Abdullah al-Salem, Kuwait
+965 94990393
Business Registration: Kuwait 2021/23558 · VAT: 455934`,
  },
};

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const policy = policies[params.slug];
  if (!policy) notFound();

  // Render markdown-like content
  const renderContent = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="font-serif text-2xl text-charcoal mt-10 mb-4 first:mt-0">
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={i} className="font-serif text-lg text-charcoal mt-6 mb-2">
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={i}
            className="border-l-2 border-velvet-400 pl-4 my-4 text-warm-gray italic text-sm"
          >
            {line.slice(2)}
          </blockquote>
        );
      }
      if (line.startsWith("---")) {
        return <hr key={i} className="border-charcoal/10 my-6" />;
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="ml-4 text-charcoal/80 text-sm leading-relaxed list-disc">
            {line.slice(2)}
          </li>
        );
      }
      if (line.startsWith("|")) {
        // Simple table row
        const cells = line.split("|").filter(Boolean);
        const isHeader = lines[i + 1]?.startsWith("|---");
        const isSeparator = line.includes("---");
        if (isSeparator) return null;
        return (
          <tr key={i} className={isHeader ? "bg-charcoal/5" : "border-b border-charcoal/5"}>
            {cells.map((cell, j) => (
              isHeader
                ? <th key={j} className="text-left text-xs tracking-widest uppercase py-2 px-3 font-medium text-charcoal">{cell.trim()}</th>
                : <td key={j} className="text-sm py-2 px-3 text-charcoal/80">{cell.trim()}</td>
            ))}
          </tr>
        );
      }
      if (line.trim() === "") {
        return <div key={i} className="h-2" />;
      }

      // Inline bold: **text**
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-charcoal/80 text-sm leading-relaxed">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-charcoal font-medium">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  // Wrap table rows in a table
  const processedContent = (text: string) => {
    const blocks: React.ReactNode[] = [];
    const lines = text.split("\n");
    let tableLines: string[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      if (line.startsWith("|")) {
        tableLines.push(line);
        i++;
      } else {
        if (tableLines.length > 0) {
          const rows = tableLines.filter((l) => !l.includes("---"));
          blocks.push(
            <div key={`table-${i}`} className="overflow-x-auto my-6">
              <table className="w-full border border-charcoal/10">
                <thead>
                  <tr className="bg-charcoal/5">
                    {rows[0]
                      .split("|")
                      .filter(Boolean)
                      .map((cell, j) => (
                        <th
                          key={j}
                          className="text-left text-xs tracking-widest uppercase py-2.5 px-4 font-medium text-charcoal border-b border-charcoal/10"
                        >
                          {cell.trim()}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.slice(1).map((row, ri) => (
                    <tr key={ri} className="border-b border-charcoal/5">
                      {row
                        .split("|")
                        .filter(Boolean)
                        .map((cell, j) => (
                          <td key={j} className="text-sm py-2.5 px-4 text-charcoal/80">
                            {cell.trim()}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          tableLines = [];
        }
        blocks.push(<span key={i}>{renderContent(line)}</span>);
        i++;
      }
    }
    return blocks;
  };

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/policies"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All Policies
        </Link>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-2">
          {policy.title}
        </h1>
        {policy.lastUpdated && (
          <p className="text-warm-gray text-xs tracking-wide mb-10">
            Last updated: {policy.lastUpdated}
          </p>
        )}

        <hr className="border-charcoal/10 mb-10" />

        {/* Content */}
        <div className="prose-custom space-y-1">
          {processedContent(policy.content)}
        </div>

        {/* Contact footer */}
        <div className="mt-16 pt-8 border-t border-charcoal/10 text-sm text-warm-gray">
          <p>
            Questions about this policy?{" "}
            <a
              href="mailto:info.byvelvetstore@gmail.com"
              className="text-charcoal underline underline-offset-4"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
