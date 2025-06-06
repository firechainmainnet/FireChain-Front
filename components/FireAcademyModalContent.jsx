// 📁 components/FireAcademyModalContent.jsx
// 🎓 Modal institucional da Fire Academy — Educação soberana e técnica

import { useTranslation } from '../i18n/LanguageContext'
import { FaGraduationCap } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BiGlasses } from 'react-icons/bi'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function FireAcademyModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com tooltip técnico */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('fireAcademy.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-yellow-400">
                  <FaGraduationCap />
                </IconWrapper>
                <span>{t('fireAcademy.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <RiLockPasswordFill />
                </IconWrapper>
                <span>{t('fireAcademy.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <BiGlasses />
                </IconWrapper>
                <span>{t('fireAcademy.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <HiOutlineGlobeAlt />
                </IconWrapper>
                <span>{t('fireAcademy.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <FaGraduationCap />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Parágrafo descritivo institucional */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('fireAcademy.description')}
      </p>
    </div>
  )
}
