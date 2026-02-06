import React, { useEffect, useRef } from 'react'
import './ServicesSection.css'

const services = [
  {
    icon: '⛪',
    title: 'Ibadah Minggu',
    description: 'Ibadah rutin setiap hari Minggu pagi pukul 07:30 Ibadah Pagi, Sekolah Minggu & Minggu siang 10:00.'
  },
  {
    icon: '💒',
    title: 'Pernikahan',
    description: 'Pemberkatan pernikahan dengan suasana sakral dan kemewahan yang tak terlupakan untuk hari istimewa Anda.'
  },
  {
    icon: '🙏',
    title: 'Doa Bersama',
    description: 'Sesi doa bersama setiap hari untuk memperkuat iman dan mempererat persaudaraan antar jemaat.'
  },
  {
    icon: '📖',
    title: 'Sekolah Minggu',
    description: 'Program pendidikan iman untuk anak-anak dengan metode pembelajaran yang menyenangkan dan interaktif.'
  },
  {
    icon: '❤️',
    title: 'Pelayanan Sosial',
    description: 'Kegiatan sosial untuk membantu sesama dan masyarakat sekitar sebagai wujud kasih kristiani.'
  },
  {
    icon: '🎵',
    title: 'Paduan Suara',
    description: 'Kelompok paduan suara gereja yang memuliakan Tuhan melalui nyanyian dan musik rohani.'
  }
]

function ServicesSection() {
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
    <section className="cards-section" id="services" aria-labelledby="services-title">
      <h2 className="section-title" id="services-title" ref={titleRef}>Pelayanan Kami</h2>
      <div className="cards-container">
        {services.map((service, index) => (
          <div className="card-3d" key={index} tabIndex="0">
            <div className="card-icon">{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
