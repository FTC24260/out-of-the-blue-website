import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="That page swam off">
        We couldn't find what you were looking for.
      </PageHeader>
      <section className="section">
        <div className="container-x">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
