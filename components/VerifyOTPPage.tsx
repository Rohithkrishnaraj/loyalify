'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NumericKeypad } from '@/components/ui/numeric-keypad'
import { StatusBar } from '@/components/ui/status-bar'
// import { useRouter } from 'next/navigation'

// Update props
export function VerifyOTPPage({ onVerify, onBack }: { onVerify: () => void, onBack: () => void }) {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
  const [activeIndex, setActiveIndex] = useState(0)
  const [timer, setTimer] = useState(59)

  // const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // ... update useEffect
  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      // All digits are filled
      onVerify()
    }
  }, [otp, onVerify])

  const handleKeyPress = (value: string) => {
    if (activeIndex < 6) {
      const newOtp = [...otp]
      newOtp[activeIndex] = value
      setOtp(newOtp)
      setActiveIndex(prev => Math.min(prev + 1, 5))
    }
  }

  const handleBackspace = () => {
    if (activeIndex > 0) {
      const newOtp = [...otp]
      newOtp[activeIndex - 1] = ''
      setOtp(newOtp)
      setActiveIndex(prev => Math.max(prev - 1, 0))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="text-gray-800">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Title Section */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">Enter OTP Code 📨</h1>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Please check your email inbox for a message from Loyalify. Enter the one-time verification code below.
          </p>
        </div>

        {/* OTP Display */}
        <div className="flex justify-center gap-3 py-4">
          {otp.map((digit, index) => (
            <div
              key={index}
              className={`w-10 h-12 flex items-center justify-center rounded-xl border-2 text-xl font-semibold
                ${index === activeIndex 
                  ? 'border-[#FF4B6E] bg-[#FF4B6E]/5 text-[#FF4B6E]' 
                  : 'border-gray-200 text-gray-900'}`}
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Timer */}
        <div className="text-center">
          {timer > 0 ? (
            <p className="text-sm text-gray-500">
              You can resend the code in {timer} seconds
            </p>
          ) : (
            <button className="text-sm text-[#FF4B6E] font-medium">
              Resend code
            </button>
          )}
        </div>

        {/* Keypad */}
        <div className="flex justify-center pt-6">
          <NumericKeypad
            onKeyPress={handleKeyPress}
            onBackspace={handleBackspace}
          />
        </div>
      </div>
    </div>
  )
}

