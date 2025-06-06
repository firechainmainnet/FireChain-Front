// 📁 components/ui/AppDropdown.jsx
// 🎯 Dropdown reutilizável com suporte a item institucional desativado (ex: email)

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

export default function AppDropdown({
  trigger,
  items = [], // 📋 Lista: [{ label, value, disabled? }]
  selected,
  onSelect = () => {},
  className = ''
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="end"
          className={clsx(
            'min-w-[140px] rounded-md bg-surface shadow-lg border border-white/10 p-1 z-50 animate-slideFade',
            className
          )}
        >
          {items.map(({ label, value, disabled }) =>
            disabled ? (
              // 🔒 Item institucional — não clicável
              <div
                key={value}
                className="px-3 py-2 text-xs text-muted cursor-default select-none"
              >
                {label}
              </div>
            ) : (
              // ✅ Item interativo
              <DropdownMenu.Item
                key={value}
                onSelect={() => onSelect(value)}
                className={clsx(
                  'px-3 py-2 text-sm rounded-md cursor-pointer transition-all duration-200',
                  selected === value
                    ? 'bg-primary text-white'
                    : 'hover:bg-muted/10 text-muted'
                )}
              >
                {label}
              </DropdownMenu.Item>
            )
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
