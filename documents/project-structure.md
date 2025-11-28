# Project Documentation

## Overview
This project is a bilingual (Chinese/English) education website for Apex Education, built with Astro, TypeScript, and Tailwind CSS. It features a modern, responsive design with a focus on aesthetics and user experience.

## Project Structure

```text
src/
├── components/        # Reusable UI components
│   ├── home/          # Homepage specific components (Hero, Centers, etc.)
│   ├── pages/         # Shared page templates (HomePage, CenterPage, etc.)
│   ├── Header.astro   # Main navigation header
│   ├── Footer.astro   # Site footer
│   └── QrFloat.astro  # Floating QR code widget
├── data/              # Data modules (Single Source of Truth)
│   ├── centers.ts     # Center definitions
│   ├── courses.ts     # Course definitions
│   ├── navigation.ts  # Navigation menu structure
│   ├── posts.ts       # Blog posts data
│   └── types.ts       # TypeScript interfaces
├── layouts/           # Page layouts
│   └── BaseLayout.astro # Main layout with Header/Footer
├── pages/             # File-based routing
│   ├── [center]/      # Dynamic center routes (e.g., /ucan)
│   ├── education-info/# Blog routes
│   ├── en/            # English locale routes (mirroring zh)
│   ├── about.astro    # About page
│   └── index.astro    # Homepage
└── styles/            # Global styles
    └── global.css     # Tailwind imports and custom properties
```

## Data Structure
The project uses a data-driven approach. Content is separated from presentation in `src/data/`.

- **Types**: Defined in `src/data/types.ts`. Key interfaces include `TranslatedText`, `Course`, `Center`, `NavItem`.
- **Bilingual Support**: Most text fields use `TranslatedText` ({ zh: string, en: string }) to support easy switching between languages.
- **Courses**: Defined in `src/data/courses.ts`. Each course has a unique `id` and `slug`.
- **Centers**: Defined in `src/data/centers.ts`.

## Styling
- **Tailwind CSS**: Used for utility classes.
- **Global Variables**: Defined in `src/styles/global.css` (e.g., `--color-primary-blue`).
- **Design System**:
  - Primary Color: Blue (`#004aad`)
  - Accent Color: Red (`#d32f2f`)
  - Font: Inter / System UI

## Key Components

### CentersSection (`src/components/home/CentersSection.astro`)
Displays the three main centers. It supports 3 different design layouts (Plan A, B, C) toggleable via tabs for demonstration purposes.
- **Plan A**: Classic Cards with internal course links.
- **Plan B**: Horizontal list with side accents.
- **Plan C**: Modern grid with hover overlays.

### QrFloat (`src/components/QrFloat.astro`)
A fixed widget on the bottom right.
- **Behavior**: Open by default. Can be toggled via a chevron button.
- **Implementation**: Uses vanilla JS for state toggling and CSS transitions.

## Routing
- **i18n**: Handled by Astro's i18n routing. `zh` is the default locale (root `/`), and `en` is the secondary locale (`/en/`).
- **Dynamic Routes**:
  - `/[center]`: Center overview page.
  - `/[center]/courses/[course]`: Individual course page.
  - `/education-info/[slug]`: Blog post page.

## Development
Run `npm run dev` to start the local server.
Run `npm run build` to build for production.
