import { Sparkles } from 'lucide-react'
import Icon from './Icon'
import { TEAM } from '../data/site'

export default function Mission() {
  return (
    <section id="mission" className="section">
      <div className="container-x">
        {/* Mission statement banner */}
        <div className="reveal relative overflow-hidden rounded-3xl bg-deep-gradient p-8 text-white shadow-card sm:p-12">
          {/* Fish brand watermark */}
          <Icon
            name="fish"
            className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 -rotate-12 text-white/10"
            strokeWidth={1}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue/20 blur-3xl"
          />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-glow">
            <Sparkles size={16} aria-hidden="true" />
            Our Mission
          </span>
          <p className="relative mt-5 max-w-3xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            We open the door to robotics for students from traditionally
            underrepresented communities — so that anyone, from any background,
            can discover they belong in STEM.
          </p>
          <p className="relative mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            That mission starts at home: our team is{' '}
            <strong className="text-white">{TEAM.girlsPercent}% girls</strong> and
            proud <strong className="text-glow">#FIRSTLikeAGirl</strong>{' '}
            ambassadors. We build a welcoming, hands-on space where every student
            learns to engineer, lead, and lift others up along the way.
          </p>
        </div>
      </div>
    </section>
  )
}
