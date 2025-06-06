import Image from 'next/image'
import { FaGithub, FaLock, FaFileAlt } from 'react-icons/fa'
import { SiHiveBlockchain } from 'react-icons/si'
import { ImLab } from 'react-icons/im'
import { Tooltip } from 'react-tooltip'
import { useTranslation } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full border-t border-border bg-glass backdrop-blur-md text-muted text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex flex-col gap-6">
        {/* 🔳 GRID VISUAL ORGANIZADO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs sm:text-sm">
          {/* 🔥 COLUNA 1 — Marca + Status */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="FireChain Logo"
                width={32}
                height={32}
              />
              <div className="font-bold text-foreground text-sm">FIRE CHAIN</div>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-600 text-white text-xs font-semibold">
                <SiHiveBlockchain className="w-4 h-4" />
                MAINNET
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-600 text-white text-xs font-semibold">
                <ImLab className="w-4 h-4" />
                DEVNET
              </span>
            </div>
          </div>

          {/* 🧭 COLUNA 2 — Navegação */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-muted text-xs uppercase tracking-wider font-semibold mb-1">
              {t('footer.nav')}
            </h4>
            <a
              href="https://github.com/firechainmainnet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2"
            >
              <FaGithub className="w-4 h-4" />
              {t('footer.github')}
            </a>
            <a
              href="/whitepaper.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2"
            >
              <FaFileAlt className="w-4 h-4" />
              {t('footer.whitepaper')}
            </a>
          </div>

          {/* 🧾 COLUNA 3 — Institucional (bloqueado) */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-muted text-xs uppercase tracking-wider font-semibold mb-1">
              {t('footer.institutional')}
            </h4>
            {[ t('footer.terms'), t('footer.responsibility') ].map((label, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 opacity-50 cursor-not-allowed select-none"
                data-tooltip-id={`footer-locked-${idx}`}
                data-tooltip-content={t('footer.tooltip')}
              >
                <FaLock className="w-3.5 h-3.5" />
                {label}
                <Tooltip id={`footer-locked-${idx}`} className="z-50 text-xs" place="top" />
              </span>
            ))}
          </div>
        </div>

        {/* 🛡️ DISCLAIMER INSTITUCIONAL */}
        <div className="text-xs text-muted leading-snug border-t border-border pt-4 mt-6 max-w-4xl mx-auto text-justify">
          {t('footer.disclaimer')}
        </div>
      </div>
    </footer>
  )
}
