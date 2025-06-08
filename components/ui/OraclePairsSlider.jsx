import { useState, useRef, useEffect } from 'react'
import AnimatedNumber from './AnimatedNumber'
import Image from 'next/image'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function OraclePairsSlider({ pairs = [] }) {
  const tickerRef = useRef(null)
  const frameRef = useRef(null)
  const pauseRef = useRef(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)

  const SPEED = 0.5 // velocidade institucional
  const [x, setX] = useState(0)
  const duplicatedPairs = [...pairs, ...pairs] // 🔁 conteúdo duplicado

  // 🌀 Loop contínuo com pause condicionado
  useEffect(() => {
    const animate = () => {
      if (!pauseRef.current) {
        setX((prev) => {
          const totalWidth = tickerRef.current?.scrollWidth / 2 || 1
          const next = prev - SPEED // esquerda → direita
          return next <= -totalWidth ? 0 : next
        })
      }
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  // 🖱️ Arraste manual
  const handlePointerDown = (e) => {
    pauseRef.current = true
    isDragging.current = true
    dragStartX.current = e.clientX || e.touches?.[0]?.clientX || 0
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current) return
    const currentX = e.clientX || e.touches?.[0]?.clientX || 0
    const delta = currentX - dragStartX.current
    setX((prev) => prev + delta)
    dragStartX.current = currentX
  }

  const handlePointerUp = () => {
    isDragging.current = false
    pauseRef.current = false
  }

  // 🖱️ Pause no hover
  const handleMouseEnter = () => {
    pauseRef.current = true
  }

  const handleMouseLeave = () => {
    if (!isDragging.current) pauseRef.current = false
  }

  return (
    <div
      className="w-full overflow-hidden py-6 select-none touch-pan-x"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={tickerRef}
        className="flex gap-3 w-max px-4 will-change-transform transition-transform"
        style={{ transform: `translateX(${x}px)` }}
      >
        {duplicatedPairs.map((pair, idx) => (
          <div
            key={`pair-${idx}`}
            className="
              min-w-[150px] px-4 py-[6px]
              rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md
              border border-white/10 shadow-sm
              hover:ring-2 hover:ring-primary transition-all duration-300
              flex items-center justify-between gap-3
            "
          >
            {/* 🪙 Ícone + Label */}
            <div className="flex items-center gap-2">
              <Image
                src={pair.icon}
                alt={pair.label}
                width={18}
                height={18}
                className="w-5 h-5 object-contain rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
              />
              <span className="text-[11.5px] font-medium text-muted">{pair.label}</span>
            </div>

            {/* 💰 Valor + variação */}
            <div className="flex items-center gap-1 text-[12px] font-mono text-foreground font-semibold whitespace-nowrap">
              <AnimatedNumber
                value={pair.value}
                prefix={pair.label.includes('USDT') ? '$ ' : 'R$ '}
                decimals={pair.decimals ?? 2}
              />
              {typeof pair.variation === 'number' && (
                <span
                  className={`text-[10px] font-semibold flex items-center gap-1 ${
                    pair.variation >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {pair.variation >= 0 ? <FaArrowUp size={9} /> : <FaArrowDown size={9} />}
                  {pair.variation.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
