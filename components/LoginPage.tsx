'use client'

import { PawPrint } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function LoginPage({ onSignIn, onSignUp }: { onSignIn: () => void, onSignUp: () => void }) {
  const router = useRouter()

  // const handleSignIn = () => {
  //   router.push('/signin')
  // }

  // const handleSignUp = () => {
  //   router.push('/signup')
  // }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-sm mx-auto pt-12 space-y-8">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <PawPrint className="w-full h-full text-[#FF4B6E]" strokeWidth={1.5} />
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-semibold text-gray-900">Let's Get Started!</h1>
            <p className="text-gray-500 text-sm">Let's dive in into your account</p>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors">
            <img src="/placeholder.svg?height=24&width=24" alt="" className="w-6 h-6" />
            <span className="text-sm font-medium">Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors">
            <img src="/placeholder.svg?height=24&width=24" alt="" className="w-6 h-6" />
            <span className="text-sm font-medium">Continue with Apple</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors">
            <img src="/placeholder.svg?height=24&width=24" alt="" className="w-6 h-6" />
            <span className="text-sm font-medium">Continue with Facebook</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors">
            <img src="/placeholder.svg?height=24&width=24" alt="" className="w-6 h-6" />
            <span className="text-sm font-medium">Continue with Twitter</span>
          </button>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6" onClick={onSignUp}>
            Sign up
          </Button>
          <Button variant="ghost" className="w-full hover:bg-[#FF4B6E]/5 text-[#FF4B6E] py-6" onClick={onSignIn}>
            Sign in
          </Button>
        </div>

        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <Link href="#" className="hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-900">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}

