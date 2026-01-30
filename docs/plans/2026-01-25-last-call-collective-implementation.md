# 🏗️ Implementation Plan: Last Call Collective

## Phase 1: Foundation & Design System

- [x] Configure Tailwind v4 with custom palette (Matte Charcoal, Stark White, Bone).
- [x] Set up Typography (Google Fonts: Inter Tight, JetBrains Mono).
- [x] Implement Global Grain Overlay component.
- [x] Create `SidebarBlade` component with vertical LCC logo.

## Phase 2: Navigation & The Vault

- [x] Implement `MenuVault` component (95% width slice).
- [x] Add oversized staggered links with custom hover states.
- [x] Implement mechanical spring animations for open/close.

## Phase 3: The Liquid Hero (Typographic Reveal)

- [x] Implement `HeroReveal` with `useScroll` framer-motion logic.
- [x] Stage 1: White background, central logo.
- [x] Stage 2: Logo translation to Sidebar + background dissolve.
- [x] Stage 3: Spinning Ice Cube centerpiece (using optimized video component).
- [x] Overlay text: "THE HOUSE STANDARD" and "BY THE INDUSTRY, FOR THE INDUSTRY".

## Phase 4: Asymmetric Bento & Work Section

- [x] Create `BentoGrid` component.
- [x] Implement `ParallaxBlock` wrapper for non-linear scrolling speeds.
- [x] Add "Inversion" hover effects to project blocks.

## Phase 5: Home Page Refinement (New Layout)

- [x] Reorder: Hero -> Bento -> AI Audit -> Services -> Testimonials.
- [x] Implement `AIAuditSection` (The Diagnostic).
- [x] Refine `ServicesSection` (The Foundation + Staggered Tiers).
- [x] Implement `TestimonialsSection` (Animated Snippet Boxes).

## Phase 5: Polish & Deployment

- [ ] Implement custom "Water Droplet" cursor.
- [ ] Mobile navigation dock implementation.
- [ ] Final performance audit for large assets.
