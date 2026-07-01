import { useState, useEffect, useRef } from 'react'

/**
 * Animasikan angka 0 → `end` saat elemen masuk viewport (sekali).
 * Pasang `ref` ke elemen pemicu, render nilai `value` (number).
 * Menghormati prefers-reduced-motion (langsung ke nilai akhir).
 *
 * @returns {[React.RefObject, number]} [ref, value]
 */
export default function useCountUp(end, { duration = 1800, start = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(start)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || typeof IntersectionObserver === 'undefined') {
      setValue(end)
      return
    }

    let raf = 0
    let started = false

    const run = () => {
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setValue(start + (end - start) * eased)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            run()
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(el)

    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end, duration, start])

  return [ref, value]
}
