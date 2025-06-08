import {
  OracleBlock,
  OracleBlockMinimal,
  CurrencyIcon,
} from './ui/OracleBlocks'

import OracleBlockWithBadges from './ui/OracleBlockWithBadges'
import OracleBlockDominanceBadges from './ui/OracleBlockDominanceBadges'
import ConnectedUserUID from './ui/ConnectedUserUID'

export default function TokenomicsBlocks({ data, t, user }) {
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

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        {/* 🔥 Título */}
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          🔥 {t('tokenomics.title')}
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

        {/* 💠 Pares principais refinados */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <OracleBlockMinimal
            label="BTC/BRL"
            value={brl.price_btcbrl}
            prefix="R$ "
            iconSrc="/btc.png"
          />
          <OracleBlockMinimal
            label="ETH/BRL"
            value={brl.price_ethbrl}
            prefix="R$ "
            iconSrc="/eth.png"
          />
          <OracleBlockMinimal
            label="USDT/BRL"
            value={brl.price_usdtbrl}
            prefix="R$ "
            decimals={3}
            iconSrc="/usdt.png"
          />
          <OracleBlockMinimal
            label="BTC/USDT"
            value={usdt.price_btcusdt}
            prefix="$ "
            decimals={2}
            iconSrc="/btc.png"
          />
          <OracleBlockMinimal
            label="ETH/USDT"
            value={usdt.price_ethusdt}
            prefix="$ "
            decimals={2}
            iconSrc="/eth.png"
          />
        </div>
      </div>

      {/* 🔐 UID da conta conectada */}
      {user && <ConnectedUserUID user={user} t={t} />}
    </div>
  )
}
