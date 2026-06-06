import { Heart, Check, ShieldCheck, ExternalLink, Mail } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { SPONSOR_TIERS } from '../data/content'
import { CONTACT } from '../data/site'

export default function Sponsors() {
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    'Sponsoring Out Of the Blue · FTC #24260',
  )}`

  return (
    <section id="sponsors" className="section bg-cloud">
      <div className="container-x">
        <SectionHeader
          eyebrow="Sponsors & Support"
          title="Help us build what's next"
          subtitle="Robotics is expensive — parts, registration, travel, and tools add up fast. Your support directly funds students learning to engineer, lead, and give back."
          center
        />

        {/* 501c3 + donate banner */}
        <div className="reveal mt-10 flex flex-col items-center gap-6 rounded-3xl bg-deep-gradient p-8 text-center text-white shadow-card sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-glow">
            <ShieldCheck size={16} aria-hidden="true" />
            Tax-deductible · 501(c)(3)
          </span>
          <p className="max-w-2xl text-lg leading-relaxed text-white/90">
            Out Of the Blue is part of{' '}
            <strong className="text-white">Biome Robotics</strong>, a registered
            501(c)(3) nonprofit. Every donation is tax-deductible to the extent
            allowed by law — and goes straight to the team.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* TODO: set VITE_DONATE_URL in .env to the real donation link. */}
            <a
              href={CONTACT.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-deep hover:-translate-y-0.5 hover:bg-glow"
            >
              <Heart size={18} aria-hidden="true" />
              Donate Now
            </a>
            <a
              href={mailto}
              className="btn border-2 border-white/40 text-white hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Mail size={18} aria-hidden="true" />
              Become a Sponsor
            </a>
          </div>
        </div>

        {/* Tiers */}
        <h3 className="reveal mt-16 text-center font-display text-2xl font-bold text-deep">
          Sponsorship levels
        </h3>
        <p className="reveal mx-auto mt-2 max-w-xl text-center text-ink/70">
          {/* TODO: confirm amounts/benefits with the team's sponsorship packet. */}
          Choose a level that fits — every tier makes a real difference.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPONSOR_TIERS.map((tier, i) => (
            <article
              key={tier.name}
              className={`reveal card card-hover relative flex flex-col ${
                tier.featured ? 'ring-2 ring-blue' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
                  Most popular
                </span>
              )}
              <div
                className={`h-2 w-16 rounded-full bg-gradient-to-r ${tier.accent}`}
              />
              <h4 className="mt-4 font-display text-xl font-bold text-deep">
                {tier.name}
              </h4>
              <p className="mt-1 font-display text-2xl font-extrabold text-azure">
                {tier.amount}
              </p>
              <ul className="mt-4 flex-1 space-y-2.5">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 text-sm text-ink/80"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-azure"
                      aria-hidden="true"
                    />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={mailto}
                className={`mt-6 ${tier.featured ? 'btn-primary' : 'btn-secondary'} w-full`}
              >
                Choose {tier.name}
              </a>
            </article>
          ))}
        </div>

        {/* Logo wall */}
        <div className="mt-16">
          <h3 className="reveal text-center font-display text-2xl font-bold text-deep">
            Our supporters
          </h3>
          <p className="reveal mx-auto mt-2 max-w-xl text-center text-ink/70">
            Proudly backed by sponsors who believe in student STEM.
          </p>
          {/* TODO: replace placeholder logos with real sponsor logos.
              Add images to /public/sponsors/ and render <img> tags here. */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="reveal flex h-24 items-center justify-center rounded-2xl border border-dashed border-powder bg-white/70 text-sm font-semibold text-ink/40"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                Your logo here
              </div>
            ))}
          </div>
          <p className="reveal mt-6 text-center text-sm text-ink/60">
            Could your organization be next?{' '}
            <a
              href={mailto}
              className="font-semibold text-azure underline-offset-2 hover:underline"
            >
              Let's talk
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
