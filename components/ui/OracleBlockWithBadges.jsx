// 📁 components/ui/OracleBlockWithBadges.jsx
// 🔥 Painel institucional com multilíngue e badges animadas

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
      border border-neutral-200 dark:border-white/10
      shadow-md dark:shadow-lg ring-1 ring-black/5 dark:ring-white/5
      hover:ring-2 hover:ring-primary/40 dark:hover:ring-primary/50
      transition-all duration-300 space-y-4
    ">
      {/* 🔖 Título */}
      <h3 className="text-sm font-medium text-neutral-700 dark:text-white/60 tracking-wide">
        {t('tokenomics.price_fireusdt')}
      </h3>

      {/* 🔥 Cotação principal */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-3 text-[32px] sm:text-[36px] font-extrabold text-neutral-900 dark:text-white leading-tight">
          <Image
            src="/logo.png"
            alt="FIRE"
            width={42}
            height={42}
            className="w-10 h-10 object-contain rounded-full drop-shadow-sm"
          />
          <span className="flex items-center gap-3">
            <AnimatedNumber value={usdtPrice} prefix="$ " decimals={8} />
            {variation !== undefined && (
              <span className={`text-sm font-semibold flex items-center gap-1 ${
                isPositive ? 'text-green-500' : 'text-red-500'
              }`}>
                {isPositive ? <FaArrowUp size={11} /> : <FaArrowDown size={11} />}
                {Math.abs(variation).toFixed(2)}%
              </span>
            )}
          </span>
        </div>

        {/* 💸 Legenda BRL — 100% inline */}
        <span className="
          text-sm italic text-neutral-500 dark:text-white/50
          font-medium tracking-tight whitespace-nowrap leading-tight inline-flex items-center gap-1
        ">
          (~ R$ <AnimatedNumber value={brlPrice} decimals={2} /> )
        </span>
      </div>

      {/* 🪙 Badges de Supply e Máximo */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <Badge
          label={t('tokenomics.supply')}
          value={supply}
          icon={<BiTransfer className="text-orange-600 dark:text-orange-300" size={14} />}
          color="bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 border border-orange-300 dark:border-orange-400/20"
        />
        <Badge
          label={t('tokenomics.supply_max')}
          value={supplyMax}
          icon={<HiOutlineLockClosed className="text-neutral-600 dark:text-white/70" size={13} />}
          color="bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-white border border-neutral-300 dark:border-white/10"
        />
      </div>

      {/* 💧 Badges de Liquidez com animação */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <Badge
          label={t('tokenomics.liquidity_brl')}
          value={liquidezBrl}
          prefix="R$ "
          icon={<FaCoins className="text-blue-600 dark:text-blue-300" size={13} />}
          color="bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-300 dark:border-blue-400/20"
        />
        <Badge
          label={t('tokenomics.liquidity_usdt')}
          value={liquidezUsdt}
          prefix="$ "
          icon={<FaDollarSign className="text-green-600 dark:text-green-300" size={13} />}
          color="bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-300 border border-green-300 dark:border-green-400/20"
        />
      </div>
    </div>
  )
}

// 🔘 Badge institucional com animação multilíngue
function Badge({ label, value, prefix = '', icon, color }) {
  return (
    <div className={`inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-xs font-medium shadow-sm min-w-max ${color}`}>
      {icon}
      {label}:{' '}
      <AnimatedNumber
        value={value}
        prefix={prefix}
        decimals={2}
        className="font-semibold font-mono tabular-nums inline-block min-w-[80px] text-right"
      />
    </div>
  )
}
