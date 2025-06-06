// 📁 components/ui/AppInput.jsx
// 🧠 Input institucional com label flutuante e UI refinada

import clsx from 'clsx'

export default function AppInput({
  label,
  type = 'text',
  value,
  onChange,
  error = '',
  className = '',
  ...props
}) {
  const hasContent = value && value.length > 0

  return (
    <div className={clsx('relative w-full', className)}>
      {/* 🔤 Label flutuante */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={clsx(
          'peer block w-full rounded-md bg-surface text-foreground',
          'border border-border px-3 pt-5 pb-2 text-sm',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
          'transition-all duration-200 ease-in-out',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500'
        )}
        {...props}
      />
      <label
        className={clsx(
          'absolute left-3 top-2 text-xs text-muted transition-all duration-200 ease-in-out',
          'peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted',
          'peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary'
        )}
      >
        {label}
      </label>

      {/* ❌ Mensagem de erro */}
      {error && (
        <p className="text-xs text-red-600 mt-1 font-medium">
          {error}
        </p>
      )}
    </div>
  )
}
