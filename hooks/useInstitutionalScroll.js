// 📁 hooks/useInstitutionalScroll.js
// 🎯 Scroll com offset persistente para UX premium

import { useEffect, useRef } from 'react'

export default function useInstitutionalScroll({
  containerRef,
  trackRef,
  speed = 0.5,
  pause = false,
  direction = 'left'
}) {
  const frameRef = useRef(null)
  const offsetRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return

    const track = trackRef.current

    const animate = () => {
      if (!pause) {
        const directionFactor = direction === 'left' ? -1 : 1
        offsetRef.current += directionFactor * speed

        const resetPoint = -track.scrollWidth / 2

        if (offsetRef.current <= resetPoint) offsetRef.current = 0
        if (offsetRef.current >= 0) offsetRef.current = resetPoint

        track.style.transform = `translateX(${offsetRef.current}px)`
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameRef.current)
  }, [pause, speed, direction, containerRef, trackRef])
}
