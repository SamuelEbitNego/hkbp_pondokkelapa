import React from 'react'
import useScrollProgress from '../hooks/useScrollProgress'
import './ScrollProgress.css'

function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

export default ScrollProgress
