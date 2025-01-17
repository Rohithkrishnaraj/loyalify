'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DailyStampsProps {
  onBack?: () => void;
  onStamp?: () => void;
}

export function DailyStamps({ onBack, onStamp }: DailyStampsProps) {
  // Generate 25 stamps (5x5 grid)
  const stamps = Array.from({ length: 25 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (24 - i)) // Count backwards from today
    return {
      id: i + 1,
      date: date,
      // First 15 collected, next 2 for today, rest future
      status: i < 15 ? 'collected' : i < 17 ? 'today' : 'future'
    }
  })

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4">
        <Link href="#" className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium ml-3">Daily Stamps</h1>
      </header>

      <main className="px-6 pb-24">
        <h2 className="text-2xl font-bold text-center mb-2">
          Collect Stamps Today!
        </h2>
        <p className="text-gray-500 text-center text-sm mb-8">
          Level Up Your Day! Claim Your Daily Stamp & Fuel Your Rewards!
        </p>

        <div className="grid grid-cols-5 gap-7 mb-8">
          {stamps.map((stamp) => {
            const dateStr = stamp.date.toLocaleDateString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: '2-digit'
            })
            
            return (
              <div
                key={stamp.id}
                className="aspect-square relative flex items-center justify-center"
              >
                <div
                  className={cn(
                    "w-full h-full rounded-full flex items-center justify-center",
                    stamp.status === 'collected' && "bg-rose-500",
                    stamp.status === 'today' && "bg-rose-200",
                    stamp.status === 'future' && "bg-gray-100"
                  )}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={cn(
                      "w-6 h-6",
                      stamp.status === 'collected' && "text-white",
                      stamp.status === 'today' && "text-rose-500",
                      stamp.status === 'future' && "text-gray-300"
                    )}
                  >
                    <path
                      d="M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4 8C5.65685 8 7 9.34315 7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 8C21.6569 8 23 9.34315 23 11C23 12.6569 21.6569 14 20 14C18.3431 14 17 12.6569 17 11C17 9.34315 18.3431 8 20 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7 17C8.65685 17 10 18.3431 10 20C10 21.6569 8.65685 23 7 23C5.34315 23 4 21.6569 4 20C4 18.3431 5.34315 17 7 17Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17 17C18.6569 17 20 18.3431 20 20C20 21.6569 18.6569 23 17 23C15.3431 23 14 21.6569 14 20C14 18.3431 15.3431 17 17 17Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-5 text-[10px] text-gray-400">
                  {dateStr}
                </span>
              </div>
            )
          })}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
          <Button 
            onClick={onStamp}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-14 text-base font-medium"
          >
            STAMP ME
          </Button>
        </div>
      </main>
    </div>
  )
}

