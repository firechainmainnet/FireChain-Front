// 📁 components/FireTokenModalContent.jsx
// 🪙 Conteúdo institucional do FIRE Token com layout refinado e responsivo

import { useTranslation } from '../i18n/LanguageContext'
import { FaCoins } from 'react-icons/fa'
import { BsBarChartFill } from 'react-icons/bs'
import { MdOutlineNoAccounts } from 'react-icons/md'
import { HiOutlineSparkles } from 'react-icons/hi2'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function FireTokenModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com tooltip técnico */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('token.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-yellow-400">
                  <FaCoins />
                </IconWrapper>
                <span>{t('token.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <BsBarChartFill />
                </IconWrapper>
                <span>{t('token.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <MdOutlineNoAccounts />
                </IconWrapper>
                <span>{t('token.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-indigo-400">
                  <HiOutlineSparkles />
                </IconWrapper>
                <span>{t('token.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <FaCoins />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Parágrafo institucional do FIRE */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('token.description')}
      </p>
    </div>
  )
}
