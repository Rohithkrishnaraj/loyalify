'use client'

import { useState } from 'react'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { StatusBar } from '@/components/ui/status-bar'

export function SignInPage({ onSuccess, onForgotPassword, onBack }: { onSuccess: () => void, onForgotPassword: () => void, onBack: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  //const router = useRouter()

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    onSuccess()
  }

  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      
      <div className="p-6 space-y-6">
        <div className="flex items-center">
          <button onClick={onBack} className="text-gray-800">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome Back! 👋
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in for Exclusive Rewards
          </p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none text-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF4B6E] focus:ring-[#FF4B6E] focus:ring-1 outline-none text-gray-600"
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-gray-300 data-[state=checked]:bg-[#FF4B6E] data-[state=checked]:border-[#FF4B6E]" />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <button
              onClick={onForgotPassword}
              className="text-sm text-[#FF4B6E]"
            >
              Forgot Password?
            </button>
          </div>

          <div className="space-y-4">
            <Button 
              type="submit"
              className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
            >
              Sign in
            </Button>

            <div className="text-center text-sm text-gray-500">or</div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors"
            >
              <img
                src="https://v0.blob.com/google-icon.png"
                alt=""
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors"
            >
              <img
                src="https://v0.blob.com/apple-icon.png"
                alt=""
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Continue with Apple</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors"
            >
              <img
                src="https://v0.blob.com/facebook-icon.png"
                alt=""
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Continue with Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

