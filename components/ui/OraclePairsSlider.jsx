import { useEffect, useRef } from 'react'
import AnimatedNumber from './AnimatedNumber'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function OraclePairsSlider({ pairs = [] }) {
  const tickerRef = useRef(null)
  const x = useRef(0)
  const velocity = useRef(0.5)
  const frameRef = useRef(null)
  const isPaused = useRef(false)
  const isDragging = useRef(false)
  const lastX = useRef(0)
  const dragVelocity = useRef(0)
  const momentumFrame = useRef(null)
  const totalWidth = useRef(1)

  const duplicatedPairs = [...pairs, ...pairs]

  useEffect(() => {
    const updateSize = () => {
      if (tickerRef.current) totalWidth.current = tickerRef.current.scrollWidth / 2
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    let lastTime = performance.now()
    const animate = (now) => {
      const deltaTime = now - lastTime
      lastTime = now
      if (!isPaused.current && tickerRef.current) {
        x.current -= (velocity.current * deltaTime) / (1000 / 60)
        if (Math.abs(x.current) >= totalWidth.current) x.current = 0
        tickerRef.current.style.transform = `translate3d(${x.current}px, 0, 0) translateZ(0)`
      }
      frameRef.current = requestAnimationFrame(animate)
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  const handlePointerDown = (e) => {
    cancelAnimationFrame(momentumFrame.current)
    isPaused.current = true
    isDragging.current = true
    lastX.current = e.clientX || e.touches?.[0]?.clientX || 0
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current || !tickerRef.current) return
    const currentX = e.clientX || e.touches?.[0]?.clientX || 0
    const delta = currentX - lastX.current
    x.current += delta
    dragVelocity.current = delta
    lastX.current = currentX
    tickerRef.current.style.transform = `translate3d(${x.current}px, 0, 0) translateZ(0)`
  }

  const handlePointerUp = () => {
    isDragging.current = false
    const releaseMomentum = () => {
      dragVelocity.current *= 0.92
      if (Math.abs(dragVelocity.current) > 0.5 && tickerRef.current) {
        x.current += dragVelocity.current
        tickerRef.current.style.transform = `translate3d(${x.current}px, 0, 0) translateZ(0)`
        momentumFrame.current = requestAnimationFrame(releaseMomentum)
      } else {
        isPaused.current = false
      }
    }
    releaseMomentum()
  }

  const handleMouseEnter = () => { if (!isDragging.current) isPaused.current = true }
  const handleMouseLeave = () => { if (!isDragging.current) isPaused.current = false }

  return (
    <div
      className="w-full overflow-hidden py-5 select-none touch-pan-x"
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
        className="flex gap-3 w-max px-4 will-change-transform"
      >
        {duplicatedPairs.map((pair, idx) => {
          const asset = pair.label.split(' ')[1]?.toUpperCase() ?? ''
          const badgeColor =
            asset === 'BTC'
              ? 'bg-orange-100 text-orange-800 dark:bg-orange-500/10 dark:text-orange-300 border border-orange-300 dark:border-orange-400/20'
              : asset === 'ETH'
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-500/10 dark:text-purple-300 border border-purple-300 dark:border-purple-400/20'
              : asset === 'USDT'
              ? 'bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-300 border border-green-300 dark:border-green-400/20'
              : asset === 'BRL'
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-300 dark:border-blue-400/20'
              : 'bg-neutral-100 text-foreground dark:bg-white/5 border border-white/10'

          return (
            <motion.div
              key={`pair-${idx}`}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.25 }}
              className={`min-w-[160px] px-4 py-[5px] rounded-full text-[11px] font-medium ${badgeColor} shadow-sm hover:shadow-md hover-glint transition-all flex items-center justify-between gap-3`}
            >
              {/* 🪙 Ícone + Label */}
              <div className="group flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={pair.icon}
                    alt={pair.label}
                    width={18}
                    height={18}
                    className="w-5 h-5 object-contain rounded-full drop-shadow-sm"
                  />
                </motion.div>
                <span className="text-[11px] tracking-tight font-semibold">{pair.label}</span>
              </div>

              {/* 💰 Valor + Variação */}
              <div className="flex items-center gap-1 text-[11px] font-mono font-semibold">
                <motion.span whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
                  <AnimatedNumber
                    value={pair.value}
                    prefix={pair.label.includes('USDT') ? '$ ' : 'R$ '}
                    decimals={pair.decimals ?? 2}
                  />
                </motion.span>
                {typeof pair.variation === 'number' && (
                  <span className={`text-[10px] font-bold flex items-center gap-1 ${pair.variation >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {pair.variation >= 0 ? <FaArrowUp size={9} /> : <FaArrowDown size={9} />}
                    {pair.variation.toFixed(2)}%
                  </span>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
