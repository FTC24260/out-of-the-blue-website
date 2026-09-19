import { HeartHandshake, CalendarDays, Info } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import {
  OUTREACH_EVENTS,
  OUTREACH_FOCUS,
  OUTREACH_COUNT_THIS_SEASON,
} from '../data/outreach'

export default function OutreachPage() {
  return (
    <>
      <PageHeader eyebrow="Outreach" title="Community service &amp; outreach">
        {OUTREACH_COUNT_THIS_SEASON} outreach events this season, bringing
        robotics to students who might never otherwise get their hands on it.
      </PageHeader>

      <section className="section">
        <div className="container-x">
          <h2 className="text-lg font-bold text-light">What we focus on</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {OUTREACH_FOCUS.map((f) => (
              <article key={f.title} className="card">
                <HeartHandshake size={18} className="text-blue" aria-hidden="true" />
                <h3 className="mt-3 text-base font-bold text-light">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{f.blurb}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-12 text-lg font-bold text-light">Event log</h2>
          {OUTREACH_EVENTS.length === 0 ? (
            /* Honest empty state: the 16 events are real, the write-ups aren't
               in the repo yet. Better than inventing entries. */
            <p className="mt-4 flex items-start gap-3 rounded-2xl border border-line bg-panel/60 px-5 py-4 text-sm leading-relaxed text-muted">
              <Info size={18} className="mt-0.5 shrink-0 text-azure" aria-hidden="true" />
              <span>
                We've run {OUTREACH_COUNT_THIS_SEASON} events this season and the
                write-ups are on their way. Add them to{' '}
                <code className="text-azure">src/data/outreach.js</code> and they
                appear here automatically.
              </span>
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {OUTREACH_EVENTS.map((e) => (
                <article key={e.title} className="card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-light">{e.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs text-azure">
                      <CalendarDays size={13} aria-hidden="true" />
                      {e.date}
                    </span>
                  </div>
                  {e.audience && (
                    <p className="mt-1 text-xs text-azure">{e.audience}</p>
                  )}
                  {e.blurb && <p className="mt-2 text-sm text-muted">{e.blurb}</p>}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
