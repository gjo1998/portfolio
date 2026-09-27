import { ArrowUpRight, Download } from 'lucide-react'
import { gmailComposeUrl, profile, socialLinks } from '../data/content'
import { Reveal, SectionLabel } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="section pb-16 sm:pb-20">
      <div className="shell">
        <Reveal>
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="display mt-10 text-[clamp(3.25rem,10vw,9.5rem)]">
            Have a project
            <br />
            <em className="text-accent">in mind?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="max-w-lg leading-relaxed text-muted">
              Open to full-time roles, freelance builds and long-term client work. Tell me what you&rsquo;re
              making and I&rsquo;ll reply within a day.
            </p>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 font-display text-3xl transition-colors hover:text-accent sm:text-5xl"
            >
              <span className="link-underline break-all">{profile.email}</span>
              <ArrowUpRight className="flex-none transition duration-300 group-hover:rotate-45" size={32} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <p className="eyebrow">Elsewhere</p>
              <ul className="mt-4 space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="link-underline text-text">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Direct</p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="link-underline text-text">
                    {profile.phone}
                  </a>
                </li>
                <li className="text-muted">{profile.location}</li>
              </ul>
              <a href={profile.resume} download className="btn-ghost mt-6 px-4 py-2">
                <Download size={14} />
                Résumé
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
