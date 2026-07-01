import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faChild, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import useParallax from '../hooks/useParallax'
import './HeroSection.css'

const titleWords = [
  { text: 'HKBP', gold: true },
  { text: 'Pondok', gold: false },
  { text: 'Kelapa', gold: false },
]

const chips = [
  { icon: faClock, label: 'Ibadah Minggu', value: '07:30 & 10:00 WIB' },
  { icon: faChild, label: 'Sekolah Minggu', value: 'Minggu 07:30 WIB' },
  { icon: faLocationDot, label: 'Lokasi', value: 'Pondok Kelapa, Jaktim' },
]

// Posisi & ritme partikel cahaya (motes) — statis agar tidak diacak ulang tiap render.
const motes = [
  { l: '6%', t: '24%', s: 7, d: 0, dur: 11 },
  { l: '16%', t: '68%', s: 4, d: 1.5, dur: 9 },
  { l: '24%', t: '40%', s: 5, d: 3, dur: 13 },
  { l: '34%', t: '78%', s: 3, d: 0.8, dur: 10 },
  { l: '44%', t: '30%', s: 6, d: 2.2, dur: 12 },
  { l: '52%', t: '60%', s: 4, d: 4, dur: 9 },
  { l: '60%', t: '20%', s: 8, d: 1, dur: 14 },
  { l: '68%', t: '72%', s: 5, d: 3.4, dur: 11 },
  { l: '76%', t: '44%', s: 4, d: 2, dur: 10 },
  { l: '84%', t: '64%', s: 6, d: 0.5, dur: 12 },
  { l: '90%', t: '34%', s: 3, d: 2.8, dur: 9 },
  { l: '12%', t: '52%', s: 4, d: 5, dur: 13 },
  { l: '50%', t: '84%', s: 5, d: 1.8, dur: 11 },
  { l: '38%', t: '14%', s: 4, d: 3.6, dur: 10 },
]

function HeroSection() {
  const bgRef = useParallax(0.16)

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" ref={bgRef} aria-hidden="true">
        <img src="/foto/gedung.jpeg" alt="" className="hero-img" fetchpriority="high" />
        <div className="hero-overlay"></div>
        <div className="hero-aurora"></div>
      </div>

      <div className="hero-motes" aria-hidden="true">
        {motes.map((m, i) => (
          <span
            key={i}
            className="mote"
            style={{
              left: m.l,
              top: m.t,
              width: `${m.s}px`,
              height: `${m.s}px`,
              animationDelay: `${m.d}s`,
              animationDuration: `${m.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <span className="hero-eyebrow">Selamat Datang di Rumah Tuhan</span>

        <h1 className="hero-title">
          {titleWords.map((w, i) => (
            <span
              className="hero-word"
              key={w.text}
              style={{ animationDelay: `${0.35 + i * 0.13}s` }}
            >
              <span className={w.gold ? 'text-gradient--anim' : undefined}>{w.text}</span>
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">
          Bertumbuh bersama dalam iman, kasih, dan pengharapan.
          Mari beribadah dan melayani sebagai satu keluarga di dalam Kristus.
        </p>

        <div className="hero-actions">
          <a href="#schedule" className="btn btn--gold">Jadwal Ibadah</a>
          <a href="#contact" className="btn btn--outline">Hubungi Kami</a>
        </div>

        <ul className="hero-chips" aria-label="Informasi singkat">
          {chips.map((c) => (
            <li className="hero-chip" key={c.label}>
              <span className="hero-chip-icon"><FontAwesomeIcon icon={c.icon} /></span>
              <span className="hero-chip-body">
                <span className="hero-chip-label">{c.label}</span>
                <span className="hero-chip-value">{c.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Gulir ke bawah">
        <span className="hero-scroll-mouse"></span>
        <span className="hero-scroll-label">Gulir</span>
      </a>

      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
          <path
            className="wave-fill"
            d="M0,64 C240,110 480,110 720,80 C960,50 1200,20 1440,56 L1440,110 L0,110 Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
