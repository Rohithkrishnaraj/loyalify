'use client'

import { Search, MoreVertical, ChevronRight, Home, Gift, Wallet, Bell, User,ArrowLeft } from 'lucide-react'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface MyVoucherProps {
  onBack: () => void
  onVoucherClick?: (voucherId: string) => void;
  onNavigationClick?: (route: string) => void;
  onSearch?: () => void;
  onMoreClick?: () => void;
}

export function MyVoucher({ onVoucherClick, onNavigationClick, onSearch, onMoreClick,onBack }: MyVoucherProps) {
  const vouchers = [
    {
      id: '1',
      title: 'Get Free 1 Cup Coffee E-V...',
      validUntil: 'Valid until Dec 31, 2024',
      merchant: 'Starbucks',
      timestamp: 'Today, Dec 22, 2024 • 10:45 AM',
      merchantColor: 'text-emerald-600'
    },
    {
      id: '2',
      title: 'Get Free Burger E-Voucher',
      validUntil: 'Valid until Dec 31, 2024',
      merchant: 'McDonalds',
      timestamp: 'Yesterday, Dec 21, 2024 • 16:25 PM',
      merchantColor: 'text-rose-500'
    },
    {
      id: '3',
      title: 'Get 1 Free Bottle of Coca-...',
      validUntil: 'Valid until Dec 30, 2024',
      merchant: 'Coca-Cola',
      timestamp: 'Dec 20, 2024 • 15:08 AM',
      merchantColor: 'text-red-600'
    },
    {
      id: '4',
      title: 'Get Box of Free Donuts E-...',
      validUntil: 'Valid until Dec 30, 2024',
      merchant: 'Dunkin Donuts',
      timestamp: 'Dec 19, 2024 • 14:30 PM',
      merchantColor: 'text-pink-600'
    },
    {
      id: '5',
      title: 'Get 1 Free Bottle of Pepsi E...',
      validUntil: 'Valid until Dec 28, 2024',
      merchant: 'Starbucks',
      timestamp: 'Dec 18, 2024 • 11:15 AM',
      merchantColor: 'text-emerald-600'
    },
    {
      id: '6',
      title: 'Travel Hacks for Staying S...',
      validUntil: 'Valid until Dec 28, 2024',
      merchant: 'Starbucks',
      timestamp: 'Dec 17, 2024 • 09:30 AM',
      merchantColor: 'text-emerald-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-2">
        <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
          <span className="text-rose-500">🐾</span>
          <h1 className="text-lg font-medium">My Voucher</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-600"
            onClick={onSearch}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-600"
            onClick={onMoreClick}
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex border-b bg-white">
        <button className="flex-1 px-4 py-3 text-sm font-medium text-white bg-rose-500">
          Active
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-600">
          Used
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-600">
          Expired
        </button>
      </div>

      <main className="p-4 space-y-3">
        {vouchers.map((voucher) => (
          <button
            key={voucher.id}
            onClick={() => onVoucherClick?.(voucher.id)}
            className="w-full flex items-center gap-4 bg-white p-4 rounded-lg"
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src=""
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h3 className="font-medium text-gray-900">{voucher.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500">{voucher.validUntil}</span>
                <span className="text-xs text-gray-300">•</span>
                <span className={cn("text-xs", voucher.merchantColor)}>{voucher.merchant}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{voucher.timestamp}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </button>
        ))}
      </main>

      {/* <div className="fixed bottom-0 left-0 right-0 border-t bg-white">
        <div className="flex justify-around p-2">
          {[
            { icon: <Home className="h-6 w-6" />, label: 'Home', route: 'home' },
            { icon: <Gift className="h-6 w-6" />, label: 'Merchants', route: 'merchants' },
            { icon: <Wallet className="h-6 w-6" />, label: 'My Voucher', route: 'voucher' },
            { icon: <Bell className="h-6 w-6" />, label: 'Activity', route: 'activity' },
            { icon: <User className="h-6 w-6" />, label: 'Account', route: 'account' }
          ].map((item) => (
            <button
              key={item.route}
              onClick={() => onNavigationClick?.(item.route)}
              className={cn(
                "flex flex-col items-center p-2 text-xs",
                item.route === 'voucher' ? "text-rose-500" : "text-gray-600"
              )}
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div> */}
    </div>
  )
}

