import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { navItems, profile } from '../data/content'

export function Header({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'glass border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 sm:h-20">
        <a href="#top" className="group flex items-baseline gap-2" aria-label={`${profile.name}, back to top`}>
          <span className="font-display text-2xl italic leading-none">George</span>
          <span className="eyebrow hidden transition-colors group-hover:text-accent sm:inline">K. J</span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-2.5 py-1.5 text-[13px] text-muted transition hover:text-text sm:px-3 sm:text-sm ${
                item.label === 'Capabilities' ? 'hidden md:inline-flex' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-text"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
