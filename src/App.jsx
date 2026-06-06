import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Robot from './components/Robot'
import Team from './components/Team'
import Achievements from './components/Achievements'
import Outreach from './components/Outreach'
import Sponsors from './components/Sponsors'
import GetInvolved from './components/GetInvolved'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  // Wire up scroll-reveal for every `.reveal` element on the page.
  useScrollReveal()

  return (
    <>
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-deep focus:shadow-card"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <div className="circuit-divider" />
        <About />
        <Mission />
        <Robot />
        <Team />
        <Achievements />
        <Outreach />
        <Sponsors />
        <GetInvolved />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
