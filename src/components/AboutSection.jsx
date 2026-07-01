import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faHeart, faHandHoldingHeart, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'
import useTilt from '../hooks/useTilt'
import './AboutSection.css'

const stats = [
  { num: 1990, label: 'Tahun Berdiri' },
  { num: 2003, label: 'Menjadi Resort' },
  { num: 2025, label: 'Peresmian Gereja' },
]

const values = [
  { icon: faDove, title: 'Iman', text: 'Berakar pada firman Tuhan dan kehidupan doa.' },
  { icon: faHeart, title: 'Kasih', text: 'Saling mengasihi sebagai satu keluarga.' },
  { icon: faHandHoldingHeart, title: 'Pelayanan', text: 'Melayani Tuhan dan sesama dengan sukacita.' },
  { icon: faPeopleGroup, title: 'Marsiurupan', text: 'Semangat saling menolong antar jemaat.' },
]

function CountUp({ end, suffix = '', duration = 1700, className }) {
  const [ref, value] = useCountUp(end, { duration })
  return (
    <span ref={ref} className={className}>
      {Math.round(value)}
      {suffix}
    </span>
  )
}

function AboutSection() {
  const ref = useScrollReveal()
  const tiltRef = useTilt({ max: 5, scale: 1.01 })

  return (
    <section className="about section section--cream" id="about" aria-labelledby="about-title" ref={ref}>
      <span className="section-aura" style={{ top: '-8%', left: '-10%' }} aria-hidden="true"></span>

      <div className="container about-grid">
        <div className="about-media reveal reveal--left" ref={tiltRef}>
          <img
            src="/foto/gedung.jpeg"
            alt="Gereja HKBP Pondok Kelapa pada masa awal berdiri"
            className="about-img"
            loading="lazy"
          />
          <div className="about-badge">
            <span className="about-badge-num">
              <CountUp end={35} suffix="+" duration={1500} />
            </span>
            <span className="about-badge-text">Tahun Melayani Jemaat</span>
          </div>
        </div>

        <div className="about-body reveal reveal--right">
          <span className="eyebrow">Tentang Kami</span>
          <h2 className="about-title" id="about-title">
            Rumah untuk Bertumbuh Bersama dalam Kasih Kristus
          </h2>
          <p>
            HKBP Pondok Kelapa hadir sejak tahun 1990 sebagai persekutuan jemaat yang
            terus bertumbuh. Kami percaya gereja bukan sekadar bangunan, melainkan
            keluarga yang saling menguatkan dalam iman, pengharapan, dan pelayanan.
          </p>
          <p>
            Dengan semangat <em>“marsiurupan”</em> — saling menolong — kami membuka
            tangan bagi setiap orang untuk beribadah, melayani, dan mengalami kasih
            Tuhan secara nyata di tengah komunitas.
          </p>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat" key={s.num}>
                <CountUp end={s.num} className="stat-num" duration={1800} />
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn--navy about-cta">Bergabung Bersama Kami</a>
        </div>
      </div>

      <div className="container about-values">
        {values.map((v, i) => (
          <div
            className="value-card reveal reveal--up"
            key={v.title}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className="value-card-icon"><FontAwesomeIcon icon={v.icon} /></span>
            <h3 className="value-card-title">{v.title}</h3>
            <p className="value-card-text">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
