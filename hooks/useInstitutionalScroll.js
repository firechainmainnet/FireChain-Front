// 📁 hooks/useInstitutionalScroll.js
// 🧠 Scroll infinito com reset antecipado e sem gaps visuais

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
    const container = containerRef.current

    const animate = () => {
      if (!pause) {
        const directionFactor = direction === 'left' ? -1 : 1
        offsetRef.current += directionFactor * speed

        const trackWidth = track.scrollWidth
        const containerWidth = container.offsetWidth

        // ⛔ margem antes do vazio → reseta mais cedo
        const resetThreshold = (trackWidth / 2) - containerWidth

        if (Math.abs(offsetRef.current) >= resetThreshold) {
          offsetRef.current = 0 // 🔁 reset natural
        }

        track.style.transform = `translateX(${offsetRef.current}px)`
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameRef.current)
  }, [pause, speed, direction, containerRef, trackRef])
}
