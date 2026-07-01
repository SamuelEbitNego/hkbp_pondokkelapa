import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faBullhorn, faClock } from '@fortawesome/free-solid-svg-icons'
import useScrollReveal from '../hooks/useScrollReveal'
import './ScheduleSection.css'

const schedules = [
  {
    day: 'Minggu',
    times: [
      { time: '07:30 WIB', desc: 'Ibadah Minggu I — Bahasa Indonesia' },
      { time: '10:00 – 12:00 WIB', desc: 'Ibadah Minggu II — Bahasa Batak' },
      { time: '07:30 WIB', desc: 'Sekolah Minggu' },
    ],
  },
  {
    day: 'Rabu',
    times: [{ time: '19:00 – 22:00 WIB', desc: 'Sermon Parhalado' }],
  },
  {
    day: 'Jumat',
    times: [
      { time: '16:00 – 18:00 WIB', desc: 'Sermon Lansia' },
      { time: '19:00 – 22:00 WIB', desc: 'Koor Ama' },
    ],
  },
  {
    day: 'Sabtu',
    times: [{ time: '19:00 – 22:00 WIB', desc: 'Koor Ina Ester' }],
  },
]

const announcements = [
  {
    date: '14 Desember 2025',
    title: 'Acara Peresmian HKBP Pondok Kelapa',
    content: 'Mari kita meriahkan acara peresmian gereja ini bersama seluruh jemaat.',
    badge: 'Penting',
    urgent: true,
  },
  {
    date: 'Tanpa Batas Waktu',
    title: 'Rekrutmen Anggota Multimedia',
    content: 'Tim Multimedia membutuhkan anggota baru untuk pelayanan di HKBP Pondok Kelapa.',
    badge: 'Pelayanan',
  },
]

function ScheduleSection() {
  const ref = useScrollReveal()

  return (
    <section className="schedule section section--cream" id="schedule" aria-labelledby="schedule-title" ref={ref}>
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Ikut Ambil Bagian</span>
          <h2 className="section-title" id="schedule-title">Jadwal &amp; Pengumuman</h2>
          <p className="section-subtitle">
            Temukan waktu ibadah dan kegiatan, serta kabar terbaru dari gereja kami.
          </p>
        </div>

        <div className="schedule-grid">
          <div className="panel reveal">
            <h3 className="panel-title">
              <span className="panel-icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
              Jadwal Kegiatan
            </h3>
            <div className="schedule-list">
              {schedules.map((schedule) => (
                <div className="schedule-day" key={schedule.day}>
                  <div className="day-pill">{schedule.day}</div>
                  <ul className="day-items">
                    {schedule.times.map((t, idx) => (
                      <li className="day-item" key={idx}>
                        <span className="day-time">
                          <FontAwesomeIcon icon={faClock} /> {t.time}
                        </span>
                        <span className="day-desc">{t.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="panel reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="panel-title">
              <span className="panel-icon"><FontAwesomeIcon icon={faBullhorn} /></span>
              Pengumuman
            </h3>
            <div className="announcement-list">
              {announcements.map((a, index) => (
                <div className={`announcement ${a.urgent ? 'is-urgent' : ''}`} key={index}>
                  <div className="announcement-top">
                    <span className="announcement-date">{a.date}</span>
                    <span className={`announcement-badge ${a.urgent ? 'urgent' : ''}`}>{a.badge}</span>
                  </div>
                  <h4 className="announcement-title">{a.title}</h4>
                  <p className="announcement-content">{a.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
