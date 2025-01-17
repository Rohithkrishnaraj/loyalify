'use client'

import { ChevronLeft, Plus, Check } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CashingToProps {
  onBack?: () => void;
  onContinue?: (selectedMethod: string) => void;
  onAddNew?: () => void;
}

export function CashingTo({ onBack, onContinue, onAddNew }: CashingToProps) {
  const paymentMethods = [
    {
      id: 1,
      name: "PayPal",
      logo: "/placeholder.svg?height=24&width=24",
      last4: "",
      selected: false
    },
    {
      id: 2,
      name: "Google Pay",
      logo: "/placeholder.svg?height=24&width=24",
      last4: "",
      selected: false
    },
    {
      id: 3,
      name: "Apple Pay",
      logo: "/placeholder.svg?height=24&width=24",
      last4: "",
      selected: false
    },
    {
      id: 4,
      name: "Mastercard",
      logo: "/placeholder.svg?height=24&width=24",
      last4: "4279",
      selected: false
    },
    {
      id: 5,
      name: "Visa",
      logo: "/placeholder.svg?height=24&width=24",
      last4: "5567",
      selected: true
    },
    {
      id: 6,
      name: "American Express",
      logo: "/placeholder.svg?height=24&width=24",
      last4: "8456",
      selected: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-3">
          <Link href="#" className="text-gray-600" onClick={onBack}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Cashing to</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-600" onClick={onAddNew}>
          <Plus className="h-5 w-5" />
        </Button>
      </header>

      <main className="p-4 space-y-3">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center justify-between p-4 bg-white rounded-lg border ${
              method.selected ? 'border-rose-500' : 'border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src={method.logo || "/placeholder.svg"}
                  
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{method.name}</span>
                {method.last4 && (
                  <span className="text-gray-500">
                    •••• •••• •••• {method.last4}
                  </span>
                )}
              </div>
            </div>
            {method.selected && (
              <Check className="h-5 w-5 text-rose-500" />
            )}
          </div>
        ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <Button 
          onClick={() => onContinue?.('selected-method')}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-12 text-base font-medium"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

