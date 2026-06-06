import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToTop } from '../lib/scroll'

/* Floating "back to top" button — appears after scrolling down a bit. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-blue text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-azure ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  )
}
