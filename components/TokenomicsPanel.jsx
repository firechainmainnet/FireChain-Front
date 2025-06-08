'use client'

// 📦 Contextos e hooks
import { useTranslation } from '../i18n/LanguageContext'
import useTokenomicsData from '../hooks/useTokenomicsData'
import { useAuth } from '../context/AuthContext'

// 📄 Componentes visuais
import TokenomicsBlocks from './TokenomicsBlocks'
import Image from 'next/image'

// ⚙️ React
import { useEffect, useState } from 'react'

export default function TokenomicsPanel() {
  const { t } = useTranslation()
  const { data, loading, error } = useTokenomicsData()
  const { user } = useAuth()

  const [mounted, setMounted] = useState(false)
  const [resolvedTheme, setResolvedTheme] = useState('light')

  // 🌓 Detecta e sincroniza o tema visual
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
        lg:grid-cols-[auto_1fr]
        gap-12
        items-center
        lg:min-h-[540px]
        animate-fadeInUp
      "
    >
      {/* 🖼 Imagem institucional à esquerda */}
      {mounted && (
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[520px] aspect-[4/3]">
            <Image
              key={resolvedTheme}
              src={`/oracle-frame-${resolvedTheme}.png`}
              alt="Painel institucional"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-2xl shadow-glass transition-all duration-500"
              priority
            />
          </div>
        </div>
      )}

      {/* 📊 Blocos institucionais (com slide embutido) */}
      <div className="flex flex-col gap-6 max-w-full">
        <TokenomicsBlocks data={data} t={t} user={user} />
      </div>
    </section>
  )
}
