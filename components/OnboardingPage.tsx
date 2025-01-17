'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IPhoneNotch } from '@/components/ui/iphone-notch'
import { PointsDisplay } from '@/components/points-display'
import { ActionGrid } from '@/components/action-grid'
import { MerchantsSection } from '@/components/merchants-section'
import { WelcomeSection } from '@/components/welcome-section'
import { Button } from '@/components/ui/button'
import { PawPrint } from 'lucide-react'

// Update props
export function OnboardingPage({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const handleContinue = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const handleSkip = () => {
    onComplete()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF4B6E] via-[#FF4B6E] to-white">
      <div className="relative min-h-screen pb-24">
        <IPhoneNotch />
        
        <div className="pt-14 px-6 pb-6 flex justify-between items-center">
          <PawPrint className="w-6 h-6 text-white" strokeWidth={1.5} />
          <span className="text-white font-medium">Loyalify</span>
          <div className="w-6 h-6" />
        </div>

        <div className="space-y-6">
          {currentStep === 0 && (
            <>
              <PointsDisplay />
              <ActionGrid />
            </>
          )}
          {currentStep === 1 && <MerchantsSection />}
          {currentStep === 2 && (
            <div className="px-6 mt-8">
              <WelcomeSection />
            </div>
          )}
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-6 flex gap-4">
          <Button 
            variant="ghost" 
            className="flex-1 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-gray-500"
            onClick={handleSkip}
          >
            Skip
          </Button>
          <Button 
            className="flex-1 bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white shadow-lg"
            onClick={handleContinue}
          >
            {currentStep < 2 ? 'Continue' : 'Get Started'}
          </Button>
        </div>
      </div>
    </div>
  )
}

