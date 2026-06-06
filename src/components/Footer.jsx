import { MapPin } from 'lucide-react'
import Icon from './Icon'
import { NAV_LINKS, SOCIALS, TEAM, CONTACT } from '../data/site'
import { scrollToSection } from '../lib/scroll'

export default function Footer() {
  const year = new Date().getFullYear() // auto-updating copyright year

  return (
    <footer className="bg-deep-gradient text-white">
      {/* Circuit divider */}
      <div className="circuit-divider opacity-20" />

      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Out Of the Blue logo"
              className="h-11 w-11 rounded-xl object-cover"
            />
            <div className="leading-tight">
              <p className="font-display text-lg font-extrabold text-white">
                {TEAM.wordmark}
              </p>
              <p className="text-sm font-semibold text-glow">
                FTC #{TEAM.number}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            A student robotics team from {TEAM.city}, competing in the FIRST Tech
            Challenge and powered by {TEAM.parentOrg}, a 501(c)(3) nonprofit.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-white/75">
            <MapPin size={16} className="mt-0.5 shrink-0 text-glow" aria-hidden="true" />
            {TEAM.meeting.venue} · {TEAM.meeting.address}
          </p>

          {/* Socials */}
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links (mirror nav) */}
        <nav aria-label="Footer">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-glow">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Get involved */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-glow">
            Get involved
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <button
                onClick={() => scrollToSection('join')}
                className="text-sm text-white/75 transition hover:text-white"
              >
                Join the team
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('sponsors')}
                className="text-sm text-white/75 transition hover:text-white"
              >
                Sponsor us
              </button>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-white/75 transition hover:text-white"
              >
                Email us
              </a>
            </li>
            <li>
              <a
                href={TEAM.parentOrgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 transition hover:text-white"
              >
                Biome Robotics
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-sm text-white/60 sm:flex-row sm:text-left">
          <p>
            © {year} {TEAM.wordmark} · FTC #{TEAM.number}. Part of {TEAM.parentOrg}{' '}
            (501(c)(3)).
          </p>
          <p>
            Built with care by the team.{' '}
            <span className="text-glow">Gracious professionalism.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
