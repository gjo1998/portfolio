import { FileText } from 'lucide-react'
import { experiences, profile, services, skillGroups } from '../data/content'
import { Reveal, SectionLabel } from './Reveal'

// A three-column résumé panel: skills | experience timeline | what I can do.
function ColumnTitle({ children }) {
  return <h3 className="eyebrow border-b border-line pb-3">{children}</h3>
}

function TimelineItem({ year, title, org, meta, children }) {
  return (
    <li className="relative pb-10 pl-16 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-page font-mono text-[11px] text-accent"
      >
        {year}
      </span>
      <h4 className="font-display text-2xl leading-tight sm:text-3xl">{title}</h4>
      <p className="mt-1 text-accent">{org}</p>
      {/* Duration counts to today, so it can differ from the build-time HTML by a month. */}
      <p className="mt-1 font-mono text-xs text-faint" suppressHydrationWarning>
        {meta}
      </p>
      {children}
    </li>
  )
}

export function Resume() {
  const practice = skillGroups.find((group) => group.title === 'Practice')
  const technical = skillGroups.filter((group) => group !== practice)

  return (
    <section id="resume" className="section">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="03">Résumé</SectionLabel>
            <h2 className="display mt-8 text-5xl sm:text-6xl">
              Experience, skills <em className="text-accent">and craft.</em>
            </h2>
          </div>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
            <FileText size={15} />
            Full résumé (PDF)
          </a>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="space-y-10 lg:col-span-3">
            {technical.map((group) => (
              <div key={group.title}>
                <ColumnTitle>{group.title}</ColumnTitle>
                <ul className="mt-4 flex flex-wrap gap-2 lg:block lg:space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="chip lg:flex lg:rounded-none lg:border-0 lg:px-0 lg:py-0 lg:text-sm lg:text-text">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <ColumnTitle>Languages</ColumnTitle>
              <p className="mt-4 text-sm text-text">{profile.languages.join(' · ')}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <ColumnTitle>Experience</ColumnTitle>
            <ol className="relative mt-6 before:absolute before:bottom-2 before:left-[21px] before:top-2 before:w-px before:bg-line-strong">
              {experiences.map((job) => (
                <TimelineItem
                  key={job.company}
                  year={job.startYear}
                  title={job.role}
                  org={job.company}
                  meta={`${job.period} · ${job.duration}`}
                >
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 flex-none bg-line-strong" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </ol>

            <div className="mt-12">
              <ColumnTitle>Education</ColumnTitle>
              <ol className="mt-6">
                <TimelineItem
                  year={profile.degree.startYear}
                  title={profile.degree.title}
                  org={profile.degree.school}
                  meta={profile.degree.period}
                />
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="space-y-10 lg:col-span-3">
            <div>
              <ColumnTitle>What I can do</ColumnTitle>
              <ul className="mt-4 space-y-5">
                {services.map((service) => (
                  <li key={service.title}>
                    <p className="font-display text-xl">{service.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ColumnTitle>{practice.title}</ColumnTitle>
              <ul className="mt-4 flex flex-wrap gap-2">
                {practice.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
