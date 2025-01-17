'use client'

import { ChevronLeft, Settings, ChevronRight, Shield, RefreshCw, Lock, Star, Calendar } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotificationProps {
  onBack?: () => void;
  onSettingsClick?: () => void;
}

export function Notification({ onBack, onSettingsClick }: NotificationProps) {
  const notifications = {
    today: [
      {
        id: 1,
        icon: <Shield className="w-5 h-5" />,
        title: "Account Security Alert 🔒",
        description: "We've noticed some unusual activity on your account. Please review your recent logins and update your password if necessary.",
        time: "09:41 AM",
        unread: true
      },
      {
        id: 2,
        icon: <RefreshCw className="w-5 h-5" />,
        title: "System Update Available ⚡",
        description: "A new system update is ready for installation. It includes performance improvements and bug fixes.",
        time: "08:45 AM",
        unread: true
      }
    ],
    yesterday: [
      {
        id: 3,
        icon: <Lock className="w-5 h-5" />,
        title: "Password Reset Successful ✅",
        description: "Your password has been successfully reset. If you didn't request this change, please contact support immediately.",
        time: "20:30 PM",
        unread: false
      },
      {
        id: 4,
        icon: <Star className="w-5 h-5" />,
        title: "Exciting New Feature 🎯",
        description: "We've just launched a new feature that will enhance your experience. Check it out now!",
        time: "15:27 PM",
        unread: false
      },
      {
        id: 5,
        icon: <Calendar className="w-5 h-5" />,
        title: "Event Reminder 📅",
        time: "12:00 PM",
        unread: false
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-3">
          <Link href="#" className="text-gray-600" onClick={onBack}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Notification</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-600"
          onClick={onSettingsClick}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      <div className="flex border-b bg-white">
        <button className="flex-1 px-4 py-3 text-sm font-medium text-white bg-rose-500">
          General
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-600">
          Promotions
        </button>
      </div>

      <main className="p-4 space-y-6">
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-gray-500">Today</h2>
          {notifications.today.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-4 bg-white p-4 rounded-lg"
            >
              <div className="mt-1 text-gray-600">
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{notification.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{notification.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {notification.unread && (
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-medium text-gray-500">Yesterday</h2>
          {notifications.yesterday.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start gap-4 bg-white p-4 rounded-lg"
            >
              <div className="mt-1 text-gray-600">
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{notification.title}</h3>
                    {notification.description && (
                      <p className="text-sm text-gray-500 mt-1">{notification.description}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {notification.unread && (
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

