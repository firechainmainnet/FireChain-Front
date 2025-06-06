// 📁 components/OracleModalContent.jsx
// 🔮 Modal institucional dos Oracles FireChain (dados externos validados com segurança)

import { useTranslation } from '../i18n/LanguageContext'
import { BiTransfer } from 'react-icons/bi'
import { MdOutlinePriceChange } from 'react-icons/md'
import { RiDatabase2Line } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function OracleModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com ícone técnico em tooltip */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('oracle.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <BiTransfer />
                </IconWrapper>
                <span>{t('oracle.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-amber-500">
                  <MdOutlinePriceChange />
                </IconWrapper>
                <span>{t('oracle.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-indigo-400">
                  <RiDatabase2Line />
                </IconWrapper>
                <span>{t('oracle.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <FaServer />
                </IconWrapper>
                <span>{t('oracle.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <BiTransfer />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Parágrafo institucional do Oracle */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('oracle.description')}
      </p>
    </div>
  )
}
