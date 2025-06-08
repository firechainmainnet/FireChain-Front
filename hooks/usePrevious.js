// 📁 hooks/usePrevious.js
// 🔁 Armazena o valor anterior de uma variável para detectar mudanças

import { useEffect, useRef } from 'react'

export default function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
