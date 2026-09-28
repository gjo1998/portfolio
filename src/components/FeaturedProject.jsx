import { ArrowUpRight, ChevronDown, Quote } from 'lucide-react'
import { featuredProject as project } from '../data/content'
import { BrowserFrame } from './BrowserFrame'
import { Reveal, SectionLabel } from './Reveal'

// Content fields left empty in content.js are "not filled in yet" and are not rendered.
const filled = (value) => (typeof value === 'string' ? value.trim() !== '' : Boolean(value))

function CaseBlock({ title, children }) {
  return (
    <div className="grid gap-3 border-t border-line py-6 md:grid-cols-12 md:gap-8">
      <h4 className="eyebrow md:col-span-3 md:pt-1">{title}</h4>
      <div className="md:col-span-9">{children}</div>
    </div>
  )
}

function Figure({ image, className = '' }) {
  return (
    <figure className={className}>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="w-full rounded-xl border border-line bg-surface-2"
      />
      {filled(image.caption) && <figcaption className="mt-2 text-sm text-faint">{image.caption}</figcaption>}
    </figure>
  )
}

export function FeaturedProject() {
  const study = project.caseStudy
  const outcomes = study.outcomes.filter((o) => filled(o.value))
  const constraints = study.constraints.filter((c) => filled(c.value))
  const steps = study.process.steps.filter((s) => filled(s.text))

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
                  loading="lazy"
                  decoding="async"
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

          {outcomes.length > 0 && (
            <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((outcome) => (
                <div key={outcome.label} className="flex flex-col-reverse gap-2 bg-page p-5 sm:p-6">
                  <dt className="text-sm text-muted">{outcome.label}</dt>
                  <dd className="display text-4xl text-accent">{outcome.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {filled(study.testimonial.quote) && (
            <figure className="mt-8 rounded-2xl bg-page p-6 sm:p-8">
              <Quote size={20} className="text-accent" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              {filled(study.testimonial.name) && (
                <figcaption className="mt-4 text-sm text-muted">
                  <span className="text-text">{study.testimonial.name}</span>
                  {filled(study.testimonial.role) && <>, {study.testimonial.role}</>}
                </figcaption>
              )}
            </figure>
          )}

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

          {/* The full story stays in the pre-rendered HTML for crawlers and no-JS readers, without making the card long. */}
          <details className="group mt-6 border-t border-line px-2 pt-2 sm:px-0">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium text-text [&::-webkit-details-marker]:hidden">
              Read the full case study
              <ChevronDown size={18} className="flex-none text-faint transition group-open:rotate-180" />
            </summary>

            <div className="mt-4">
              {filled(study.problem) && (
                <CaseBlock title="The problem">
                  <p className="max-w-3xl leading-relaxed text-muted">{study.problem}</p>
                </CaseBlock>
              )}

              {constraints.length > 0 && (
                <CaseBlock title="My role & constraints">
                  <dl className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <dt className="text-sm text-faint">Role</dt>
                      <dd className="mt-1 text-text">{project.role}</dd>
                    </div>
                    {constraints.map((c) => (
                      <div key={c.label}>
                        <dt className="text-sm text-faint">{c.label}</dt>
                        <dd className="mt-1 text-text">{c.value}</dd>
                      </div>
                    ))}
                  </dl>
                </CaseBlock>
              )}

              <CaseBlock title="Process">
                {steps.length > 0 && (
                  <ol className="mb-6 grid gap-5 md:grid-cols-3">
                    {steps.map((step, index) => (
                      <li key={step.title}>
                        <p className="font-mono text-xs text-accent">0{index + 1}</p>
                        <p className="mt-1 font-display text-xl">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                )}
                {study.process.images.length > 0 && (
                  <div className="mb-6 grid gap-4 sm:grid-cols-2">
                    {study.process.images.map((image) => (
                      <Figure key={image.src} image={image} />
                    ))}
                  </div>
                )}
                <p className="text-sm font-medium text-text">Booking flow: designed for anxious first-time visitors</p>
                <ul className="mt-3 grid gap-3 md:grid-cols-2">
                  {study.bookingNotes.map((note) => (
                    <li key={note} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2.5 h-px w-4 flex-none bg-accent" />
                      {note}
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              {project.images.admin && (
                <CaseBlock title="Admin console">
                  <Figure image={project.images.admin} />
                </CaseBlock>
              )}

              {filled(study.next) && (
                <CaseBlock title="What I’d do next">
                  <p className="max-w-3xl leading-relaxed text-muted">{study.next}</p>
                </CaseBlock>
              )}
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  )
}
