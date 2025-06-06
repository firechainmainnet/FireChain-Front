// 📁 i18n/LanguageContext.js
// 🌍 Contexto multilíngue institucional (pt/en)

import { createContext, useContext, useEffect, useState } from 'react'
import pt from './locales/pt.json'
import en from './locales/en.json'

const LanguageContext = createContext()

const translations = { pt, en }

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt')
  const [ready, setReady] = useState(false)

  // 🔁 Recuperar idioma salvo no localStorage (opcional)
  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang)
    }
    setReady(true)
  }, [])

  // 💾 Persistência no localStorage
  const handleLanguageChange = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
      localStorage.setItem('language', lang)
    }
  }

  // 🧠 Tradutor básico
  const t = (key) => {
    const keys = key.split('.')
    return keys.reduce((obj, k) => (obj && obj[k]) || key, translations[language])
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleLanguageChange, t, ready }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext)
