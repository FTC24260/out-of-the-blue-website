import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { CONTACT, TEAM } from '../data/site'

const ROLES = ['Student', 'Parent', 'Sponsor', 'Mentor']

const EMPTY = { name: '', email: '', role: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.role) errors.role = 'Please choose one.'
  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail, please (10+ characters).'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    // Clear the field error as the user fixes it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('submitting')

    const endpoint = CONTACT.formEndpoint

    // DEMO mode — no endpoint configured. Simulate a successful send so the
    // success state is fully demonstrable. TODO: set VITE_CONTACT_ENDPOINT.
    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 700))
      setStatus('success')
      setValues(EMPTY)
      return
    }

    try {
      // Supports both Web3Forms (access key) and Formspree (full URL).
      const isUrl = endpoint.includes('://')
      const url = isUrl ? endpoint : 'https://api.web3forms.com/submit'
      const payload = {
        name: values.name,
        email: values.email,
        role: values.role,
        message: values.message,
        subject: `New message from ${values.name} (${values.role}) — FTC #${TEAM.number}`,
        ...(isUrl ? {} : { access_key: endpoint }),
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        setValues(EMPTY)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const mapQuery = encodeURIComponent(
    `${TEAM.meeting.venue}, ${TEAM.meeting.address}`,
  )

  return (
    <section id="contact" className="section bg-cloud">
      <div className="container-x">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Questions about joining, mentoring, or sponsoring? Send us a note — we'd love to hear from you."
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <div className="reveal card">
            {status === 'success' ? (
              <div
                className="flex h-full flex-col items-center justify-center py-10 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  size={56}
                  className="text-azure"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-2xl font-bold text-deep">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-ink/75">
                  Thanks for reaching out — we'll get back to you as soon as we
                  can. {!CONTACT.formEndpoint && '(Demo mode: nothing was actually sent.)'}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <Field
                  id="name"
                  label="Name"
                  error={errors.name}
                  value={values.name}
                  onChange={update('name')}
                  autoComplete="name"
                  placeholder="Your name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  error={errors.email}
                  value={values.email}
                  onChange={update('email')}
                  autoComplete="email"
                  placeholder="you@example.com"
                />

                {/* Role dropdown */}
                <div className="mb-4">
                  <label
                    htmlFor="role"
                    className="mb-1.5 block text-sm font-semibold text-deep"
                  >
                    I'm a…
                  </label>
                  <select
                    id="role"
                    value={values.role}
                    onChange={update('role')}
                    aria-invalid={!!errors.role}
                    aria-describedby={errors.role ? 'role-error' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition focus:border-azure ${
                      errors.role ? 'border-red-400' : 'border-powder'
                    }`}
                  >
                    <option value="" disabled>
                      Select one…
                    </option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.role && <ErrorText id="role-error">{errors.role}</ErrorText>}
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-deep"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={values.message}
                    onChange={update('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="How can we help?"
                    className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-ink outline-none transition focus:border-azure ${
                      errors.message ? 'border-red-400' : 'border-powder'
                    }`}
                  />
                  {errors.message && (
                    <ErrorText id="message-error">{errors.message}</ErrorText>
                  )}
                </div>

                {status === 'error' && (
                  <p
                    className="mb-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                    role="alert"
                  >
                    <AlertCircle size={18} aria-hidden="true" />
                    Something went wrong sending your message. Please try again or
                    email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Location + direct contact */}
          <div className="reveal flex flex-col gap-6">
            <div className="card">
              <h3 className="font-display text-xl font-bold text-deep">
                Visit us
              </h3>
              <p className="mt-3 flex items-start gap-3 text-ink/80">
                <MapPin size={20} className="mt-0.5 shrink-0 text-azure" aria-hidden="true" />
                <span>
                  <strong className="text-deep">{TEAM.meeting.venue}</strong>
                  <br />
                  {TEAM.meeting.campus}
                  <br />
                  {TEAM.meeting.address}
                </span>
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-flex items-center gap-3 text-ink/80 hover:text-azure"
              >
                <Mail size={20} className="shrink-0 text-azure" aria-hidden="true" />
                {/* TODO: confirm public contact email in src/data/site.js */}
                {CONTACT.email}
              </a>
            </div>

            {/* Embedded map (Google Maps embed — no API key required) */}
            <div className="card flex-1 overflow-hidden p-0">
              <iframe
                title="Map to The Science House, 715 Barbour Drive, Raleigh, NC"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full min-h-[260px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* --- Small presentational helpers --------------------------------------- */
function Field({ id, label, error, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-deep">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition focus:border-azure ${
          error ? 'border-red-400' : 'border-powder'
        }`}
        {...props}
      />
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
    </div>
  )
}

function ErrorText({ id, children }) {
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
      <AlertCircle size={14} aria-hidden="true" />
      {children}
    </p>
  )
}
