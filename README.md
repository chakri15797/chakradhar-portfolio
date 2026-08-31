# Chakradhar — Portfolio

A multi-discipline portfolio and résumé built with a blueprint / engineering-sheet aesthetic. Data engineering, projects, credentials, and more — rendered as a single-page technical "blueprint" with animated counters, a scrolling tech-stack marquee, and brand-icon skill chips.

## Tech Stack

- **Next.js 15** (Pages Router) — SSR/SSG via `getStaticProps`
- **React 19**
- Custom CSS design system in `styles/globals.css` (no Tailwind / UI library)

## Getting Started

Requires Node.js. Package manager: `npm`.

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the development server                  |
| `npm run build`        | Production build (also type-checks)           |
| `npm run start`        | Serve the production build                    |
| `npm run typecheck`    | Run TypeScript type checking (`tsc --noEmit`) |
| `npm run lint`         | Run ESLint                                    |
| `npm run preview`      | Build and serve the production build locally  |

> **Windows note:** if `npm` is blocked by the PowerShell shim, use `npm.cmd` instead.

## Customizing Content

All personal data (roles, projects, stack, experience, navigation) lives inline in `pages/index.js` — edit it there. Design tokens live in `styles/globals.css`.

### Photos

- **`public/photo.jpg`** — profile photo shown in the ID card. Drop your file here; the code already falls back to an SVG placeholder if absent.
- **`public/bg.jpg`** — full-page background image.

### Tech Brand Icons

Brand SVG icons live in `public/icons/`. The stack list references them via a `SKILL_ICON(slug, name)` helper — add or replace SVG files there to change the chips/marquee.

## Project Structure

```
pages/
  _app.js        # global wrapper, background layers
  _document.js   # fonts, favicon, theme-color
  index.js       # main page & all personal content
styles/
  globals.css    # design tokens + all styling
public/
  bg.jpg         # page background
  photo.jpg      # profile photo
  icons/         # brand SVG icons
```

## License

© Chakradhar. All rights reserved.
