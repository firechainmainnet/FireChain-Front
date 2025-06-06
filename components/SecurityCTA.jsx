// 📁 components/SecurityCTA.jsx
// 🛡️ Botão institucional que abre modal com explicação de segurança FireChain

import { useState, lazy, Suspense } from 'react'
import { FaShieldAlt } from 'react-icons/fa'

import AppButton from './ui/AppButton'
import IconWrapper from './ui/IconWrapper'
import AppLoader from './ui/AppLoader'
import AppModal from './ui/AppModal'
import { useTranslation } from '../i18n/LanguageContext'

// 🔁 Lazy loading do conteúdo do modal
const SecurityModalContent = lazy(() => import('./SecurityModalContent'))

export default function SecurityCTA() {
  const { t, ready } = useTranslation()
  const [open, setOpen] = useState(false)

  if (!ready) return null

  return (
    <>
      {/* 🎯 Botão CTA */}
      <AppButton
        variant="primary"
        rounded="pill"
        className="px-5 py-2 gap-2 text-sm"
        onClick={() => setOpen(true)}
      >
        <IconWrapper size={4} className="text-white">
          <FaShieldAlt />
        </IconWrapper>
        {t('tooltip')}
      </AppButton>

      {/* 🔐 Modal institucional */}
      <AppModal open={open} onOpenChange={setOpen} title={t('tooltip')}>
        <Suspense fallback={<AppLoader />}>
          <SecurityModalContent />
        </Suspense>
      </AppModal>
    </>
  )
}
