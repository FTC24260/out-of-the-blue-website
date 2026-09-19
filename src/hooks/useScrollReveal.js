import { useEffect } from 'react'

/**
 * Adds the `is-visible` class to every element with the `reveal` class once it
 * scrolls into view, triggering the CSS scroll-reveal animation.
 *
 * @param {*} rerunKey  Changing this re-scans the DOM. Pass the current route
 *   so a client-side navigation observes the new page's `.reveal` nodes —
 *   without it the observer would still be watching the unmounted page's.
 */
export function useScrollReveal(rerunKey) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')

    // Fallback: if IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    // Toggle the class every time an element enters/leaves the viewport so the
    // reveal animation replays on each scroll past it (not just the first time).
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [rerunKey])
}
