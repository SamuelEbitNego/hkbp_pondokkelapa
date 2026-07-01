import { useEffect, useRef } from 'react'

/**
 * Tilt 3D berbasis pointer untuk kartu. Memutar elemen mengikuti kursor dan
 * menulis CSS var `--mx`/`--my` (posisi kursor %) untuk efek glow yang menyertai.
 * Hanya aktif pada perangkat hover+pointer halus, dan non-aktif pada
 * prefers-reduced-motion (sentuh/keyboard tidak terpengaruh).
 */
export default function useTilt({ max = 9, scale = 1.02 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine =
      window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduce || !fine) return

    let raf = 0
    let rx = 0
    let ry = 0

    const apply = () => {
      raf = 0
      el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`
    }

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      rx = (py - 0.5) * -2 * max
      ry = (px - 0.5) * 2 * max
      el.style.setProperty('--mx', (px * 100).toFixed(1) + '%')
      el.style.setProperty('--my', (py * 100).toFixed(1) + '%')
      el.style.transition = 'transform 0s'
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onLeave = () => {
      cancelAnimationFrame(raf)
      raf = 0
      el.style.transition = '' // kembalikan ke transisi dari stylesheet (return halus)
      el.style.transform = ''
      el.style.removeProperty('--mx')
      el.style.removeProperty('--my')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [max, scale])

  return ref
}
