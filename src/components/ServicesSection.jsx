import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChurch,
  faRing,
  faHandsPraying,
  faBookBible,
  faHandHoldingHeart,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import useScrollReveal from '../hooks/useScrollReveal'
import useTilt from '../hooks/useTilt'
import './ServicesSection.css'

const services = [
  {
    icon: faChurch,
    title: 'Ibadah Minggu',
    description:
      'Ibadah rutin setiap hari Minggu: Ibadah Pagi pukul 07:30 (Bahasa Indonesia) dan Ibadah Siang pukul 10:00 (Bahasa Batak).',
  },
  {
    icon: faRing,
    title: 'Pernikahan',
    description:
      'Pemberkatan pernikahan yang sakral dan khidmat untuk memulai perjalanan rumah tangga di dalam berkat Tuhan.',
  },
  {
    icon: faHandsPraying,
    title: 'Doa Bersama',
    description:
      'Persekutuan doa untuk memperkuat iman dan mempererat persaudaraan antar jemaat.',
  },
  {
    icon: faBookBible,
    title: 'Sekolah Minggu',
    description:
      'Pendidikan iman bagi anak-anak dengan metode pembelajaran yang menyenangkan dan penuh kasih.',
  },
  {
    icon: faHandHoldingHeart,
    title: 'Pelayanan Sosial',
    description:
      'Kegiatan sosial untuk membantu sesama dan masyarakat sekitar sebagai wujud nyata kasih Kristiani.',
  },
  {
    icon: faMusic,
    title: 'Paduan Suara',
    description:
      'Kelompok paduan suara yang memuliakan Tuhan melalui nyanyian dan musik rohani.',
  },
]

function ServiceCard({ service, index }) {
  const tiltRef = useTilt({ max: 8, scale: 1.03 })

  return (
    <article
      className="service-card reveal reveal--up"
      ref={tiltRef}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className="service-glow" aria-hidden="true"></span>
      <span className="service-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div className="service-icon">
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.description}</p>
    </article>
  )
}

function ServicesSection() {
  const ref = useScrollReveal()

  return (
    <section className="services section section--surface" id="services" aria-labelledby="services-title" ref={ref}>
      <span className="section-aura" style={{ bottom: '-10%', right: '-8%' }} aria-hidden="true"></span>

      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Pelayanan Kami</span>
          <h2 className="section-title" id="services-title">Melayani dengan Sepenuh Hati</h2>
          <p className="section-subtitle">
            Berbagai bentuk pelayanan untuk bertumbuh bersama dalam iman dan kasih.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
