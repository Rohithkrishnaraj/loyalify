'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { Switch } from "@/components/ui/switch"

interface AccountSecurityProps {
  onBack: () => void;
  onNavigate?: (route: string) => void;
}

export function AccountSecurity({ onBack, onNavigate }: AccountSecurityProps) {
  const toggles = [
    { id: 'biometric', label: 'Biometric ID', enabled: false },
    { id: 'faceid', label: 'Face ID', enabled: false },
    { id: 'sms', label: 'SMS Authenticator', enabled: false },
    { id: 'google', label: 'Google Authenticator', enabled: false },
  ]

  const navigationItems = [
    { 
      id: 'password', 
      label: 'Change Password',
    },
    { 
      id: 'devices', 
      label: 'Device Management',
      description: 'Manage your account on the various devices you own'
    },
    { 
      id: 'deactivate', 
      label: 'Deactivate Account',
      description: 'Temporarily deactivate your account. Easily reactivate when you\'re ready'
    },
    { 
      id: 'delete', 
      label: 'Delete Account',
      description: 'Permanently remove your account and data. Proceed with caution',
      danger: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium ml-3">Account & Security</h1>
      </header>

      <main className="">
        {toggles.map((toggle) => (
          <div
            key={toggle.id}
            className="flex items-center justify-between p-4"
          >
            <span className="text-[15px] text-gray-900">{toggle.label}</span>
            <Switch
              checked={toggle.enabled}
              onCheckedChange={() => {}}
              className="data-[state=checked]:bg-rose-500"
            />
          </div>
        ))}

        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate?.(item.id)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <div className="flex-1 pr-4">
              <span className={`text-[15px] ${item.danger ? 'text-red-500' : 'text-gray-900'}`}>
                {item.label}
              </span>
              {item.description && (
                <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
              )}
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </button>
        ))}
      </main>
    </div>
  )
}

