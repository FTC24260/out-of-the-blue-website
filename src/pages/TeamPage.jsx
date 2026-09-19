import PageHeader from '../components/PageHeader'
import Avatar from '../components/Avatar'
import { MEMBERS, MENTORS, TEAM_PHOTO, ROLE_CHIP } from '../data/team'
import { TEAM } from '../data/site'

export default function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Our team" title="Meet Out Of the Blue">
        {MEMBERS.length} students, {MENTORS.length} mentors, and one robot,
        split across building, programming, and outreach.
      </PageHeader>

      <section className="section">
        <div className="container-x">
          <figure className="overflow-hidden rounded-2xl border border-line">
            <img
              src={TEAM_PHOTO}
              alt={`The ${MEMBERS.length}-student Out Of the Blue team, FTC #${TEAM.number}`}
              className="w-full object-cover"
            />
          </figure>

          <h2 className="mt-12 text-lg font-bold text-light">Members</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
                  <span
                    className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${ROLE_CHIP}`}
                  >
                    {m.role}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <h2 className="mt-12 text-lg font-bold text-light">Coaches &amp; Mentors</h2>
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
    </>
  )
}
