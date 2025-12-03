import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ScheduleSection from './components/ScheduleSection'
import TimelineSection from './components/TimelineSection'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SnowEffect from './components/SnowEffect'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <HeroSection />
      <Navbar />
      <main id="main-content">
        <ServicesSection />
        <ScheduleSection />
        <TimelineSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <SnowEffect />
    </>
  )
}

export default App
