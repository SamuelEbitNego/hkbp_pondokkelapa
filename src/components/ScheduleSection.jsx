import React, { useEffect, useRef } from 'react'
import './ScheduleSection.css'

const schedules = [
  {
    day: 'Minggu',
    times: [
      { time: '06:00 - 08:00 WIB', desc: 'Ibadah Minggu I' },
      { time: '07:00 - 09:00 WIB', desc: 'Sekolah Minggu' },
      { time: '10:00 - 12:00 WIB', desc: 'Ibadah Minggu II' }
    ]
  },
  {
    day: 'Rabu',
    times: [
      { time: '19:00 - 22:00 WIB', desc: 'Sermon Parhalado' }
    ]
  },
  {
    day: 'Sabtu',
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
    date: '20 Desember 2025',
    title: 'Natal Sekolah Minggu',
    content: 'Kegiatan natal sekolah minggu pada tanggal 20 Desember 2025.',
    badge: 'Event'
  },
  {
    date: '24 Desember 2025',
    title: 'Ibadah Malam Natal',
    content: 'Ibadah malam natal 24 Desember 2025.',
    badge: 'Event'
  },
  {
    date: '25 Desember 2025',
    title: 'Ibadah Natal',
    content: 'Ibadah Natal (2x ibadah) 25 Desember 2025',
    badge: 'Event'
  },
  {
    date: '26 Desember 2025',
    title: 'Ibadah Natal Gabungan',
    content: 'Ibadah Natal Gabungan (Remaja, Naposo, Ama, Ina) 26 Desember 2025',
    badge: 'Event'
  },
  {
    date: '31 Desember 2025',
    title: 'Ibadah Malam Tahun Baru',
    content: 'Ibadah malam tahun baru 31 Desember 2025',
    badge: 'Event'
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
