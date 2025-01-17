'use client'

import { ChevronLeft, MoreVertical } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface MerchantDetailProps {
  onBack?: () => void;
  onTabChange?: (tab: string) => void;
}

export function MerchantDetail({ onBack, onTabChange }: MerchantDetailProps) {
  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'rewards', label: 'Rewards' },
    { id: 'store', label: 'Store' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Link href="#" className="text-gray-600" onClick={onBack}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Starbucks</h1>
        </div>
        <button className="text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </header>

      <div className="relative w-full h-48">
        <Image
          src="/placeholder.svg"
          alt="Starbucks Banner"
          fill
          className="object-cover"
        />
      </div>

      <div className="border-b">
        <div className="flex px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={cn(
                "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                tab.id === 'info'
                  ? "border-rose-500 text-rose-500"
                  : "border-transparent text-gray-600"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <main className="p-4">
        <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
          <p>
            Welcome to Starbucks, a global coffeehouse chain that has been enchanting coffee lovers since 1971. Renowned for our commitment to quality coffee, ethically sourced beans, and a warm ambiance, Starbucks is not just a coffee destination, it's a community.
          </p>
          <p>
            At Starbucks, we pride ourselves on delivering an exceptional coffee experience. From our iconic handcrafted beverages to our delectable pastries, each item on our menu is crafted with precision and passion. Our baristas, trained to perfection, are dedicated to bringing you the finest coffee moments.
          </p>
          <p>
            Beyond coffee, Starbucks is committed to social responsibility and sustainability. We strive to make a positive impact on the communities we serve and the environment. Join us in this mission.
          </p>
        </div>
      </main>
    </div>
  )
}

