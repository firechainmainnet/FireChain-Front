import { FaBitcoin, FaEthereum, FaCoins, FaDollarSign } from 'react-icons/fa'

export default function OracleBlockDominanceBadges({ data }) {
  if (!data) return null

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <DominanceBadge
        label="BRL"
        value={data.brl}
        icon={<FaCoins className="text-blue-600 dark:text-blue-300" size={13} />}
        color="bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-300 dark:border-blue-400/20"
      />
      <DominanceBadge
        label="BTC"
        value={data.btc}
        icon={<FaBitcoin className="text-orange-600 dark:text-orange-400" size={13} />}
        color="bg-orange-100 text-orange-800 dark:bg-orange-500/10 dark:text-orange-300 border border-orange-300 dark:border-orange-400/20"
      />
      <DominanceBadge
        label="ETH"
        value={data.eth}
        icon={<FaEthereum className="text-purple-600 dark:text-purple-300" size={13} />}
        color="bg-purple-100 text-purple-800 dark:bg-purple-500/10 dark:text-purple-300 border border-purple-300 dark:border-purple-400/20"
      />
      <DominanceBadge
        label="USDT"
        value={data.usdt}
        icon={<FaDollarSign className="text-green-600 dark:text-green-300" size={13} />}
        color="bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-300 border border-green-300 dark:border-green-400/20"
      />
    </div>
  )
}

function DominanceBadge({ label, value, icon, color }) {
  return (
    <div className={`inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-xs font-medium shadow-sm ${color}`}>
      {icon}
      {label}:{' '}
      <span className="font-semibold font-mono tabular-nums min-w-[60px] text-right">
        {value.toFixed(2)}%
      </span>
    </div>
  )
}
