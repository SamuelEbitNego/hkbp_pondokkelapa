import { useEffect, useRef } from 'react'

/**
 * Attach the returned ref to a container element. Every descendant carrying the
 * `.reveal` class (and the container itself, if it has it) gets the `.visible`
 * class added the first time it scrolls into view, triggering the CSS reveal
 * animation. Replaces the duplicated IntersectionObserver logic across sections.
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
} = {}) {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const targets = []
    if (root.classList.contains('reveal')) targets.push(root)
    root.querySelectorAll('.reveal').forEach((el) => targets.push(el))
    if (targets.length === 0) return

    // Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return rootRef
}
