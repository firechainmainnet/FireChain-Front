// 📁 components/SecurityModalContent.jsx
// 🔐 Conteúdo institucional da blindagem FireChain, com UI/UX refinado e responsivo

import { useTranslation } from '../i18n/LanguageContext'
import { FaShieldAlt } from 'react-icons/fa'
import { RiFingerprintFill } from 'react-icons/ri'
import { BiGitCompare } from 'react-icons/bi'
import { BsCodeSlash } from 'react-icons/bs'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function SecurityModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com tooltip técnico */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('security.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <FaShieldAlt />
                </IconWrapper>
                <span>{t('security.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-purple-500">
                  <RiFingerprintFill />
                </IconWrapper>
                <span>{t('security.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <BiGitCompare />
                </IconWrapper>
                <span>{t('security.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-500">
                  <BsCodeSlash />
                </IconWrapper>
                <span>{t('security.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <FaShieldAlt />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Parágrafo técnico institucional */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('security.description')}
      </p>
    </div>
  )
}
