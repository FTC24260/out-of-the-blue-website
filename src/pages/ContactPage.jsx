import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch">
        Questions about joining, mentoring, or sponsoring? Send us a note.
        We'd love to hear from you.
      </PageHeader>
      <Contact />
    </>
  )
}
