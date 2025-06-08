// 📁 hooks/useTokenomicsData.js
// 🔮 Hook para consumir dados de tokenomics do Firebase (tempo real, leitura pública)

import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { oracleDb } from '../lib/oracleFirebase'

export default function useTokenomicsData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const path = '/prices'
    const dbRef = ref(oracleDb, path)

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const value = snapshot.val()
        if (value) {
          setData(value)
          setError(null)
        } else {
          setError('Dados não encontrados.')
        }
        setLoading(false)
      },
      (err) => {
        console.error('[🔥 Tokenomics Firebase Error]', err)
        setError('Erro ao conectar com oráculo.')
        setLoading(false)
      }
    )

    // 🧼 Cleanup on unmount
    return () => unsubscribe()
  }, [])

  return { data, loading, error }
}
