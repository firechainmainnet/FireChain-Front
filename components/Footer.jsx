// 📁 components/Footer.jsx
// 🧱 Rodapé institucional com layout horizontal refinado e links ativos para termos

import Image from 'next/image'
import { FaGithub, FaFileAlt } from 'react-icons/fa'
import { SiHiveBlockchain } from 'react-icons/si'
import { ImLab } from 'react-icons/im'
import { useTranslation } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full border-t border-border bg-glass backdrop-blur-md text-muted text-sm shadow-inner">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-col gap-6">

        {/* 🔳 Grid institucional com layout reposicionado */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-sm sm:text-[13px]">
          
          {/* 🔥 Coluna 1 — Imagem à esquerda + nome + badges abaixo */}
          <div className="flex items-start gap-4">
            {/* 🔲 Imagem isolada */}
            <div className="w-[80px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="FireChain Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* 🔤 Nome + status + badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                  FIRE CHAIN
                </h2>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-sm" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-600 text-white text-[11px] font-semibold tracking-wide shadow">
                  <SiHiveBlockchain className="w-4 h-4" />
                  MAINNET
                </span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-600 text-white text-[11px] font-semibold tracking-wide shadow">
                  <ImLab className="w-4 h-4" />
                  DEVNET
                </span>
              </div>
            </div>
          </div>

          {/* 🧭 Coluna 2 — Navegação refinada */}
          <div className="flex flex-col gap-2 text-[12px] opacity-80">
            <h4 className="text-muted text-[11px] uppercase tracking-wide font-semibold mb-1">
              {t('footer.nav')}
            </h4>
            <a
              href="https://github.com/firechainmainnet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 transition-colors duration-200"
            >
              <FaGithub className="w-4 h-4" />
              {t('footer.github')}
            </a>
            <a
              href="/whitepaper.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 transition-colors duration-200"
            >
              <FaFileAlt className="w-4 h-4" />
              {t('footer.whitepaper')}
            </a>
          </div>

          {/* 🧾 Coluna 3 — Institucional com links ativos */}
          <div className="flex flex-col gap-2 text-[12px] opacity-80">
            <h4 className="text-muted text-[11px] uppercase tracking-wide font-semibold mb-1">
              {t('footer.institutional')}
            </h4>
            <a
              href="/termos-de-uso.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 transition-colors duration-200"
            >
              📄 {t('footer.terms')}
            </a>
            <a
              href="/responsabilidade.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 transition-colors duration-200"
            >
              📘 {t('footer.responsibility')}
            </a>
          </div>
        </div>

        {/* 🛡️ Disclaimer institucional com tom técnico */}
        <div className="text-xs sm:text-[13px] text-muted leading-snug border-t border-border pt-6 mt-2 max-w-5xl mx-auto text-justify opacity-75">
          {t('footer.disclaimer')}
        </div>
      </div>
    </footer>
  )
}
