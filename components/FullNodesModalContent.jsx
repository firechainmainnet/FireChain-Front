// 📁 components/FullNodesModalContent.jsx
// 🧱 Modal institucional dos Full Nodes FireChain — Soberania offline real

import { useTranslation } from '../i18n/LanguageContext'
import { GoShieldLock } from 'react-icons/go'
import { BsHddNetwork } from 'react-icons/bs'
import { MdOfflineBolt } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function FullNodesModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com ícone técnico em tooltip */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('fullNodes.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <MdOfflineBolt />
                </IconWrapper>
                <span>{t('fullNodes.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <BsHddNetwork />
                </IconWrapper>
                <span>{t('fullNodes.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-indigo-500">
                  <FaLock />
                </IconWrapper>
                <span>{t('fullNodes.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <GoShieldLock />
                </IconWrapper>
                <span>{t('fullNodes.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <MdOfflineBolt />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Parágrafo institucional descritivo */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('fullNodes.description')}
      </p>
    </div>
  )
}
