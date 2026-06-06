import { useEffect, useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import { NAV_LINKS, SECTION_IDS, TEAM } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToSection } from '../lib/scroll'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  // Add a stronger background + shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/60 bg-cloud/85 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-x flex h-[var(--header-h)] items-center justify-between"
      >
        {/* Wordmark / logo */}
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2.5 rounded-2xl py-1 pr-2 text-left"
          aria-label="Out Of the Blue, FTC team 24260 — back to top"
        >
          <img
            src="/logo.jpg"
            alt="Out Of the Blue logo"
            className="h-10 w-10 rounded-xl object-cover shadow-soft transition-transform group-hover:-translate-y-0.5"
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-extrabold text-deep">
              {TEAM.wordmark}
            </span>
            <span className="block text-xs font-semibold tracking-wide text-azure">
              FTC #{TEAM.number}
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active === link.id
                    ? 'bg-powder/70 text-deep'
                    : 'text-ink/75 hover:bg-powder/40 hover:text-deep'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Primary CTA (desktop) */}
          <button
            onClick={() => go('sponsors')}
            className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <Heart size={16} aria-hidden="true" />
            Sponsor Us
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/60 bg-white/70 text-deep backdrop-blur lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[var(--header-h)] bg-deep/20 backdrop-blur-sm transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-x-0 origin-top border-b border-white/60 bg-cloud/95 shadow-card backdrop-blur-md transition-all duration-300 ${
            open
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-3 opacity-0'
          }`}
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-colors ${
                    active === link.id
                      ? 'bg-powder/70 text-deep'
                      : 'text-ink/80 hover:bg-powder/40'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button
                onClick={() => go('sponsors')}
                className="btn-primary w-full"
              >
                <Heart size={18} aria-hidden="true" />
                Sponsor Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
