import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './TimelineSection.css'

const timelineData = [
  { year: '13 Mei 1990', text: 'Gereja HKBP Pondok Kelapa berdiri pada Mei 1990.' },
  { year: '11 Mei 2003', text: 'HKBP Pondok Kelapa resmi menjadi Resort.' },
  {
    year: '28 Juni 2023',
    text: 'Proses dokumen dan perizinan agar jemaat dapat beribadah dengan nyaman di HKBP Pondok Kelapa.',
  },
  {
    year: '07 Februari 2024',
    text: 'Surat rekomendasi izin beribadah ditandatangani oleh Walikota Jakarta Timur.',
  },
  {
    year: '21 April 2025',
    text: 'Peletakan batu pertama menandai dimulainya pembangunan Gereja HKBP Pondok Kelapa.',
  },
  {
    year: '21 April 2025',
    text: 'Renovasi besar dengan penambahan fasilitas modern dan sistem audio visual terkini.',
  },
  {
    year: '14 Desember 2025',
    text: 'Peresmian pembangunan Gereja HKBP Pondok Kelapa bersama Ephorus dan Gubernur DKI Jakarta.',
  },
]

function TimelineSection() {
  const ref = useScrollReveal()

  return (
    <section className="timeline section section--surface" id="timeline" aria-labelledby="timeline-title" ref={ref}>
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Perjalanan Kami</span>
          <h2 className="section-title" id="timeline-title">Sejarah HKBP Pondok Kelapa</h2>
          <p className="section-subtitle">
            Jejak langkah pertumbuhan gereja dari masa ke masa.
          </p>
        </div>

        <div className="timeline-wrap">
          <span className="timeline-line" aria-hidden="true"></span>
          {timelineData.map((item, index) => (
            <div
              className="t-item reveal"
              key={index}
              style={{ transitionDelay: `${(index % 2) * 0.08}s` }}
            >
              <div className="t-card">
                <span className="t-year">{item.year}</span>
                <p className="t-text">{item.text}</p>
              </div>
              <span className="t-dot" aria-hidden="true"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
