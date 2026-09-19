import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, TEAM } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

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

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-navy/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="container-x flex h-[var(--header-h)] items-center justify-between"
      >
        {/* Wordmark / logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 text-left"
          aria-label="Out Of the Blue, FTC team 24260, home"
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
            <span className="block text-[11px] text-azure">
              FTC #{TEAM.number}
            </span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-azure' : 'text-muted hover:text-light'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/sponsors" className="btn-primary ml-2 px-4 py-2">
              Sponsor Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-light lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-navy lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-panel text-azure'
                        : 'text-muted hover:bg-panel hover:text-light'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-1">
              <NavLink to="/sponsors" className="btn-primary w-full">
                Sponsor Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
