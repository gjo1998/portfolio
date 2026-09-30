# George K. J — Portfolio

Personal portfolio of George K. J, frontend & full stack developer (Angular, React, Node.js) based in Kerala, India.

**Live:** https://gjo1998.github.io/portfolio/

Features a case study of [Lev Shema](https://levshema.com), a counselling centre website with an online booking flow and an admin console.

## Stack

- React 19 + Vite
- Tailwind CSS with theme tokens (light by default, with a dark theme toggle)
- Pre-rendered to static HTML at build time (`react-dom/server`, see `scripts/prerender.js`), then hydrated
- CSS scroll reveals that fail safe: content is visible without JS, in print and with reduced motion
- Self-hosted fonts via Fontsource (Instrument Serif, Inter Tight, JetBrains Mono) with metric-matched fallbacks (no layout shift)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # client build + SSR build + prerender to dist/ (also writes dist/404.html)
npm run lint
```

All copy lives in [`src/data/content.js`](src/data/content.js). Edit it there instead of in the components.
Empty fields are hidden on the site; square-bracket placeholders are shown, and `npm run dev` lists any that remain in the console.

## Deploy

Pushing to `main` builds the site and deploys it to GitHub Pages via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

## Résumé

The downloadable résumé is `public/George_K_J_Resume_2026.pdf`, generated from [`resume/resume.html`](resume/resume.html)
(open it in Chrome/Edge → Print → Save as PDF, A4, no headers/footers). If you replace the PDF with a new file,
give it a new name and update `profile.resume` in `src/data/content.js`, so browsers don't serve a cached old copy.
