import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { featuredProject as project } from '../data/content'
import { BrowserFrame } from './BrowserFrame'
import { Reveal, SectionLabel } from './Reveal'

export function FeaturedProject() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <Reveal>
          <SectionLabel index="01">Selected work</SectionLabel>
          <h2 className="display mt-8 text-5xl sm:text-6xl">
            Recent <em className="text-accent">client work.</em>
          </h2>
        </Reveal>

        <Reveal as="article" delay={0.1} className="mt-12 rounded-3xl border border-line bg-surface p-4 sm:p-6 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <BrowserFrame
                {...project.images.home}
                sizes="(min-width: 1280px) 660px, (min-width: 1024px) 55vw, 100vw"
                domain={project.domain}
                href={project.url}
              />
            </div>

            <div className="px-2 sm:px-0 lg:col-span-5">
              <div className="flex items-center gap-3">
                <img
                  src={project.logo}
                  alt=""
                  width="44"
                  height="44"
                  className="h-11 w-11 rounded-xl border border-line bg-white object-contain p-1"
                />
                <p className="eyebrow">
                  {project.kind} · {project.year}
                </p>
              </div>
              <h3 className="display mt-5 text-5xl">{project.name}</h3>
              <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
              <p className="mt-4 text-sm text-text">
                <span className="text-faint">Role:</span> {project.role}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.url} target="_blank" rel="noreferrer" className="btn-primary">
                  Visit {project.domain}
                  <ArrowUpRight size={16} />
                </a>
                <a href={`${project.url}/book`} target="_blank" rel="noreferrer" className="btn-ghost">
                  Try the booking flow
                </a>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid gap-6 border-t border-line px-2 pt-6 sm:px-0 md:grid-cols-3">
            {project.pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <p className="font-mono text-xs text-accent">0{index + 1}</p>
                <h4 className="mt-2 font-display text-2xl">{pillar.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line px-2 pt-6 sm:px-0">
            <span className="eyebrow mr-2">Built with</span>
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          {/* The UX reasoning stays available without making the card long. */}
          <details className="group mt-6 border-t border-line px-2 pt-2 sm:px-0">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm text-text [&::-webkit-details-marker]:hidden">
              Design notes: making booking feel gentle for anxious visitors
              <ChevronDown size={16} className="flex-none text-faint transition group-open:rotate-180" />
            </summary>
            <ul className="mt-3 grid gap-3 pb-2 md:grid-cols-2">
              {project.bookingNotes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2.5 h-px w-4 flex-none bg-accent" />
                  {note}
                </li>
              ))}
            </ul>
          </details>
        </Reveal>
      </div>
    </section>
  )
}
