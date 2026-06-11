import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SECTION_IDS, TEAM } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToSection } from '../lib/scroll'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-navy/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="container-x flex h-[var(--header-h)] items-center justify-between"
      >
        {/* Wordmark / logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 text-left"
          aria-label="Out Of the Blue, FTC team 24260 — back to top"
        >
          <img
            src="/logo.jpg"
            alt="Out Of the Blue logo"
            className="h-8 w-8 rounded-md object-cover"
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold text-light">
              {TEAM.wordmark}
            </span>
            <span className="block text-[11px] font-medium text-blue">
              FTC #{TEAM.number}
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-azure'
                    : 'text-muted hover:text-light'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => go('sponsors')} className="btn-primary ml-2 px-4 py-2">
              Sponsor Us
            </button>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-light md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-navy md:hidden">
          <ul className="container-x flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'bg-panel text-azure'
                      : 'text-muted hover:bg-panel hover:text-light'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-1">
              <button onClick={() => go('sponsors')} className="btn-primary w-full">
                Sponsor Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
