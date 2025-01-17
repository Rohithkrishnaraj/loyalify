'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface PromoRewardsProps {
  onBack?: () => void;
  onRewardClick?: (rewardId: number) => void;
}

export function PromoRewards({ onBack, onRewardClick }: PromoRewardsProps) {
  const rewards = [
    {
      id: 1,
      title: "Get Free 1 Cup Coffee E-Voucher",
      points: "3,750 points",
      brand: "Starbucks",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 2,
      title: "Get 1 Free Burger E-Voucher",
      points: "5,500 points",
      brand: "McDonalds",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 3,
      title: "Get 1 Free Bottle of Coca-Cola E-Voucher",
      points: "3,500 points",
      brand: "Coca-Cola",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 4,
      title: "Get 1 Box of Free Donuts E-Voucher",
      points: "4,250 points",
      brand: "Dunkin",
      image: "/placeholder.svg?height=200&width=400"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center p-4 bg-white">
        <Link href="#" className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium ml-3">Promo & Rewards</h1>
      </header>

      <main className="p-4">
        <div className="space-y-4">
          {rewards.map((reward) => (
            <button
              key={reward.id}
              className="w-full text-left"
              onClick={() => onRewardClick?.(reward.id)}
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={reward.image}
                  alt={reward.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium text-lg leading-tight">
                    {reward.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white text-sm">{reward.points}</span>
                    <span className="text-white text-sm opacity-75">•</span>
                    <span className="text-white text-sm">{reward.brand}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

