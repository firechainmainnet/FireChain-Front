// 📁 hooks/useScrollDirection.js
// 🔁 Hook que detecta direção do scroll com throttling inteligente

import { useEffect, useState } from 'react'

export default function useScrollDirection({ threshold = 10, delay = 100 } = {}) {
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScroll = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrollDirection
}
