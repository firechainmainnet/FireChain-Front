// 📁 components/TokenomicsPanel.jsx
'use client'

import { useTranslation } from '../i18n/LanguageContext'
import useTokenomicsData from '../hooks/useTokenomicsData'
import { useAuth } from '../context/AuthContext'
import TokenomicsBlocks from './TokenomicsBlocks'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiOutlinePresentationChartBar } from 'react-icons/hi2' // 📊 Ícone institucional técnico refinado

// 🎯 Animações institucionais premium
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function TokenomicsPanel() {
  const { t } = useTranslation()
  const { data, loading, error } = useTokenomicsData()
  const { user } = useAuth()

  const [mounted, setMounted] = useState(false)
  const [resolvedTheme, setResolvedTheme] = useState('light')

  // 🌓 Detectar tema ativo (light/dark)
  useEffect(() => {
    setMounted(true)
    const getCurrentTheme = () =>
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    setResolvedTheme(getCurrentTheme())

    const observer = new MutationObserver(() => {
      setResolvedTheme(getCurrentTheme())
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  if (loading || !data || error) return null

  return (
    <section
      className="
        relative
        mt-12
        mx-auto
        max-w-7xl
        px-4
        grid
        grid-cols-1
        lg:grid-cols-2
        lg:gap-x-20
        gap-y-12
        items-center
        overflow-hidden
        lg:min-h-[560px]
      "
    >
      {/* 🌌 Ambiente visual institucional (sem SVG externo) */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div
          className="w-full h-full opacity-[0.04] blur-sm"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff1 0 1px, transparent 1px 20px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* 🖼 Coluna 1: Ilustração institucional animada */}
      {mounted && (
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center w-full"
        >
          <div className="w-full max-w-full aspect-[4/3]">
            <Image
              key={resolvedTheme}
              src={`/oracle-frame-${resolvedTheme}.png`}
              alt="Painel institucional"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-2xl shadow-glass transition-all duration-500"
              priority
            />
          </div>
        </motion.div>
      )}

      {/* 📊 Coluna 2: Painel tokenomics refinado */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        className="
          w-full
          p-6 md:p-8
          rounded-2xl
          bg-glass
          shadow-glass
          border border-white/10
          backdrop-blur-md
          transition-all duration-500
          flex flex-col gap-6
        "
      >
        {/* 🧠 Cabeçalho institucional multilíngue com ícone */}
        <div>
          <h2 className="text-[1.5rem] font-bold tracking-tight text-foreground flex items-center gap-2">
            <HiOutlinePresentationChartBar className="text-primary drop-shadow-sm" size={20} />
            {t('tokenomics.title')}
          </h2>
          <p className="text-muted text-sm mt-1 leading-relaxed max-w-md">
            {t('tokenomics.subtitle')}
          </p>
        </div>

        {/* 🔗 Bloco de dados refinado */}
        <TokenomicsBlocks data={data} t={t} user={user} />
      </motion.div>
    </section>
  )
}
