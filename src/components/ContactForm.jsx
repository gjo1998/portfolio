import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { formspreeEndpoint, mailtoUrl, profile } from '../data/content'

const fields = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'message', label: 'What are you building?', type: 'textarea' },
]

// Messages say what is wrong and how to fix it.
function validate(name, value) {
  const v = value.trim()
  if (name === 'name' && !v) return 'Please enter your name so I know who to reply to.'
  if (name === 'email') {
    if (!v) return 'Please enter your email so I can reply.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'That email looks incomplete. Check it has an @ and a domain, like name@example.com.'
  }
  if (name === 'message' && v.length < 10) return 'Please add a sentence or two (at least 10 characters) about your project.'
  return ''
}

const inputClass =
  'mt-2 block w-full rounded-xl border bg-page px-4 py-3 text-text placeholder:text-faint transition focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2'

export function ContactForm() {
  const formRef = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  // Without JS the browser's own validation and a plain POST to Formspree still work.
  // Once React is running, take over validation to show friendlier inline messages.
  useEffect(() => {
    if (formRef.current) formRef.current.noValidate = true
  }, [])

  const onBlur = (event) => {
    // Heading for the submit button: submit validates everything anyway, and showing an error here
    // would push the button down mid-click so the click misses it.
    if (event.relatedTarget?.type === 'submit') return
    const { name, value } = event.target
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }))
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear an error as soon as it's fixed, but don't nag while the user is still typing.
    if (errors[name] && !validate(name, value)) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = Object.fromEntries(fields.map((f) => [f.name, validate(f.name, values[f.name])]))
    setErrors(nextErrors)
    const firstInvalid = fields.find((f) => nextErrors[f.name])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid.name}`)?.focus()
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formRef.current),
      })
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    } catch {
      // Keep everything the visitor typed so they can retry or copy it into an email.
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-6">
        <p className="flex items-center gap-2 font-display text-2xl">
          <CheckCircle2 size={22} className="text-status" aria-hidden="true" />
          Message sent. Thank you!
        </p>
        <p className="mt-2 text-muted">I&rsquo;ll reply within a day, to the email you gave.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-5 min-h-11 px-4 py-2">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} action={formspreeEndpoint} method="POST" onSubmit={onSubmit} className="space-y-5">
      {fields.map((field) => {
        const id = `contact-${field.name}`
        const error = errors[field.name]
        const shared = {
          id,
          name: field.name,
          value: values[field.name],
          onChange,
          onBlur,
          required: true,
          'aria-invalid': error ? true : undefined,
          'aria-describedby': error ? `${id}-error` : undefined,
          className: `${inputClass} ${error ? 'border-red-700 focus:border-red-700 dark:border-red-400 dark:focus:border-red-400' : 'border-line-strong'}`,
        }
        return (
          <div key={field.name}>
            <label htmlFor={id} className="text-sm font-medium text-text">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea {...shared} rows={5} minLength={10} />
            ) : (
              <input {...shared} type={field.type} autoComplete={field.autoComplete} />
            )}
            {error && (
              <p id={`${id}-error`} className="mt-2 text-sm text-red-700 dark:text-red-400">
                {error}
              </p>
            )}
          </div>
        )
      })}

      {/* Honeypot: hidden from people, filled in by bots; Formspree drops those submissions. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-red-700/40 bg-red-700/5 p-4 text-sm text-text dark:border-red-400/40">
          Sorry, the message didn&rsquo;t send. Your text is still here, so try again, or email me directly at{' '}
          <a href={mailtoUrl} className="underline">
            {profile.email}
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary min-h-11 disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
        <Send size={15} aria-hidden="true" />
      </button>
    </form>
  )
}
