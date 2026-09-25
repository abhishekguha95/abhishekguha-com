# abhishekguha.com

Abhishek Guha's personal website, built with Astro. An editorial home for writing about backend engineering, distributed systems, AI, physics, and endurance.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Astro serves the development site at http://localhost:4321 by default.

```sh
npm run build
npm run preview
```

Production output is generated in `dist/`. Cloudflare Pages uses `npm run build` and the `dist` output directory.

## Structure

- `src/pages/` — homepage, writing, projects, resume, About, and 404 routes.
- `src/content/blog/` — Markdown articles with validated title, description, date, and tags.
- `src/layouts/SiteLayout.astro` — shared document shell and navigation.
- `src/layouts/BlogLayout.astro` — article typography, metadata, and contents navigation.
- `src/components/` — reusable cards, navigation, footer, and original SVG illustrations.
- `src/styles/global.css` — light/dark design tokens and shared styles.
- `src/utils/readingTime.ts` — reading-time estimate excluding comments and fenced code.

## Design and content

The design uses muted sage-gray surfaces, green accents, local fonts, serif headlines, and original SVG artwork. Theme preference persists locally. Mobile navigation works without JavaScript; theme switching and responsive contents defaults are small progressive enhancements.

Existing article URLs are retained. Projects and Resume have intentional empty states until verified content is available.

See [AGENTS.md](AGENTS.md) for repository conventions and validation guidance, and [the content roadmap](docs/content-roadmap.md) for planned articles, case studies, and experience content.

## Validation

Run a production build and review key pages on desktop and mobile. Check navigation, theme persistence, contents anchors, keyboard access, and horizontal overflow. There is no configured automated test suite.
