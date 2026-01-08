import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        © 2025 <span className="footer-gold">Dibuat oleh Multimedia HKBP Pondok Kelapa 😇.</span>
        <div className='footer-contact-info'>
          <a href="https://www.youtube.com/@hkbppondokkelapa8726/videos" target="_blank" rel="nooper noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="mailto:samuelebitnego13@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://instagram.com/hkbppondokkelapa" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/people/HKBP-Pondok-Kelapa/61550892745100/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
