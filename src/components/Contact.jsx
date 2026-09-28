import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, FileText, Phone } from 'lucide-react'
import { formspreeEndpoint, mailtoUrl, profile, socialLinks } from '../data/content'
import { ContactForm } from './ContactForm'
import { Reveal, SectionLabel } from './Reveal'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the mailto link still works.
    }
  }

  return (
    <button type="button" onClick={copy} className="btn-ghost min-h-11 px-4 py-2">
      {copied ? <Check size={14} className="text-status" /> : <Copy size={14} />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  )
}

const telHref = `tel:${profile.phone.replace(/\s/g, '')}`

// With hidePhoneNumber on, the number is left out of the pre-rendered HTML and shown only on request.
function PhoneLink() {
  const [shown, setShown] = useState(!profile.hidePhoneNumber)

  if (!shown) {
    return (
      <button type="button" onClick={() => setShown(true)} className="inline-flex min-h-11 items-center gap-2 text-text">
        <Phone size={14} aria-hidden="true" />
        <span className="link-underline">Show number</span>
      </button>
    )
  }

  return (
    <a href={telHref} className="inline-flex min-h-11 items-center">
      <span className="link-underline text-text">{profile.phone}</span>
    </a>
  )
}

export function Contact() {
  const hasForm = Boolean(formspreeEndpoint)

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
            {hasForm && (
              <>
                <div className="mt-8 max-w-xl">
                  <ContactForm />
                </div>
                <p className="eyebrow mt-12">Prefer email?</p>
              </>
            )}
            <a
              href={mailtoUrl}
              className={`group inline-flex items-center gap-3 font-display leading-tight transition-colors hover:text-accent ${
                hasForm ? 'mt-3 text-[clamp(1.5rem,5vw,2.25rem)]' : 'mt-8 text-[clamp(1.5rem,6.5vw,3rem)]'
              }`}
            >
              <span className="link-underline break-words">{profile.email}</span>
              <ArrowUpRight className="flex-none transition duration-300 group-hover:rotate-45" size={28} />
            </a>
            <div className="mt-6">
              <CopyEmailButton />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <p className="eyebrow">Elsewhere</p>
              <ul className="mt-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center"
                    >
                      <span className="link-underline text-text">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Direct</p>
              <ul className="mt-3">
                <li>
                  <PhoneLink />
                </li>
                <li className="py-2 text-muted">{profile.location}</li>
              </ul>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost mt-4 min-h-11 px-4 py-2">
                <FileText size={14} />
                View résumé
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
