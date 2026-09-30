import { ArrowDown, ArrowDownRight, FileText, Mail } from 'lucide-react'
import { featuredProject, mailtoUrl, profile } from '../data/content'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import { Reveal } from './Reveal'

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon, external: true },
  { label: 'Email', href: mailtoUrl, Icon: Mail, external: false },
]

// Cinematic, full-screen hero: always dark (tone-dark) in both themes. On phones the portrait sits on top
// and fades into the text below; on desktop it fills the right half behind the content.
export function Hero() {
  return (
    <section id="top" className="tone-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden lg:flex-row lg:items-center">
      <div className="hero-photo relative h-[52svh] min-h-[300px] lg:absolute lg:inset-y-0 lg:right-0 lg:-z-10 lg:h-auto lg:w-1/2">
        <img
          src={profile.photo.src}
          srcSet={profile.photo.srcSet}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt={`Portrait of ${profile.name}`}
          width="1000"
          height="1333"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[center_78%] opacity-90 saturate-[0.8] lg:object-[center_60%]"
        />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="shell relative -mt-20 pb-14 sm:pb-20 lg:mt-0 lg:py-32">
        <div className="max-w-2xl">
          <Reveal onMount>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-status" />
              Open to full-time roles
            </span>
          </Reveal>

          <Reveal onMount delay={0.06} as="h1" className="mt-8">
            <span className="eyebrow block">Hello, I&rsquo;m</span>
            <span className="display mt-3 block text-[clamp(3.5rem,15vw,9rem)] leading-[0.9]">
              George <em className="text-accent">K. J</em>
            </span>
          </Reveal>

          <Reveal onMount delay={0.12}>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">{profile.title}</p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              I build web products that feel effortless: fast, maintainable Angular and React apps backed by
              Node.js and SQL, for product teams and for clients like{' '}
              <a href={featuredProject.url} target="_blank" rel="noreferrer" className="link-underline text-text">
                {featuredProject.name}
              </a>
              .
            </p>
          </Reveal>

          <Reveal onMount delay={0.2} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View work
              <ArrowDownRight size={16} />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
              <FileText size={15} />
              Résumé
            </a>
          </Reveal>

          <Reveal onMount delay={0.28} as="ul" className="mt-12 flex items-center gap-2" aria-label="Elsewhere">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>

      <a
        href="#about"
        className="eyebrow absolute bottom-8 right-5 hidden min-h-11 items-center gap-2 transition-colors hover:text-accent sm:inline-flex sm:right-8 lg:right-12"
      >
        Scroll
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
