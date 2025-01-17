'use client'

import { Search, MoreVertical, Home, Gift, Wallet, Bell, User,ArrowLeft } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'
import { cn } from "@/lib/utils"

interface MerchantsProps {
  onBack: () => void
  onMerchantClick?: (merchantId: string) => void;
  onNavigationClick?: (route: string) => void;
}

export function Merchants({ onMerchantClick, onNavigationClick,onBack }: MerchantsProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food & Drinks' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'travel', name: 'Travel' }
  ]

  const merchants = [
    { id: 'starbucks', name: 'Starbucks', category: 'Food & Drinks', logo: '/placeholder.svg' },
    { id: 'mcdonalds', name: "McDonald's", category: 'Food & Drinks', logo: '/placeholder.svg' },
    { id: 'airbnb', name: 'Airbnb', category: 'Travel', logo: '/placeholder.svg' },
    { id: 'cocacola', name: 'Coca-Cola', category: 'Food & Drinks', logo: '/placeholder.svg' },
    { id: 'burgerking', name: 'Burger King', category: 'Food & Drinks', logo: '/placeholder.svg' },
    { id: 'hermes', name: 'Hermes', category: 'Fashion', logo: '/placeholder.svg' },
    { id: 'klook', name: 'K', category: 'Travel', logo: '/placeholder.svg' },
    { id: 'kfc', name: 'KFC', category: 'Food & Drinks', logo: '/placeholder.svg' }
  ]

  const filteredMerchants = activeCategory === 'All' 
    ? merchants 
    : merchants.filter(merchant => merchant.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-2">
        <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
          <span className="text-rose-500">🐾</span>
          <h1 className="text-lg font-medium">Merchants</h1>
        </div>
        <button className="text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </header>

      <div className="p-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Merchants..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="px-4 py-3 bg-white border-b">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-4 py-1 rounded-full text-sm whitespace-nowrap",
                activeCategory === category.name
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 text-gray-600"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredMerchants.map((merchant) => (
            <button
              key={merchant.id}
              onClick={() => onMerchantClick?.(merchant.id)}
              className="p-4 bg-white rounded-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-2">
                <Image
                  src={merchant.logo}
                 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-medium text-gray-900">{merchant.name}</h3>
              <p className="text-xs text-rose-500">{merchant.category}</p>
            </button>
          ))}
        </div>
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
                item.route === 'merchants' ? "text-rose-500" : "text-gray-600"
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

