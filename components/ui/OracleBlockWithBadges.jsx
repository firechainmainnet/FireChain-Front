// 📁 components/ui/OracleBlockWithBadges.jsx
// 🔷 Bloco institucional premium unificado: FIRE/USDT + BRL + Supply (badges)

import Image from 'next/image'
import AnimatedNumber from './AnimatedNumber'

export default function OracleBlockWithBadges({ usdtPrice, brlPrice, supply, supplyMax }) {
  return (
    <div className="
      flex flex-col justify-between px-5 py-4
      rounded-xl bg-white/5 backdrop-blur-md
      border border-white/10 shadow-md dark:shadow-lg
      ring-1 ring-white/5 hover:ring-2 hover:ring-primary/40 dark:hover:ring-primary/50
      transition-all duration-300 space-y-2
    ">
      {/* 🔥 Cabeçalho e valores */}
      <div className="flex items-center justify-between gap-3">
        {/* 🔥 Label + Valor principal */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FIRE"
            width={24}
            height={24}
            className="w-6 h-6 object-contain rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white/60 tracking-wide">
              Cotação $FIRE (USDT)
            </span>
            <span className="text-[20px] font-semibold text-foreground leading-tight">
              <AnimatedNumber value={usdtPrice} prefix="$ " decimals={2} />
            </span>
          </div>
        </div>

        {/* 🏷️ Badges: Supply Circulante + Máximo */}
        <div className="flex items-center gap-2">
          <Badge label="Supply" value={supply} />
          <Badge label="Máximo" value={supplyMax} />
        </div>
      </div>

      {/* 💸 Legenda BRL */}
      <div className="text-xs text-white/40 font-medium pl-9">
        (~ R$ <AnimatedNumber value={brlPrice} decimals={2} />)
      </div>
    </div>
  )
}

// 🔘 Badge premium inline
function Badge({ label, value }) {
  return (
    <div className="
      px-3 py-[6px] rounded-full bg-white/10 text-xs font-medium
      text-white/70 border border-white/10 shadow-sm
      hover:scale-[1.02] transition-all duration-200
    ">
      {label}: <span className="text-white font-semibold">{format(value)}</span>
    </div>
  )
}

// 📊 Formata número com separador de milhar
function format(number) {
  return Number(number).toLocaleString('pt-BR', { maximumFractionDigits: 0 })
}
