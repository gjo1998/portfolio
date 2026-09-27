# George K. J — Portfolio

Personal portfolio of George K. J, frontend & full stack developer (Angular, React, Node.js) based in Kerala, India.

**Live:** https://gjo1998.github.io/portfolio/

Features a case study of [Lev Shema](https://levshema.com), a counselling centre website with an online booking flow and an admin console.

## Stack

- React 19 + Vite
- Tailwind CSS with theme tokens (light by default, with a dark theme toggle)
- Framer Motion for scroll reveals (respects `prefers-reduced-motion`)
- Self-hosted fonts via Fontsource (Instrument Serif, Inter Tight, JetBrains Mono)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint
```

All copy lives in [`src/data/content.js`](src/data/content.js). Edit it there instead of in the components.

## Deploy

Pushing to `main` builds the site and deploys it to GitHub Pages via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).
