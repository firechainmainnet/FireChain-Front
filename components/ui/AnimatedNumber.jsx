// 📁 components/ui/AnimatedNumber.jsx
// 🔢 Animação institucional fluida com interpolação visual + efeitos premium

import { useEffect, useRef, useState } from 'react'

export default function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 2,
  duration = 800,
  locale = 'pt-BR'
}) {
  const elRef = useRef(null)
  const animationRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(value)
  const [visualClass, setVisualClass] = useState('')

  const previousValueRef = useRef(value)

  useEffect(() => {
    // 🛑 Evita animação desnecessária
    if (previousValueRef.current === value) return

    const from = previousValueRef.current
    const to = value
    previousValueRef.current = value

    const startTime = performance.now()

    cancelAnimationFrame(animationRef.current)

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const interpolated = from + (to - from) * progress

      setDisplayValue(interpolated)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayValue(to)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    // 🌈 Aplica animações visuais
    setVisualClass(to > from ? 'animated-rise glow-flash' : 'animated-fall glow-flash')

    const cleanup = setTimeout(() => setVisualClass(''), duration + 100)

    return () => {
      clearTimeout(cleanup)
      cancelAnimationFrame(animationRef.current)
    }
  }, [value, duration])

  return (
    <div
      ref={elRef}
      className={`font-bold oracle-price-number transition-colors duration-500 ${visualClass} ${className}`}
    >
      {prefix}
      {Number(displayValue).toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </div>
  )
}
