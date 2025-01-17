'use client'

import { ChevronLeft, Check } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LanguageModalProps {
  onBack?: () => void;
  onLanguageSelect?: (language: string) => void;
}

export function LanguageModal({ onBack, onLanguageSelect }: LanguageModalProps) {
  const languages = [
    {
      code: 'en-US',
      name: 'English (US)',
      flag: '🇺🇸',
      selected: true
    },
    {
      code: 'en-GB',
      name: 'English (UK)',
      flag: '🇬🇧',
      selected: false
    },
    {
      code: 'zh',
      name: 'Mandarin',
      flag: '🇨🇳',
      selected: false
    },
    {
      code: 'es',
      name: 'Spanish',
      flag: '🇪🇸',
      selected: false
    },
    {
      code: 'hi',
      name: 'Hindi',
      flag: '🇮🇳',
      selected: false
    },
    {
      code: 'fr',
      name: 'French',
      flag: '🇫🇷',
      selected: false
    },
    {
      code: 'ar',
      name: 'Arabic',
      flag: '🇦🇪',
      selected: false
    },
    {
      code: 'ru',
      name: 'Russian',
      flag: '🇷🇺',
      selected: false
    },
    {
      code: 'ja',
      name: 'Japanese',
      flag: '🇯🇵',
      selected: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <Link href="#" className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium ml-3">App Language</h1>
      </header>

      <main className="p-4">
        <div className="space-y-3">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => onLanguageSelect?.(language.code)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-xl border",
                language.selected ? "border-rose-500" : "border-gray-100"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{language.flag}</span>
                <span className="text-base text-gray-900">{language.name}</span>
              </div>
              {language.selected && (
                <Check className="w-5 h-5 text-rose-500" />
              )}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

