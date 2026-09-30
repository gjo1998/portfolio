import { about, heroStats, mailtoUrl, profile } from '../data/content'
import { Reveal, SectionLabel } from './Reveal'

// Second "slide" of the dark opening, after the hero; the page turns to light paper after this.
export function About() {
  return (
    <section id="about" className="tone-dark section">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <SectionLabel index="01">About</SectionLabel>
          <h2 className="display mt-8 text-5xl sm:text-6xl">
            Frontend at heart, <em className="text-accent">full stack</em> in practice.
          </h2>
          <a href={mailtoUrl} className="mt-6 inline-flex min-h-11 items-center font-mono text-sm text-muted transition-colors hover:text-accent">
            <span className="link-underline">{profile.email}</span>
          </a>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
            {about.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 flex max-w-2xl gap-3 text-text sm:text-lg">
            <span aria-hidden="true" className="mt-3 h-px w-6 flex-none bg-accent" />
            {profile.specialisation}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:pt-24">
          <dl className="divide-y divide-line border-y border-line">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 py-6">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="display text-4xl sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-2 text-text">{profile.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Education</dt>
              <dd className="mt-2 text-text">B.Tech, {profile.degree.school}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
