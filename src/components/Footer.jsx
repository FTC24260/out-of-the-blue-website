import { MapPin, Instagram, Globe, BarChart3, Trophy } from 'lucide-react'
import { NAV_LINKS, SOCIALS, TEAM, CONTACT } from '../data/site'
import { Link } from 'react-router-dom'

const SOCIAL_ICONS = {
  instagram: Instagram,
  globe: Globe,
  'bar-chart': BarChart3,
  trophy: Trophy,
}

export default function Footer() {
  const year = new Date().getFullYear() // auto-updating copyright year

  return (
    <footer className="border-t border-line bg-navyAlt text-muted">
      <div className="container-x grid gap-8 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Out Of the Blue logo"
              className="h-10 w-10 rounded-md object-cover"
            />
            <div className="leading-tight">
              <p className="text-base font-bold text-light">{TEAM.wordmark}</p>
              <p className="text-xs text-azure">FTC #{TEAM.number}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            A student robotics team from {TEAM.city}, competing in the FIRST Tech
            Challenge and powered by {TEAM.parentOrg}, a 501(c)(3) nonprofit.
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm">
            <MapPin size={15} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
            {TEAM.meeting.venue} · {TEAM.meeting.address}
          </p>

          {/* Socials */}
          <div className="mt-4 flex gap-2">
            {SOCIALS.map((s) => {
              const I = SOCIAL_ICONS[s.icon] ?? Globe
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-blue hover:text-azure"
                >
                  <I size={17} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick links (mirror nav) */}
        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-azure">
            Explore
          </h3>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm transition-colors hover:text-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Get involved */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-azure">
            Get involved
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/contact"
                className="text-sm transition-colors hover:text-light"
              >
                Join the team
              </Link>
            </li>
            <li>
              <Link
                to="/sponsors"
                className="text-sm transition-colors hover:text-light"
              >
                Sponsor us
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm transition-colors hover:text-light"
              >
                Email us
              </a>
            </li>
            <li>
              <a
                href={TEAM.parentOrgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-light"
              >
                Biome Robotics
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="container-x py-5 text-center text-xs text-muted">
          © {year} {TEAM.wordmark} · FTC #{TEAM.number}. Part of {TEAM.parentOrg}{' '}
          (501(c)(3)). Gracious professionalism.
        </div>
      </div>
    </footer>
  )
}
