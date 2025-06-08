// 📁 components/ui/ConnectedUserUID.jsx
// 🔐 UID conectado com botão copiar e feedback institucional refinado

import { toast } from 'react-hot-toast'
import { FiCopy } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ConnectedUserUID({ user, t }) {
  if (!user?.uid) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(user.uid)
    toast.success(t('tokenomics.copy_success'))
  }

  return (
    <div className="mt-10 text-[13px] text-center space-y-2 animate-fadeIn">
      {/* 🔗 Legenda institucional */}
      <p className="text-muted tracking-wide">{t('tokenomics.connected_account')}</p>

      {/* 🪪 UID visual com botão copiar */}
      <motion.div
        className="inline-flex items-center gap-2 bg-glass shadow-glass px-4 py-2 rounded-md text-xs font-mono select-text hover-glint transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <code className="text-foreground">{user.uid}</code>
        <button
          onClick={handleCopy}
          className="p-1 text-muted hover:text-primary focus:outline-none transition"
          aria-label={t('tokenomics.copy')}
        >
          <FiCopy size={14} />
        </button>
      </motion.div>
    </div>
  )
}
