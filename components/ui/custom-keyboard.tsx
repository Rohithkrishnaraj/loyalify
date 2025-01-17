'use client'

import { useState } from 'react'
import { ArrowLeft, Delete } from 'lucide-react'

interface CustomKeyboardProps {
  onKeyPress: (key: string) => void
  onDelete: () => void
  onSubmit: () => void
}

export function CustomKeyboard({ onKeyPress, onDelete, onSubmit }: CustomKeyboardProps) {
  const [isUpperCase, setIsUpperCase] = useState(true)
  const [isNumeric, setIsNumeric] = useState(false)

  const alphabetKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ]

  const numericKeys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
    ['[', ']', '{', '}', '#', '%', '^', '*', '+', '=']
  ]

  const handleKeyPress = (key: string) => {
    onKeyPress(isUpperCase ? key : key.toLowerCase())
  }

  const renderKey = (key: string) => (
    <button
      key={key}
      onClick={() => handleKeyPress(key)}
      className="h-12 flex-1 flex items-center justify-center text-gray-900 active:bg-gray-200 rounded"
    >
      {key}
    </button>
  )

  return (
    <div className="bg-gray-100 px-2 py-4 space-y-2">
      {(isNumeric ? numericKeys : alphabetKeys).map((row, i) => (
        <div key={i} className="flex justify-center gap-1">
          {i === 2 && (
            <button
              onClick={() => setIsNumeric(!isNumeric)}
              className="w-16 text-sm bg-gray-200 rounded"
            >
              {isNumeric ? 'ABC' : '123'}
            </button>
          )}
          {row.map(key => renderKey(key))}
          {i === 2 && (
            <button
              onClick={onDelete}
              className="w-16 flex items-center justify-center bg-gray-200 rounded"
            >
              <Delete className="w-5 h-5" />
            </button>
          )}
        </div>
      ))}
      <div className="flex gap-1">
        <button
          onClick={() => setIsUpperCase(!isUpperCase)}
          className="w-16 text-sm bg-gray-200 rounded"
        >
          {isUpperCase ? '↑' : '↓'}
        </button>
        <button
          onClick={() => onKeyPress(' ')}
          className="flex-1 h-12 bg-gray-200 rounded text-sm"
        >
          space
        </button>
        <button
          onClick={onSubmit}
          className="w-16 bg-blue-500 text-white rounded text-sm"
        >
          Go
        </button>
      </div>
    </div>
  )
}

