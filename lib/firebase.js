// 📁 lib/firebase.js
// 🔐 Inicialização do Firebase para autenticação e RTDB — FireChain

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// 🔑 Credenciais fornecidas (projeto FireChain)
const firebaseConfig = {
  apiKey: "AIzaSyBMmy8i6CUsDpKiLHQKWcSdT_P0txz0lPI",
  authDomain: "firechaintech.firebaseapp.com",
  databaseURL: "https://firechaintech-default-rtdb.firebaseio.com",
  projectId: "firechaintech",
  storageBucket: "firechaintech.firebasestorage.app",
  messagingSenderId: "670938370399",
  appId: "1:670938370399:web:5c58bc088ca81f064726ea",
  measurementId: "G-GXKCN5HHKS"
}

// 🚀 Inicializa o app
const firebaseApp = initializeApp(firebaseConfig)

// 🔐 Exporta instâncias de serviços
export const auth = getAuth(firebaseApp)
export const database = getDatabase(firebaseApp)
