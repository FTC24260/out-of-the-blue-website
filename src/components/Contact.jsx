import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { CONTACT, TEAM } from '../data/site'

const ROLES = [
  'Student',
  'Parent',
  'Sponsor',
  'Mentor',
  'Other',
  'Prefer not to say',
]

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
        subject: `New message from ${values.name} (${values.role}) · FTC #${TEAM.number}`,
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
    <section id="contact" className="section">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Form */}
          <div className="card">
            {status === 'success' ? (
              <div
                className="flex h-full flex-col items-center justify-center py-10 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  size={48}
                  className="text-blue"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-light">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Thanks for reaching out. We'll get back to you as soon as we
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
                    className="mb-1.5 block text-sm font-medium text-light"
                  >
                    I'm a…
                  </label>
                  <select
                    id="role"
                    value={values.role}
                    onChange={update('role')}
                    aria-invalid={!!errors.role}
                    aria-describedby={errors.role ? 'role-error' : undefined}
                    className={`w-full rounded-xl border bg-navy px-4 py-2.5 text-light outline-none transition focus:border-blue ${
                      errors.role ? 'border-red-500' : 'border-line'
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
                    className="mb-1.5 block text-sm font-medium text-light"
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
                    className={`w-full resize-y rounded-xl border bg-navy px-4 py-2.5 text-light outline-none transition placeholder:text-muted/60 focus:border-blue ${
                      errors.message ? 'border-red-500' : 'border-line'
                    }`}
                  />
                  {errors.message && (
                    <ErrorText id="message-error">{errors.message}</ErrorText>
                  )}
                </div>

                {status === 'error' && (
                  <p
                    className="mb-4 flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300"
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
          <div className="flex flex-col gap-5">
            <div className="card">
              <h3 className="text-lg font-bold text-light">Visit us</h3>
              <p className="mt-3 flex items-start gap-3 text-sm text-muted">
                <MapPin size={18} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                <span>
                  <strong className="text-light">{TEAM.meeting.venue}</strong>
                  <br />
                  {TEAM.meeting.campus}
                  <br />
                  {TEAM.meeting.address}
                </span>
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-azure"
              >
                <Mail size={18} className="shrink-0 text-blue" aria-hidden="true" />
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-light">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-navy px-4 py-2.5 text-light outline-none transition placeholder:text-muted/60 focus:border-blue ${
          error ? 'border-red-500' : 'border-line'
        }`}
        {...props}
      />
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
    </div>
  )
}

function ErrorText({ id, children }) {
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-300">
      <AlertCircle size={14} aria-hidden="true" />
      {children}
    </p>
  )
}
