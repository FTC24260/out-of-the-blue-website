import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TeamAbout from './components/TeamAbout'
import Achievements from './components/Achievements'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-panel focus:px-4 focus:py-2 focus:font-semibold focus:text-light"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TeamAbout />
        <Achievements />
        <Sponsors />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
