import { Check, ShieldCheck } from 'lucide-react'
import { SPONSOR_TIERS } from '../data/content'
import { CONTACT, TEAM } from '../data/site'

export default function Sponsors() {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    'Sponsoring Out Of the Blue · FTC #24260',
  )}`

  return (
    <section id="sponsors" className="section border-b border-line">
      <div className="container-x">
        <span className="eyebrow">Sponsors &amp; Support</span>
        <h2 className="heading">Help us build what's next</h2>
        <p className="subheading">
          Parts, registration, travel, and tools add up fast. Your support
          directly funds students learning to engineer, lead, and give back.
        </p>

        {/* 501c3 + donate banner */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-panel/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-azure">
              <ShieldCheck size={16} aria-hidden="true" />
              Tax-deductible · 501(c)(3)
            </p>
            <p className="mt-1.5 max-w-xl text-sm text-muted">
              We're part of {TEAM.parentOrg}, a registered 501(c)(3) nonprofit.
              Every donation is tax-deductible and goes straight to the team.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            {/* TODO: set VITE_DONATE_URL in .env to the real donation link. */}
            <a
              href={CONTACT.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Donate
            </a>
            <a href={mailto} className="btn-secondary">
              Become a sponsor
            </a>
          </div>
        </div>

        {/* Tiers */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SPONSOR_TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`card relative flex flex-col ${
                tier.featured ? 'border-blue' : ''
              }`}
            >
              {tier.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-blue px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Popular
                </span>
              )}
              <h4 className="text-base font-bold text-light">{tier.name}</h4>
              <p className="mt-0.5 font-display text-xl font-extrabold text-azure">
                {tier.amount}
              </p>
              <ul className="mt-3 flex-1 space-y-2">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={15} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a href={mailto} className="btn-secondary mt-4 w-full">
                Choose {tier.name}
              </a>
            </article>
          ))}
        </div>

        {/* Logo wall */}
        <h3 className="mt-10 text-lg font-bold text-light">Our supporters</h3>
        {/* TODO: replace placeholder logos with real sponsor logos.
            Add images to /public/sponsors/ and render <img> tags here. */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-xl border border-dashed border-line text-xs font-medium text-muted"
            >
              Your logo here
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          Could your organization be next?{' '}
          <a href={mailto} className="link font-medium">
            Let's talk
          </a>
          .
        </p>
      </div>
    </section>
  )
}
