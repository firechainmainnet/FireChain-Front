// 📁 components/AuthModal.jsx
// 🔐 Modal institucional de autenticação Firebase com feedback visual premium

import { useState } from 'react'
import AppModal from './ui/AppModal'
import AppButton from './ui/AppButton'
import AppInput from './ui/AppInput'
import { useTranslation } from '../i18n/LanguageContext'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function AuthModal({ open, onClose }) {
  const { t } = useTranslation()
  const {
    login, register, resetPassword
  } = useAuth()

  const [tab, setTab] = useState('login') // login | register | recover
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const resetAll = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setMessage('')
    setError('')
  }

  const handleClose = () => {
    resetAll()
    setTab('login')
    onClose()
  }

  const handleSubmit = async () => {
    setMessage('')
    setError('')

    try {
      if (tab === 'login') {
        await login(email, password)
        toast.success('Bem-vindo de volta!')
        handleClose()
      }

      if (tab === 'register') {
        if (password !== confirmPassword) {
          toast.error(t('auth.confirmPassword'))
          return setError(t('auth.confirmPassword'))
        }

        await register(email, password)
        toast.success('Conta criada com sucesso. Verifique seu e-mail.')
        setMessage(t('auth.registerSuccess'))
        setTab('login')
      }

      if (tab === 'recover') {
        await resetPassword(email)
        toast.success(t('auth.resetSent'))
        setMessage(t('auth.resetSent'))
        setTab('login')
      }
    } catch (err) {
      console.error('[🔥 Firebase Error]', err)

      if (err.code === 'auth/email-already-in-use') {
        toast.error('E-mail já cadastrado.')
        setError('E-mail já cadastrado.')
      } else if (err.code === 'auth/invalid-email') {
        toast.error('E-mail inválido.')
        setError('E-mail inválido.')
      } else if (err.code === 'auth/weak-password') {
        toast.error('Senha muito fraca (mínimo 6 caracteres).')
        setError('Senha muito fraca (mínimo 6 caracteres).')
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        toast.error('E-mail ou senha incorretos.')
        setError('E-mail ou senha incorretos.')
      } else {
        toast.error(t('auth.error'))
        setError(t('auth.error'))
      }
    }
  }

  return (
    <AppModal open={open} onOpenChange={(val) => !val && handleClose()} title={t(`auth.${tab}`)}>
      <div className="space-y-4">
        {/* 🔄 Tabs internas */}
        <div className="flex justify-center gap-6 text-sm font-medium mb-2">
          {['login', 'register', 'recover'].map((tKey) => (
            <span
              key={tKey}
              onClick={() => {
                setTab(tKey)
                resetAll()
              }}
              className={`cursor-pointer pb-1 border-b-2 transition-all ${
                tab === tKey
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted hover:text-foreground'
              }`}
            >
              {t(`auth.${tKey}`)}
            </span>
          ))}
        </div>

        {/* 📩 Email */}
        <AppInput
          label={t('auth.email')}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 🔒 Senha */}
        {(tab === 'login' || tab === 'register') && (
          <AppInput
            label={t('auth.password')}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        {/* 🧾 Confirmação de senha */}
        {tab === 'register' && (
          <AppInput
            label={t('auth.confirmPassword')}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {/* 📢 Mensagem ou Erro */}
        {(message || error) && (
          <div
            className={`text-sm font-medium rounded-md px-4 py-2 ${
              message ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message || error}
          </div>
        )}

        {/* 🔘 Botão de ação */}
        <AppButton
          onClick={handleSubmit}
          variant="primary"
          rounded="pill"
          className="w-full py-2 text-sm"
        >
          {t('auth.submit')}
        </AppButton>

        {/* 🔁 Links contextuais */}
        {tab === 'login' && (
          <div className="text-center text-xs text-muted">
            {t('auth.noAccount')}{' '}
            <span
              onClick={() => {
                setTab('register')
                resetAll()
              }}
              className="text-primary hover:underline cursor-pointer"
            >
              {t('auth.register')}
            </span>{' '}
            •{' '}
            <span
              onClick={() => {
                setTab('recover')
                resetAll()
              }}
              className="text-primary hover:underline cursor-pointer"
            >
              {t('auth.forgot')}
            </span>
          </div>
        )}

        {tab !== 'login' && (
          <div className="text-center text-xs text-muted">
            <span
              onClick={() => {
                setTab('login')
                resetAll()
              }}
              className="text-primary hover:underline cursor-pointer"
            >
              {t('auth.backToLogin')}
            </span>
          </div>
        )}
      </div>
    </AppModal>
  )
}
