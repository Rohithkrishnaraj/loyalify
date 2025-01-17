'use client'

import { useState } from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation' //Removed as per update 3
import { ArrowLeft, Eye, EyeOff, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatusBar } from '@/components/ui/status-bar'

// Update props
export function NewPasswordPage({ onSubmit, onBack }: { onSubmit: () => void, onBack: () => void }) {
  // const router = useRouter() //Removed as per update 3
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
          <button onClick={onBack} className="text-gray-800"> {/* Update 2 */}
            <ArrowLeft className="w-6 h-6" />
          </button> {/* Update 2 */}
        </div>

        {/* Title Section */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              Secure Your Account
              <span className="ml-2">🔒</span>
            </h1>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Almost there! Create a new password for your Loyalify account to keep it secure. Remember
            to choose a strong and unique password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-3 rounded-xl"
          >
            Save New Password
          </Button>
        </form>
      </div>
    </div>
  )
}

