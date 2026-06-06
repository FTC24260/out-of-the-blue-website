import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` once the element scrolls into view.
 * Returns [value, ref] — attach the ref to the element you want to watch.
 *
 * @param {number} end       Final value to count up to.
 * @param {number} duration  Animation length in ms.
 */
export function useCountUp(end, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Reduced-motion or no IO support: jump straight to the final value.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              // easeOutCubic for a satisfying deceleration.
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.round(eased * end))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [value, ref]
}
