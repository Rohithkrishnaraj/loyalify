'use client'

import { ChevronLeft, ChevronDown, Search } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface FAQProps {
  onBack?: () => void;
}

export function FAQ({ onBack }: FAQProps) {
  const [activeTab, setActiveTab] = useState('general')
  const [expandedItem, setExpandedItem] = useState('what-is-loyalify')

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'account', label: 'Account' },
    { id: 'services', label: 'Services' },
    { id: 'loyalty', label: 'Loyalty' }
  ]

  const faqItems = [
    {
      id: 'what-is-loyalify',
      question: 'What is Loyalify?',
      answer: 'Loyalify is a rewards app where you earn points for purchases and activities, unlocking exclusive rewards from your favorite merchants.'
    },
    {
      id: 'how-earn-points',
      question: 'How do I earn points?',
      answer: ''
    },
    {
      id: 'what-rewards',
      question: 'What rewards can I get?',
      answer: ''
    },
    {
      id: 'check-points',
      question: 'How do I check my points?',
      answer: ''
    },
    {
      id: 'redeem-rewards',
      question: 'How do I redeem rewards?',
      answer: ''
    },
    {
      id: 'tier-system',
      question: 'How does the tier system work?',
      answer: ''
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center p-4 bg-white">
        <Link href="#" className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium ml-3">FAQ</h1>
      </header>

      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-10 bg-white border-0"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-rose-500 text-white"
                  : "bg-white text-gray-600"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg"
            >
              <button
                onClick={() => setExpandedItem(expandedItem === item.id ? '' : item.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-gray-400 transition-transform",
                    expandedItem === item.id && "transform rotate-180"
                  )}
                />
              </button>
              {expandedItem === item.id && item.answer && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

