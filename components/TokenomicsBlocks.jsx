import {
  OracleBlock,
  OracleBlockCompact,
  OracleBlockMinimal,
  CurrencyIcon,
} from './ui/OracleBlocks'

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
    variacao_24h_brl,
    variacao_24h_usdt
  } = data

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        {/* 🔥 Título */}
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          🔥 {t('tokenomics.title')}
        </h2>

        {/* 📈 Cotação FIRE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <OracleBlock
            label={t('tokenomics.price_firebrl')}
            value={brl.price_firebrl}
            prefix="R$ "
            variation={variacao_24h_brl}
            icon={<CurrencyIcon src="/logo.png" alt="FIRE" />}
          />
          <OracleBlock
            label={t('tokenomics.price_fireusdt')}
            value={usdt.price_fireusdt}
            prefix="$ "
            variation={variacao_24h_usdt}
            icon={<CurrencyIcon src="/logo.png" alt="FIRE" />}
          />
        </div>

        {/* 💧 Liquidez */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <OracleBlock
            label={t('tokenomics.liquidity_brl')}
            value={liquidez_brl}
            prefix="R$ "
            icon={<CurrencyIcon src="/brl.png" alt="BRL" />}
          />
          <OracleBlock
            label={t('tokenomics.liquidity_usdt')}
            value={liquidez_usdt}
            prefix="$ "
            icon={<CurrencyIcon src="/usdt.png" alt="USDT" />}
          />
        </div>

        {/* 🔻 Separador institucional */}
        <div className="border-t border-white/10 mt-4 pt-4" />

        {/* 🔥 Supply */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <OracleBlockCompact
            label={t('tokenomics.supply')}
            value={supply_circulante}
            decimals={0}
            iconSrc="/logo.png"
          />
          <OracleBlockCompact
            label="Supply Máximo"
            value={33000000}
            decimals={0}
            iconSrc="/logo.png"
          />
        </div>

        {/* 🔻 Separador institucional */}
        <div className="border-t border-white/10 mt-4 pt-4" />

        {/* 📊 Dominância */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <OracleBlockCompact
            label={t('tokenomics.dominance_brl')}
            value={fire_internal_dominance.brl}
            suffix="%"
            iconSrc="/brl.png"
          />
          <OracleBlockCompact
            label={t('tokenomics.dominance_btc')}
            value={fire_internal_dominance.btc}
            suffix="%"
            iconSrc="/btc.png"
          />
          <OracleBlockCompact
            label={t('tokenomics.dominance_eth')}
            value={fire_internal_dominance.eth}
            suffix="%"
            iconSrc="/eth.png"
          />
          <OracleBlockCompact
            label={t('tokenomics.dominance_usdt')}
            value={fire_internal_dominance.usdt}
            suffix="%"
            iconSrc="/usdt.png"
          />
        </div>

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
