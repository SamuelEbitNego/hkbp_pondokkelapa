import React, { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faChevronLeft, faChevronRight, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import useScrollReveal from '../hooks/useScrollReveal'
import './GallerySection.css'

const galleryItems = [
  { caption: 'Gubernur DKI Jakarta Mengunjungi HKBP Pondok Kelapa', image: '/foto/gubernur.jpg' },
  { caption: 'Gedung Gereja HKBP Pondok Kelapa', image: '/foto/gedung.jpeg' },
  { caption: 'Ulang Tahun Gereja', image: '/foto/ultah_gereja.jpeg' },
  { caption: 'Renovasi Pembangunan Gereja', image: '/foto/renovasi.jpg' },
  { caption: 'Peletakan Batu Pertama', image: '/foto/peletakkan.jpg' },
  { caption: 'Rekomendasi Ibadah Gereja', image: '/foto/hkbp_rekomendasi.jpg' },
  { caption: 'Kegiatan Sosial Idul Adha', image: '/foto/hkbp_bakti_sosial.jpg' },
  { caption: 'Pesta Gotilon HKBP Pondok Kelapa', image: '/foto/gotilon.jpg' },
  { caption: 'HKBP Pondok Kelapa, 13 Mei 1990', image: '/foto/hkbp_1990.jpeg' },
]

function GallerySection() {
  const ref = useScrollReveal()
  const [index, setIndex] = useState(-1)
  const isOpen = index >= 0

  const close = useCallback(() => setIndex(-1), [])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length),
    []
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % galleryItems.length),
    []
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, prev, next])

  return (
    <section className="gallery section section--navy" id="gallery" aria-labelledby="gallery-title" ref={ref}>
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Galeri</span>
          <h2 className="section-title" id="gallery-title">Momen &amp; Kegiatan Kami</h2>
          <p className="section-subtitle">
            Dokumentasi perjalanan dan kebersamaan jemaat HKBP Pondok Kelapa.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <button
              className="gallery-item reveal"
              key={i}
              style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
              onClick={() => setIndex(i)}
              aria-label={`Perbesar foto: ${item.caption}`}
            >
              <img src={item.image} alt={item.caption} className="gallery-img" loading="lazy" />
              <span className="gallery-zoom" aria-hidden="true">
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
              </span>
              <span className="gallery-caption">{item.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Tampilan foto" onClick={close}>
          <button className="lb-btn lb-close" onClick={close} aria-label="Tutup">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button
            className="lb-btn lb-nav lb-prev"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Foto sebelumnya"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={galleryItems[index].image} alt={galleryItems[index].caption} className="lb-img" />
            <figcaption className="lb-caption">
              {galleryItems[index].caption}
              <span className="lb-count">{index + 1} / {galleryItems.length}</span>
            </figcaption>
          </figure>
          <button
            className="lb-btn lb-nav lb-next"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Foto berikutnya"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </section>
  )
}

export default GallerySection
