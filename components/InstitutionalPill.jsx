// 📁 components/InstitutionalPill.jsx
// 🎟️ Pílula institucional refinada com callback de retomada do scroll após fechar modal

import { useState } from 'react'
import { motion } from 'framer-motion'

import AppModal from './ui/AppModal'
import IconWrapper from './ui/IconWrapper'

export default function InstitutionalPill({
  icon,
  label,
  modalTitle,
  modalContent,
  onModalClose = () => {} // ✅ callback opcional
}) {
  const [open, setOpen] = useState(false)

  // 🧠 Responsável por abrir/fechar modal + notificar scroll
  const handleModalChange = (isOpen) => {
    setOpen(isOpen)
    if (!isOpen) {
      onModalClose() // ✅ quando modal for fechado, retoma scroll
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
          text-sm sm:text-base font-medium text-foreground
          hover:scale-[1.02] hover:shadow-xl shadow-glass
          hover:ring-2 hover:ring-primary ring-offset-2 ring-offset-background
          transition-all duration-200 ease-in-out
          whitespace-nowrap
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
        "
      >
        <IconWrapper size={4} className="text-primary z-10">
          {icon}
        </IconWrapper>
        <span className="relative z-10">{label}</span>
      </motion.button>

      <AppModal open={open} onOpenChange={handleModalChange} title={modalTitle}>
        {modalContent}
      </AppModal>
    </>
  )
}
