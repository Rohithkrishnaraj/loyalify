'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { StatusBar } from '@/components/ui/status-bar'
import { CheckCircle } from 'lucide-react'

export function SuccessPage({ onContinue }: { onContinue: () => void }) {
  // const router = useRouter()

  // const handleGoToHomepage = () => {
  //   router.push('/home')
  // }

  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-6 -mt-16">
        <div className="w-20 h-20 rounded-full bg-[#FF4B6E] flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          You're All Set!
        </h1>
        
        <p className="text-gray-500 text-center mb-8">
          Your password has been successfully changed
        </p>

        <Button 
          onClick={onContinue}
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-3 rounded-xl"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  )
}

