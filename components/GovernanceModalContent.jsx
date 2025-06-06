// 📁 components/GovernanceModalContent.jsx
// 🧭 Modal institucional da Governança FireChain (descentralizada e meritocrática)

import { useTranslation } from '../i18n/LanguageContext'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { TbListSearch } from 'react-icons/tb'
import { RiShieldUserLine } from 'react-icons/ri'
import { GoDatabase } from 'react-icons/go'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function GovernanceModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com ícone em tooltip técnico */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('governance.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <HiOutlineUserGroup />
                </IconWrapper>
                <span>{t('governance.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <TbListSearch />
                </IconWrapper>
                <span>{t('governance.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <RiShieldUserLine />
                </IconWrapper>
                <span>{t('governance.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-purple-500">
                  <GoDatabase />
                </IconWrapper>
                <span>{t('governance.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <HiOutlineUserGroup />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Descrição institucional completa */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('governance.description')}
      </p>
    </div>
  )
}
