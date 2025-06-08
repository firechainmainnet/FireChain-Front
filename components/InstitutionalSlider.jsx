// 📁 components/InstitutionalSlider.jsx
// ♾️ Scroll institucional premium com drag, snap e momentum real via Framer Motion

import { useTranslation } from '../i18n/LanguageContext'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import InstitutionalPill from './InstitutionalPill'

import { FaShieldAlt, FaCoins, FaGraduationCap, FaCodeBranch } from 'react-icons/fa'
import { BiTransfer, BiBroadcast } from 'react-icons/bi'
import { HiOutlineUserGroup, HiArrowsRightLeft } from 'react-icons/hi2'
import { BsEyeSlash, BsTerminalFill } from 'react-icons/bs'
import { MdOfflineBolt } from 'react-icons/md'

import SecurityModalContent from './SecurityModalContent'
import FireTokenModalContent from './FireTokenModalContent'
import OracleModalContent from './OracleModalContent'
import GovernanceModalContent from './GovernanceModalContent'
import ZKModalContent from './ZKModalContent'
import FullNodesModalContent from './FullNodesModalContent'
import LightNodesModalContent from './LightNodesModalContent'
import FireAcademyModalContent from './FireAcademyModalContent'
import FireBridgeModalContent from './FireBridgeModalContent'
import FireCoreModalContent from './FireCoreModalContent'
import CliWalletModalContent from './CliWalletModalContent'

export default function InstitutionalSlider() {
  const { t, ready } = useTranslation()
  const [pause, setPause] = useState(false)
  const containerRef = useRef(null)

  const baseItems = [
    { icon: <FaShieldAlt />, label: t('security.pill'), modalTitle: t('security.title'), modalContent: <SecurityModalContent /> },
    { icon: <FaCoins />, label: t('token.title'), modalTitle: t('token.title'), modalContent: <FireTokenModalContent /> },
    { icon: <BiTransfer />, label: t('oracle.pill'), modalTitle: t('oracle.title'), modalContent: <OracleModalContent /> },
    { icon: <HiOutlineUserGroup />, label: t('governance.pill'), modalTitle: t('governance.title'), modalContent: <GovernanceModalContent /> },
    { icon: <BsEyeSlash />, label: t('zk.pill'), modalTitle: t('zk.title'), modalContent: <ZKModalContent /> },
    { icon: <MdOfflineBolt />, label: t('fullNodes.pill'), modalTitle: t('fullNodes.title'), modalContent: <FullNodesModalContent /> },
    { icon: <BiBroadcast />, label: t('lightNodes.pill'), modalTitle: t('lightNodes.title'), modalContent: <LightNodesModalContent /> },
    { icon: <FaGraduationCap />, label: t('fireAcademy.pill'), modalTitle: t('fireAcademy.title'), modalContent: <FireAcademyModalContent /> },
    { icon: <HiArrowsRightLeft />, label: t('fireBridge.pill'), modalTitle: t('fireBridge.title'), modalContent: <FireBridgeModalContent /> },
    { icon: <FaCodeBranch />, label: t('fireCore.pill'), modalTitle: t('fireCore.title'), modalContent: <FireCoreModalContent /> },
    { icon: <BsTerminalFill />, label: t('cliWallet.pill'), modalTitle: t('cliWallet.title'), modalContent: <CliWalletModalContent /> }
  ]

  const [clones, setClones] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return
      const containerWidth = containerRef.current.offsetWidth
      const approxPillWidth = 240
      const visiblePills = Math.ceil(containerWidth / approxPillWidth)
      setClones(Math.ceil((visiblePills * 2) / baseItems.length) + 2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!ready) return null

  const infiniteItems = Array(clones).fill(baseItems).flat()

  return (
    <section className="w-full overflow-hidden py-10">
      <div
        ref={containerRef}
        className="relative select-none touch-pan-x"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <motion.div
          className="flex gap-6 w-max will-change-transform"
          drag="x"
          dragElastic={0.15}
          dragMomentum={true}
          dragConstraints={{ left: -5000, right: 0 }} // grande o suficiente
          dragSnapToOrigin={true} // 🔥 Snap automático ao soltar
          onDragStart={() => setPause(true)}
          onDragEnd={() => setPause(false)}
          animate={!pause ? { x: ['0%', '-50%'] } : { x: 0 }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 555
            }
          }}
        >
          {infiniteItems.map((item, idx) => (
            <InstitutionalPill
              key={`pill-${idx}`}
              icon={item.icon}
              label={item.label}
              modalTitle={item.modalTitle}
              modalContent={item.modalContent}
              onModalClose={() => setPause(false)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
