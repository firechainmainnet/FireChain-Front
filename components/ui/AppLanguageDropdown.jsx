// 📁 components/ui/AppLanguageDropdown.jsx
// 🌍 Dropdown institucional de troca de idioma usando useTranslation()

import { useTranslation } from '../../i18n/LanguageContext'
import { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'

export default function AppLanguageDropdown() {
  const { language, setLanguage } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleChange = (lang) => {
    setLanguage(lang)
    setOpen(false)
  }

  const languages = [
    { code: 'en', label: '🇺🇸 English' },
    { code: 'pt', label: '🇧🇷 Português' }
  ]

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:brightness-110 transition duration-200 text-primary focus:outline-none"
        aria-label="Trocar idioma"
      >
        <FiGlobe className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-surface border border-border rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary/10 transition ${
                language === lang.code ? 'font-bold text-primary' : ''
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
