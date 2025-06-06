// 📁 components/ui/AppThemeSwitcher.jsx
// 🌗 Botão institucional de troca de tema com ícone e transição suave

import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function AppThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:brightness-110 transition duration-200 text-primary focus:outline-none"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </button>
  )
}
