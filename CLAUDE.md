# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

Requires Node >= 22.12.0. There are no tests configured.

## Architecture

This is a single-page **portfolio site** built with Astro 6, React 19, Tailwind CSS v4, and shadcn/ui.

**Page structure** (`src/pages/index.astro`): Navbar → Hero → Skills → Projects → Contact → Footer, all composed in one page with a shared `src/layouts/Layout.astro` wrapper.

**Component split**: Static/non-interactive sections are Astro components (`.astro`). The `Contact` section is a React component (`.tsx`) mounted with `client:load`. This is the pattern to follow when adding interactivity.

**Tailwind v4**: Configured via the Vite plugin (`@tailwindcss/vite`), not PostCSS. Theme tokens are defined in `src/styles/global.css` inside `@theme { }`. The `tailwind.config.mjs` exists alongside for shadcn/ui compatibility but Tailwind v4's native config is the source of truth.

**shadcn/ui**: Primitive components live in `src/components/ui/`. Use the `cn()` helper from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) when composing class names in React components.

**Path alias**: `@` resolves to `./src` (configured in `astro.config.mjs` via Vite).

**Theme**: Dark-only design. Colors are defined as CSS custom properties in `global.css` under both `@theme` (Tailwind v4 tokens) and `:root` (HSL variables for shadcn compatibility). Primary accent is purple (`hsl(271 76% 61%)`).
