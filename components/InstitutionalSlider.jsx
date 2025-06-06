// 📁 components/InstitutionalSlider.jsx
// 🔁 Scroll institucional com fallback inteligente após modais

import { useTranslation } from '../i18n/LanguageContext'
import { useEffect, useRef, useState } from 'react'
import useInstitutionalScroll from '../hooks/useInstitutionalScroll'

import { FaShieldAlt, FaCoins } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { BsEyeSlash } from 'react-icons/bs'
import { MdOfflineBolt } from 'react-icons/md'

import InstitutionalPill from './InstitutionalPill'
import SecurityModalContent from './SecurityModalContent'
import FireTokenModalContent from './FireTokenModalContent'
import OracleModalContent from './OracleModalContent'
import GovernanceModalContent from './GovernanceModalContent'
import ZKModalContent from './ZKModalContent'
import FullNodesModalContent from './FullNodesModalContent'
import LightNodesModalContent from './LightNodesModalContent'
import { BiBroadcast } from 'react-icons/bi'
import FireAcademyModalContent from './FireAcademyModalContent'
import { FaGraduationCap } from 'react-icons/fa'
import FireBridgeModalContent from './FireBridgeModalContent'
import { HiArrowsRightLeft } from 'react-icons/hi2'
import FireCoreModalContent from './FireCoreModalContent'
import { FaCodeBranch } from 'react-icons/fa'
import CliWalletModalContent from './CliWalletModalContent'
import { BsTerminalFill } from 'react-icons/bs'

export default function InstitutionalSlider() {
  const { t, ready } = useTranslation()
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  const [pause, setPause] = useState(false)

  // 🎯 Hook de scroll com requestAnimationFrame e controle de pausa
  useInstitutionalScroll({
    containerRef,
    trackRef,
    speed: 0.5,
    pause,
    direction: 'left'
  })

  // ✅ Fallback adicional para retomar scroll ao voltar foco para a janela
  useEffect(() => {
    const handleFocus = () => setPause(false)
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  const baseItems = [
    {
      icon: <FaShieldAlt />,
      label: t('security.pill'),
      modalTitle: t('security.title'),
      modalContent: <SecurityModalContent />
    },
    {
      icon: <FaCoins />,
      label: t('token.title'),
      modalTitle: t('token.title'),
      modalContent: <FireTokenModalContent />
    },
    {
      icon: <BiTransfer />,
      label: t('oracle.pill'),
      modalTitle: t('oracle.title'),
      modalContent: <OracleModalContent />
    },
    {
      icon: <HiOutlineUserGroup />,
      label: t('governance.pill'),
      modalTitle: t('governance.title'),
      modalContent: <GovernanceModalContent />
    },
    {
      icon: <BsEyeSlash />,
      label: t('zk.pill'),
      modalTitle: t('zk.title'),
      modalContent: <ZKModalContent />
    },
    {
        icon: <MdOfflineBolt />,
        label: t('fullNodes.pill'),
        modalTitle: t('fullNodes.title'),
        modalContent: <FullNodesModalContent />
    },
    {
        icon: <BiBroadcast />,
        label: t('lightNodes.pill'),
        modalTitle: t('lightNodes.title'),
        modalContent: <LightNodesModalContent />
    },
    {
        icon: <FaGraduationCap />,
        label: t('fireAcademy.pill'),
        modalTitle: t('fireAcademy.title'),
        modalContent: <FireAcademyModalContent />
    },
    {
        icon: <HiArrowsRightLeft />,
        label: t('fireBridge.pill'),
        modalTitle: t('fireBridge.title'),
        modalContent: <FireBridgeModalContent />
    },
    {
        icon: <FaCodeBranch />,
        label: t('fireCore.pill'),
        modalTitle: t('fireCore.title'),
        modalContent: <FireCoreModalContent />
    },
    {
        icon: <BsTerminalFill />,
        label: t('cliWallet.pill'),
        modalTitle: t('cliWallet.title'),
        modalContent: <CliWalletModalContent />
    }
  ]

  const duplicatedItems = [...baseItems, ...baseItems]

  if (!ready) return null

  return (
    <section className="w-full py-10 overflow-hidden">
      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 w-max will-change-transform"
          style={{ transform: 'translateX(0)' }}
        >
          {duplicatedItems.map((item, idx) => (
            <InstitutionalPill
              key={idx}
              icon={item.icon}
              label={item.label}
              modalTitle={item.modalTitle}
              modalContent={item.modalContent}
              onModalClose={() => setPause(false)} // ✅ NOVO: retoma scroll manualmente
            />
          ))}
        </div>
      </div>
    </section>
  )
}
