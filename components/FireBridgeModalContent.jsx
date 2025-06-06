// 📁 components/FireBridgeModalContent.jsx
// 🔄 Modal institucional FireBridge — Interoperabilidade descentralizada real

import { useTranslation } from '../i18n/LanguageContext'
import { HiArrowsRightLeft } from 'react-icons/hi2'
import { FaHandshake } from 'react-icons/fa'
import { BsShieldLockFill } from 'react-icons/bs'
import { RiFingerprintFill } from 'react-icons/ri'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function FireBridgeModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com ícone técnico em tooltip */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('fireBridge.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <HiArrowsRightLeft />
                </IconWrapper>
                <span>{t('fireBridge.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <FaHandshake />
                </IconWrapper>
                <span>{t('fireBridge.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <BsShieldLockFill />
                </IconWrapper>
                <span>{t('fireBridge.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-purple-500">
                  <RiFingerprintFill />
                </IconWrapper>
                <span>{t('fireBridge.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <HiArrowsRightLeft />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Descrição institucional do FireBridge */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('fireBridge.description')}
      </p>
    </div>
  )
}
