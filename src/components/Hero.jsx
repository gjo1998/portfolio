import { ArrowDownRight, Download } from 'lucide-react'
import { featuredProject, heroStats, profile } from '../data/content'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="top" className="relative pb-20 pt-32 sm:pb-28 sm:pt-44">
      <div className="shell">
        <Reveal onMount className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
            Available for new projects
          </span>
          <span className="eyebrow">{profile.location}</span>
        </Reveal>

        <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Reveal onMount delay={0.08} as="h1" className="display text-[clamp(3.25rem,9vw,8.5rem)]">
              I build web products
              <br />
              that feel <em className="text-accent">effortless.</em>
            </Reveal>

            <Reveal onMount delay={0.18} className="mt-10 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              <p>
                I&rsquo;m {profile.name}, a frontend &amp; full stack developer. For four years I&rsquo;ve
                shipped fast, maintainable Angular and React apps backed by Node.js and SQL, for product teams
                and for clients like{' '}
                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-text"
                >
                  {featuredProject.name}
                </a>
                .
              </p>
            </Reveal>

            <Reveal onMount delay={0.26} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                View selected work
                <ArrowDownRight size={16} />
              </a>
              <a href={profile.resume} download className="btn-ghost">
                <Download size={15} />
                Résumé
              </a>
            </Reveal>
          </div>

          <Reveal onMount delay={0.3} className="lg:col-span-3">
            <figure className="relative mx-auto max-w-[260px] lg:ml-auto lg:mr-0">
              <div className="overflow-hidden rounded-[28px] border border-line bg-surface">
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width="520"
                  height="640"
                  className="aspect-[4/5] w-full object-cover grayscale-[35%] transition duration-700 hover:grayscale-0"
                />
              </div>
              <figcaption className="eyebrow mt-3 flex justify-between gap-4">
                <span>{profile.name}</span>
                <span>Since 2022</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal onMount delay={0.36} className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-page p-6 sm:p-8">
              <p className="display text-4xl sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
