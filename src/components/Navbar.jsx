import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import useTheme from '../hooks/useTheme'
import './Navbar.css'

const links = [
  { href: '#hero', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#services', label: 'Layanan' },
  { href: '#schedule', label: 'Jadwal' },
  { href: '#timeline', label: 'Sejarah' },
  { href: '#gallery', label: 'Galeri' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#hero')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [...links.map((l) => l.href.slice(1)), 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Kunci scroll body saat menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      id="navbar"
      role="navigation"
      aria-label="Navigasi utama"
    >
      <div className="nav-inner">
        <a href="#hero" className="brand" onClick={close} aria-label="HKBP Pondok Kelapa - Beranda">
          <img
            src="/foto/logo_hkbp.png"
            alt=""
            className="brand-logo"
            width="44"
            height="44"
          />
          <span className="brand-text">
            HKBP <strong>Pondok Kelapa</strong>
          </span>
        </a>

        <div
          className={`nav-overlay ${menuOpen ? 'show' : ''}`}
          onClick={close}
          aria-hidden="true"
        />

        <div className={`nav-menu ${menuOpen ? 'open' : ''}`} id="nav-links">
          <ul className="nav-links">
            {links.map((l, i) => (
              <li key={l.href} style={{ '--i': i }}>
                <a
                  href={l.href}
                  className={active === l.href ? 'active' : ''}
                  aria-current={active === l.href ? 'true' : undefined}
                  onClick={close}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--gold nav-cta" onClick={close}>
            Hubungi Kami
          </a>
        </div>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          title={theme === 'dark' ? 'Mode terang' : 'Mode gelap'}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>

        <button
          className={`hamburger ${menuOpen ? 'is-active' : ''}`}
          id="hamburger"
          aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
