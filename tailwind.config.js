const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './i18n/**/*.{js,jsx}',
    './context/**/*.{js,jsx}'
  ],
  darkMode: 'class', // 🌙 Suporte ao tema escuro via classe
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        foreground: 'var(--color-fg)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        glass: 'var(--color-glass)'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        default: '0 4px 10px rgba(0,0,0,0.06)',
        md: '0 6px 20px rgba(0,0,0,0.08)'
      },
      zIndex: {
        toast: '60',
        modal: '50',
        dropdown: '40',
        navbar: '30'
      },
      opacity: {
        85: '0.85',
        95: '0.95'
      },
      keyframes: {
        slideFade: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        slideFade: 'slideFade 0.3s ease-out'
      },
      transitionProperty: {
        theme: 'background-color, color, border-color'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
