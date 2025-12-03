import React, { useEffect } from 'react'
import './SnowEffect.css'

function SnowEffect() {
  useEffect(() => {
    // Create global snowflakes for all sections
    const body = document.body
    const snowflakeCount = 20
    
    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div')
      snowflake.classList.add('body-snowflake')
      snowflake.textContent = '❄'
      snowflake.style.left = Math.random() * 100 + '%'
      snowflake.style.animationDelay = Math.random() * 15 + 's'
      snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's'
      snowflake.style.fontSize = (Math.random() * 10 + 15) + 'px'
      body.appendChild(snowflake)
    }

    // Cleanup on unmount
    return () => {
      const snowflakes = document.querySelectorAll('.body-snowflake')
      snowflakes.forEach(flake => flake.remove())
    }
  }, [])

  return null
}

export default SnowEffect
