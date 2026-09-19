import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` whenever the element scrolls into view,
 * and resets it once the element has fully left the viewport — so scrolling
 * back up and down replays the count rather than showing a static number.
 *
 * Returns [value, ref] — attach the ref to the element you want to watch.
 *
 * TWO THRESHOLDS, ON PURPOSE
 * --------------------------
 * The count starts at 40% visible but only resets at 0% — fully off screen.
 * Using one threshold for both would snap the number back to zero while the
 * card was still partly on screen, which reads as a glitch rather than a
 * replay. Starting late and resetting late keeps the final value on screen
 * for as long as any of the card is.
 *
 * @param {number} end       Final value to count up to.
 * @param {number} duration  Animation length in ms.
 */
export function useCountUp(end, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const frameRef = useRef(0)
  const runningRef = useRef(false)

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

    const stop = () => {
      // Cancel any frame already queued. Without this, scrolling away
      // mid-count leaves the previous loop running: it would keep calling
      // setValue and overwrite the reset, so the next scroll-in would start
      // from a half-finished number instead of zero.
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
      runningRef.current = false
    }

    const start = () => {
      if (runningRef.current) return
      runningRef.current = true
      const startedAt = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        // easeOutCubic for a satisfying deceleration.
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * end))
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        } else {
          frameRef.current = 0
          // Left true until the element leaves: re-entering while still on
          // screen must not restart a finished count.
        }
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Fully out of view — reset so the next approach counts again.
            stop()
            setValue(0)
            return
          }
          if (entry.intersectionRatio >= 0.4) start()
        })
      },
      // 0 fires the reset only once the card is completely gone; 0.4 starts
      // the count when enough of it is showing to be worth watching.
      { threshold: [0, 0.4] },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      stop()
    }
  }, [end, duration])

  return [value, ref]
}
