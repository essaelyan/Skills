# ByVelvet — Setup Guide

## Prerequisites

Install **Node.js** (v18+) from https://nodejs.org/

## Quick Start

```bash
# Navigate to project
cd "Web Design/byvelvet"

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
byvelvet/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + fonts
│   │   ├── page.tsx          # Homepage composition
│   │   └── globals.css       # Tailwind + Google Fonts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── container-scroll-animation.tsx  # Framer Motion scroll effect
│   │   │   ├── button.tsx    # shadcn-style Button
│   │   │   └── badge.tsx     # shadcn-style Badge
│   │   ├── Navbar.tsx        # Sticky nav with dropdown + mobile menu
│   │   ├── Hero.tsx          # Full-screen hero with ContainerScroll
│   │   ├── Marquee.tsx       # Animated text ticker
│   │   ├── Collections.tsx   # Asymmetric image grid
│   │   ├── FeaturedProducts.tsx  # Product cards with wishlist
│   │   ├── Lookbook.tsx      # Editorial image + stats
│   │   ├── Testimonials.tsx  # Reviews + trust badges
│   │   ├── Newsletter.tsx    # Email signup
│   │   └── Footer.tsx        # Links, social, payments
│   └── lib/
│       └── utils.ts          # cn() helper
├── tailwind.config.ts        # Custom velvet color palette
├── next.config.ts            # Image domains (Unsplash)
├── components.json           # shadcn config
└── package.json
```

## Adding shadcn Components

The project is pre-configured for shadcn. Add components with:

```bash
npx shadcn@latest add <component-name>
# Example: npx shadcn@latest add dialog
```

Components land in `src/components/ui/` — the standard shadcn path.

## Key Design Decisions

| Element | Choice |
|---|---|
| Primary font | Playfair Display (serif, luxury feel) |
| Body font | Inter (clean, readable) |
| Brand palette | Velvet (warm browns 50–950) + Charcoal + Cream |
| Animation library | Framer Motion |
| Hero effect | ContainerScroll (3D perspective on scroll) |
| Images | Unsplash stock (real fashion photography) |
