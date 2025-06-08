// 📁 components/InstitutionalPill.jsx
// 🎟️ Pílula institucional refinada com integração modal + callback de retomada do scroll

import { useState } from 'react'
import { motion } from 'framer-motion'

import AppModal from './ui/AppModal'
import IconWrapper from './ui/IconWrapper'

export default function InstitutionalPill({
  icon,
  label,
  modalTitle,
  modalContent,
  onModalClose = () => {} // ✅ callback para scroll
}) {
  const [open, setOpen] = useState(false)

  // 🔁 Gerencia abertura/fechamento do modal + notifica scroll
  const handleModalChange = (isOpen) => {
    setOpen(isOpen)
    if (!isOpen) {
      onModalClose()
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        role="button"
        aria-label={label}
        whileTap={{ scale: 0.97 }}
        className="
          relative overflow-hidden hover-glint
          inline-flex items-center gap-3
          px-4 sm:px-5 md:px-6 py-2 sm:py-2.5
          rounded-full bg-glass border border-white/10
          backdrop-blur-md backdrop-saturate-150
          text-xs sm:text-sm xl:text-base font-medium text-foreground
          hover:scale-[1.02] hover:shadow-lg shadow-glass
          hover:ring-2 hover:ring-primary/30 ring-offset-2 ring-offset-background
          transition-all duration-200 ease-in-out
          whitespace-nowrap
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
        "
      >
        {/* 🧠 Ícone institucional */}
        <IconWrapper size={4} className="text-primary z-10">
          {icon}
        </IconWrapper>

        {/* 🧾 Título da pílula */}
        <span className="relative z-10">{label}</span>
      </motion.button>

      {/* 🔐 Modal refinado FireChain */}
      <AppModal open={open} onOpenChange={handleModalChange} title={modalTitle}>
        {modalContent}
      </AppModal>
    </>
  )
}
