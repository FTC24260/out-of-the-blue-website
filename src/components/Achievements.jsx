import { Award, ExternalLink } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { useCountUp } from '../hooks/useCountUp'
import { STATS } from '../data/content'

function StatCard({ stat, index }) {
  const [value, ref] = useCountUp(stat.value)
  // Years shouldn't be formatted with thousands separators (e.g. 2024 not 2,024).
  const display = stat.isYear ? value : value.toLocaleString()

  return (
    <div
      ref={ref}
      className="reveal card text-center"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p className="font-display text-4xl font-extrabold text-deep sm:text-5xl">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold text-ink/70">{stat.label}</p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-deep-gradient text-white">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-glow">
            <Award size={16} aria-hidden="true" />
            Achievements
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Our story so far
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Three seasons in, we're building momentum on and off the field — and
            we're just getting started.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Verify-the-record note + live source link */}
        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-sm text-white/70">
          {/* TODO: verify these figures against FTCScout / FTC Events and update
              src/data/content.js before launch. */}
          Want the live competition record? Our verified stats live on FTCScout.
        </p>
        <div className="reveal mt-5 flex justify-center">
          <a
            href="https://ftcscout.org/teams/24260"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-deep hover:-translate-y-0.5 hover:bg-glow"
          >
            View us on FTCScout
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
