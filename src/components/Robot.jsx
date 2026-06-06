import { Cog, ImageOff } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Icon from './Icon'
import { DESIGN_PROCESS, ROBOT_SPECS } from '../data/content'

export default function Robot() {
  return (
    <section id="robot" className="section bg-cloud">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Robot · Current Season"
          title="From blank slate to competition floor"
          subtitle="Every season brings a brand-new game. Here's the robot we're building for it — and the engineering process that gets it there."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Robot photo placeholder */}
          <div className="reveal lg:col-span-3">
            {/* TODO: replace this placeholder with a real robot photo.
                Drop the image in /public/robot.jpg and swap the div below for:
                <img src="/robot.jpg" alt="Our FTC robot for the current season"
                     className="h-full w-full rounded-2xl object-cover" /> */}
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-powder bg-gradient-to-br from-white to-sky text-center shadow-soft">
              <ImageOff size={40} className="text-azure/60" aria-hidden="true" />
              <p className="mt-3 font-display font-bold text-deep">
                Robot photo coming soon
              </p>
              <p className="mt-1 max-w-xs px-6 text-sm text-ink/60">
                Placeholder — swap in a real photo of this season's robot.
              </p>
            </div>
          </div>

          {/* Specs */}
          <div className="reveal card lg:col-span-2">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue/15 text-azure">
              <Cog size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-deep">
              Quick specs
            </h3>
            <p className="mt-1 text-sm text-ink/60">
              {/* TODO: confirm specs against the current build. */}
              Placeholder specs — confirm against this season's build.
            </p>
            <dl className="mt-5 space-y-3">
              {ROBOT_SPECS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between gap-4 rounded-xl bg-sky/70 px-4 py-3"
                >
                  <dt className="text-sm font-semibold text-azure">{s.label}</dt>
                  <dd className="text-right font-bold text-deep">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Design process timeline */}
        <div className="mt-16">
          <h3 className="reveal text-center font-display text-2xl font-bold text-deep">
            Our engineering design process
          </h3>

          <ol className="relative mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {/* Connecting line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-powder via-blue to-powder lg:block"
            />
            {DESIGN_PROCESS.map((step, i) => (
              <li
                key={step.title}
                className="reveal relative flex flex-col items-center text-center md:items-center"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border-4 border-cloud bg-gradient-to-br from-blue to-azure text-white shadow-soft">
                  <Icon name={step.icon} size={22} />
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-azure">
                  Step {i + 1}
                </span>
                <h4 className="mt-1 font-display text-base font-bold text-deep">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
