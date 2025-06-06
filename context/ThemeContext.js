// 🧠 ThemeContext - Gerencia tema global dark/light com persistência
// 📁 src/context/ThemeContext.js

import { createContext, useContext, useEffect, useState } from 'react'

// 🔌 Criamos o contexto
const ThemeContext = createContext()

// 🎯 Hook para acessar contexto
export function useTheme() {
  return useContext(ThemeContext)
}

// 🎛️ Provider com lógica completa
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  // 🧠 Aplica tema salvo do localStorage ao carregar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  // 🔁 Alterna tema e salva no localStorage
  const toggleTheme = () => {
    const html = document.documentElement
    const newTheme = isDark ? 'light' : 'dark'

    html.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(newTheme === 'dark')
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
