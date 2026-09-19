import { useState } from 'react'
import { Check, ShieldCheck, AlertCircle } from 'lucide-react'
import { SPONSOR_TIERS, SPONSOR_ROWS } from '../data/content'
import { Link } from 'react-router-dom'
import { CONTACT, TEAM } from '../data/site'

/* Biome Robotics fields several FTC teams, so every sponsorship path has to
   name us explicitly or the funds land with the wrong team. */
const TEAM_DESIGNATION = 'Out Of the Blue (24260)'

/* `withHeading` draws the eyebrow/title inline. The home page needs it (the
   section sits in a scroll); /sponsors doesn't, because PageHeader already
   supplies the masthead there. */
export default function Sponsors({ withHeading = false }) {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    'Sponsoring Out Of the Blue · FTC #24260',
  )}&body=${encodeURIComponent(
    `Hi Out Of the Blue,\n\nI'd like to sponsor FTC Team ${TEAM_DESIGNATION}.\n\n` +
      'Organization:\nContact name:\nSponsorship level:\n\nThanks!',
  )}`

  return (
    <section id="sponsors" className="section">
      <div className="container-x">
        {withHeading && (
          <>
            <span className="eyebrow">Sponsors &amp; Support</span>
            <h2 className="heading">Help us build what's next</h2>
            <p className="subheading">
              Parts, registration, travel, and tools add up fast. Your support
              directly funds students learning to engineer, lead, and give back.
            </p>
          </>
        )}

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
            <Link to="/contact" className="btn-secondary">
              Become a sponsor
            </Link>
          </div>
        </div>

        {/* Designation notice — deliberately high-contrast: the parent org runs
            multiple teams, so a gift without our name on it can be misrouted. */}
        <p className="mt-4 flex items-start gap-3 rounded-2xl border border-blue bg-blue/10 px-5 py-4 text-sm leading-relaxed text-light">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-azure" aria-hidden="true" />
          <span>
            <span className="text-azure">Please note:</span> {TEAM.parentOrg}{' '}
            supports several robotics teams. When you donate or fill out a
            company matching form, write{' '}
            <span className="whitespace-nowrap text-azure">
              &ldquo;{TEAM_DESIGNATION}&rdquo;
            </span>{' '}
            in the note, memo, or &ldquo;designation&rdquo; field so your gift
            reaches our team.
          </span>
        </p>

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
              <h4 className="text-lg font-bold text-light">{tier.name}</h4>
              <p className="mt-0.5 font-display text-2xl font-extrabold text-azure">
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
        <h3 className="mt-14 text-2xl font-bold text-light">Our supporters</h3>
        {/* One flex row per SPONSOR_ROWS entry: `grow` from a zero basis makes
            each row split the width evenly regardless of how many logos it
            holds, which a single grid can't do for a 3-then-4 split. Below sm
            they fall back to two-up and wrap. */}
        <div className="mt-8 space-y-8">
          {SPONSOR_ROWS.map((row, i) => (
            <div key={i} className="flex flex-wrap justify-center gap-6">
              {row.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="basis-[45%] sm:basis-0 sm:grow"
                >
                  <SponsorLogo sponsor={sponsor} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-6 text-base text-muted">
          Could your organization be next?{' '}
          <a href={mailto} className="link font-medium">
            Let's talk
          </a>{' '}
          and remember to name{' '}
          <span className="text-azure">{TEAM_DESIGNATION}</span> as the team
          you're sponsoring.
        </p>
      </div>
    </section>
  )
}

/* --- Sponsor logo tile ---------------------------------------------------
   The tile is a bare layout box — no panel, no border — so the transparent
   PNGs sit straight on the navy page. That only works because each logo is
   supplied in a treatment that reads on dark (see SPONSORS in data/content).
   `scale` is an optical-size knob: object-contain alone lets a wide wordmark
   read as much larger than a squarish lockup even though both technically
   "fit". A missing file falls back to the name rather than a broken image. */
function SponsorLogo({ sponsor }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="text-center">
      <div
        className={`flex h-40 items-center justify-center ${
          sponsor.plate ? 'rounded-2xl bg-white p-3' : 'px-4'
        }`}
      >
        {!failed && (
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
            style={{
              maxHeight: `${sponsor.scale * 100}%`,
              maxWidth: `${sponsor.scale * 100}%`,
            }}
            className={`object-contain ${sponsor.rounded ? 'rounded-2xl' : ''}`}
          />
        )}
      </div>
      {/* Name always shows alongside the mark, and carries the whole tile on
          its own if a logo file is ever missing. */}
      <figcaption className="mt-3 text-base text-light">{sponsor.name}</figcaption>
    </figure>
  )
}
