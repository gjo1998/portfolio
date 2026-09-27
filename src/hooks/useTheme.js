import { useEffect, useState } from 'react'

// v2: light became the default; the old key saved "dark" for every visitor, so it is ignored.
const STORAGE_KEY = 'portfolio-theme-v2'
const THEME_COLORS = { light: '#f5f2ec', dark: '#0a0a0b' }

function readSavedTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(readSavedTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        // Only an explicit choice is remembered, so the light default stays the default.
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Storage can be unavailable (private mode); the theme still applies for this visit.
      }
      return next
    })
  }

  return { theme, toggleTheme }
}
