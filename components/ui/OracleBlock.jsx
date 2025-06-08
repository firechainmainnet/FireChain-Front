// 📁 components/ui/OracleBlock.jsx
// 💠 Bloco institucional premium para painel tokenomics FireChain

import AnimatedNumber from './AnimatedNumber'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function OracleBlock({
  label,
  value,
  prefix,
  suffix,
  decimals = 2,
  variation,
  icon
}) {
  return (
    <div className="oracle-price-line flex flex-col justify-between min-h-[72px] gap-1">
      {/* 🔖 Título e ícone */}
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="text-xs font-medium text-muted">{label}</span>
      </div>

      {/* 🔢 Valor + Variação */}
      <div className="flex flex-col items-end text-right">
        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          className="text-base font-semibold tracking-tight text-foreground"
        />
        {variation !== undefined && (
          <span
            className={`text-xs font-medium ${
              variation >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {variation >= 0 ? <FaArrowUp className="inline-block mr-1" /> : <FaArrowDown className="inline-block mr-1" />}
            {variation.toFixed(2)}%
          </span>
        )}
      </div>
    </div>
  )
}
