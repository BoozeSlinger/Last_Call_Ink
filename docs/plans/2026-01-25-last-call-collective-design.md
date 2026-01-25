# 🥃 Design Plan: Last Call Collective Agency Website

## Overview

A high-end, custom-built digital agency website for **Last Call Collective**, tailored for the bar and nightlife industry. The design follows a **Craft Industrial** aesthetic using a monochromatic (Black, White, Bone) palette with a focus on cinematic motion and unique layout structures.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Interactions:** Custom scroll-driven reveals (Typographic Reveal)

## Visual Identity

- **Primary Color:** Matte Charcoal (`#0D0D0D`) with a film grain noise overlay.
- **Secondary Color:** Stark White (`#FFFFFF`) for high-impact typography.
- **Menu/Vault Color:** Bone White (`#F5F2E8`) with a subtle paper texture.
- **Typography:**
  - Headlines: Weighted, oversized sans-serif ("Industrial Standard").
  - Sub-text: Wide-tracked Monospace (JetBrains Mono) for a technical/stamped feel.
  - Branding: Vertical LCC Wordmark (Custom Serif).

## Key Components

### 1. The "Sidebar Blade" (Navigation)

- **State:** A vertical matte-black tab sitting on the far-left (1/10th width).
- **Trigger:** Houses the vertical LCC wordmark. Opens on click.
- **Interaction:** One-way "slice" across the screen to 95% width using a heavy spring animation.
- **Menu Vault:** Bone white background with "drunkenly staggered" oversized typography for links.
- **Close Action:** Large industrial "X" icon in the top-right.

### 2. The "Typographic Reveal" Hero

- **Sequence:**
  1. Starts with a full Stark White viewport and a centered black "LAST CALL" wordmark.
  2. On scroll, the logo scales down and translates into the Sidebar Blade.
  3. The white background dissolves to reveal a moody bar scene.
- **Centerpiece:** A cinematic, slow-spinning clear ice cube in an Old Fashioned glass (Matte/Moody lighting).
- **Overlay Text:**
  - "THE HOUSE STANDARD" (Oversized, partially behind the glass).
  - "BY THE INDUSTRY, FOR THE INDUSTRY" (Monospace seal below).

### 3. The "Asymmetric Bento" Work Section

- **Layout:** Non-linear grid with blocks of varying sizes and scroll speeds (Parallax).
- **Physics:** Negative margins allowing images to "bleed" over text and section boundaries.
- **Interaction:** Inversion hover effect (Black to White negative) for case study reveals.

## Success Criteria

- [ ] No "blocky" or "template-like" layouts.
- [ ] High-performance image/video loading.
- [ ] Mobile-optimized navigation (Sidebar collapses to a bottom dock).
- [ ] Cinematic grain and texture preserved at 60fps.
