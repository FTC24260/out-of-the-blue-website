import { Building2, MapPin, Users, CalendarDays, ExternalLink } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Icon from './Icon'
import { TEAM } from '../data/site'

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-cloud">
      {/* Subtle fish watermark — brand element */}
      <Icon
        name="fish"
        className="pointer-events-none absolute -right-10 top-10 h-64 w-64 -rotate-12 text-powder/40"
        strokeWidth={1}
      />

      <div className="container-x relative">
        <SectionHeader
          eyebrow="About Us"
          title="Three seasons strong — and just getting started"
          subtitle="Out Of the Blue is a student-run FIRST Tech Challenge team based at NC State in Raleigh. We design, build, and program a competition robot — and run the outreach, fundraising, and storytelling behind it."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Story card spans 2 cols */}
          <div className="reveal card lg:col-span-2">
            <h3 className="font-display text-2xl font-bold text-deep">Who we are</h3>
            <p className="mt-4 leading-relaxed text-ink/80">
              We're a tight-knit crew of <strong>{TEAM.memberCount} students</strong>{' '}
              who've been building together for{' '}
              <strong>{TEAM.yearsTogether} years</strong>. We meet and build out of{' '}
              <strong>The Science House at NC State</strong>, where late nights,
              spare parts, and a lot of iteration turn into a robot every season.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Half our team are girls, and we're proud{' '}
              <strong className="text-deep">#FIRSTLikeAGirl</strong> ambassadors —
              champions for getting more young women into STEM. After a strong
              rookie year, we joined{' '}
              <strong className="text-deep">{TEAM.parentOrg}</strong> in{' '}
              {TEAM.rookieYear}. Beyond build and code, we run fundraising,
              marketing, and community outreach — the real-world skills that keep a
              team like ours moving.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Fact
                icon={CalendarDays}
                label="Together"
                value={`${TEAM.yearsTogether} seasons`}
              />
              <Fact
                icon={Users}
                label="Members"
                value={`${TEAM.memberCount} students`}
              />
              <Fact icon={MapPin} label="Home base" value="NC State, Raleigh" />
            </div>
          </div>

          {/* Biome / parent org card */}
          <div className="reveal card flex flex-col bg-gradient-to-br from-white to-sky">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-deep/10 text-deep">
              <Building2 size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-deep">
              Part of Biome Robotics
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink/80">
              {TEAM.parentOrg} is a <strong>501(c)(3) nonprofit</strong> (granted
              2023) that supports student FTC teams in the Triangle. Alongside our{' '}
              <strong>{TEAM.sisterTeams} sister teams</strong>, we share mentors,
              resources, and a mission to grow STEM in our community. Donations are
              tax-deductible.
            </p>
            <a
              href={TEAM.parentOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-5 self-start px-4 py-2 text-sm text-azure"
            >
              Visit Biome Robotics
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* What is FTC + location */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="reveal card border-l-4 border-l-blue">
            <span className="eyebrow">What is FTC?</span>
            <h3 className="font-display text-xl font-bold text-deep">
              The FIRST Tech Challenge, simply put
            </h3>
            <p className="mt-3 leading-relaxed text-ink/80">
              FTC is a robotics competition for students in grades 7–12. Each
              year, teams get a new game and a few months to design, build, and
              program a robot the size of a microwave. At events, robots team up
              in two-team <strong>alliances</strong> and face off in fast-paced
              matches — part autonomous (pre-programmed), part driver-controlled.
              It rewards smart engineering <em>and</em> gracious professionalism.
            </p>
          </div>

          <div className="reveal card border-l-4 border-l-azure">
            <span className="eyebrow">Where we meet</span>
            <h3 className="font-display text-xl font-bold text-deep">
              {TEAM.meeting.venue}
            </h3>
            <p className="mt-3 leading-relaxed text-ink/80">
              We build and meet at <strong>{TEAM.meeting.venue}</strong> on the{' '}
              {TEAM.meeting.campus} —{' '}
              <span className="whitespace-nowrap">{TEAM.meeting.address}</span>. It's
              a hub for STEM education in the Research Triangle, and the perfect
              home base for a team like ours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Fact({ icon: I, label, value }) {
  return (
    <div className="rounded-xl bg-sky/70 p-4">
      <span className="mb-2 grid h-9 w-9 place-items-center rounded-lg bg-white text-azure shadow-soft">
        <I size={18} aria-hidden="true" />
      </span>
      <p className="text-xs font-semibold uppercase tracking-wide text-azure">
        {label}
      </p>
      <p className="font-bold text-deep">{value}</p>
    </div>
  )
}
