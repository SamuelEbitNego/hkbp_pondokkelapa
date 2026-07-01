import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const socials = [
  { icon: faYoutube, href: 'https://www.youtube.com/@hkbppondokkelapa8726/videos', label: 'YouTube' },
  { icon: faInstagram, href: 'https://instagram.com/hkbppondokkelapa', label: 'Instagram' },
  { icon: faFacebook, href: 'https://www.facebook.com/people/HKBP-Pondok-Kelapa/61550892745100/', label: 'Facebook' },
  { icon: faEnvelope, href: 'mailto:samuelebitnego13@gmail.com', label: 'Email' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-invite">
          <span className="footer-invite-eyebrow">Mari Bergabung</span>
          <h2 className="footer-invite-title">Mari Beribadah &amp; Bertumbuh Bersama</h2>
          <p className="footer-invite-text">
            Pintu rumah Tuhan terbuka bagi setiap orang. Datang dan rasakan kasih
            Kristus bersama keluarga besar HKBP Pondok Kelapa.
          </p>
        </div>
        <div className="footer-invite-actions">
          <a href="#schedule" className="btn btn--gold">Jadwal Ibadah</a>
          <a href="#contact" className="btn btn--outline">Lokasi &amp; Kontak</a>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/foto/logo_hkbp.png" alt="" width="48" height="48" />
            <span>HKBP <strong>Pondok Kelapa</strong></span>
          </div>
          <p className="footer-tagline">
            Bertumbuh bersama dalam iman, kasih, dan pengharapan di dalam Kristus.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Jadwal Ibadah</h3>
          <ul className="footer-schedule">
            <li>
              <span className="fs-label">Ibadah Minggu I</span>
              <span className="fs-time">07:30 WIB</span>
            </li>
            <li>
              <span className="fs-label">Ibadah Minggu II</span>
              <span className="fs-time">10:00 WIB</span>
            </li>
            <li>
              <span className="fs-label">Sekolah Minggu</span>
              <span className="fs-time">07:30 WIB</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Kontak</h3>
          <ul className="footer-contact">
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Jl. Pondok Kelapa, Jakarta Timur, DKI Jakarta 13450</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:samuelebitnego13@gmail.com">samuelebitnego13@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2025 HKBP Pondok Kelapa. Hak cipta dilindungi.</span>
          <span className="footer-credit">Dibuat oleh Tim Multimedia HKBP Pondok Kelapa</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
