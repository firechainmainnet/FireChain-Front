// 📁 components/ui/AppModal.jsx
// 🔐 Modal universal com responsividade refinada para todos os breakpoints FireChain

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
        {/* 🔲 Backdrop com leve saturação e blur */}
        <Dialog.Overlay
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm backdrop-saturate-[1.2] animate-fadeIn"
        />

        {/* 🎯 Container centralizado */}
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <Dialog.Content
            aria-modal="true"
            className={clsx(
              // 📱 Responsivo
              'w-full max-w-md md:max-w-lg xl:max-w-xl max-h-[90vh]',

              // 💎 Glass + border
              'bg-glass backdrop-blur-md backdrop-saturate-150 text-foreground',
              'border border-white/10 shadow-xl rounded-2xl',

              // 📐 Padding adaptado
              'p-5 sm:p-4 md:p-6 xl:p-10',

              // ✍️ Tipografia
              'text-sm sm:text-xs xl:text-base',

              // 📜 Scroll
              'overflow-y-auto scroll-smooth',

              // 🎞️ Entrada suave
              'animate-slideFade transition-all duration-300 ease-in-out',

              'focus:outline-none',
              className
            )}
          >
            {/* 🧠 Cabeçalho com título e botão de fechar */}
            <div className="flex items-start justify-between mb-4">
              {typeof title === 'string' ? (
                <Dialog.Title className="text-xl font-semibold leading-tight">
                  {title}
                </Dialog.Title>
              ) : (
                <Dialog.Title asChild>{title}</Dialog.Title>
              )}

              {/* ❌ Botão de fechar */}
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

            {/* 📄 Conteúdo principal do modal */}
            <div className="pr-1">{children}</div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
