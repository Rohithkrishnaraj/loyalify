'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CircularProgress } from '@/components/ui/circular-progress'

interface SelectReceiptPageProps {
  onBack: () => void
  onContinue: () => void
}

export function SelectReceiptPage({ onBack, onContinue }: SelectReceiptPageProps) {
  const [progress, setProgress] = useState(0)
  const [fileName, setFileName] = useState('IMG-12222024-0941.jpg')

  // Simulate upload progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Select Receipt</h1>
        </div>
        <button>
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 space-y-4">
        <CircularProgress progress={progress} />
        <div className="text-center space-y-1">
          <p className="text-gray-900">Uploading... ({progress}%)</p>
          <p className="text-sm text-gray-500">{fileName}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4">
        <Button 
          onClick={onContinue}
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
          disabled={progress < 100}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

