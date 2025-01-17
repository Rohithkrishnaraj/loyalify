'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

interface AppAppearanceProps {
  onBack: () => void;
  onThemeChange: () => void;
  onLanguageChange: () => void;
}

export function AppAppearance({ onBack, onThemeChange, onLanguageChange }: AppAppearanceProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium ml-3">App Appearance</h1>
      </header>

      <main>
        <button
          onClick={onThemeChange}
          className="flex items-center justify-between w-full p-4"
        >
          <span className="text-[15px] text-gray-900">Theme</span>
          <div className="flex items-center text-gray-500">
            <span className="mr-2 text-[15px]">Light</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        </button>

        <button
          onClick={onLanguageChange}
          className="flex items-center justify-between w-full p-4"
        >
          <span className="text-[15px] text-gray-900">App Language</span>
          <div className="flex items-center text-gray-500">
            <span className="mr-2 text-[15px]">English (US)</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        </button>
      </main>
    </div>
  )
}

