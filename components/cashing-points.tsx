'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface CashingPointsProps {
  onBack?: () => void;
  onContinue?: (amount: string) => void;
}

export function CashingPoints({ onBack, onContinue }: CashingPointsProps) {
  const [amount, setAmount] = useState('0')
  const availablePoints = '249,560'
  
  const handleNumberPress = (num: string) => {
    if (amount === '0') {
      setAmount(num)
    } else {
      setAmount(prev => prev + num)
    }
  }

  const handleBackspace = () => {
    if (amount.length > 1) {
      setAmount(prev => prev.slice(0, -1))
    } else {
      setAmount('0')
    }
  }

  const handleDecimalPoint = () => {
    if (!amount.includes('.')) {
      setAmount(prev => prev + '.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-rose-500 min-h-[45vh]">
        <header className="flex items-center p-4">
          <Link href="#" className="text-white" onClick={onBack}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-white text-lg font-medium ml-3">Cashing Points</h1>
        </header>
        
        <div className="px-6 pt-6 text-white">
          <p className="text-sm opacity-90">Enter amount of points you want to cashing</p>
          <div className="flex justify-center my-8">
            <span className="text-6xl font-light">{amount}</span>
          </div>
          <div className="text-sm opacity-90">
            <p>Available points: {availablePoints}</p>
            <p>0 points equals $0.00</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <Button 
          onClick={() => onContinue?.(amount)}
          className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-full h-12 text-base font-medium"
        >
          Continue
        </Button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberPress(num.toString())}
              className="h-14 text-2xl font-light text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleDecimalPoint}
            className="h-14 text-2xl font-light text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
          >
            .
          </button>
          <button
            onClick={() => handleNumberPress('0')}
            className="h-14 text-2xl font-light text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="h-14 flex items-center justify-center text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20 12H4m0 0l6-6m-6 6l6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

