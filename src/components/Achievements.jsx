import { ExternalLink } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'
import { STATS } from '../data/content'

function StatCard({ stat }) {
  const [value, ref] = useCountUp(stat.value)
  return (
    <div ref={ref} className="card text-center">
      <p className="font-display text-3xl font-extrabold text-light sm:text-4xl">
        {value}
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
          Three seasons in, we're building momentum on and off the field — and
          we're just getting started.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        <div className="mt-7">
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
