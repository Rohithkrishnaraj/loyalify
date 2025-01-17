'use client'

import { ChevronLeft, MoreVertical, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LoyaltyTierProps {
  onBack?: () => void;
  onMoreClick?: () => void;
  onTierClick?: (tierId: string) => void;
}

export function LoyaltyTier({ onBack, onMoreClick, onTierClick }: LoyaltyTierProps) {
  const tiers = [
    {
      id: 'basic',
      name: 'Basic Tier',
      points: '0 pts',
      description: 'Welcome to Loyalify! Access standard-level rewards.',
      iconColor: 'bg-amber-500',
      current: true
    },
    {
      id: 'silver',
      name: 'Silver Tier',
      points: '10,000 pts',
      description: 'Unlock Silver! Enjoy early access to new rewards.',
      iconColor: 'bg-gray-400',
      current: false
    },
    {
      id: 'gold',
      name: 'Gold Tier',
      points: '50,000 pts',
      description: 'Congrats on Gold! Get enhanced rewards, etc.',
      iconColor: 'bg-yellow-500',
      current: false
    },
    {
      id: 'platinum',
      name: 'Platinum Tier',
      points: '100,000 pts',
      description: 'Elite status! Access exclusive benefits & more.',
      iconColor: 'bg-gray-600',
      current: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-rose-400">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Link href="#" className="text-white" onClick={onBack}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium text-white">Loyalify Tier</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/10"
          onClick={onMoreClick}
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </header>

      <main className="px-6">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
                <path
                  fill="currentColor"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>
            <div className="absolute -right-3 -top-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">Basic</h2>
          <p className="text-white/90 text-sm">0 pts</p>
        </div>

        <div className="relative mb-4">
          <div className="h-1 bg-white/20 rounded-full">
            <div className="h-full w-1/3 bg-white rounded-full" />
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/90">
            <span>Level 1</span>
            <span>Level 2</span>
          </div>
          <p className="text-white/80 text-xs mt-1">You have passed this level</p>
        </div>

        <div className="bg-white rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <div>
              <p className="text-sm text-gray-600">Your Points</p>
              <p className="font-medium text-lg">
                249,560 <span className="text-gray-400 text-sm">($249.56)</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Pending Points</p>
              <p className="font-medium text-lg">
                12,500 <span className="text-gray-400 text-sm">($12.50)</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => onTierClick?.(tier.id)}
                className="w-full flex items-center gap-4"
              >
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  tier.iconColor
                )}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                    <path
                      fill="currentColor"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium">{tier.name} <span className="text-gray-500">({tier.points})</span></p>
                  <p className="text-sm text-gray-500">{tier.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

