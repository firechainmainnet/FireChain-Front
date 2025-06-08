import Image from 'next/image'
import AnimatedNumber from './AnimatedNumber'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

// 🔷 Bloco padrão institucional (ex: FIRE e Liquidez)
export function OracleBlock({ label, value, prefix, suffix, decimals = 2, variation, icon }) {
  const isDominance = suffix === '%'

  return (
    <div className="
      flex flex-col gap-2 px-5 py-4
      rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-md
      border border-black/10 dark:border-white/10
      shadow-md dark:shadow-lg ring-1 ring-black/5 dark:ring-white/5
      hover:ring-2 hover:ring-primary/40 dark:hover:ring-primary/50
      transition-all duration-300
    ">
      {/* 🔠 Label e ícone */}
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px]">{icon}</div>
        <span className="text-sm text-neutral-700/60 dark:text-white/50 tracking-wide font-medium">
          {label}
        </span>
      </div>

      {/* 💰 Valor */}
      <div className={`text-[18px] font-semibold text-neutral-900 dark:text-white ${isDominance ? 'text-center' : 'text-right'}`}>
        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
        />
      </div>

      {/* 📈 Variação (se houver) */}
      {variation !== undefined && !isDominance && (
        <div className={`text-[11.5px] font-medium flex items-center gap-1 justify-end ${
          variation >= 0 ? 'text-green-500' : 'text-red-500'
        }`}>
          {variation >= 0 ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
          {variation.toFixed(2)}%
        </div>
      )}
    </div>
  )
}

// ✴️ Bloco minimalista (pares principais)
export function OracleBlockMinimal({ label, value, prefix, suffix, decimals = 2, iconSrc }) {
  const getFontClass = (val) => {
    if (!val) return 'text-[11px]'
    if (val >= 1_000_000) return 'text-[9.5px]'
    if (val >= 100_000) return 'text-[10px]'
    if (val >= 10_000) return 'text-[10.5px]'
    return 'text-[11px]'
  }

  return (
    <div className="
      flex items-center gap-3 px-5 py-4
      rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-md
      border border-black/10 dark:border-white/10
      shadow-md dark:shadow-lg ring-1 ring-black/5 dark:ring-white/5
      hover:ring-2 hover:ring-primary/40 dark:hover:ring-primary/50
      transition-all duration-300
    ">
      <Image
        src={iconSrc}
        alt={label}
        width={18}
        height={18}
        className="w-5 h-5 object-contain rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-[11.5px] text-neutral-700/60 dark:text-white/50 font-medium tracking-wide">
          {label}
        </span>
        <span className={`${getFontClass(value)} text-neutral-900 dark:text-muted font-semibold`}>
          <AnimatedNumber value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        </span>
      </div>
    </div>
  )
}

// ✴️ Bloco compacto (Supply, Dominância)
export function OracleBlockCompact({ label, value, prefix, suffix, decimals = 2, iconSrc }) {
  const getFontClass = (val) => {
    if (!val) return 'text-[11px]'
    if (val >= 1_000_000) return 'text-[9.5px]'
    if (val >= 100_000) return 'text-[10px]'
    if (val >= 10_000) return 'text-[10.5px]'
    return 'text-[11px]'
  }

  return (
    <div className="
      flex items-center gap-3 px-5 py-4
      rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-md
      border border-black/10 dark:border-white/10
      shadow-md dark:shadow-lg ring-1 ring-black/5 dark:ring-white/5
      hover:ring-2 hover:ring-primary/40 dark:hover:ring-primary/50
      transition-all duration-300
    ">
      <Image
        src={iconSrc}
        alt={label}
        width={18}
        height={18}
        className="w-5 h-5 object-contain rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-[11.5px] text-neutral-700/60 dark:text-white/50 font-medium tracking-wide">
          {label}
        </span>
        <span className={`${getFontClass(value)} text-neutral-900 dark:text-muted font-semibold`}>
          <AnimatedNumber value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        </span>
      </div>
    </div>
  )
}

// 🖼 Ícone institucional com glow
export function CurrencyIcon({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="w-6 h-6 object-contain rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
    />
  )
}
