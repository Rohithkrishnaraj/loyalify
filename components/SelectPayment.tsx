'use client'

import { useState } from 'react'
import { ArrowLeft, Plus, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PaymentMethod {
  id: string
  type: 'digital' | 'card'
  name: string
  icon: string
  lastFour?: string
}

interface SelectPaymentProps {
  onBack: () => void
  onConfirm: (selectedMethod: string, selectedPoints: number) => void // Updated onConfirm type
  selectedPoints: number
}

export function SelectPayment({ onBack, onConfirm, selectedPoints }: SelectPaymentProps) {
  const [selectedMethod, setSelectedMethod] = useState('mastercard')

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'paypal',
      type: 'digital',
      name: 'PayPal',
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paypal-logo-small-Uxg6h9AlDnnqGTm3ERMwxyg1n8Hymn.png'
    },
    {
      id: 'googlepay',
      type: 'digital',
      name: 'Google Pay',
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-pay-logo-small-Uxg6h9AlDnnqGTm3ERMwxyg1n8Hymn.png'
    },
    {
      id: 'applepay',
      type: 'digital',
      name: 'Apple Pay',
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-pay-logo-small-Uxg6h9AlDnnqGTm3ERMwxyg1n8Hymn.png'
    },
    {
      id: 'mastercard',
      type: 'card',
      name: 'Mastercard',
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mastercard-logo-small-Uxg6h9AlDnnqGTm3ERMwxyg1n8Hymn.png',
      lastFour: '4679'
    },
    {
      id: 'visa',
      type: 'card',
      name: 'Visa',
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visa-logo-small-Uxg6h9AlDnnqGTm3ERMwxyg1n8Hymn.png',
      lastFour: '5567'
    },
    {
      id: 'amex',
      type: 'card',
      name: 'American Express',
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amex-logo-small-Uxg6h9AlDnnqGTm3ERMwxyg1n8Hymn.png',
      lastFour: '8456'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Select Payment Method</h1>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors
              ${method.id === selectedMethod 
                ? 'bg-white border-2 border-[#FF4B6E]' 
                : 'bg-white border border-gray-100'}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src={method.icon || "/placeholder.svg"}
                  alt={method.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{method.name}</span>
                {method.lastFour && (
                  <span className="text-gray-500">
                    •••• •••• •••• {method.lastFour}
                  </span>
                )}
              </div>
            </div>
            {method.id === selectedMethod && (
              <Check className="w-5 h-5 text-[#FF4B6E]" />
            )}
          </button>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={() => onConfirm(selectedMethod, selectedPoints)} // Updated onClick handler
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
        >
          Confirm Payment ({selectedPoints.toLocaleString()} pts - ${(selectedPoints / 1000).toFixed(2)})
        </Button>
      </div>
    </div>
  )
}

