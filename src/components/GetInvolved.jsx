import { Check, ArrowRight } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'

const STUDENT_POINTS = [
  'Grades 7–12 — no experience required, just curiosity',
  'Learn build, code, CAD, design, outreach & business',
  'Make friends and compete across the region',
]

const MENTOR_POINTS = [
  'Share your skills — technical or not',
  'Engineering, business, marketing, or logistics',
  'Flexible commitment, huge impact on students',
]

export default function GetInvolved() {
  return (
    <section id="join" className="section border-b border-line bg-navyAlt">
      <div className="container-x">
        <span className="eyebrow">Get Involved</span>
        <h2 className="heading">Join the team</h2>
        <p className="subheading">
          Whether you're a student ready to build or an adult who wants to
          mentor, there's a place for you on Out Of the Blue.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Panel
            title="For students"
            blurb="Curious how things work? Come build a robot, learn real skills, and find your people."
            points={STUDENT_POINTS}
            cta="Apply to join"
            primary
          />
          <Panel
            title="For mentors"
            blurb="You don't need to be an engineer — you need to care. Help students grow into confident makers."
            points={MENTOR_POINTS}
            cta="Become a mentor"
          />
        </div>
      </div>
    </section>
  )
}

function Panel({ title, blurb, points, cta, primary }) {
  return (
    <article className="card flex flex-col">
      <h3 className="text-lg font-bold text-light">{title}</h3>
      <p className="mt-1.5 text-sm text-muted">{blurb}</p>
      <ul className="mt-4 flex-1 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-muted">
            <Check size={16} className="mt-0.5 shrink-0 text-blue" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <button
        onClick={() => scrollToSection('contact')}
        className={`${primary ? 'btn-primary' : 'btn-secondary'} mt-5 w-full`}
      >
        {cta}
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </article>
  )
}
