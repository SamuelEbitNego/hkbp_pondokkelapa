import React, { useEffect, useRef } from 'react'
import './GallerySection.css'

const galleryItems = [
  { caption: 'Gubernur DKI Jakarta Kunjugi HKBP Pondok Kelapa', image: '/foto/gubernur.jpg' },
  { caption: 'Gedung Gereja HKBP Pondok Kelapa', image: '/foto/gedung.jpeg' },
  { caption: 'Ulang Tahun Gereja', image: '/foto/ultah_gereja.jpeg' },
  { caption: 'Renovasi Pembangunan Gereja', image: '/foto/renovasi.jpg' },
  { caption: 'Peletakkan Batu Pertama', image: '/foto/peletakkan.jpg' },
  { caption: 'Rekomendasi Ibadah Gereja', image: '/foto/hkbp_rekomendasi.jpg' },
  { caption: 'Kegiatan Sosial Idhul Adha', image: '/foto/hkbp_bakti_sosial.jpg' },
  { caption: 'Pesta Gotilon HKBP Ponkel', image: '/foto/gotilon.jpg' },
  { caption: 'HKBP Ponkel 13 Mei 1990', image: '/foto/hkbp_1990.jpeg' },
]

function GallerySection() {
  const titleRef = useRef(null)

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

  return (
    <section className="gallery-3d-section" id="gallery" aria-labelledby="gallery-title">
      <h2 className="section-title" id="gallery-title" ref={titleRef}>Galeri Kami</h2>
      <div className="gallery-3d-container">
        {galleryItems.map((item, index) => (
          <div className="gallery-3d-item" key={index} tabIndex="0">
            <div className="gallery-placeholder">
              {item.image ? (
                <img src={item.image} alt={item.caption} className="gallery-image" />
              ) : (
                item.icon
              )}
            </div>
            <div className="gallery-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
