// 📁 components/ZKModalContent.jsx
// 🔐 Modal institucional Zero Knowledge da FireChain — 100% funcional

import { useTranslation } from '../i18n/LanguageContext'
import { BsEyeSlash } from 'react-icons/bs'
import { FaKey, FaShieldAlt } from 'react-icons/fa'
import { GiInvisible } from 'react-icons/gi'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function ZKModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com tooltip */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('zk.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-purple-500">
                  <BsEyeSlash />
                </IconWrapper>
                <span>{t('zk.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-pink-400">
                  <FaKey />
                </IconWrapper>
                <span>{t('zk.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <GiInvisible />
                </IconWrapper>
                <span>{t('zk.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <FaShieldAlt />
                </IconWrapper>
                <span>{t('zk.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <BsEyeSlash />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Descrição institucional ZK */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('zk.description')}
      </p>
    </div>
  )
}
