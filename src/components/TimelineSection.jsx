import React, { useEffect, useRef } from 'react'
import './TimelineSection.css'

const timelineData = [
  {
    year: '13 Mei 1990',
    text: 'Gereja HKBP Pondok Kelapa berdiri pada Mei 1990.'
  },
  {
    year: '21 April 2025',
    text: 'Peletakan batu pertama untuk mulai pembangunan Gereja HKBP Pondok Kelapa.'
  },
  {
    year: '21 April 2025',
    text: 'Renovasi besar-besaran dengan penambahan fasilitas modern dan sistem audio visual terkini.'
  },
  {
    year: '14 Desember 2025',
    text: 'Peresmian Pembangunan Gereja HKBP Pondok Kelapa.'
  }
]

function TimelineSection() {
  const titleRef = useRef(null)
  const itemsRef = useRef([])

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

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="timeline-section" id="timeline" aria-labelledby="timeline-title">
      <h2 className="section-title" id="timeline-title" ref={titleRef}>Sejarah Kami</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div 
            className="timeline-item" 
            key={index}
            ref={el => itemsRef.current[index] = el}
          >
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-text">{item.text}</div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
