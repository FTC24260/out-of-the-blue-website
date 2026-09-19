import { Instagram, Globe, BarChart3, Trophy, Info, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { SOCIALS, TEAM } from '../data/site'
import { REELS } from '../data/media'

const ICONS = {
  instagram: Instagram,
  globe: Globe,
  'bar-chart': BarChart3,
  trophy: Trophy,
}

export default function MediaPage() {
  return (
    <>
      <PageHeader eyebrow="Media" title="Social media &amp; marketing">
        Where to find Out Of the Blue online, and the brand we use to tell the
        team's story.
      </PageHeader>

      <section className="section">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-light">
            Take a look at our funny vids
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Robots are serious business. We are not. Tap one to watch it on
            Instagram.
          </p>
          <div className="mt-6 flex flex-wrap gap-5">
            {REELS.map((reel) => (
              <a
                key={reel.url}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-44 overflow-hidden rounded-2xl border border-line bg-panel/60 transition-colors hover:border-blue sm:w-52"
              >
                {/* Instagram's thumbnail already carries the play badge, so
                    this deliberately adds none of its own. */}
                <div className="aspect-[9/16] overflow-hidden">
                  <img
                    src={reel.thumb}
                    alt={reel.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-2 p-3">
                  <span className="text-sm leading-snug text-light">
                    {reel.caption}
                    <span className="mt-0.5 block text-xs text-muted">
                      {reel.date}
                    </span>
                  </span>
                  <ExternalLink
                    size={14}
                    className="mt-0.5 shrink-0 text-azure"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>

          <h2 className="mt-12 text-lg font-bold text-light">Follow us</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIALS.map((s) => {
              const I = ICONS[s.icon] ?? Globe
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 transition-colors hover:border-blue"
                >
                  <I size={18} className="shrink-0 text-blue" aria-hidden="true" />
                  <span className="text-sm font-semibold text-light">{s.label}</span>
                </a>
              )
            })}
          </div>

          <h2 className="mt-12 text-lg font-bold text-light">Brand kit</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-[auto_1fr]">
            <figure className="rounded-2xl border border-line bg-panel/60 p-5">
              <img
                src="/logo.jpg"
                alt={`${TEAM.wordmark} logo`}
                className="mx-auto w-40 rounded-xl"
              />
              <figcaption className="mt-3 text-center text-xs text-muted">
                Primary mark
              </figcaption>
            </figure>
            <div className="card">
              <h3 className="text-base font-bold text-light">Palette</h3>
              <p className="mt-1.5 text-sm text-muted">
                The leaping fish is the &ldquo;U&rdquo; in BLUE, and it doubles
                as the site's favicon.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ['Navy', '#0a1b30'],
                  ['Panel', '#13294b'],
                  ['Blue', '#3b9ee5'],
                  ['Azure', '#74bbee'],
                  ['Glow', '#9bd3ff'],
                  ['Light', '#eaf3ff'],
                ].map(([name, hex]) => (
                  <li key={hex} className="flex items-center gap-2.5">
                    <span
                      className="h-7 w-7 shrink-0 rounded-lg border border-line"
                      style={{ background: hex }}
                      aria-hidden="true"
                    />
                    <span className="text-xs text-muted">
                      <span className="block text-light">{name}</span>
                      {hex}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-panel/60 px-5 py-4 text-sm leading-relaxed text-muted">
            <Info size={18} className="mt-0.5 shrink-0 text-azure" aria-hidden="true" />
            <span>
              Got more reels, press coverage, or highlight clips? Add them to{' '}
              <code className="text-azure">src/data/media.js</code> and they
              show up above.
            </span>
          </p>
        </div>
      </section>
    </>
  )
}
