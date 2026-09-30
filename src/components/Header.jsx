import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { navItems, profile } from '../data/content'

const sectionIds = navItems.map((item) => item.href.slice(1))
const linkItems = navItems.filter((item) => item.href !== '#contact')

// Tracks which section sits in the middle band of the viewport, for the "you are here" nav state.
function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    const top = document.getElementById('top')
    if (top) observer.observe(top)
    return () => observer.disconnect()
  }, [])

  return active
}

export function Header({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  // True while the header sits over the dark opening (hero + About); it then takes the dark tokens too.
  const [onDark, setOnDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
      const darkEnd = document.getElementById('about')?.getBoundingClientRect().bottom ?? 0
      setOnDark(darkEnd > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  const iconButton =
    'inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-text'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${onDark ? 'tone-dark' : ''} ${
        menuOpen
          ? 'border-b border-line bg-page'
          : isScrolled
            ? 'glass border-b border-line'
            : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 sm:h-20">
        <a href="#top" className="group flex min-h-11 items-center gap-2" aria-label={`${profile.name}, back to top`}>
          <span className="font-display text-2xl italic leading-none">George</span>
          <span className="eyebrow hidden transition-colors group-hover:text-accent sm:inline">K. J</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {linkItems.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative inline-flex h-11 items-center rounded-full px-4 text-sm transition hover:text-text ${
                  isActive ? 'text-text' : 'text-muted'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 bottom-2 h-px bg-accent transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
          <a href="#contact" className="btn-primary ml-2 h-11 px-5 py-0">
            Let&rsquo;s talk
            <ArrowUpRight size={15} />
          </a>
          <button type="button" onClick={onToggleTheme} aria-label={themeLabel} className={`${iconButton} theme-toggle ml-1`}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={onToggleTheme} aria-label={themeLabel} className={`${iconButton} theme-toggle`}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={iconButton}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="shell pb-6 md:hidden">
          <ul className="border-t border-line">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === item.href.slice(1) ? 'true' : undefined}
                  className="flex min-h-14 items-center justify-between font-display text-3xl aria-[current=true]:text-accent"
                >
                  {item.label}
                  <ArrowUpRight size={18} className="text-faint" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
