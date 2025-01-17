'use client'

import { ChevronRight, Home, Gift, Wallet, Bell, ArrowLeft, Star, UserCircle, Shield, CreditCard, LinkIcon, Palette, BarChart3, HelpCircle, QrCode } from 'lucide-react'
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AccountProps {
  onBack: () => void
  onNavigationClick?: (route: string) => void;
  onMenuItemClick?: (item: string) => void;
  onQRCodeClick?: () => void;
}

export function Account({ onNavigationClick, onMenuItemClick, onQRCodeClick,onBack }: AccountProps) {
  const menuItems = [
    { id: 'profile', icon: <UserCircle className="w-5 h-5" />, label: 'My Profile' },
    { id: 'notifications', icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
    { id: 'security', icon: <Shield className="w-5 h-5" />, label: 'Account & Security' },
    { id: 'payment', icon: <CreditCard className="w-5 h-5" />, label: 'Payment Methods' },
    { id: 'linked', icon: <LinkIcon className="w-5 h-5" />, label: 'Linked Accounts' },
    { id: 'appearance', icon: <Palette className="w-5 h-5" />, label: 'App Appearance' },
    { id: 'analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Data & Analytics' },
    { id: 'help', icon: <HelpCircle className="w-5 h-5" />, label: 'Help & Support' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-2">
        <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
          <span className="text-rose-500">🐾</span>
          <h1 className="text-lg font-medium">Account</h1>
        </div>
        <button 
          onClick={onQRCodeClick}
          className="text-gray-600"
        >
          <QrCode className="h-5 w-5" />
        </button>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-rose-500 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h3 className="font-medium">Daily Stamp Reminder!</h3>
                <p className="text-sm opacity-90">Don't Miss Our Stamp & Score Points Today</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Your Points</p>
                <p className="font-medium">
                  249,560 <span className="text-gray-400 text-sm">(5249.56)</span>
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-scroll">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onMenuItemClick?.(item.id)}
              className={cn(
                "w-full flex items-center justify-between p-4",
                
              )}
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-600">{item.icon}</div>
                <span className="font-medium">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
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
                item.route === 'account' ? "text-rose-500" : "text-gray-600"
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

