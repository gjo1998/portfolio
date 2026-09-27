import { ArrowDownRight, FileText } from 'lucide-react'
import { featuredProject, heroStats, profile } from '../data/content'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="top" className="relative pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-36">
      <div className="shell">
        <Reveal onMount className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-status" />
            Available for new projects
          </span>
          <span className="eyebrow">{profile.location}</span>
        </Reveal>

        <div className="mt-10 grid items-end gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8 lg:col-span-9">
            <Reveal onMount delay={0.08} as="h1" className="display text-[clamp(2.75rem,11vw,3.5rem)] md:text-[7vw] lg:text-[clamp(4.5rem,min(7.2vw,12.5vh),6.25rem)]">
              I build web products
              <br />
              that feel <em className="text-accent">effortless.</em>
            </Reveal>

            <Reveal onMount delay={0.18} className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:mt-10 sm:text-xl">
              <p>
                I&rsquo;m {profile.name}, a frontend &amp; full stack developer. I ship fast, maintainable
                Angular and React apps backed by Node.js and SQL, for product teams and for clients like{' '}
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
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
                <FileText size={15} />
                View résumé
              </a>
            </Reveal>
          </div>

          <Reveal onMount delay={0.3} className="md:col-span-4 lg:col-span-3">
            {/* Compact and left-aligned on phones so it doesn't push the stats a full screen down. */}
            <figure className="relative max-w-[200px] md:ml-auto md:max-w-[260px]">
              <div className="overflow-hidden rounded-[28px] border border-line bg-surface">
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width="520"
                  height="693"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="eyebrow mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1">
                <span className="whitespace-nowrap">{profile.name}</span>
                <span className="whitespace-nowrap">Since 2022</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal onMount delay={0.36} className="mt-14 grid gap-px sm:mt-20 overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-page p-6 lg:p-8">
              <p className="display text-4xl lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
