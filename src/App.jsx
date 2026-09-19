import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import TeamPage from './pages/TeamPage'
import AwardsPage from './pages/AwardsPage'
import OutreachPage from './pages/OutreachPage'
import MediaPage from './pages/MediaPage'
import SponsorsPage from './pages/SponsorsPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import { useScrollReveal } from './hooks/useScrollReveal'

/* Route changes have to reset scroll themselves — a client-side navigation
   keeps the old scroll position otherwise, so you'd land halfway down a new
   page. Re-keying the reveal observer here too, so the incoming page's
   `.reveal` nodes get observed instead of the unmounted page's. */
function RouteEffects() {
  const { pathname, hash } = useLocation()
  useScrollReveal(pathname)

  useEffect(() => {
    if (hash) return // let in-page anchors do their own thing
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />

      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-panel focus:px-4 focus:py-2 focus:font-semibold focus:text-light"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/outreach" element={<OutreachPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}
