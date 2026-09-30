// Runs after `vite build` + the SSR build: bakes the rendered page into dist/index.html so the content
// is readable without JavaScript (and by crawlers), preloads the above-the-fold display font,
// and writes a matching static dist/404.html for GitHub Pages.
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
// Temporary SSR bundle lives under node_modules/.cache, which editors and indexers don't watch or lock.
const ssrDir = resolve('node_modules/.cache/prerender')
const ssrEntry = resolve(ssrDir, 'entry-server.js')

if (!existsSync(ssrEntry)) throw new Error(`Missing ${ssrEntry}; run the SSR build first.`)

const { renderApp, renderNotFound } = await import(pathToFileURL(ssrEntry).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const ROOT = '<div id="root"></div>'
if (!template.includes(ROOT)) throw new Error('index.html has no empty #root to fill.')

// Asset URLs already carry the base path (e.g. /portfolio/assets/…); reuse it for the font preload.
const base = template.match(/href="([^"]*?)assets\/index-[^"]+\.css"/)?.[1] ?? '/'
const displayFont = readdirSync(resolve(dist, 'assets')).find((f) => /^instrument-serif-latin-400-normal-.*\.woff2$/.test(f))
const preload = displayFont
  ? `<link rel="preload" href="${base}assets/${displayFont}" as="font" type="font/woff2" crossorigin />`
  : ''

const page = template
  .replace('</title>', `</title>\n    ${preload}`)
  .replace(ROOT, `<div id="root">${renderApp()}</div>`)
writeFileSync(resolve(dist, 'index.html'), page)

const notFound = template
  .replace(/<title>[^<]*<\/title>/, '<title>Page not found — George K. J</title>\n    <meta name="robots" content="noindex" />')
  .replace(/\s*<link rel="canonical"[^>]*>/, '')
  .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
  .replace(/\s*<link rel="modulepreload"[^>]*>/g, '')
  .replace(ROOT, `<div id="root">${renderNotFound()}</div>`)
writeFileSync(resolve(dist, '404.html'), notFound)

rmSync(ssrDir, { recursive: true, force: true })
console.log(`prerendered index.html and 404.html${displayFont ? ` (preloading ${displayFont})` : ''}`)
