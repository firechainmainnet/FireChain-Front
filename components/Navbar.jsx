// 📁 components/Navbar.jsx
// 🔝 Navbar institucional refinada com status visual + UID, e-mail, verificação

import { useEffect, useState } from 'react'
import useScrollDirection from '../hooks/useScrollDirection'
import ThemeSwitcher from './ui/AppThemeSwitcher'
import LanguageDropdown from './ui/AppLanguageDropdown'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineMail } from 'react-icons/hi'
import { RiFingerprintLine } from 'react-icons/ri'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import AppDropdown from './ui/AppDropdown'
import AuthModal from './AuthModal'
import AppButton from './ui/AppButton'
import { useAuth } from '../context/AuthContext'
import clsx from 'clsx'

export default function Navbar() {
  const scrollDirection = useScrollDirection()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [justLoggedIn, setJustLoggedIn] = useState(false)

  const { user, logout, resendVerification } = useAuth()

  useEffect(() => {
    setHidden(scrollDirection === 'down')
  }, [scrollDirection])

  useEffect(() => {
    if (user) {
      setJustLoggedIn(true)
      const timer = setTimeout(() => setJustLoggedIn(false), 600)
      return () => clearTimeout(timer)
    }
  }, [user])

  const authColor = user ? 'text-green-500' : 'text-muted'
  const glowEffect = justLoggedIn ? 'animate-pulse-glow' : ''

  return (
    <>
      <nav
        className={clsx(
          'sticky top-4 z-50 transition-transform duration-500 ease-in-out mx-auto max-w-fit',
          'px-4 py-2 bg-glass backdrop-blur-md rounded-full shadow-glass flex items-center gap-3',
          hidden ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'
        )}
      >
        <ThemeSwitcher />
        <LanguageDropdown />

        {/* 👤 Conta */}
        {!user ? (
          <div
            role="button"
            tabIndex={0}
            onClick={() => setOpen(true)}
            className={clsx(
              'p-2 rounded-full transition duration-200 focus:outline-none',
              'hover:brightness-110 hover:scale-105',
              authColor
            )}
            aria-label="Entrar"
          >
            <CgProfile className="w-5 h-5" />
          </div>
        ) : (
          <AppDropdown
            trigger={
              <div
                role="button"
                tabIndex={0}
                className={clsx(
                  'p-2 rounded-full transition duration-200 focus:outline-none',
                  'hover:brightness-110 hover:scale-105',
                  authColor,
                  glowEffect
                )}
                aria-label="Conta"
              >
                <CgProfile className="w-5 h-5" />
              </div>
            }
            items={[
              {
                value: 'info',
                disabled: true,
                label: (
                  <div className="flex flex-col gap-2 text-xs text-muted leading-tight max-w-[220px]">
                    <div className="flex items-center gap-2 break-all">
                      <HiOutlineMail className="w-4 h-4 text-primary" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2 break-all">
                      <RiFingerprintLine className="w-4 h-4 text-primary" />
                      <span className="truncate">{user.uid}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {user.emailVerified ? (
                        <>
                          <FaCheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-green-600">E-mail verificado</span>
                        </>
                      ) : (
                        <>
                          <FaTimesCircle className="w-4 h-4 text-red-500" />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              resendVerification()
                            }}
                            className="text-primary underline hover:text-accent transition text-xs"
                          >
                            Verificar agora
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )
              },
              { label: 'Sair', value: 'logout' }
            ]}
            onSelect={(val) => {
              if (val === 'logout') logout()
            }}
          />
        )}
      </nav>

      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
