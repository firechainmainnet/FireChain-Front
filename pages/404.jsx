// 📁 pages/404.jsx
import Link from 'next/link'
import { FaFireAlt } from 'react-icons/fa'
import IconWrapper from '../components/ui/IconWrapper'

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background text-foreground animate-fadeIn">
      <IconWrapper size={10} className="text-primary mb-4">
        <FaFireAlt />
      </IconWrapper>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        Página não encontrada
      </h1>

      <p className="text-muted max-w-xl mb-8 text-sm sm:text-base">
        Este endpoint não está presente na infraestrutura soberana FireChain.  
        Verifique o endereço ou retorne ao início da cadeia.
      </p>

      <Link href="/" className="text-sm px-5 py-2 rounded-full bg-primary text-white hover:bg-orange-600 transition">
        Voltar para o início 🔁
      </Link>
    </div>
  )
}
