import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Self-hosted, Latin-only font subsets: no render-blocking request to Google Fonts.
import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import '@fontsource/inter-tight/latin-400.css'
import '@fontsource/inter-tight/latin-500.css'
import '@fontsource/inter-tight/latin-600.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production HTML is pre-rendered (scripts/prerender.js), so hydrate it; the dev server starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

// Tells the head script's safety timer that JS is running, so reveal animations can stay enabled.
window.__portfolioReady = true

if (import.meta.env.DEV) {
  // List square-bracket placeholders (e.g. a bracketed capital letter) still left in content.js, so they don't reach the live site.
  import('./data/content.js').then((content) => {
    const found = []
    const walk = (value, path) => {
      if (typeof value === 'string' && /\[[A-Z]\]/.test(value)) found.push(`${path}: ${value}`)
      else if (value && typeof value === 'object') Object.entries(value).forEach(([k, v]) => walk(v, `${path}.${k}`))
    }
    Object.entries(content).forEach(([k, v]) => walk(v, k))
    if (found.length) console.warn(`content.js still has ${found.length} placeholder(s):\n${found.join('\n')}`)
  })
}
