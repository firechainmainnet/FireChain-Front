// 📁 components/ui/AppHeadlineRotator.jsx
// ✍️ Headline institucional fixo, truncável e mobile-safe

import { useTranslation } from '../../i18n/LanguageContext'
import { useEffect, useState } from 'react'

export default function AppHeadlineRotator() {
  const { t, ready } = useTranslation()
  const messages = t('hero.descriptions') || []

  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const typingSpeed = 50
  const erasingSpeed = 30
  const pauseDuration = 1800
  const initialDelay = 400

  useEffect(() => {
    if (!ready || messages.length === 0) return

    let charIndex = 0
    let timeoutId

    const type = () => {
      if (charIndex <= messages[index].length) {
        setDisplayText(messages[index].slice(0, charIndex))
        charIndex++
        timeoutId = setTimeout(type, typingSpeed)
      } else {
        setTimeout(() => erase(), pauseDuration)
        setIsTyping(false)
      }
    }

    const erase = () => {
      if (charIndex >= 0) {
        setDisplayText(messages[index].slice(0, charIndex))
        charIndex--
        timeoutId = setTimeout(erase, erasingSpeed)
      } else {
        setIsTyping(true)
        setIndex((prev) => (prev + 1) % messages.length)
      }
    }

    const start = () => {
      charIndex = 0
      setTimeout(type, initialDelay)
    }

    start()

    return () => clearTimeout(timeoutId)
  }, [index, ready, messages])

  if (!ready || messages.length === 0) return null

  return (
    <div
      className={`
        text-lg sm:text-xl md:text-2xl text-muted font-medium text-center
        leading-tight max-w-[90vw] sm:max-w-xl md:max-w-2xl mx-auto
        h-[4.8rem] sm:h-[5.4rem] md:h-[6.2rem]
        overflow-hidden relative
        transition-all duration-300 ease-in-out
      `}
    >
      <span className="block w-full break-words">{displayText}</span>
      <span
        className={`ml-1 inline-block w-[1ch] ${
          isTyping ? 'animate-blink' : 'opacity-0'
        }`}
      >
        |
      </span>
    </div>
  )
}
