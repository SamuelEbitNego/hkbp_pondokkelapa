import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChurch,
  faVideo,
  faPeopleGroup,
  faChild,
} from '@fortawesome/free-solid-svg-icons'
import useScrollReveal from '../hooks/useScrollReveal'
import './PengurusSection.css'

// Data contoh — ganti nama, jabatan, dan foto sesuai data sebenarnya.
// Tambahkan properti `photo: '/foto/nama.jpg'` pada anggota untuk memakai foto asli
// (jika kosong, avatar otomatis menampilkan inisial).
const groups = [
  {
    id: 'parhalado',
    icon: faChurch,
    title: 'Parhalado',
    subtitle: 'Majelis pelayan gereja — Pendeta dan Sintua.',
    members: [
      { name: 'Pdt. Albert. Manalu, S.Th.', role: 'Pendeta Ressort', initials: 'BS' },
      { name: 'St. J. Simatupang', role: 'Sintua', initials: 'JS' },
      { name: 'St. R. Hutagalung', role: 'Sintua', initials: 'RH' },
      { name: 'St. M. br. Sitorus', role: 'Sintua', initials: 'MS' },
      { name: 'St. D. Panjaitan', role: 'Sintua', initials: 'DP' },
      { name: 'St. P. Manalu', role: 'Sintua', initials: 'PM' },
    ],
  },
  {
    id: 'multimedia',
    icon: faVideo,
    title: 'Multimedia',
    subtitle: 'Tim pelayanan audio, visual, dan siaran ibadah.',
    members: [
      { name: 'St. Pimpin Hutasoit', role: 'Huria Multimedia', initials: 'PH' },
      { name: 'Cst. Yosua Manurung', role: 'Ketua Multimedia', initials: 'YM' },
      { name: 'William Turnip', role: 'Anggota', initials: 'WT' },
      { name: 'Norton Sipahutar', role: 'Anggota', initials: 'NS' },
      { name: 'Samuel Sihite', role: 'Anggota', initials: 'SS' },
      { name: 'Hery Sitompul', role: 'Anggota', initials: 'HS' },
      { name: 'Matthew Lumban Batu', role: 'Anggota', initials: 'ML' },
      { name: 'Christin Sitompul', role: 'Anggota', initials: 'CS' },
      { name: 'Wahyu Gultom', role: 'Anggota', initials: 'WG' },
    ],
  },
  {
    id: 'remaja-naposo',
    icon: faPeopleGroup,
    title: 'Pengurus Remaja dan Naposo',
    subtitle: 'Pengurus persekutuan remaja dan naposo bulung.',
    members: [
      { name: 'Grace Silitonga', role: 'Ketua Naposo', initials: 'GS' },
      { name: 'G. Simbolon', role: 'Wakil Ketua', initials: 'GS' },
      { name: 'H. Pardede', role: 'Sekretaris', initials: 'HP' },
      { name: 'I. Napitupulu', role: 'Bendahara', initials: 'IN' },
      { name: 'J. Sihombing', role: 'Koordinator Acara', initials: 'JS' },
    ],
  },
  {
    id: 'sekolah-minggu',
    icon: faChild,
    title: 'Sekolah Minggu',
    subtitle: 'Guru-guru pendamping iman anak-anak jemaat.',
    members: [
      { name: 'Ibu R. Manurung', role: 'Koordinator', initials: 'RM' },
      { name: 'Sr. L. Samosir', role: 'Guru', initials: 'LS' },
      { name: 'Ibu T. Aritonang', role: 'Guru', initials: 'TA' },
      { name: 'Sr. M. Gultom', role: 'Guru', initials: 'MG' },
      { name: 'Ibu N. Purba', role: 'Guru', initials: 'NP' },
    ],
  },
]

function PersonCard({ member, index }) {
  return (
    <article
      className="person-card reveal reveal--up"
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className="person-avatar" aria-hidden={member.photo ? undefined : 'true'}>
        {member.photo ? (
          <img src={member.photo} alt={member.name} loading="lazy" />
        ) : (
          <span>{member.initials}</span>
        )}
      </div>
      <h4 className="person-name">{member.name}</h4>
      <span className="person-role">{member.role}</span>
    </article>
  )
}

function PengurusGroup({ group }) {
  return (
    <div className="pengurus-group" id={group.id}>
      <div className="pengurus-group-head reveal">
        <span className="pengurus-group-icon" aria-hidden="true">
          <FontAwesomeIcon icon={group.icon} />
        </span>
        <div className="pengurus-group-heading">
          <h3 className="pengurus-group-title">{group.title}</h3>
          <p className="pengurus-group-sub">{group.subtitle}</p>
        </div>
        <span className="pengurus-group-count" aria-hidden="true">
          {group.members.length} orang
        </span>
      </div>

      <div className="pengurus-grid">
        {group.members.map((member, i) => (
          <PersonCard member={member} index={i} key={member.name} />
        ))}
      </div>
    </div>
  )
}

function PengurusSection() {
  const ref = useScrollReveal()

  return (
    <section
      className="pengurus section section--navy"
      id="pengurus"
      aria-labelledby="pengurus-title"
      ref={ref}
    >
      <span className="section-aura" style={{ top: '-6%', right: '-8%' }} aria-hidden="true"></span>

      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Pengurus &amp; Pelayan</span>
          <h2 className="section-title" id="pengurus-title">
            Mereka yang Melayani Jemaat
          </h2>
          <p className="section-subtitle">
            Para pelayan dan pengurus yang setia mengabdi di HKBP Pondok Kelapa.
            <em> Nama dan foto berikut hanya contoh.</em>
          </p>
        </div>

        <div className="pengurus-groups">
          {groups.map((group) => (
            <PengurusGroup group={group} key={group.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PengurusSection
