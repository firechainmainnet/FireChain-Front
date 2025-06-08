// 📁 components/ui/AppModal.jsx
// 🔐 Modal universal refinado com glass institucional e responsividade premium FireChain

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import clsx from 'clsx'
import IconWrapper from './IconWrapper'

export default function AppModal({
  open,
  onOpenChange,
  title,
  children,
  className = ''
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* 🔲 Backdrop com saturação e blur institucional */}
        <Dialog.Overlay
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md backdrop-saturate-125 transition-opacity duration-300 animate-fadeIn"
        />

        {/* 🎯 Container do conteúdo centralizado com alinhamento institucional */}
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <Dialog.Content
            aria-modal="true"
            className={clsx(
              // 📱 Responsivo adaptável
              'w-full max-w-md sm:max-w-lg xl:max-w-xl max-h-[88vh]',

              // 💎 Visual institucional
              'bg-glass text-foreground border border-white/10 shadow-xl rounded-2xl',

              // 📐 Padding modular
              'p-5 sm:p-6 md:p-8 xl:p-10',

              // ✍️ Tipografia refinada
              'text-sm sm:text-xs xl:text-base',

              // 📜 Scroll interno
              'overflow-y-auto scroll-smooth hide-scrollbar',

              // 🎞️ Entrada animada
              'animate-slideFade transition-all duration-300 ease-in-out',

              'focus:outline-none',
              className
            )}
          >
            {/* 🧠 Cabeçalho com título institucional e botão de fechar */}
            <div className="flex items-start justify-between mb-5">
              {typeof title === 'string' ? (
                <Dialog.Title className="text-lg font-semibold leading-snug tracking-tight">
                  {title}
                </Dialog.Title>
              ) : (
                <Dialog.Title asChild>{title}</Dialog.Title>
              )}

              {/* ❌ Botão de fechar institucional */}
              <Dialog.Close asChild>
                <button
                  className="text-muted hover:text-primary transition p-1"
                  aria-label="Fechar modal"
                >
                  <IconWrapper size={5}>
                    <X />
                  </IconWrapper>
                </button>
              </Dialog.Close>
            </div>

            {/* 📄 Conteúdo renderizado no body do modal */}
            <div className="pr-1">{children}</div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
