'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, User2, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Update props
export function SignupPage({ onSuccess, onBack }: { onSuccess: () => void, onBack: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    onSuccess()
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-sm mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="text-gray-800">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Title Section */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">Join Loyalify Today</h1>
            <User2 className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-gray-500">Unlock Rewards, Start Earning Now!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Referral Code (optional)</label>
            <input
              type="text"
              placeholder="Referral Code"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 rounded border-gray-300 text-[#FF4B6E] focus:ring-[#FF4B6E]"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to Loyalify{' '}
              <Link href="#" className="text-[#FF4B6E] hover:underline">
                Terms & Conditions
              </Link>
              .
            </label>
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
            disabled={!agreed}
          >
            Sign up
          </Button>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button onClick={onBack} className="text-[#FF4B6E] hover:underline">
                Sign in
              </button>
            </p>
            
            <div className="text-sm text-gray-500">or</div>

            <button type="button" className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors">
              <img src="/placeholder.svg?height=24&width=24" alt="" className="w-6 h-6" />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

