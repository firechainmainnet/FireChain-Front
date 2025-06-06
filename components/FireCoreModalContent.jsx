// 📁 components/FireCoreModalContent.jsx
// 🧩 Modal institucional FireCore SDK — Desenvolvimento soberano auditável

import { useTranslation } from '../i18n/LanguageContext'
import { FaCodeBranch } from 'react-icons/fa'
import { RiFingerprintLine } from 'react-icons/ri'
import { MdOutlineOfflineBolt } from 'react-icons/md'
import { SiWebassembly } from 'react-icons/si'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function FireCoreModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com tooltip técnico */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('fireCore.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-orange-500">
                  <FaCodeBranch />
                </IconWrapper>
                <span>{t('fireCore.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-indigo-500">
                  <RiFingerprintLine />
                </IconWrapper>
                <span>{t('fireCore.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <MdOutlineOfflineBolt />
                </IconWrapper>
                <span>{t('fireCore.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <SiWebassembly />
                </IconWrapper>
                <span>{t('fireCore.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <FaCodeBranch />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Descrição institucional do SDK */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('fireCore.description')}
      </p>
    </div>
  )
}
