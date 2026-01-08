import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import emailjs from '@emailjs/browser'
import './ContactSection.css'

emailjs.init('UfDy-2gs4PwkWljcn')

function ContactSection() {
  const titleRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Dasar validasi
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Mohon lengkapi semua field yang wajib diisi.' })
      return
    }

    setIsLoading(true)

    // Mengirim email menggunakan ke email js
    emailjs.send(
      'service_2cxrxri',
      'template_m6cvf6s',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      }
    )
    .then((response) => {
      setFormStatus({ type: 'success', message: 'Terima kasih! Pesan Anda telah terkirim.' })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      setTimeout(() => {
        setFormStatus({ type: '', message: '' })
      }, 5000)
    })
    .catch((error) => {
      console.error('Error:', error)
      setFormStatus({ type: 'error', message: 'Gagal mengirim pesan. Silakan coba lagi.' })
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">
        <h2 className="section-title" id="contact-title" ref={titleRef}>Hubungi Kami</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="contact-label">You Tube</div>
            <div className='contact-info'>
              <a href="https://www.youtube.com/@hkbppondokkelapa8726/videos">@hkbppondokkelapa8726</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-label">Email</div>
            <div className="contact-info">
              <a href="mailto:samuelebitnego13@gmail.com">samuelebitnego13@gmail.com</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="contact-label">Instagram</div>
            <div className="contact-info">
              <a href="https://instagram.com/hkbppondokkelapa" target="_blank" rel="noopener noreferrer">@hkbppondokkelapa</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="contact-label">Facebook</div>
            <div className="contact-info">
              <a href="https://www.facebook.com/people/HKBP-Pondok-Kelapa/61550892745100/" target="_blank" rel="noopener noreferrer">HKBP Pondok Kelapa</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Nomor Telepon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="08xx-xxxx-xxxx"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subjek *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">Pilih Subject</option>
              <option value="ibadah">Informasi Ibadah</option>
              <option value="pernikahan">Pemberkatan Pernikahan</option>
              <option value="sekolah-minggu">Sekolah Minggu</option>
              <option value="pelayanan">Pelayanan Sosial</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Pesan *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda di sini..."
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>

          {formStatus.message && (
            <div className={`form-${formStatus.type}`} style={{ display: 'block' }}>
              {formStatus.message}
            </div>
          )}
        </form>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.144699210183!2d106.93442907387725!3d-6.244654161144139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dddba8afed1%3A0x1d19d6e040b912c4!2sHKBP%20Ressort%20Pondok%20Kelapa!5e0!3m2!1sid!2sid!4v1763721825456!5m2!1sid!2sid" 
            width="600" 
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Lokasi HKBP Pondok Kelapa"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
