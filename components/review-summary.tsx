'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ReviewSummaryProps {
  onBack?: () => void;
  onCashingNow?: () => void;
  onChangePayment?: () => void;
}

export function ReviewSummary({ onBack, onCashingNow, onChangePayment }: ReviewSummaryProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center p-4 bg-white">
        <Link href="#" className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium ml-3">Review Summary</h1>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Points Amount</span>
            <span className="font-medium">100,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Cashing Conversion</span>
            <span className="font-medium">$100.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Fee</span>
            <span className="font-medium">Free</span>
          </div>
          
          <div className="pt-4 border-t">
            <span className="text-gray-600">You will get</span>
            <div className="text-xl font-medium mt-1">$100.00</div>
          </div>
          
          <div className="pt-4 border-t">
            <span className="text-gray-600">Cashing to</span>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Visa"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-gray-500">•••• •••• •••• 5567</span>
              </div>
              <button 
                onClick={onChangePayment}
                className="text-rose-500 font-medium"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <Button 
          onClick={onCashingNow}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-12 text-base font-medium"
        >
          Cashing Now
        </Button>
      </div>
    </div>
  )
}

