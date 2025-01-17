'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

interface DataAnalyticsProps {
  onBack: () => void;
  onNavigate?: (section: string) => void;
}

export function DataAnalytics({ onBack, onNavigate }: DataAnalyticsProps) {
  const sections = [
    {
      id: 'data-usage',
      title: 'Data Usage',
      description: 'Control how your data is used for analytics. Customize your preferences.'
    },
    {
      id: 'ad-preferences',
      title: 'Ad Preferences',
      description: 'Manage ad personalization settings. Tailor your ad experience.'
    },
    {
      id: 'download-data',
      title: 'Download My Data',
      description: 'Request a copy of your data. Your information, your control.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium ml-3">Data & Analytics</h1>
      </header>

      <main className="">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate?.(section.id)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <div className="pr-4">
              <h2 className="text-[15px] font-medium text-gray-900">{section.title}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{section.description}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
          </button>
        ))}
      </main>
    </div>
  )
}

