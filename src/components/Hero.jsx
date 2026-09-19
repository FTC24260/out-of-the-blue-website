import { ArrowRight, MapPin } from 'lucide-react'
import { TEAM } from '../data/site'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="home"
      className="border-b border-line pt-[var(--header-h)]"
    >
      <div className="container-x grid items-center gap-10 py-16 sm:py-20 md:grid-cols-[1.2fr_1fr]">
        {/* Copy */}
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-azure">
            {TEAM.program} · Team #{TEAM.number}
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] text-light sm:text-5xl">
            Out Of the Blue
          </h1>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            A student robotics team from {TEAM.city}, building robots, STEM
            skills, and community through the FIRST Tech Challenge.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/team" className="btn-primary">
              Meet the Team
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/sponsors" className="btn-secondary">
              Support Us
            </Link>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} aria-hidden="true" />
            {TEAM.meeting.venue}, NC State · {TEAM.city}
          </p>
        </div>

        {/* Logo */}
        <div className="order-first md:order-last">
          <img
            src="/logo.jpg"
            alt="Out Of the Blue · FTC #24260 logo"
            className="mx-auto w-48 rounded-2xl border border-line sm:w-64 md:w-full"
          />
        </div>
      </div>
    </section>
  )
}
