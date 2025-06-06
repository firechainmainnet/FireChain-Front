// 📁 components/CliWalletModalContent.jsx
// ⌨️ Modal institucional da Wallet CLI — Autocustódia técnica auditável

import { useTranslation } from '../i18n/LanguageContext'
import { BsTerminalFill } from 'react-icons/bs'
import { TbLockAccess } from 'react-icons/tb'
import { RiFileShieldFill } from 'react-icons/ri'
import { FaGhost } from 'react-icons/fa'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function CliWalletModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título + tooltip técnico */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('cliWallet.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <BsTerminalFill />
                </IconWrapper>
                <span>{t('cliWallet.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <TbLockAccess />
                </IconWrapper>
                <span>{t('cliWallet.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-indigo-400">
                  <RiFileShieldFill />
                </IconWrapper>
                <span>{t('cliWallet.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <FaGhost />
                </IconWrapper>
                <span>{t('cliWallet.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <BsTerminalFill />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Descrição institucional */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('cliWallet.description')}
      </p>
    </div>
  )
}
