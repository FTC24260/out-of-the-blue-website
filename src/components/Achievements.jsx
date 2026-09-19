import { ExternalLink, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCountUp } from '../hooks/useCountUp'
import { STATS } from '../data/content'

function StatCard({ stat }) {
  const [value, ref] = useCountUp(stat.value)
  return (
    <div ref={ref} className="card text-center">
      <p className="font-display text-3xl font-extrabold text-light sm:text-4xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-1.5 text-sm text-muted">{stat.label}</p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section border-b border-line bg-navyAlt">
      <div className="container-x">
        <span className="eyebrow">Achievements</span>
        <h2 className="heading">Our story so far</h2>
        <p className="subheading">
          Four seasons in, we're building momentum on and off the field, and
          we're just getting started.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Context for the two competition stats above. */}
        <p className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-muted">
          <Trophy size={16} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
          <span>
            13 awards and alliance honors since 2023 (including the Innovate
            Award, the Design Award at the state level, and a 3rd-place Inspire
            Award), and we've advanced to the North Carolina State Championship
            in every season we've finished. Season four is under way.
          </span>
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/awards" className="link inline-flex items-center gap-1.5 text-sm">
            See every award, season by season
          </Link>
          <a
            href="https://ftc-events.firstinspires.org/team/24260"
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1.5 text-sm"
          >
            See our official FIRST record on FTC Events
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          <a
            href="https://ftcscout.org/teams/24260"
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1.5 text-sm"
          >
            View our verified record on FTCScout
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
