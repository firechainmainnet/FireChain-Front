// 📁 components/InstitutionalSlider.jsx
// ♾️ Scroll institucional premium com loop real, direção dinâmica e drag momentum

import { useTranslation } from '../i18n/LanguageContext'
import { useEffect, useRef, useState } from 'react'
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

export default function InstitutionalSlider({ direction = 'left' }) {
  const { t, ready } = useTranslation()
  const [pause, setPause] = useState(false)
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  const x = useRef(0)
  const velocity = useRef(direction === 'right' ? 0.4 : -0.4) // 🔁 Direção dinâmica
  const frameRef = useRef(null)
  const isDragging = useRef(false)
  const dragVelocity = useRef(0)
  const lastX = useRef(0)
  const momentumRef = useRef(null)
  const totalWidth = useRef(1)

  const items = [
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

  const duplicatedItems = [...items, ...items]

  useEffect(() => {
    if (contentRef.current) {
      totalWidth.current = contentRef.current.scrollWidth / 2
    }

    const animate = () => {
      if (!pause && contentRef.current) {
        x.current += velocity.current

        if (Math.abs(x.current) >= totalWidth.current) {
          x.current = 0
        }

        contentRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [pause, direction])

  // 🖱️ Drag manual
  const handlePointerDown = (e) => {
    cancelAnimationFrame(momentumRef.current)
    isDragging.current = true
    setPause(true)
    lastX.current = e.clientX || e.touches?.[0]?.clientX || 0
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current) return
    const currentX = e.clientX || e.touches?.[0]?.clientX || 0
    const delta = currentX - lastX.current
    x.current += delta
    dragVelocity.current = delta
    lastX.current = currentX

    if (contentRef.current) {
      contentRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`
    }
  }

  const handlePointerUp = () => {
    isDragging.current = false

    const releaseMomentum = () => {
      dragVelocity.current *= 0.92
      if (Math.abs(dragVelocity.current) > 0.5 && contentRef.current) {
        x.current += dragVelocity.current
        contentRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`
        momentumRef.current = requestAnimationFrame(releaseMomentum)
      } else {
        setPause(false)
      }
    }

    releaseMomentum()
  }

  if (!ready) return null

  return (
    <section className="w-full overflow-hidden py-10">
      <div
        ref={containerRef}
        className="relative touch-pan-x select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div
          ref={contentRef}
          className="flex gap-6 w-max will-change-transform px-4"
        >
          {duplicatedItems.map((item, idx) => (
            <InstitutionalPill
              key={`pill-${idx}`}
              icon={item.icon}
              label={item.label}
              modalTitle={item.modalTitle}
              modalContent={item.modalContent}
              onModalClose={() => setPause(false)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
