import React, { useEffect, useRef } from 'react'
import './ScheduleSection.css'

const schedules = [
  {
    day: 'Minggu',
    times: [
      { time: '07:30 WIB', desc: 'Ibadah Minggu I Bahasa Indonesia' },
      { time: '10:00 - 12:00 WIB', desc: 'Ibadah Minggu II Bahasa Batak' },
      { time: '07:30 WIB', desc: 'Sekolah Minggu' }
    ]
  },
  {
    day: 'Rabu',
    times: [
      { time: '19:00 - 22:00 WIB', desc: 'Sermon Parhalado' }
    ]
  },
  {
    day: 'Jumat',
    times: [
      { time: '16:00 - 18:00 WIB', desc: 'Sermon Lansia' }
    ]
  },
  {
    day: 'Jumat',
    times: [
      { time: '19:00 - 22:00 WIB', desc: 'Koor Ama' }
    ]
  },
  {
    day: 'Sabtu',
    times: [
      { time: '19:00 - 22:00 WIB', desc: 'Koor Ina Ester' }
    ]
  }
]

const announcements = [
  {
    date: '14 Desember 2025',
    title: 'Acara peresmian HKBP Pondok Kelapa',
    content: 'Mari kita meriahkan acara peresmian gereja ini',
    badge: 'Penting',
    urgent: true
  },

  {
    date: 'Tanpa Batasan Waktu',
    title: 'Anggota Multimedia',
    content: 'Multimedia membutuhkan anggota untuk Gereja HKBP Pondok Kelapa',
    badge: 'Sosial'
  }
]

function ScheduleSection() {
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
    <section className="schedule-section" id="schedule" aria-labelledby="schedule-title">
      <div className="schedule-container">
        <h2 className="section-title" id="schedule-title" ref={titleRef}>Jadwal & Pengumuman</h2>
        <div className="schedule-grid">
          <div className="schedule-box">
            <h3 className="box-title">
              <span className="box-title-icon">📅</span>
              Jadwal Kegiatan
            </h3>
            {schedules.map((schedule, index) => (
              <div className="schedule-item" key={index}>
                <div className="schedule-day">{schedule.day}</div>
                {schedule.times.map((time, idx) => (
                  <div key={idx}>
                    <div className="schedule-time">
                      <span>🕐</span> {time.time}
                    </div>
                    <div className="schedule-desc">{time.desc}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="announcement-box">
            <h3 className="box-title">
              <span className="box-title-icon">📢</span>
              Pengumuman
            </h3>
            {announcements.map((announcement, index) => (
              <div className="announcement-item" key={index}>
                <div className="announcement-date">
                  <span>📆</span> {announcement.date}
                </div>
                <div className="announcement-title">{announcement.title}</div>
                <div className="announcement-content">{announcement.content}</div>
                <span className={`announcement-badge ${announcement.urgent ? 'urgent' : ''}`}>
                  {announcement.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
