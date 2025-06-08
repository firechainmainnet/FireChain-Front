// 📁 components/TokenomicsTicker.jsx
// 🔁 Ticker institucional premium com multilíngue e scroll fluido

import useTokenomicsData from '../hooks/useTokenomicsData'
import Image from 'next/image'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useTranslation } from '../i18n/LanguageContext'

export default function TokenomicsTicker() {
  const { data, loading } = useTokenomicsData()
  const { t } = useTranslation()

  if (loading || !data) return null

  const { brl, usdt, variacao_24h_usdt } = data

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
      icon: '/usdt.png'
    },
    {
      label: t('tokenomics.price_fireusdt'),
      value: usdt.price_fireusdt,
      variation: variacao_24h_usdt,
      icon: '/logo.png'
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
    <div className="w-full overflow-hidden bg-glass mt-10 rounded-xl border border-white/10 backdrop-blur-md">
      <div className="flex ticker-track animate-scrollTicker whitespace-nowrap">
        {[...pairs, ...pairs].map((pair, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-start min-w-[190px] px-5 py-3 border-r border-white/10"
          >
            {/* Label + ícone */}
            <div className="flex items-center gap-2">
              <Image
                src={pair.icon}
                alt={pair.label}
                width={20}
                height={20}
                className="rounded-full w-5 h-5 object-contain"
              />
              <span className="text-xs text-muted font-medium">
                {pair.label}
              </span>
            </div>

            {/* Valor + variação */}
            <div className="flex items-end gap-2 mt-1">
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                {typeof pair.value === 'number'
                  ? pair.value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: pair.label.includes('USDT') ? 'USD' : 'BRL',
                      minimumFractionDigits: 2
                    })
                  : '—'}
              </span>
              {typeof pair.variation === 'number' && (
                <span
                  className={`text-xs font-semibold flex items-center gap-1 ${
                    pair.variation >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {pair.variation >= 0 ? <FaArrowUp size={10} /> : <FaArrowDown size={10} />}
                  {pair.variation.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
