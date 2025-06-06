// components/Tooltip.jsx

import { FaShieldAlt } from 'react-icons/fa'
import { useTranslation } from '../i18n/LanguageContext'

import AppTooltip from './ui/AppTooltip'     // 🎯 Tooltip reutilizável
import AppButton from './ui/AppButton'       // 🎯 Botão com suporte a variante + estilo pill
import IconWrapper from './ui/IconWrapper'   // 🎯 Padronização de ícones

export default function TooltipExample() {
  const { t, ready } = useTranslation()

  if (!ready) return null

  return (
    <AppTooltip content={t('tooltipContent')} side="top">
      <AppButton
        variant="primary"
        rounded="pill"
        className="px-5 py-2 gap-2 text-sm"
      >
        <IconWrapper size={4} className="text-white">
          <FaShieldAlt />
        </IconWrapper>
        {t('tooltip')}
      </AppButton>
    </AppTooltip>
  )
}
