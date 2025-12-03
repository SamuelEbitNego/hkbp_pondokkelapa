import React, { useEffect } from 'react'
import './HeroSection.css'

function HeroSection() {
  useEffect(() => {

    const heroContainer = document.querySelector('.hero-container')
    if (heroContainer) {
      for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div')
        snowflake.classList.add('snowflake')
        snowflake.textContent = '❄'
        snowflake.style.left = Math.random() * 100 + '%'
        snowflake.style.animationDelay = Math.random() * 5 + 's'
        snowflake.style.animationDuration = (Math.random() * 3 + 5) + 's'
        heroContainer.appendChild(snowflake)
      }
    }

    const church = document.querySelector('.church')
    if (church) {
      for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div')
        sparkle.classList.add('sparkle')
        sparkle.style.left = Math.random() * 100 + '%'
        sparkle.style.top = Math.random() * 100 + '%'
        sparkle.style.animationDelay = Math.random() * 2 + 's'
        church.appendChild(sparkle)
      }
    }
  }, [])

  return (
    <section className="hero-section" id="hero" role="banner">
      <div className="hero-container">
        <h1 className="snow-text">HKBP Pondok Kelapa</h1>

        <div className="church">
          <div className="church-container">
            <div className="cross"></div>
            <div className="roof-cross"></div>
            <div className="tower-roof"></div>
            <div className="tower"></div>
            <div className="roof"></div>
            <div className="main-body">
              <div className="window window1"></div>
              <div className="window window2"></div>
              <div className="window window3"></div>
              <div className="window window4"></div>
              <div className="door"></div>
            </div>
            <div className="side-tower left">
              <div className="side-tower-roof"></div>
            </div>
            <div className="side-tower right">
              <div className="side-tower-roof"></div>
            </div>
            <div className="ornament ornament1"></div>
            <div className="ornament ornament2"></div>
            <div className="ornament ornament3"></div>
            <div className="ornament ornament4"></div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
