# Repository guide

## Purpose

This is Abhishek Guha's personal website: an engineering portfolio and publication about backend systems, distributed systems, AI engineering, physics, and endurance. Preserve a personal, thoughtful voice and prioritize concrete work over generic claims.

## Stack and structure

- Astro 6 with static output, TypeScript, and locally hosted Atkinson fonts.
- `src/pages/` defines routes. Preserve existing `/blog/` and article URLs.
- `src/content/blog/` contains Markdown articles; `src/content.config.ts` defines their schema.
- MDX is installed, but the collection loader currently only includes `.md`. Update the loader deliberately if interactive MDX articles are introduced.
- `src/components/` holds shared UI; `src/layouts/` holds shared page and article layouts.
- `src/styles/global.css` owns design tokens, base typography, and shared primitives.
- `public/` contains public assets. Do not edit generated `dist/`, `.astro/`, or `node_modules/`.
- Deployment is documented as GitHub to Cloudflare Pages. Build command: `npm run build`; output: `dist`.

## Design direction

- Modern editorial minimalism: a calm, muted sage-gray light background, charcoal text, restrained green accents, expressive serif headings, and readable sans-serif body text. The user prefers a soothing light theme with less white; preserve that preference.
- Align navigation, page content, and footer to one responsive grid. Keep articles narrower than the homepage.
- Prefer original SVG diagrams, real screenshots, and useful visual explanations over stock imagery or decorative effects.
- Make mobile layouts intentional. Verify at 390px and 768px, plus desktop; check 320px for overflow.
- Use theme-aware tokens, visible keyboard focus, semantic landmarks, a skip link, and reduced-motion support.
- Keep JavaScript small. Content, links, and navigation should remain usable without JavaScript; optional enhancements may require it.
- All controls must work. Do not add fake filters, inactive buttons, invented social links, or unavailable downloads.

## Content integrity

- Never invent employers, job dates, client work, metrics, credentials, testimonials, project status, or contact details.
- Treat ideas in `docs/content-roadmap.md` as proposals, not completed work or publication-ready claims.
- Preserve article meaning during design work. Substantive editorial changes belong in a separate, intentional task.
- Prefer real evidence: architecture diagrams, reproducible examples, documented decisions, and verified outcomes.
- Empty states should explain what is available and point to a useful existing destination.

## Working conventions

- Check `git status --short` before editing and preserve unrelated user changes.
- Reuse shared components and content collections; avoid hardcoding article lists or duplicating page shells.
- Prefer existing dependencies and local assets. A visual redesign does not require a framework migration.
- Do not commit, push, or deploy unless authorized by the user.
- See `docs/content-roadmap.md` for work beyond the visual redesign.

## Validation

- Run `npm run build` after meaningful code changes.
- Preview with `npm run dev -- --host 127.0.0.1` or `npm run preview -- --host 127.0.0.1`.
- Review the homepage, writing index, both article pages, About, Projects, Resume, and 404.
- Verify mobile navigation, theme persistence, keyboard focus, internal links, readable code blocks, and absence of horizontal overflow.
- Capture representative desktop and phone screenshots. Keep temporary browser profiles and audit scripts outside source directories.
- There is no configured automated test suite or Astro check command. Do not claim either ran; use build and browser checks, adding focused tests only for meaningful logic.
