import { MapPin, Users, CalendarDays } from 'lucide-react'
import { TEAM } from '../data/site'

/* "About Out Of the Blue" — the who-we-are half of the old combined section.
   The roster moved to its own /team route. */
export default function About() {
  return (
    <section id="team" className="section border-b border-line">
      <div className="container-x">
        <span className="eyebrow">About the team</span>
        <h2 className="heading">Four seasons strong, and just getting started</h2>

        <div className="mt-5 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-muted">
            <p>
              We're a tight-knit crew of{' '}
              <strong className="text-light">{TEAM.memberCount} students</strong>{' '}
              who've been building together for{' '}
              <strong className="text-light">{TEAM.yearsTogether} seasons</strong>,
              meeting out of{' '}
              <strong className="text-light">
                The Science House at NC State
              </strong>
              . We're proud{' '}
              <strong className="text-light">#FIRSTLikeAGirl</strong> ambassadors,
              opening the door to robotics for students from traditionally
              underrepresented communities.
            </p>
            <p>
              In the FIRST Tech Challenge, students design, build, and program a
              robot to compete in alliances against other teams. We do all of
              that, plus the fundraising, outreach, and budgeting that keep the
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
            <Fact icon={Users} label={`${TEAM.memberCount} students · ${TEAM.sisterTeams} sister teams`} />
            <Fact icon={MapPin} label="The Science House, NC State · Raleigh, NC" />
          </ul>
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
