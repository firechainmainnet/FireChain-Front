// 📁 components/Navbar.jsx
// 🔝 Navbar institucional com conta logada (e-mail, UID, verificação) ou autenticação

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

export default function Navbar() {
  const scrollDirection = useScrollDirection()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  const { user, logout, resendVerification } = useAuth()

  useEffect(() => {
    setHidden(scrollDirection === 'down')
  }, [scrollDirection])

  return (
    <>
      <nav
        className={`
          sticky top-4 z-50 transition-transform duration-500 ease-in-out mx-auto max-w-fit
          px-4 py-2 bg-glass backdrop-blur-md rounded-full shadow-glass flex items-center gap-3
          ${hidden ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}
        `}
      >
        {/* 🌙 Tema */}
        <ThemeSwitcher />

        {/* 🌍 Idioma */}
        <LanguageDropdown />

        {/* 👤 Conta */}
        {!user ? (
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-full text-primary hover:brightness-110 hover:scale-105 transition duration-200 focus:outline-none"
            aria-label="Entrar"
          >
            <CgProfile className="w-5 h-5" />
          </button>
        ) : (
          <AppDropdown
            trigger={
              <button
                className="p-2 rounded-full text-primary hover:brightness-110 hover:scale-105 transition duration-200 focus:outline-none"
                aria-label="Conta"
              >
                <CgProfile className="w-5 h-5" />
              </button>
            }
            items={[
              {
                value: 'info',
                disabled: true,
                label: (
                  <div className="flex flex-col gap-2 text-xs text-muted leading-tight max-w-[220px]">
                    {/* 📧 Email */}
                    <div className="flex items-center gap-2 break-all">
                      <HiOutlineMail className="w-4 h-4 text-primary" />
                      {user.email}
                    </div>

                    {/* 🔐 UID */}
                    <div className="flex items-center gap-2 break-all">
                      <RiFingerprintLine className="w-4 h-4 text-primary" />
                      <span className="truncate">{user.uid}</span>
                    </div>

                    {/* ✅ Verificação */}
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
                            onClick={(e) => {
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

      {/* 🔐 Modal de login/registro */}
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
