/**
 * Smoothly scrolls to a section by id, accounting for the fixed header height.
 * Used by nav links and CTA buttons so every in-page link lands correctly.
 *
 * @param {string} id  Target section id (without the leading '#').
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  el.scrollIntoView({
    behavior: prefersReduced ? 'auto' : 'smooth',
    block: 'start',
  })

  // Move focus for accessibility without yanking the scroll position.
  el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

/** Scroll back to the very top of the page. */
export function scrollToTop() {
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
}
