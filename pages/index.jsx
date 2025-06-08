// 📁 pages/index.jsx

import { Suspense, lazy } from 'react'
import { FaFire } from 'react-icons/fa'

import { useTranslation } from '../i18n/LanguageContext'
import IconWrapper from '../components/ui/IconWrapper'
import AppLoader from '../components/ui/AppLoader'
import AppHeadlineRotator from '../components/ui/AppHeadlineRotator'
import Footer from '../components/Footer'

// 🔁 Lazy loading institucional
const Navbar = lazy(() => import('../components/Navbar'))
const SecurityCTA = lazy(() => import('../components/SecurityCTA'))
const InstitutionalSlider = lazy(() => import('../components/InstitutionalSlider'))
const TokenomicsPanel = lazy(() => import('../components/TokenomicsPanel')) // ✅ Novo

export default function Home() {
  const { t, ready } = useTranslation()

  if (!ready) return <AppLoader fullscreen />

  return (
    <Suspense fallback={<AppLoader />}>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/* 🔝 Navbar institucional flutuante */}
        <Navbar />

        {/* 🎯 Conteúdo principal */}
        <main className="grow px-4 sm:px-8 pt-24 pb-12 flex flex-col items-center justify-start text-center gap-8 animate-fadeIn transition-colors duration-300 ease-in-out">
          {/* 🔥 Headline institucional */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary inline-flex items-center gap-3 leading-[1]">
            <IconWrapper size={8} color="text-primary" top={1}>
              <FaFire />
            </IconWrapper>
            {t('welcome')}
          </h1>

          {/* ✍️ Frase rotativa com digitação */}
          <AppHeadlineRotator />

          {/* 🎟️ Slider institucional com pílulas */}
          <div className="animate-fadeInDown">
            <InstitutionalSlider />
          </div>

          {/* 💹 Painel institucional de tokenomics */}
          <div className="w-full animate-fadeInUp">
            <TokenomicsPanel />
          </div>

          {/* 🧠 CTA direto opcional */}
          {/* <SecurityCTA /> */}
        </main>

        {/* 🔻 Rodapé institucional */}
        <Footer />
      </div>
    </Suspense>
  )
}
