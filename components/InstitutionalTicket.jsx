// 📁 components/InstitutionalTicket.jsx
// 🎟️ Visual institucional refinado com UI/UX premium FireChain

import { useState } from 'react'
import AppModal from './ui/AppModal'
import IconWrapper from './ui/IconWrapper'

export default function InstitutionalTicket({ icon, title, modalTitle, modalContent }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          flex flex-col items-center justify-center gap-3
          w-full max-w-[200px] md:max-w-[220px] xl:max-w-[240px]
          px-6 py-5 rounded-xl bg-glass backdrop-blur-md backdrop-saturate-150
          border border-white/10 shadow-lg text-center
          transition-all duration-300 hover:scale-[1.03] hover:shadow-xl
          hover:ring-2 hover:ring-primary ring-offset-2 ring-offset-background
          focus:outline-none cursor-pointer
        "
      >
        <IconWrapper size={6} className="text-primary drop-shadow-sm">
          {icon}
        </IconWrapper>

        <span className="text-sm sm:text-base font-semibold text-foreground tracking-tight leading-snug">
          {title}
        </span>
      </button>

      <AppModal open={open} onOpenChange={setOpen} title={modalTitle}>
        {modalContent}
      </AppModal>
    </>
  )
}
