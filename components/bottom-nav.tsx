'use client'

import { Home, Gift, QrCode, Bell, User ,Store } from 'lucide-react'

interface BottomNavProps {
  onNavClick: (route: string) => void
}

export function BottomNav({ onNavClick }: BottomNavProps) {
  const navItems = [
    { icon: Home, label: 'Home', route: 'home' },
    { icon: Store, label: 'merchants', route: 'merchants' },
    { icon: Gift, label: 'My voucher', route: 'voucher' },
    { icon: Bell, label: 'Activity', route: 'activity' },
    { icon: User, label: 'Profile', route: 'profile' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onNavClick(item.route)}
            className="flex flex-col items-center gap-1"
          >
            <item.icon
              className={`w-6 h-6 ${
                index === 0 ? 'text-[#FF4B6E]' : 'text-gray-400'
              }`}
              strokeWidth={1.5}
            />
            <span
              className={`text-xs ${
                index === 0 ? 'text-[#FF4B6E]' : 'text-gray-400'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
