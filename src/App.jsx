import { About } from './components/About'
import { Contact } from './components/Contact'
import { FeaturedProject } from './components/FeaturedProject'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MoreWork } from './components/MoreWork'
import { Resume } from './components/Resume'
import { profile } from './data/content'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to work
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <MoreWork />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t border-line py-8">
        <div className="shell flex flex-col justify-between gap-3 sm:flex-row">
          {/* Pre-rendered at build time; the year may tick over before the next deploy. */}
          <p className="eyebrow" suppressHydrationWarning>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="eyebrow inline-flex min-h-11 items-center transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
