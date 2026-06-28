# Sharp Vision — Premium Optical Store Landing Page

A modern, luxury landing page for Sharp Vision optical store, built with React + Vite + TypeScript + Tailwind CSS.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **shadcn/ui** components
- **Lucide React** icons
- **next-themes** (dark mode)
- **Embla Carousel** (testimonials)

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Install & Run Locally

```bash
# Install dependencies
npm install
# or
pnpm install

# Start dev server (http://localhost:5173)
npm run dev
# or
pnpm dev
```

### Build for Production

```bash
npm run build
# Output goes to ./dist
```

### Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2 — Vercel Dashboard

1. Push this project to a GitHub/GitLab/Bitbucket repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

The included `vercel.json` handles SPA client-side routing automatically.

## Project Structure

```
src/
├── components/        # All page section components
│   ├── ui/            # shadcn/ui base components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustSection.tsx
│   ├── Collections.tsx
│   ├── Brands.tsx
│   ├── WhyChooseUs.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── Offers.tsx
│   ├── ContactSection.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── FloatingButtons.tsx
├── data/
│   └── content.ts     # All store content — edit this file to update text/data
├── pages/
│   └── Home.tsx       # Main page assembling all sections
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── App.tsx
├── main.tsx
└── index.css          # Theme + global styles
```

## Customizing Content

All store-specific content (branches, brands, reviews, collections, offers) lives in:

```
src/data/content.ts
```

Edit that file to update store details without touching any component code.

## Color Palette

| Role    | Value      |
|---------|------------|
| Primary | `#F97316` (orange) |
| Secondary | `#0F172A` (navy) |
| Background | `#F8FAFC` (light gray) |
