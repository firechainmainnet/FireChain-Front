// 📁 pages/_app.jsx
// 🧠 Core da app com tema, idioma, autenticação e toasts institucionais

import '../styles/globals.css'
import 'react-tooltip/dist/react-tooltip.css' // ✅ Tooltip ok
// ❌ Removido: react-hot-toast.css manual

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

      {/* 🔔 Toaster institucional global */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 6000,
          className:
            'bg-glass text-foreground shadow-lg border border-border backdrop-blur-md rounded-xl text-sm px-4 py-3 z-[60]'
        }}
      />
    </>
  )
}
