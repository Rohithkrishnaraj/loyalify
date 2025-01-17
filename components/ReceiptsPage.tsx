'use client'

import { ArrowLeft, Calendar, MoreVertical } from 'lucide-react'
import { ReceiptItem } from '@/components/receipt-item'
import { Button } from '@/components/ui/button'
import { StatusBar } from '@/components/ui/status-bar'

const receipts = [
  {
    number: '0759',
    points: 2500,
    merchant: "McDonald's",
    date: 'Yesterday, Dec 21, 2023',
    time: '10:23 PM',
    image: 'https://c8.alamy.com/comp/CNTYDX/tesco-shopping-receipt-CNTYDX.jpg'
  },
  {
    number: '0758',
    points: 1500,
    merchant: 'Starbucks',
    date: 'Dec 20, 2023',
    time: '08:45 AM',
    image: 'https://c8.alamy.com/comp/CNTYDX/tesco-shopping-receipt-CNTYDX.jpg'
  },
  {
    number: '0757',
    points: 2500,
    merchant: 'Dunkin Donuts',
    date: 'Dec 19, 2023',
    time: '19:43 PM',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png'
  },
  {
    number: '0756',
    points: 2000,
    merchant: 'Burger King',
    date: 'Dec 19, 2023',
    time: '2:27 PM',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png'
  },
  {
    number: '0755',
    points: 1000,
    merchant: 'Coca-Cola',
    date: 'Dec 17, 2023',
    time: '14:55 PM',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png'
  },
  {
    number: '0754',
    points: 1500,
    merchant: 'Pizza Hut',
    date: 'Dec 17, 2023',
    time: '12:30 PM',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png'
  }
]

interface ReceiptsPageProps {
  onBack: () => void
  onSelectReceipt: () => void
  onUploadReceipt: () => void
}

export function ReceiptsPage({ onBack, onSelectReceipt, onUploadReceipt }: ReceiptsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <StatusBar />
      <div className="bg-white sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Receipt Photo</h1>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <Calendar className="w-6 h-6 text-gray-600" />
            </button>
            <button>
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {receipts.map((receipt) => (
          <ReceiptItem key={receipt.number} {...receipt} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-3 bg-white border-t">
        <Button 
          variant="outline" 
          className="flex-1 border-[#FF4B6E] text-[#FF4B6E] hover:bg-[#FF4B6E]/5"
          onClick={onSelectReceipt}
        >
          Select Receipt
        </Button>
        <Button 
          className="flex-1 bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white"
          onClick={onUploadReceipt}
        >
          Upload Receipt
        </Button>
      </div>
    </div>
  )
}

