import { Trophy, Users, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import {
  AWARD_SEASONS,
  ALL_RESULTS,
  JUDGED_COUNT,
  ALLIANCE_COUNT,
} from '../data/awards'

export default function AwardsPage() {
  return (
    <>
      <PageHeader eyebrow="Accolades" title="Awards &amp; honors">
        {ALL_RESULTS.length} results across three completed seasons:{' '}
        {JUDGED_COUNT} judged awards and {ALLIANCE_COUNT} alliance finishes,
        every one of them from the official FIRST record.
      </PageHeader>

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-3 gap-4">
            <Stat value={ALL_RESULTS.length} label="Total results" />
            <Stat value={JUDGED_COUNT} label="Judged awards" />
            <Stat value={ALLIANCE_COUNT} label="Alliance finishes" />
          </div>

          {AWARD_SEASONS.map((s) => (
            <div key={s.season} className="mt-10">
              <h2 className="flex flex-wrap items-baseline gap-x-3 text-lg font-bold text-light">
                {s.season} season
                <span className="text-sm font-medium text-azure">{s.game}</span>
              </h2>

              <div className="mt-4 space-y-3">
                {s.events.map((e) => (
                  <article
                    key={e.event}
                    className="rounded-2xl border border-line bg-panel/60 p-4"
                  >
                    <h3 className="text-sm font-semibold text-light">{e.event}</h3>
                    {e.results.length === 0 ? (
                      <p className="mt-2 text-sm text-muted">
                        Competed: no award at this event.
                      </p>
                    ) : (
                      <ul className="mt-2.5 space-y-2">
                        {e.results.map((r) => (
                          <li
                            key={r.title}
                            className="flex items-start gap-2.5 text-sm text-muted"
                          >
                            {r.judged ? (
                              <Trophy
                                size={15}
                                className="mt-0.5 shrink-0 text-blue"
                                aria-hidden="true"
                              />
                            ) : (
                              <Users
                                size={15}
                                className="mt-0.5 shrink-0 text-azure"
                                aria-hidden="true"
                              />
                            )}
                            <span>
                              {r.title}
                              {!r.judged && (
                                <span className="ml-2 text-xs text-azure">
                                  alliance finish
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
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
    </>
  )
}

function Stat({ value, label }) {
  return (
    <div className="card text-center">
      <p className="font-display text-3xl font-extrabold text-light">{value}</p>
      <p className="mt-1.5 text-sm text-muted">{label}</p>
    </div>
  )
}
