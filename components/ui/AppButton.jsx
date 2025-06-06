// 📁 components/ui/AppButton.jsx
// 🎯 Botão reutilizável com variantes, estilo pill e animação suave

import clsx from 'clsx'

export default function AppButton({
  children,
  type = 'button',
  onClick,
  variant = 'primary',
  rounded = 'md', // 🔁 Estilo de borda: 'md' | 'lg' | 'pill'
  disabled = false,
  className = '',
  ...props
}) {
  // 🎨 Mapas de variantes visuais
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-600 focus:ring-primary',
    secondary: 'bg-surface text-foreground border border-border hover:bg-muted/10 focus:ring-secondary',
    ghost: 'bg-transparent text-muted hover:text-primary hover:bg-muted/10 focus:ring-primary',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  }

  // 🟣 Estilo de borda (pill, etc)
  const roundedMap = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full'
  }

  // 🧱 Estilo base + animação suave
  const baseStyles = 'inline-flex items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        roundedMap[rounded] || 'rounded-md',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
