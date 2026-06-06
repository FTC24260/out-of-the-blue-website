import SectionHeader from './SectionHeader'
import Avatar from './Avatar'
import { MEMBERS, MENTORS, ROLE_STYLES } from '../data/team'

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Team"
          title="The people behind the robot"
          subtitle="Builders, programmers, designers, and storytellers — everyone owns a piece of what we make."
          center
        />

        {/* Note for maintainers — visible only in code. */}
        {/* TODO: replace the roster in src/data/team.js with real names, roles,
            and photos (place images in /public/team/). */}

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {MEMBERS.map((m, i) => (
            <article
              key={`${m.name}-${i}`}
              className="reveal card card-hover p-0 text-center"
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              <div className="aspect-square w-full overflow-hidden rounded-t-2xl">
                <Avatar name={m.name} initials={m.initials} photo={m.photo} />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-bold text-deep">
                  {m.name}
                </h3>
                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    ROLE_STYLES[m.role] ?? 'bg-powder text-deep'
                  }`}
                >
                  {m.role}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mentors / coaches */}
        <div className="mt-14">
          <h3 className="reveal text-center font-display text-2xl font-bold text-deep">
            Coaches &amp; Mentors
          </h3>
          <p className="reveal mx-auto mt-2 max-w-xl text-center text-ink/70">
            The adults who guide, challenge, and cheer us on every week.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-3">
            {MENTORS.map((m, i) => (
              <article
                key={`${m.name}-${i}`}
                className="reveal card card-hover flex items-center gap-4 text-left"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                  <Avatar name={m.name} initials={m.initials} photo={m.photo} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-deep">{m.name}</h4>
                  <span
                    className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      ROLE_STYLES[m.role] ?? 'bg-powder text-deep'
                    }`}
                  >
                    {m.role}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
