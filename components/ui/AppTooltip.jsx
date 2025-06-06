// 📁 components/ui/AppTooltip.jsx
// ✅ Tooltip adaptável com Popover no mobile, sem interferência de clique externo

import * as Tooltip from '@radix-ui/react-tooltip'
import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function AppTooltip({
  children,
  content,
  side = 'top',
  sideOffset = 6,
  delayDuration = 100,
  className = ''
}) {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const isTouch =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    setIsTouchDevice(isTouch)
  }, [])

  if (isTouchDevice) {
    // ✅ VERSÃO MOBILE — sem conflito com modal/pill
    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger
          asChild
          onPointerDown={(e) => {
            e.stopPropagation()
            setOpen((prev) => !prev)
          }}
        >
          <span className="inline-flex cursor-pointer">{children}</span>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            side={side}
            sideOffset={sideOffset}
            className={clsx(
              'z-[60] bg-surface/95 backdrop-blur-md text-foreground',
              'text-xs md:text-sm xl:text-base',
              'px-3 md:px-4 py-2 rounded-md shadow-lg border border-border',
              'animate-slideFade max-w-xs',
              className
            )}
          >
            {content}
            <Popover.Arrow className="fill-surface" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    )
  }

  // ✅ VERSÃO DESKTOP — Tooltip tradicional
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="inline-flex cursor-help">{children}</span>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            sideOffset={sideOffset}
            className={clsx(
              'z-[60] bg-surface/90 backdrop-blur-md text-foreground',
              'text-xs md:text-sm xl:text-base',
              'px-3 md:px-4 py-2 rounded-md shadow-lg border border-border',
              'animate-slideFade max-w-xs',
              className
            )}
          >
            {content}
            <Tooltip.Arrow className="fill-surface" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
