// 📁 context/AuthContext.js
// 🔐 Autenticação Firebase com contexto global, UX refinado e feedback visual

import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut
} from 'firebase/auth'

import { auth } from '../lib/firebase'
import toast from 'react-hot-toast'

// 🎯 Contexto
const AuthContext = createContext()

// 🚀 Provider global
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 🔁 Detecta mudança de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // 🔐 Login com email/senha
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  // 🆕 Criar nova conta
  const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(userCredential.user)
  }

  // 📧 Recuperar senha
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
  }

  // 🔓 Logout com feedback
  const logout = async () => {
    await signOut(auth)
    setUser(null)
    toast.success('Sessão encerrada.')
  }

  // ✉️ Reenviar verificação de e-mail
  const resendVerification = async () => {
    if (user && !user.emailVerified) {
      try {
        await sendEmailVerification(user)
        toast.success('Verificação enviada para seu e-mail.')
      } catch (err) {
        console.error('[🔁 Falha ao reenviar verificação]', err)
        toast.error('Erro ao enviar verificação.')
      }
    }
  }

  // 📌 Verificação de e-mail (para uso em UI)
  const isVerified = user?.emailVerified ?? false

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        resetPassword,
        logout,
        isVerified,
        resendVerification,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// 🧠 Hook de acesso
export const useAuth = () => useContext(AuthContext)
