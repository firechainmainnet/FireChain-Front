// 📁 components/TokenomicsBlocks.jsx
// 🔥 Painel institucional refinado com composição modular premium multilíngue

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

  const SUPPLY_MAX = 33_000_000

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
    <section className="flex-1 flex flex-col justify-between">
      <div className="flex flex-col gap-6">

        {/* 🔢 Cotação institucional com badges premium */}
        <OracleBlockWithBadges
          usdtPrice={usdt.price_fireusdt}
          brlPrice={brl.price_firebrl}
          supply={supply_circulante}
          supplyMax={SUPPLY_MAX}
          variation={variacao_24h_usdt}
          liquidezBrl={liquidez_brl}
          liquidezUsdt={liquidez_usdt}
        />

        {/* 🧠 Bloco de dominância com agrupamento visual refinado */}
        <OracleBlockDominanceBadges data={fire_internal_dominance} />

        {/* 💹 Pares de preços em slide contínuo institucional */}
        <OraclePairsSlider pairs={pairs} />
      </div>

      {/* 🔐 Identidade do usuário conectado com UID institucional */}
      {user && (
        <div className="mt-6">
          <ConnectedUserUID user={user} t={t} />
        </div>
      )}
    </section>
  )
}
