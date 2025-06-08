// 📁 components/ui/OracleBlockWithBadges.jsx
// 🔥 Painel institucional com badges premium, tipografia refinada e microinterações visuais

import Image from 'next/image'
import AnimatedNumber from './AnimatedNumber'
import { FaArrowUp, FaArrowDown, FaCoins, FaDollarSign } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'
import { HiOutlineLockClosed } from 'react-icons/hi2'
import { useTranslation } from '../../i18n/LanguageContext'

export default function OracleBlockWithBadges({
  usdtPrice,
  brlPrice,
  supply,
  supplyMax,
  variation,
  liquidezBrl,
  liquidezUsdt
}) {
  const { t } = useTranslation()
  const isPositive = variation >= 0

  return (
    <div className="
      flex flex-col items-center text-center px-6 py-5
      rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-md
      border border-border shadow-md ring-1 ring-black/5 dark:ring-white/5
      hover:ring-2 hover:ring-primary/40 dark:hover:ring-primary/50
      transition-all duration-300 space-y-5
    ">
      {/* 🔖 Título institucional */}
      <h3 className="text-sm font-medium text-muted tracking-wide">
        {t('tokenomics.price_fireusdt')}
      </h3>

      {/* 🔥 Cotação principal */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
        <div className="flex items-center gap-4 text-[28px] sm:text-[32px] font-extrabold text-foreground leading-tight">
          <Image
            src="/logo.png"
            alt="FIRE"
            width={42}
            height={42}
            className="w-10 h-10 object-contain rounded-full drop-shadow-sm"
          />
          <div className="flex items-center gap-3">
            <AnimatedNumber value={usdtPrice} prefix="$ " decimals={8} />
            {variation !== undefined && (
              <span className={`text-xs font-semibold flex items-center gap-1 ${
                isPositive ? 'text-green-500' : 'text-red-500'
              }`}>
                {isPositive ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
                {Math.abs(variation).toFixed(2)}%
              </span>
            )}
          </div>
        </div>

        <span className="text-sm italic text-muted font-medium tracking-tight leading-tight inline-flex items-center gap-1">
          (~ R$ <AnimatedNumber value={brlPrice} decimals={2} /> )
        </span>
      </div>

      {/* 🪙 Supply circulante e máximo */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
        <Badge
          label={t('tokenomics.supply')}
          value={supply}
          icon={<BiTransfer className="text-orange-500 dark:text-orange-300" size={14} />}
          badgeClass="badge-orange"
        />
        <Badge
          label={t('tokenomics.supply_max')}
          value={supplyMax}
          icon={<HiOutlineLockClosed className="text-muted" size={13} />}
          badgeClass="badge-neutral"
        />
      </div>

      {/* 💧 Liquidez BRL / USDT lado a lado */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 mt-1">
        <Badge
          label="BRL"
          value={liquidezBrl}
          prefix="R$ "
          icon={<FaCoins className="text-blue-500 dark:text-blue-300" size={13} />}
          badgeClass="badge-blue"
        />
        <Badge
          label="USDT"
          value={liquidezUsdt}
          prefix="$ "
          icon={<FaDollarSign className="text-green-500 dark:text-green-300" size={13} />}
          badgeClass="badge-green"
        />
      </div>
    </div>
  )
}

// 🏷️ Badge institucional refinada com tema e número animado
function Badge({ label, value, prefix = '', icon, badgeClass }) {
  return (
    <div className={`badge-base ${badgeClass} min-w-[120px] flex items-center justify-between`}>
      <div className="flex items-center gap-2 whitespace-nowrap text-[11px] font-medium">
        {icon}
        {label}
      </div>
      <AnimatedNumber
        value={value}
        prefix={prefix}
        decimals={2}
        className="font-semibold font-mono tabular-nums text-right text-[12px]"
      />
    </div>
  )
}
