import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the navbar can highlight the
 * matching link. Returns the id of the active section.
 *
 * @param {string[]} sectionIds  Ordered list of section element ids to watch.
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most in view near the top of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      {
        // Bias the "active" zone toward the upper third of the viewport.
        rootMargin: '-45% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
