'use client'

import { Search, MoreVertical, Home, Gift, Wallet, Bell, User, Receipt, QrCode, CreditCard, Users, ArrowDownToLine,ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ActivityProps {
  onBack: () => void
  onNavigationClick?: (route: string) => void;
  onSearch?: () => void;
  onMoreClick?: () => void;
}

export function Activity({ onNavigationClick, onSearch, onMoreClick,onBack }: ActivityProps) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'redemption', label: 'Redemption' },
    { id: 'receipt', label: 'Receipt' },
    { id: 'survey', label: 'Survey' }
  ]

  const activities = [
    {
      id: 1,
      type: 'redemption',
      title: 'Redemption',
      description: 'You redeem points - Starbucks',
      points: -3750,
      timestamp: 'Today, Dec 22, 2024 • 10:45 AM',
      icon: <Receipt className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'receipt',
      title: 'Receipt Photo',
      description: 'You upload a receipt - Starbucks',
      points: 1000,
      timestamp: 'Today, Dec 22, 2024 • 09:30 AM',
      icon: <Receipt className="w-5 h-5" />
    },
    {
      id: 3,
      type: 'survey',
      title: 'Survey',
      description: 'You complete the survey - Loyalify',
      points: 750,
      timestamp: 'Today, Dec 22, 2024 • 09:15 AM',
      icon: <Receipt className="w-5 h-5" />
    },
    {
      id: 4,
      type: 'scan',
      title: 'Scan QR Code',
      description: "You scan the QR code - McDonald's",
      points: 2500,
      timestamp: 'Today, Dec 22, 2024 • 09:00 AM',
      icon: <QrCode className="w-5 h-5" />
    },
    {
      id: 5,
      type: 'purchase',
      title: 'Buy Points',
      description: 'You buy points - - - - - - - - - - - 4279',
      points: 10000,
      timestamp: 'Today, Dec 22, 2024 • 08:45 AM',
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      id: 6,
      type: 'invite',
      title: 'Invite Friends',
      description: 'Charlotte White has joined using y...',
      points: 5000,
      timestamp: 'Today, Dec 22, 2024 • 08:30 AM',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 7,
      type: 'cashout',
      title: 'Cashing Points',
      description: '',
      points: -100000,
      timestamp: 'Today, Dec 22, 2024 • 08:15 AM',
      icon: <ArrowDownToLine className="w-5 h-5" />
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
          <h1 className="text-lg font-medium">Activity</h1>
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

      <div className="px-4 py-3 bg-white border-b">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "px-4 py-1 rounded-full text-sm whitespace-nowrap",
                tab.id === 'all'
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 text-gray-600"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <main className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-600">
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-0.5">{activity.timestamp}</p>
              </div>
              <span className={cn(
                "text-sm font-medium",
                activity.points > 0 ? "text-green-600" : "text-rose-500"
              )}>
                {activity.points > 0 ? `+ ${activity.points}` : activity.points}
              </span>
            </div>
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
                item.route === 'activity' ? "text-rose-500" : "text-gray-600"
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

