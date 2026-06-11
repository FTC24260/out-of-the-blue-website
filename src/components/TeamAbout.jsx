import { MapPin, Users, CalendarDays } from 'lucide-react'
import Avatar from './Avatar'
import { TEAM } from '../data/site'
import { MEMBERS, MENTORS, ROLE_CHIP } from '../data/team'

/* Merged "About & Team" section — who we are + the roster, kept compact. */
export default function TeamAbout() {
  return (
    <section id="team" className="section border-b border-line">
      <div className="container-x">
        <span className="eyebrow">About &amp; Team</span>
        <h2 className="heading">Three seasons strong, and just getting started</h2>

        {/* About copy + quick facts */}
        <div className="mt-5 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-muted">
            <p>
              We're a tight-knit crew of{' '}
              <strong className="text-light">{TEAM.memberCount} students</strong>{' '}
              who've been building together for{' '}
              <strong className="text-light">{TEAM.yearsTogether} years</strong>,
              meeting out of <strong className="text-light">The Science House at
              NC State</strong>. Half our team are girls, and we're proud{' '}
              <strong className="text-light">#FIRSTLikeAGirl</strong> ambassadors —
              opening the door to robotics for students from traditionally
              underrepresented communities.
            </p>
            <p>
              In the FIRST Tech Challenge, students design, build, and program a
              robot to compete in alliances against other teams. We do all of
              that — plus the fundraising, outreach, and budgeting that keep the
              team running. After a strong rookie year, we joined{' '}
              <a
                href={TEAM.parentOrgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {TEAM.parentOrg}
              </a>
              , a 501(c)(3) nonprofit, in {TEAM.rookieYear}.
            </p>
          </div>

          <ul className="space-y-3">
            <Fact icon={CalendarDays} label={`${TEAM.yearsTogether} seasons together`} />
            <Fact icon={Users} label={`${TEAM.memberCount} students · ${TEAM.girlsPercent}% girls`} />
            <Fact icon={MapPin} label="The Science House, NC State · Raleigh, NC" />
          </ul>
        </div>

        {/* Roster */}
        <h3 className="mt-12 text-lg font-bold text-light">Members</h3>
        {/* TODO: replace the roster in src/data/team.js with real names, roles,
            and photos (place images in /public/team/). */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <article
              key={`${m.name}-${i}`}
              className="overflow-hidden rounded-2xl border border-line bg-panel/60 text-center"
            >
              <div className="aspect-square w-full">
                <Avatar name={m.name} initials={m.initials} photo={m.photo} />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-light">{m.name}</p>
                <span className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${ROLE_CHIP}`}>
                  {m.role}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mentors */}
        <h3 className="mt-10 text-lg font-bold text-light">Coaches &amp; Mentors</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {MENTORS.map((m, i) => (
            <article
              key={`${m.name}-${i}`}
              className="flex items-center gap-3 rounded-2xl border border-line bg-panel/60 p-3"
            >
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                <Avatar name={m.name} initials={m.initials} photo={m.photo} />
              </div>
              <div>
                <p className="text-sm font-semibold text-light">{m.name}</p>
                <p className="text-xs text-muted">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Fact({ icon: I, label }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-line bg-panel/40 px-4 py-3">
      <I size={18} className="shrink-0 text-blue" aria-hidden="true" />
      <span className="text-sm text-light">{label}</span>
    </li>
  )
}
