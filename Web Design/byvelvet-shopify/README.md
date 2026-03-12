# ByVelvet Shopify Theme — Installation Guide

This folder contains custom overlay files for the **Dawn** Shopify theme.
Drop these into a Dawn download and upload to Shopify.

---

## Step 1 — Download Dawn

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **"Visit Theme Store"**
3. Search for **Dawn** (free, by Shopify)
4. Click **Add** → it will appear in your theme library
5. Click **Actions → Download theme file** (or use Shopify CLI)

---

## Step 2 — Merge Files

Copy the following folders into the Dawn theme ZIP, replacing any existing files:

```
assets/byvelvet.css          → dawn/assets/
assets/byvelvet.js           → dawn/assets/
sections/byvelvet-hero.liquid           → dawn/sections/
sections/byvelvet-marquee.liquid        → dawn/sections/
sections/byvelvet-featured-products.liquid → dawn/sections/
sections/byvelvet-testimonials.liquid   → dawn/sections/
sections/byvelvet-newsletter.liquid     → dawn/sections/
templates/index.json         → dawn/templates/   (REPLACE existing)
config/settings_schema.json  → dawn/config/      (REPLACE existing)
```

---

## Step 3 — Upload to Shopify

1. **Shopify Admin → Online Store → Themes**
2. **Add theme → Upload ZIP file**
3. Select your merged Dawn ZIP
4. Click **Publish** to make it live

---

## Step 4 — Configure in Theme Editor

Open **Customize** in Shopify Admin:

### Header (Dawn built-in)
- Set logo to **BY VELVET** text or upload logo PNG with transparent background
- Announcement bar: "Free Shipping Over 150 KWD"
- Color scheme: Dark

### Hero Section
- Upload a hero fashion image
- Edit heading, subtitle, button links

### Featured Products
- Select a **collection** to show real products
- Products are filtered by their **tags**: `dresses`, `t-shirts`, `national-day-collection`, `bags`, `winter-collection`, `kids`
- Leave blank to show demo products while setting up

### Footer (Dawn built-in)
- Add shop links, policies links, social icons
- Payment icons: VISA, MC, AMEX, MyFatoorah

---

## Step 5 — Policy Pages

Shopify handles policy pages natively:

1. **Shopify Admin → Settings → Policies**
2. Paste text for:
   - Refund policy
   - Privacy policy
   - Terms of service
   - Shipping policy
3. They auto-generate at `/policies/refund-policy`, etc.

---

## Step 6 — Product Tags for Filtering

For the category filter tabs to work, tag your products in Shopify with:

| Category | Shopify Tag |
|---|---|
| Dresses | `dresses` |
| T-Shirts | `t-shirts` |
| National Day | `national-day-collection` |
| Bags | `bags` |
| Winter Collection | `winter-collection` |
| Kids | `kids` |

---

## Color Reference

| Token | Hex |
|---|---|
| Cream | `#FAF9F6` |
| Charcoal | `#1A1A1A` |
| Velvet accent | `#644f46` |
| Warm gray | `#8B8680` |

---

## Files Overview

| File | Purpose |
|---|---|
| `assets/byvelvet.css` | All ByVelvet styles, tokens, animations |
| `assets/byvelvet.js` | Filter tabs, scroll reveal, wishlist, newsletter |
| `sections/byvelvet-hero.liquid` | Full-screen hero with 3D card |
| `sections/byvelvet-marquee.liquid` | Scrolling ticker banner |
| `sections/byvelvet-featured-products.liquid` | Product grid with category tabs |
| `sections/byvelvet-testimonials.liquid` | Reviews + trust badges |
| `sections/byvelvet-newsletter.liquid` | Email capture form |
| `templates/index.json` | Home page section layout |
| `config/settings_schema.json` | Brand color + font settings |
