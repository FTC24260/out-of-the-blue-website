import { ArrowRight, Heart, MapPin } from 'lucide-react'
import { TEAM } from '../data/site'
import { scrollToSection } from '../lib/scroll'
import Icon from './Icon'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-gradient pt-[calc(var(--header-h)+2.5rem)] pb-20 sm:pb-28"
    >
      {/* Decorative soft blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-glow/30 blur-3xl"
      />
      {/* Fish brand watermark */}
      <Icon
        name="fish"
        className="pointer-events-none absolute -left-12 bottom-4 h-48 w-48 rotate-12 text-white/30"
        strokeWidth={1}
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-sm font-semibold text-azure shadow-soft backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-blue" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-azure" />
            </span>
            {TEAM.program} · Team #{TEAM.number}
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-deep sm:text-5xl md:text-6xl">
            Robotics that comes{' '}
            <span className="bg-gradient-to-r from-azure to-blue bg-clip-text text-transparent">
              out of the blue
            </span>
            .
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
            We're a student robotics team from {TEAM.city}, building robots,
            STEM skills, and community through the FIRST Tech Challenge — with the
            energy of a tech startup and the heart of a nonprofit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection('team')}
              className="btn-primary"
            >
              Meet the Team
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollToSection('sponsors')}
              className="btn-secondary"
            >
              <Heart size={18} aria-hidden="true" />
              Support Us
            </button>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep/70">
            <MapPin size={16} aria-hidden="true" />
            {TEAM.meeting.venue}, NC State · {TEAM.city}
          </p>
        </div>

        {/* Team logo */}
        <div className="reveal is-visible relative">
          <div className="relative mx-auto max-w-md">
            {/* Soft glow behind the logo badge */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2.5rem] bg-glow/40 blur-3xl"
            />
            {/* Team's real logo image */}
            <div className="animate-float overflow-hidden rounded-[2.5rem] border-4 border-white/80 shadow-card">
              <img
                src="/logo.jpg"
                alt="Out Of the Blue · FTC #24260 logo"
                className="h-auto w-full"
              />
            </div>
            {/* Floating credit chip */}
            <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:flex">
              <img
                src="/logo.jpg"
                alt="Out Of the Blue logo"
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="text-sm leading-tight">
                <span className="block font-bold text-deep">Powered by</span>
                <span className="block text-ink/70">Biome Robotics 501(c)(3)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
