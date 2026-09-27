import { ArrowUpRight } from 'lucide-react'
import { featuredProject as project } from '../data/content'
import { BrowserFrame } from './BrowserFrame'
import { Reveal, SectionLabel } from './Reveal'

const meta = [
  { label: 'Client', value: project.kind },
  { label: 'Role', value: project.role },
  { label: 'Year', value: project.year },
]

export function FeaturedProject() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionLabel index="01">Selected work</SectionLabel>
          <span className="eyebrow">Featured case study</span>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <img
                src={project.logo}
                alt=""
                width="56"
                height="56"
                className="h-14 w-14 rounded-2xl border border-line bg-white object-contain p-1.5"
              />
              <h2 className="display text-[clamp(3.5rem,8vw,7rem)]">{project.name}</h2>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{project.summary}</p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-end lg:col-span-5">
            <dl className="divide-y divide-line border-y border-line">
              {meta.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className="text-right text-sm text-text">{item.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center justify-between gap-4 rounded-full border border-line-strong py-2 pl-6 pr-2 transition hover:border-accent"
            >
              <span className="text-sm">Visit {project.domain}</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-ink transition duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={48} className="mt-16">
          <BrowserFrame
            {...project.images.home}
            sizes="(min-width: 1280px) 1184px, 100vw"
            domain={project.domain}
            href={project.url}
          />
        </Reveal>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {project.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.08 * index} className="bg-page p-7 sm:p-9">
              <p className="font-mono text-xs text-accent">0{index + 1}</p>
              <h3 className="mt-6 font-display text-3xl">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{pillar.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Booking experience</p>
            <h3 className="display mt-5 text-5xl sm:text-6xl">
              A small step, <em className="text-accent">made gentle.</em>
            </h3>
            <p className="mt-6 leading-relaxed text-muted">
              People booking counselling are often anxious. The flow is designed to remove friction and doubt
              at every step.
            </p>
            <ul className="mt-8 space-y-4">
              {project.bookingNotes.map((note) => (
                <li key={note} className="flex gap-4 text-sm leading-relaxed text-muted sm:text-base">
                  <span className="mt-2.5 h-px w-5 flex-none bg-accent" />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12} y={48} className="lg:col-span-7">
            <BrowserFrame
              {...project.images.booking}
              sizes="(min-width: 1024px) 58vw, 100vw"
              domain={`${project.domain}/book`}
              href={`${project.url}/book`}
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-2">Built with</span>
          {project.stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
