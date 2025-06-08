// 📁 tailwind.config.js
// 🎨 Configuração visual institucional FireChain — refinada, modular e pronta para microinterações premium

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
      // 🎨 Paleta institucional (com fallback visual direto)
      colors: {
        background: 'var(--color-bg)',
        foreground: 'var(--color-fg)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        glass: 'var(--color-glass, rgba(255,255,255,0.05))', // 💠 fallback direto
        glow: '#00f0ff'
      },

      // 🧬 Tipografia institucional
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },

      // 🧱 Sombras com profundidade e efeito glow
      boxShadow: {
        default: '0 4px 10px rgba(0,0,0,0.06)',
        md: '0 6px 20px rgba(0,0,0,0.08)',
        glass: '0 8px 32px rgba(0,0,0,0.25)',
        glow: '0 0 16px rgba(0,240,255,0.1)',
        hoverGlow: '0 0 20px rgba(0,240,255,0.07)' // 🧠 micro interação
      },

      // 📐 Espaçamento fluido e adaptável
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 1vw, 1.25rem)',
        'fluid': 'clamp(1rem, 2vw, 2.5rem)',
        'fluid-lg': 'clamp(2rem, 4vw, 5rem)'
      },

      // 🎞️ Transições institucionais suaves
      transitionTimingFunction: {
        fluid: 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms'
      },
      transitionProperty: {
        theme: 'background-color, color, border-color'
      },

      // 🌀 Animações para entrada e micro feedback
      keyframes: {
        slideFade: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        slideFade: 'slideFade 0.3s ease-out',
        fadeInUp: 'fadeInUp 0.4s ease-out forwards',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite'
      },

      // 🔢 Z-Index institucional modular
      zIndex: {
        toast: '60',
        modal: '50',
        dropdown: '40',
        navbar: '30',
        background: '-10',
        atmosphere: '-20'
      },

      // ⚙️ Opacidade intermediária refinada
      opacity: {
        85: '0.85',
        95: '0.95'
      },

      // 🎯 Bordas institucionais consistentes
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
