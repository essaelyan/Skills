import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByVelvet — Luxury Fashion",
  description:
    "Curated luxury fashion for the modern woman. Timeless pieces crafted with intention, worn with confidence. Shop new arrivals, dresses, and accessories.",
  keywords: ["luxury fashion", "Kuwait fashion", "Middle East fashion", "women's clothing", "designer wear"],
  openGraph: {
    title: "ByVelvet — Luxury Fashion",
    description: "Curated luxury fashion for the modern woman.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
