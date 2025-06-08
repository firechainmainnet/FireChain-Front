// 📁 components/ui/ConnectedUserUID.jsx
// 🔐 UID conectado com botão copiar e feedback visual institucional

import { toast } from 'react-hot-toast'
import { FiCopy } from 'react-icons/fi'

export default function ConnectedUserUID({ user, t }) {
  if (!user?.uid) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(user.uid)
    toast.success(t('tokenomics.copy_success'))
  }

  return (
    <div className="mt-10 text-sm text-center space-y-2">
      <p className="text-muted">{t('tokenomics.connected_account')}</p>
      <div className="flex justify-center items-center gap-2">
        <code className="bg-glass px-3 py-2 rounded-md text-xs select-text">
          {user.uid}
        </code>
        <button
          onClick={handleCopy}
          className="p-2 hover:text-primary transition text-muted"
          aria-label={t('tokenomics.copy')}
        >
          <FiCopy size={16} />
        </button>
      </div>
    </div>
  )
}
