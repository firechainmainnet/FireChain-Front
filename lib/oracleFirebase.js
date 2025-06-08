// 📁 lib/oracleFirebase.js
// 🔮 Instância isolada para o Firebase de leitura pública (oráculo de tokenomics)

import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const oracleConfig = {
  apiKey: "AIzaSyCOP1shbzbdOFwUO7SaeCWT7bVIwOlu0jg",
  authDomain: "firechain-cli.firebaseapp.com",
  databaseURL: "https://firechain-cli-default-rtdb.firebaseio.com",
  projectId: "firechain-cli",
  storageBucket: "firechain-cli.firebasestorage.app",
  messagingSenderId: "927931805688",
  appId: "1:927931805688:web:f8cd124abbf0a952c9b00d",
  measurementId: "G-0XPNKHSDK4"
}

// 🧠 Cria instância nomeada 'oracle' apenas se ainda não existir
const oracleApp =
  getApps().find(app => app.name === 'oracle') ||
  initializeApp(oracleConfig, 'oracle')

// 🔄 Retorna instância do Realtime Database
export const oracleDb = getDatabase(oracleApp)
