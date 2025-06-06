// 📁 components/ui/IconWrapper.jsx
// 🎯 Wrapper visual para ícones SVG com alinhamento, tamanho, cor e sombra personalizáveis

import clsx from 'clsx'

export default function IconWrapper({
  children,             // ⬅️ Ícone SVG React
  size = 6,             // 📏 Tamanho: 4 → w-4 h-4, 6 → w-6 h-6...
  color = 'text-current', // 🎨 Cor Tailwind ou herdada
  top = 0,              // 🔼 Ajuste fino de alinhamento vertical (em pixels)
  shadow = true,        // 🌫️ Se aplica sombra
  className = ''        // 🎨 Classe extra opcional
}) {
  return (
    <span
      className={clsx(
        `inline-flex items-center justify-center flex-shrink-0`,
        `w-${size} h-${size}`,
        color,
        shadow && 'drop-shadow-sm',
        className
      )}
      style={top !== 0 ? { position: 'relative', top: `-${top}px` } : {}}
    >
      {children}
    </span>
  )
}
