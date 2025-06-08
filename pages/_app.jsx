// 📁 pages/_app.jsx
// 🧠 Core da app com tema, idioma, autenticação e toasts institucionais

import '../styles/globals.css'
import 'react-tooltip/dist/react-tooltip.css'

import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../i18n/LanguageContext'
import { AuthProvider } from '../context/AuthContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>

      {/* 🔔 Toaster institucional com suporte a temas */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          className: `
            dark:bg-surface dark:text-white dark:border dark:border-white/10
            bg-white text-black border border-black/10
            shadow-lg backdrop-blur-md rounded-xl text-sm px-4 py-3 z-toast
            transition-all
          `
        }}
      />
    </>
  )
}
