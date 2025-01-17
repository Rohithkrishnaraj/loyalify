'use client'

import { useState } from 'react'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PointsOption {
  points: number
  price: number
}

interface BuyPointsPageProps {
  onBack: () => void
  onContinue: (points: number) => void
}

export function BuyPointsPage({ onBack, onContinue }: BuyPointsPageProps) {
  const [selectedOption, setSelectedOption] = useState<number>(10000)

  const pointsOptions: PointsOption[] = [
    { points: 1000, price: 1.00 },
    { points: 2000, price: 2.00 },
    { points: 2500, price: 2.50 },
    { points: 5000, price: 5.00 },
    { points: 10000, price: 10.00 },
    { points: 20000, price: 20.00 },
    { points: 25000, price: 25.00 },
    { points: 50000, price: 50.00 },
    { points: 75000, price: 75.00 },
    { points: 100000, price: 100.00 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Buy Points</h1>
          </div>
        </div>
        
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF4B6E]/10 rounded-full flex items-center justify-center">
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="Points"
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Your Points</p>
              <div className="flex items-center gap-1">
                <p className="text-lg font-semibold">249,560</p>
                <span className="text-xs text-gray-400">(LEVEL 24)</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {pointsOptions.map((option) => (
            <button
              key={option.points}
              onClick={() => setSelectedOption(option.points)}
              className={`p-4 rounded-xl flex flex-col items-start transition-colors
                ${option.points === selectedOption 
                  ? 'bg-[#FF4B6E] text-white' 
                  : 'bg-white text-gray-900'}`}
            >
              <span className="font-medium">{option.points.toLocaleString()} pts</span>
              <span className={option.points === selectedOption ? 'text-white/90' : 'text-gray-500'}>
                ${option.price.toFixed(2)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={() => onContinue(selectedOption)}
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

