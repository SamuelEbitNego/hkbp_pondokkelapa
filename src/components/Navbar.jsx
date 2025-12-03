import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-content">
        <div className="logo">⛪ HKBP Pondok Kelapa</div>
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'is-active' : ''}`} 
          id="hamburger" 
          aria-label="Buka menu navigasi" 
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-links"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} id="nav-links" role="menu">
          <a href="#hero" role="menuitem" onClick={closeMobileMenu}>Beranda</a>
          <a href="#services" role="menuitem" onClick={closeMobileMenu}>Layanan</a>
          <a href="#schedule" role="menuitem" onClick={closeMobileMenu}>Jadwal</a>
          <a href="#timeline" role="menuitem" onClick={closeMobileMenu}>Sejarah</a>
          <a href="#gallery" role="menuitem" onClick={closeMobileMenu}>Galeri</a>
          <a href="#contact" role="menuitem" onClick={closeMobileMenu}>Kontak</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
