# AGENTS.md

## Project

Next.js 15 portfolio site for Zahra Maulida Kurnia (Data Scientist). Uses App Router, Sanity CMS, Tailwind CSS 4, React 19.

## Commands

- `npm run dev` — dev server with Turbopack
- `npm run build` — production build
- `npm run lint` — Biome check (linter)
- `npm run format` — Biome format (auto-fix)

Run `npm run lint` before committing. No typecheck script exists; TypeScript errors surface during `npm run build`.

## Architecture

- `src/app/(main)/` — public portfolio pages (Hero, About, Projects)
- `src/app/studio/[[...tool]]/` — Sanity Studio (mounted at `/studio`)
- `src/sanity/` — Sanity client, env config, schema types, structure
- `src/action/project.ts` — server action fetching projects via GROQ
- `src/components/` — React components (navbar, hero, about, project, bg-custom)
- `src/app/globals.css` — global styles with Tailwind

## Sanity CMS

Requires env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`. Optional: `NEXT_PUBLIC_SANITY_API_VERSION` (defaults to `2025-09-01`). Schema types defined in `src/sanity/schemaTypes/`. Only `projectType` is currently registered in the schema index.

## Tooling

- **Linter/formatter:** Biome 2.2.0 (not ESLint/Prettier). Config: `biome.json`
- **CSS:** Tailwind CSS 4 via `@tailwindcss/postcss`
- **TypeScript:** Strict mode, path alias `@/*` → `./src/*`

## Constraints

- **Jangan update versi dependencies atau tooling apapun.** Projek ini butuh update manual, jangan auto-upgrade packages.

## Gotchas

- Remote images allowed only from `images.unsplash.com` and `cdn.sanity.io` (configured in `next.config.ts`)
- Sanity client uses CDN by default (`useCdn: true`); set to `false` for ISR/tag-based revalidation
- Server actions in `src/action/` use `"use server"` directive
- Sanity Studio is client-side (`'use client'` in `sanity.config.ts`)

  ---
