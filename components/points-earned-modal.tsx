import { Coins } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PointsEarnedModalProps {
  points: number
  onClose: () => void
}

export function PointsEarnedModal({ points, onClose }: PointsEarnedModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-40 p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-xs animate-in zoom-in-50 duration-300">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#FF4B6E] flex items-center justify-center relative">
            <Coins className="w-10 h-10 text-white" />
            {/* Decorative dots */}
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF4B6E]" />
            <div className="absolute top-1 -right-2 w-2 h-2 rounded-full bg-[#FF4B6E]" />
            <div className="absolute -top-2 right-3 w-2 h-2 rounded-full bg-[#FF4B6E]" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">
              You Earned {points.toLocaleString()} Points!
            </h2>
            <p className="text-gray-500 text-sm">
              This receipt unlocked a big points boost! Keep racking them up!
            </p>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white"
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  )
}

