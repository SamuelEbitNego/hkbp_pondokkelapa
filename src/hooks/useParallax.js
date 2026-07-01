import { useEffect, useRef } from 'react'

/**
 * Parallax vertikal halus berbasis scroll. Pasang `ref` ke elemen yang ingin
 * digeser (mis. background hero atau elemen dekor). `speed` positif = bergerak
 * berlawanan arah scroll. Non-aktif pada prefers-reduced-motion.
 */
export default function useParallax(speed = 0.18) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const offset = rect.top + rect.height / 2 - vh / 2
      el.style.transform = `translate3d(0, ${(offset * -speed).toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])

  return ref
}
