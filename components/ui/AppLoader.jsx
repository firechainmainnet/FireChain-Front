// 📁 components/ui/AppLoader.jsx
// 🔄 Loader compacto para fallback (pode ser reaproveitado)

import { FaFire } from 'react-icons/fa'

export default function AppLoader({ fullscreen = false }) {
  const base = (
    <div className="flex flex-col items-center justify-center gap-2 animate-fadeIn text-primary">
      <FaFire className="w-8 h-8 animate-pulse drop-shadow" />
      <span className="text-sm text-muted">Carregando...</span>
    </div>
  )

  return fullscreen ? (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground transition-colors duration-300 ease-in-out">
      {base}
    </div>
  ) : (
    <div className="w-full flex justify-center py-10">{base}</div>
  )
}
