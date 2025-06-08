import { toast } from 'react-hot-toast'
import { FiCopy } from 'react-icons/fi'

export default function ConnectedUserUID({ user, t }) {
  if (!user?.uid) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(user.uid)
    toast.success(t('tokenomics.copy_success'))
  }

  return (
    <div className="
      mt-10 mb-4 px-4 py-5 mx-auto max-w-md
      bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl
      backdrop-blur-md shadow-md text-center
    ">
      <p className="text-sm text-white/60 tracking-wide mb-3">
        {t('tokenomics.connected_account')}
      </p>

      <div className="flex justify-center items-center gap-2">
        <code className="
          px-3 py-2 rounded-md text-xs select-text font-mono
          bg-black/10 dark:bg-white/10 text-muted
        ">
          {user.uid}
        </code>
        <button
          onClick={handleCopy}
          className="
            p-2 rounded-md text-white/60 hover:text-primary transition
            focus:outline-none focus:ring-2 focus:ring-primary/50
          "
          aria-label={t('tokenomics.copy')}
        >
          <FiCopy size={16} />
        </button>
      </div>
    </div>
  )
}
