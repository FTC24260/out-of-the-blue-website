import Hero from '../components/Hero'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Sponsors from '../components/Sponsors'

/* '/' — the Out Of the Blue story, top to bottom, closing on the sponsor
   pitch. Contact has its own route now, as do team, awards, outreach and
   media. Sponsors appears in both places: inline here, and in full at
   /sponsors, which is why it takes a `withHeading` prop. */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <Sponsors withHeading />
    </>
  )
}
