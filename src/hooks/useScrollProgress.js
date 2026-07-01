import { useState, useEffect } from 'react'

/**
 * Progres scroll 0..1.
 * - Tanpa argumen: progres scroll seluruh halaman (untuk progress bar & back-to-top).
 * - Dengan `targetRef`: progres "pengisian" saat elemen melintasi viewport
 *   (dipakai untuk garis timeline yang terisi saat scroll).
 *
 * Update dibatasi via requestAnimationFrame agar hemat.
 */
export default function useScrollProgress(targetRef = null) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    const compute = () => {
      raf = 0
      const vh = window.innerHeight || document.documentElement.clientHeight

      if (targetRef && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect()
        // 0 saat bagian atas elemen menyentuh 80% tinggi viewport,
        // 1 saat bagian bawah elemen mendekati titik yang sama.
        const p = (vh * 0.8 - rect.top) / rect.height
        setProgress(Math.min(Math.max(p, 0), 1))
      } else {
        const doc = document.documentElement
        const max = doc.scrollHeight - doc.clientHeight
        setProgress(max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0)
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [targetRef])

  return progress
}
