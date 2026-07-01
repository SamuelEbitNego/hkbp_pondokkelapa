import { useState, useEffect, useCallback, useRef } from 'react'

const STORAGE_KEY = 'theme'
const THEME_COLOR = { light: '#0A1A3F', dark: '#0A1124' }

/**
 * Kelola tema terang/gelap situs. Nilai awal diambil dari atribut `data-theme`
 * yang sudah dipasang oleh script anti-FOUC di `index.html`, dengan fallback ke
 * localStorage → preferensi OS (`prefers-color-scheme`) → 'light'.
 *
 * Mengembalikan { theme, toggleTheme }. Setiap perubahan disinkronkan ke
 * <html data-theme>, localStorage, dan <meta name="theme-color">.
 */
function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'light' || attr === 'dark') return attr
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch (e) {
    /* localStorage tidak tersedia */
  }
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)
  const firstRun = useRef(true)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {
      /* abaikan bila localStorage diblokir */
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLOR[theme])

    // Animasikan transisi hanya saat user mengganti tema (bukan saat mount),
    // dan hormati prefers-reduced-motion.
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    root.classList.add('theme-anim')
    const id = window.setTimeout(() => root.classList.remove('theme-anim'), 450)
    return () => window.clearTimeout(id)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
