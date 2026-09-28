import { useSyncExternalStore } from 'react'

// v2: light became the default; the old key saved "dark" for every visitor, so it is ignored.
const STORAGE_KEY = 'portfolio-theme-v2'
const THEME_COLORS = { light: '#f5f2ec', dark: '#0a0a0b' }

// The `dark` class on <html> is the source of truth: the head script sets it before first paint,
// and toggling updates it. Reading it via useSyncExternalStore keeps the pre-rendered HTML ('light')
// and hydration in agreement, then switches to the real value without a mismatch.
function subscribe(onChange) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
const getSnapshot = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')
const getServerSnapshot = () => 'light'

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleTheme = () => {
    const next = getSnapshot() === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[next])
    try {
      // Only an explicit choice is remembered, so the light default stays the default.
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }

  return { theme, toggleTheme }
}
