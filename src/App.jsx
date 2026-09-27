import { MotionConfig } from 'framer-motion'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { FeaturedProject } from './components/FeaturedProject'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MoreWork } from './components/MoreWork'
import { profile } from './data/content'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to work
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <FeaturedProject />
        <MoreWork />
        <Experience />
        <Capabilities />
        <Contact />
      </main>

      <footer className="border-t border-line py-8">
        <div className="shell flex flex-col justify-between gap-3 sm:flex-row">
          <p className="eyebrow">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="eyebrow transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </footer>
    </MotionConfig>
  )
}

export default App
