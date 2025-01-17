'use client'

import { Receipt, FileText, QrCode, Gift, Users, Coins } from 'lucide-react'

interface ActionGridProps {
  onActionClick: (route: string) => void
}

export function ActionGrid({ onActionClick }: ActionGridProps) {
  const actions = [
    { icon: Receipt, label: 'Receipt Photo', route: 'receipts' },
    { icon: FileText, label: 'Survey', route: 'surveys' },
    { icon: QrCode, label: 'Scan QR Code', route: 'scan-qr' },
    { icon: Gift, label: 'Buy Points', route: 'buy-points' },
    { icon: Users, label: 'Invite Friends', route: 'invite' },
    { icon: Coins, label: 'Cashback Points', route: 'cashing-points' },
  ]

  return (
    <div className="grid grid-cols-3 gap-3 mx-4">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onActionClick(action.route)}
          className="flex flex-col items-center gap-2 py-3 px-2 bg-[#FFE5EA]/50 backdrop-blur-sm rounded-2xl shadow-sm"
        >
          <action.icon className="w-6 h-6 text-[#FF4B6E]" strokeWidth={1.5} />
          <span className="text-xs text-center text-gray-600">{action.label}</span>
        </button>
      ))}
    </div>
  )
}

