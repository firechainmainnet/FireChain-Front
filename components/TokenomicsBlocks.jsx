// 📁 components/TokenomicsBlocks.jsx
// 🔥 Painel institucional refinado com multilíngue e ícone tech institucional

import {
  OracleBlock,
  OracleBlockMinimal,
  CurrencyIcon,
} from './ui/OracleBlocks'

import OracleBlockWithBadges from './ui/OracleBlockWithBadges'
import OracleBlockDominanceBadges from './ui/OracleBlockDominanceBadges'
import OraclePairsSlider from './ui/OraclePairsSlider'
import ConnectedUserUID from './ui/ConnectedUserUID'
import { useTranslation } from '../i18n/LanguageContext'
import { FaReact } from 'react-icons/fa' // 🌐 Ícone institucional tech moderno

export default function TokenomicsBlocks({ data, user }) {
  const { t } = useTranslation()

  if (!data) return null

  const {
    brl,
    usdt,
    fire_internal_dominance,
    liquidez_brl,
    liquidez_usdt,
    supply_circulante,
    variacao_24h_usdt
  } = data

  // 📊 Pares principais (exceto FIRE)
  const pairs = [
    {
      label: t('tokenomics.price_btcbrl'),
      value: brl.price_btcbrl,
      icon: '/btc.png'
    },
    {
      label: t('tokenomics.price_ethbrl'),
      value: brl.price_ethbrl,
      icon: '/eth.png'
    },
    {
      label: t('tokenomics.price_usdtbrl'),
      value: brl.price_usdtbrl,
      icon: '/usdt.png',
      decimals: 3
    },
    {
      label: t('tokenomics.price_btcusdt'),
      value: usdt.price_btcusdt,
      icon: '/btc.png'
    },
    {
      label: t('tokenomics.price_ethusdt'),
      value: usdt.price_ethusdt,
      icon: '/eth.png'
    }
  ]

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        {/* 💠 Título institucional com ícone tech */}
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <FaReact className="text-primary drop-shadow-sm" size={18} />
          {t('tokenomics.title')}
        </h2>

        {/* 🔥 Cotação com badges (supply, max, liquidez) */}
        <OracleBlockWithBadges
          usdtPrice={usdt.price_fireusdt}
          brlPrice={brl.price_firebrl}
          supply={supply_circulante}
          supplyMax={33000000}
          variation={variacao_24h_usdt}
          liquidezBrl={liquidez_brl}
          liquidezUsdt={liquidez_usdt}
        />

        {/* 🔻 Separador institucional */}
        <div className="border-t border-white/10 mt-4 pt-4" />

        {/* 📊 Dominância horizontal com badges */}
        <OracleBlockDominanceBadges data={fire_internal_dominance} />

        {/* 🔻 Separador institucional */}
        <div className="border-t border-white/10 mt-4 pt-4" />

        {/* 🧭 Slider horizontal de cotações não-FIRE */}
        <OraclePairsSlider pairs={pairs} />
      </div>

      {/* 🔐 UID da conta conectada */}
      {user && <ConnectedUserUID user={user} t={t} />}
    </div>
  )
}
