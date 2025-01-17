'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import { Switch } from "@/components/ui/switch"

interface NotificationSettingsProps {
  onBack: () => void;
}

export function NotificationSettings({ onBack }: NotificationSettingsProps) {
  const settings = [
    { id: 'new-rewards', label: 'New Rewards Alert', enabled: true },
    { id: 'points-update', label: 'Points Update', enabled: false },
    { id: 'promotions', label: 'Special Promotions', enabled: true },
    { id: 'security', label: 'Security Alerts', enabled: true },
    { id: 'expiration', label: 'Expiration Alerts', enabled: true },
    { id: 'survey', label: 'Survey Opportunities', enabled: true },
    { id: 'tier', label: 'Tier Progress', enabled: false },
    { id: 'referral', label: 'Referral Bonuses', enabled: false },
    { id: 'nearby', label: 'Store Nearby Deals', enabled: true },
    { id: 'updates', label: 'App Updates and News', enabled: false },
    { id: 'birthday', label: 'Birthday Rewards', enabled: false },
    { id: 'location', label: 'Location-Based Rewards', enabled: false },
    { id: 'announcements', label: 'Important Announcements', enabled: true },
    { id: 'tips', label: 'App Tips and Tutorials', enabled: false }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center p-4 bg-white border-b">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium ml-3">Notifications</h1>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-lg">
          {settings.map((setting, index) => (
            <div
              key={setting.id}
              className="flex items-center justify-between p-4"

            >
              <span className="text-[15px] text-gray-900">{setting.label}</span>
              <Switch
                checked={setting.enabled}
                onCheckedChange={() => {}}
                className="data-[state=checked]:bg-rose-500"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

