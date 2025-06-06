// 📁 components/LightNodesModalContent.jsx
// 🌐 Modal institucional dos Light Nodes FireChain — Comunicação descentralizada

import { useTranslation } from '../i18n/LanguageContext'
import { BiBroadcast } from 'react-icons/bi'
import { MdOutlineNetworkCheck, MdCloudOff } from 'react-icons/md'
import { BsLightningCharge } from 'react-icons/bs'

import AppTooltip from './ui/AppTooltip'
import IconWrapper from './ui/IconWrapper'

export default function LightNodesModalContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-7">
      {/* 🔰 Título com ícone técnico em tooltip */}
      <div className="flex items-center gap-2">
        <h2 className="text-primary text-base sm:text-lg md:text-xl font-semibold leading-tight">
          {t('lightNodes.title')}
        </h2>

        <AppTooltip
          side="right"
          className="z-[60]"
          content={
            <div className="text-left leading-snug space-y-2 text-xs sm:text-sm md:text-base max-w-xs">
              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-blue-500">
                  <BiBroadcast />
                </IconWrapper>
                <span>{t('lightNodes.tooltip.1')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-green-500">
                  <BsLightningCharge />
                </IconWrapper>
                <span>{t('lightNodes.tooltip.2')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-red-400">
                  <MdCloudOff />
                </IconWrapper>
                <span>{t('lightNodes.tooltip.3')}</span>
              </div>

              <div className="flex items-start gap-2">
                <IconWrapper size={4} color="text-purple-500">
                  <MdOutlineNetworkCheck />
                </IconWrapper>
                <span>{t('lightNodes.tooltip.4')}</span>
              </div>
            </div>
          }
        >
          <IconWrapper
            size={4}
            color="text-muted hover:text-accent transition"
            className="cursor-help"
          >
            <BiBroadcast />
          </IconWrapper>
        </AppTooltip>
      </div>

      {/* 📘 Parágrafo institucional descritivo */}
      <p className="text-muted leading-relaxed text-xs sm:text-sm md:text-base">
        {t('lightNodes.description')}
      </p>
    </div>
  )
}
