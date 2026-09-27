import { profile, services, skillGroups } from '../data/content'
import { Reveal, SectionLabel } from './Reveal'

export function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="shell">
        <Reveal>
          <SectionLabel index="03">Capabilities</SectionLabel>
          <h2 className="display mt-8 max-w-4xl text-5xl sm:text-6xl">
            From the first pixel <em className="text-accent">to the database.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.06 * index} className="bg-page p-7 transition-colors hover:bg-surface">
              <p className="font-mono text-xs text-accent">0{index + 1}</p>
              <h3 className="mt-10 font-display text-3xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={0.06 * index}>
              <h3 className="eyebrow">{group.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-text">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          <Reveal delay={0.18}>
            <h3 className="eyebrow">Languages</h3>
            <ul className="mt-5 space-y-2.5">
              {profile.languages.map((language) => (
                <li key={language} className="text-text">
                  {language}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
