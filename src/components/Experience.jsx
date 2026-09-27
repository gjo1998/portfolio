import { experiences, profile } from '../data/content'
import { Reveal, SectionLabel } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionLabel index="02">Experience</SectionLabel>
          <h2 className="display mt-8 text-5xl sm:text-6xl">
            Inside <em className="text-accent">product teams.</em>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            API-driven products, migrations and performance work, shipped in Agile teams where clean,
            reviewable code matters as much as the feature.
          </p>
          <p className="eyebrow mt-10">{profile.education}</p>
        </Reveal>

        <ol className="lg:col-span-8">
          {experiences.map((job, index) => (
            <Reveal as="li" key={job.company} delay={0.08 * index} className="border-t border-line py-10 first:border-t-0 first:pt-0 lg:first:pt-2">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-3xl sm:text-4xl">{job.role}</h3>
                <span className="font-mono text-xs text-faint">
                  {job.period} · {job.duration}
                </span>
              </div>
              <p className="mt-2 text-accent">{job.company}</p>
              <ul className="mt-6 space-y-3">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-4 leading-relaxed text-muted">
                    <span className="mt-3 h-px w-4 flex-none bg-line-strong" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
