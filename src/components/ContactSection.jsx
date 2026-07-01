import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import useScrollReveal from '../hooks/useScrollReveal'
import './ContactSection.css'

emailjs.init('UfDy-2gs4PwkWljcn')

const contactCards = [
  {
    icon: faYoutube,
    label: 'YouTube',
    text: '@hkbppondokkelapa8726',
    href: 'https://www.youtube.com/@hkbppondokkelapa8726/videos',
  },
  {
    icon: faEnvelope,
    label: 'Email',
    text: 'samuelebitnego13@gmail.com',
    href: 'mailto:samuelebitnego13@gmail.com',
  },
  {
    icon: faInstagram,
    label: 'Instagram',
    text: '@hkbppondokkelapa',
    href: 'https://instagram.com/hkbppondokkelapa',
  },
  {
    icon: faFacebook,
    label: 'Facebook',
    text: 'HKBP Pondok Kelapa',
    href: 'https://www.facebook.com/people/HKBP-Pondok-Kelapa/61550892745100/',
  },
]

function ContactSection() {
  const ref = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validasi dasar
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Mohon lengkapi semua field yang wajib diisi.' })
      return
    }

    setIsLoading(true)

    // Mengirim email menggunakan EmailJS
    emailjs
      .send('service_2cxrxri', 'template_m6cvf6s', {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      })
      .then(() => {
        setFormStatus({ type: 'success', message: 'Terima kasih! Pesan Anda telah terkirim.' })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setFormStatus({ type: '', message: '' }), 5000)
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
    <section className="contact section section--cream" id="contact" aria-labelledby="contact-title" ref={ref}>
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Kontak</span>
          <h2 className="section-title" id="contact-title">Hubungi Kami</h2>
          <p className="section-subtitle">
            Ada pertanyaan atau ingin berkunjung? Kami senang mendengar dari Anda.
          </p>
        </div>

        <div className="contact-cards reveal">
          {contactCards.map((c) => (
            <a
              className="contact-card"
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card-icon"><FontAwesomeIcon icon={c.icon} /></span>
              <span className="contact-card-label">{c.label}</span>
              <span className="contact-card-text">{c.text}</span>
            </a>
          ))}
        </div>

        <div className="contact-main">
          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap <span className="req">*</span></label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Masukkan nama Anda" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <span className="req">*</span></label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="nama@email.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="08xx-xxxx-xxxx" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subjek</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                  <option value="">Pilih subjek</option>
                  <option value="ibadah">Informasi Ibadah</option>
                  <option value="pernikahan">Pemberkatan Pernikahan</option>
                  <option value="sekolah-minggu">Sekolah Minggu</option>
                  <option value="pelayanan">Pelayanan Sosial</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan <span className="req">*</span></label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tulis pesan Anda di sini..." required />
            </div>

            <button type="submit" className="btn btn--gold submit-btn" disabled={isLoading}>
              <FontAwesomeIcon icon={faPaperPlane} />
              {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>

            {formStatus.message && (
              <div
                className={`form-status form-status--${formStatus.type}`}
                role={formStatus.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {formStatus.message}
              </div>
            )}
          </form>

          <div className="map-container reveal" style={{ transitionDelay: '0.1s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.144699210183!2d106.93442907387725!3d-6.244654161144139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dddba8afed1%3A0x1d19d6e040b912c4!2sHKBP%20Ressort%20Pondok%20Kelapa!5e0!3m2!1sid!2sid!4v1763721825456!5m2!1sid!2sid"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi HKBP Pondok Kelapa"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
