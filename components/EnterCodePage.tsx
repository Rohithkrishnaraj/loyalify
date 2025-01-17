'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CustomKeyboard } from '@/components/ui/custom-keyboard'

interface EnterCodePageProps {
  onBack: () => void
  onSubmit: () => void
}

export function EnterCodePage({ onBack, onSubmit }: EnterCodePageProps) {
  const [code, setCode] = useState('')

  const handleKeyPress = (key: string) => {
    setCode(prev => prev + key)
  }

  const handleDelete = () => {
    setCode(prev => prev.slice(0, -1))
  }

  const handleSubmit = () => {
    if (code.length > 0) {
      onSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-4 py-4 flex items-center gap-4 border-b">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-medium text-gray-900">Enter Code Manually</h1>
      </div>

      <div className="flex-1 p-4">
        <div className="w-full min-h-[100px] text-center text-xl font-mono break-all p-4">
          {code || 'Enter code...'}
        </div>
      </div>

      <div className="px-4 pb-4">
        <Button 
          onClick={handleSubmit}
          disabled={!code}
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
        >
          Submit
        </Button>
      </div>

      <CustomKeyboard
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

