import { useState, useCallback } from 'react'
import { Expand, CalendarDays, MapPin, Users, Heart } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Icon from './Icon'
import GalleryTile from './GalleryTile'
import Lightbox from './Lightbox'
import { OUTREACH_POINTS } from '../data/content'
import { GALLERY } from '../data/gallery'
import { scrollToSection } from '../lib/scroll'

/* Only show a meta chip if the field has a real (non-placeholder) value. */
function isReal(v) {
  return v && !String(v).toUpperCase().includes('TODO')
}

export default function Outreach() {
  const [index, setIndex] = useState(null) // null = lightbox closed

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    [],
  )

  return (
    <section id="outreach" className="section relative overflow-hidden">
      {/* Fish brand watermark */}
      <Icon
        name="fish"
        className="pointer-events-none absolute -left-10 top-16 h-56 w-56 rotate-6 text-powder/40"
        strokeWidth={1}
      />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="Outreach & Community"
          title="Our outreach gallery walk"
          subtitle="The best part of robotics isn't the trophy — it's passing the spark on. Take a walk through the events where we've brought hands-on STEM to schools, libraries, museums, and communities across Raleigh."
        />

        {/* Outreach pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {OUTREACH_POINTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal card card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue/15 text-azure">
                <Icon name={p.icon} size={24} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-deep">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.body}</p>
            </article>
          ))}
        </div>

        {/* Gallery walk header */}
        <div className="reveal mt-16 flex flex-col items-center gap-2 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-powder/60 px-4 py-1.5 text-sm font-semibold text-azure">
            <Heart size={15} aria-hidden="true" />
            {GALLERY.length} outreaches and counting
          </span>
          <h3 className="font-display text-2xl font-bold text-deep">
            Walk through our season
          </h3>
          <p className="mx-auto max-w-xl text-ink/70">
            Click any event to read the full story. {/* lightbox: Esc + ←/→ supported */}
          </p>
        </div>

        {/* Gallery walk — card per outreach */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <article
              key={item.id}
              className="reveal card card-hover flex flex-col p-0"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              {/* Photo (click to open detailed view) */}
              <button
                onClick={() => setIndex(i)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl focus-visible:outline-none"
                aria-label={`Read more about: ${item.title}`}
              >
                <GalleryTile item={item} />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-deep/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-deep shadow-card">
                    <Expand size={15} aria-hidden="true" />
                    View story
                  </span>
                </span>
              </button>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5">
                <h4 className="font-display text-lg font-bold text-deep">
                  {item.title}
                </h4>

                {/* Meta chips — only render real values */}
                {(isReal(item.date) || isReal(item.location) || isReal(item.reach)) && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {isReal(item.date) && <Chip icon={CalendarDays} text={item.date} />}
                    {isReal(item.location) && <Chip icon={MapPin} text={item.location} />}
                    {isReal(item.reach) && <Chip icon={Users} text={item.reach} />}
                  </div>
                )}

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                  {item.blurb}
                </p>

                <button
                  onClick={() => setIndex(i)}
                  className="mt-4 self-start text-sm font-semibold text-azure transition hover:text-deep"
                >
                  Read the full story →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Note for maintainers (code-only) + sponsor CTA */}
        {/* TODO: add all real outreach events + photos in src/data/gallery.js
            (public/outreach/ for images). You have 16 this season. */}
        <div className="reveal mt-12 rounded-2xl bg-gradient-to-br from-white to-sky p-6 text-center shadow-soft sm:p-8">
          <p className="text-lg font-semibold text-deep">
            Want to help us reach even more students?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-ink/70">
            Every outreach is powered by our sponsors. Your support puts robots in
            front of kids who've never seen one.
          </p>
          <button
            onClick={() => scrollToSection('sponsors')}
            className="btn-primary mt-5"
          >
            <Heart size={18} aria-hidden="true" />
            Support our outreach
          </button>
        </div>
      </div>

      <Lightbox
        items={GALLERY}
        index={index}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}

function Chip({ icon: I, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-sky px-2.5 py-1 text-xs font-semibold text-deep">
      <I size={12} aria-hidden="true" />
      {text}
    </span>
  )
}
