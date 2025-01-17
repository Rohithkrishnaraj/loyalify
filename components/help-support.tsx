'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

interface HelpSupportProps {
  onBack: () => void;
  onItemClick: (item: string) => void;
}

export function HelpSupport({ onBack, onItemClick }: HelpSupportProps) {
  const menuItems = [
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Support' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'partner', label: 'Partner' },
    { id: 'jobs', label: 'Job Vacancy' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'about', label: 'About us' },
    { id: 'rate', label: 'Rate us' },
    { id: 'website', label: 'Visit Our Website' },
    { id: 'social', label: 'Follow us on Social Media' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium ml-3">Help & Support</h1>
      </header>

      <main>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className="w-full flex items-center justify-between p-4 text-[15px] text-gray-900 hover:bg-gray-50"
          >
            <span>{item.label}</span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        ))}
      </main>
    </div>
  )
}

