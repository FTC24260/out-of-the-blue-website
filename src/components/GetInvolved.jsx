import { GraduationCap, Users, ArrowRight, Check } from 'lucide-react'
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
    <section id="join" className="section">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Get Involved</span>
          <h2 className="heading">Join the team</h2>
          <p className="subheading mx-auto">
            Whether you're a student ready to build or an adult who wants to
            mentor, there's a place for you on Out Of the Blue.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Students */}
          <article className="reveal card flex flex-col bg-gradient-to-br from-white to-sky">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue to-azure text-white shadow-soft">
              <GraduationCap size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-deep">
              For students
            </h3>
            <p className="mt-2 text-ink/75">
              Curious how things work? Come build a robot, learn real skills, and
              find your people.
            </p>
            <ul className="mt-5 flex-1 space-y-3">
              {STUDENT_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink/80">
                  <Check size={18} className="mt-0.5 shrink-0 text-azure" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary mt-6 w-full"
            >
              Apply to join
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </article>

          {/* Mentors */}
          <article className="reveal card flex flex-col bg-gradient-to-br from-white to-powder/40">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-deep text-white shadow-soft">
              <Users size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-deep">
              For mentors
            </h3>
            <p className="mt-2 text-ink/75">
              You don't need to be an engineer — you need to care. Help students
              grow into capable, confident makers.
            </p>
            <ul className="mt-5 flex-1 space-y-3">
              {MENTOR_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink/80">
                  <Check size={18} className="mt-0.5 shrink-0 text-azure" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary mt-6 w-full"
            >
              Become a mentor
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}
