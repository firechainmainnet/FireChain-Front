// 📁 components/TokenomicsPanel.jsx
'use client'

import { useTranslation } from '../i18n/LanguageContext'
import useTokenomicsData from '../hooks/useTokenomicsData'
import { useAuth } from '../context/AuthContext'
import TokenomicsBlocks from './TokenomicsBlocks'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function TokenomicsPanel() {
  const { t } = useTranslation()
  const { data, loading, error } = useTokenomicsData()
  const { user } = useAuth()

  const [mounted, setMounted] = useState(false)
  const [resolvedTheme, setResolvedTheme] = useState('light')

  // 🌓 Tema escuro/claro
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
        mt-12
        mx-auto
        max-w-7xl
        px-4
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        items-center
        lg:min-h-[540px]
        animate-fadeInUp
      "
    >
      {/* 🖼 Coluna 1: Imagem institucional */}
      {mounted && (
        <div className="flex justify-center items-center w-full">
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
        </div>
      )}

      {/* 📊 Coluna 2: Painel tokenomics */}
      <div className="w-full">
        <TokenomicsBlocks data={data} t={t} user={user} />
      </div>
    </section>
  )
}
