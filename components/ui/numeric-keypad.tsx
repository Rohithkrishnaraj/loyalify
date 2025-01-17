'use client'

import { SkipBackIcon as Backspace } from 'lucide-react'

interface NumericKeypadProps {
  onKeyPress: (value: string) => void
  onBackspace: () => void
}

export function NumericKeypad({ onKeyPress, onBackspace }: NumericKeypadProps) {
  const keys = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '.', '0'
  ]

  return (
    <div className="grid grid-cols-3 gap-6">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onKeyPress(key)}
          className="w-12 h-12 text-2xl font-medium text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
        >
          {key}
        </button>
      ))}
      <button
        onClick={onBackspace}
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
      >
        <Backspace className="w-6 h-6 text-gray-900" />
      </button>
    </div>
  )
}

