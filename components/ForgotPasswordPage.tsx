'use client'

import Link from 'next/link'
import { ArrowLeft, Key } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatusBar } from '@/components/ui/status-bar'

// Update props
export function ForgotPasswordPage({ onSubmit }: { onSubmit: () => void }) {
  //const router = useRouter() //Removed unused import

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={() => router.back()} className="text-gray-800"> {/* Updated back button */}
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Title Section */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">Forgot Your Password?</h1>
            <Key className="w-6 h-6 text-[#FF4B6E]" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            We've got you covered! Enter your registered email to reset your password. We will send an
            OTP code to your email for the next steps.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Your Registered Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none text-gray-600"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
          >
            Send OTP Code
          </Button>
        </form>
      </div>
    </div>
  )
}

