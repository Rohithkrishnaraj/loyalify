'use client'

import { X, Settings } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AddNewPaymentProps {
  onClose?: () => void;
  onSettings?: () => void;
  onSave: (data: PaymentFormData) => void; // Update 1: Changed onSave prop type to a required function
}

interface PaymentFormData {
  cardNumber: string;
  holderName: string;
  expiryDate: string;
  cvv: string;
}

export function AddNewPayment({ onClose, onSettings, onSave }: AddNewPaymentProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData: PaymentFormData = {
      cardNumber: '2640 4763 7569 8456',
      holderName: 'Andrew Ainsley',
      expiryDate: '06/28',
      cvv: '475'
    }
    onSave(formData) // Update 2: Replaced the handleSubmit function
  }

  const months = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, '0')
    return { value: month, label: month }
  })

  const years = Array.from({ length: 10 }, (_, i) => {
    const year = (new Date().getFullYear() + i).toString().slice(-2)
    return { value: year, label: year }
  })

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <button onClick={onClose} className="text-gray-600">
          <X className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">Add New Payment</h1>
        <button onClick={onSettings} className="text-gray-600">
          <Settings className="h-6 w-6" />
        </button>
      </header>

      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">
            Card Number
          </label>
          <Input 
            defaultValue="2640 4763 7569 8456"
            className="bg-gray-50 border-0"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-900">
            Account Holder Name
          </label>
          <Input 
            defaultValue="Andrew Ainsley"
            className="bg-gray-50 border-0"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-1.5">
            <label className="text-sm font-medium text-gray-900">
              Expiry Date
            </label>
            <Select defaultValue="06/28">
              <SelectTrigger className="bg-gray-50 border-0">
                <SelectValue placeholder="MM/YY" />
              </SelectTrigger>
              <SelectContent>
                {months.map(month => (
                  <SelectItem key={month.value} value={`${month.value}/28`}>
                    {month.value}/28
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 space-y-1.5">
            <label className="text-sm font-medium text-gray-900">
              CVV
            </label>
            <Input 
              defaultValue="475"
              className="bg-gray-50 border-0"
              maxLength={4}
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm font-medium text-gray-900 mb-4">
            Supported Payments:
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-6 relative">
              <div className="w-10 h-6 rounded bg-[#FF5F00] flex items-center justify-center">
                <div className="flex">
                  <div className="w-3 h-3 rounded-full bg-[#EB001B]" />
                  <div className="w-3 h-3 rounded-full bg-[#F79E1B] ml-[-4px]" />
                </div>
              </div>
            </div>
            <div className="w-10 h-6 relative">
              <div className="w-10 h-6 rounded bg-[#1434CB] flex items-center justify-center text-white text-xs font-bold">
                VISA
              </div>
            </div>
            <div className="w-10 h-6 relative">
              <div className="w-10 h-6 rounded bg-[#FF9900] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="currentColor"
                    d="M18.85 11.88c-.06.48-.46.87-.95.87h-2.76c-.6 0-1.08-.48-1.08-1.08V9.9c0-.6.48-1.08 1.08-1.08h2.76c.49 0 .89.39.95.87.1.73.1 1.45 0 2.19z"
                  />
                  <path
                    fill="currentColor"
                    d="M21.87 15.89l-1.08-4.88c-.15-.69-.76-1.18-1.47-1.18h-3.24c-.82 0-1.49.67-1.49 1.49v4.57c0 .82.67 1.49 1.49 1.49h4.72c.58 0 1-.56.83-1.11-.15-.49-.58-.83-1.08-.83h-3.24c-.41 0-.75-.34-.75-.75v-1.49h3.99c.71 0 1.32-.49 1.47-1.18l.15-.69c.17-.55-.25-1.11-.83-1.11h-4.72c-.41 0-.75-.34-.75-.75V9.9c0-.41.34-.75.75-.75h3.24c.41 0 .75.34.75.75v.75h-2.76c-.71 0-1.32.49-1.47 1.18l-.15.69c-.17.55.25 1.11.83 1.11h4.72c.41 0 .75.34.75.75v.75h-3.99c-.71 0-1.32.49-1.47 1.18l-.15.69c-.17.55.25 1.11.83 1.11h4.72c.41 0 .75.34.75.75v.75h-7.48c-1.24 0-2.24-1-2.24-2.24V8.41c0-1.24 1-2.24 2.24-2.24h7.48c1.24 0 2.24 1 2.24 2.24v7.48z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-10 h-6 relative">
              <div className="w-10 h-6 rounded bg-[#006FCF] flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-10 h-6 relative">
              <div className="w-10 h-6 rounded bg-[#1B4494] flex items-center justify-center text-white text-xs font-bold">
                JCB
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4">
          <Button 
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-12 text-base font-medium"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}

