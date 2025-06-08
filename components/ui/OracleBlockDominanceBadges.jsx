// 📁 components/ui/OracleBlockDominanceBadges.jsx
// 🔥 Dominância institucional com badges premium e tooltips multilíngues agrupados

import { motion } from 'framer-motion'
import { FaBitcoin, FaEthereum, FaCoins, FaDollarSign } from 'react-icons/fa'
import { useTranslation } from '../../i18n/LanguageContext'
import AnimatedNumber from './AnimatedNumber'
import AppTooltip from './AppTooltip'

export default function OracleBlockDominanceBadges({ data }) {
  const { t } = useTranslation()
  if (!data) return null

  return (
    <div className="space-y-3">
      {/* 🔗 Grid de badges agrupadas BRL/USDT + BTC/ETH */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <DominanceBadge
          label="BRL"
          value={data.brl}
          tooltip={t('tokenomics.tooltip_brl')}
          icon={<FaCoins className="text-blue-500 dark:text-blue-300" size={13} />}
          badgeClass="badge-blue"
        />
        <DominanceBadge
          label="USDT"
          value={data.usdt}
          tooltip={t('tokenomics.tooltip_usdt')}
          icon={<FaDollarSign className="text-green-500 dark:text-green-300" size={13} />}
          badgeClass="badge-green"
        />
        <DominanceBadge
          label="BTC"
          value={data.btc}
          tooltip={t('tokenomics.tooltip_btc')}
          icon={<FaBitcoin className="text-orange-500 dark:text-orange-300" size={13} />}
          badgeClass="badge-orange"
        />
        <DominanceBadge
          label="ETH"
          value={data.eth}
          tooltip={t('tokenomics.tooltip_eth')}
          icon={<FaEthereum className="text-purple-500 dark:text-purple-300" size={13} />}
          badgeClass="badge-purple"
        />
      </div>

      {/* 📊 Legenda institucional agrupada */}
      <div className="flex justify-between text-[10px] text-muted uppercase tracking-widest px-1">
        <span className="w-1/2 text-center">{t('tokenomics.group_stable')}</span>
        <span className="w-1/2 text-center">{t('tokenomics.group_crypto')}</span>
      </div>
    </div>
  )
}

// 🎯 Badge modular com classe institucional + tooltip e animação
function DominanceBadge({ label, value, icon, tooltip, badgeClass }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2 }}
      className={`badge-base ${badgeClass} w-full flex justify-between items-center`}
    >
      <div className="group flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.12))' }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        {tooltip ? (
          <AppTooltip content={tooltip} side="top">
            <span className="cursor-help hover:underline underline-offset-2">{label}</span>
          </AppTooltip>
        ) : (
          <span>{label}</span>
        )}
      </div>

      <motion.span
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="font-semibold font-mono tabular-nums min-w-[42px] text-right"
      >
        <AnimatedNumber
          key={`${label}-${value}`}
          value={value}
          suffix="%"
          decimals={2}
        />
      </motion.span>
    </motion.div>
  )
}
