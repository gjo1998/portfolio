import { ArrowLeft } from 'lucide-react'
import { profile } from './data/content'

// Rendered to static HTML as dist/404.html at build time; GitHub Pages serves it for unknown paths.
export function NotFound() {
  const home = import.meta.env.BASE_URL

  return (
    <main className="shell flex min-h-screen flex-col justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-6 text-[clamp(3rem,10vw,7rem)]">
        This page <em className="text-accent">wandered off.</em>
      </h1>
      <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
        The link may be old or mistyped. Everything I&rsquo;ve built is on the home page.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={home} className="btn-primary">
          <ArrowLeft size={16} />
          Back to {profile.name}
        </a>
        <a href={`${home}#contact`} className="btn-ghost">
          Get in touch
        </a>
      </div>
    </main>
  )
}
