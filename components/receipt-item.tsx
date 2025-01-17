import { ChevronRight } from 'lucide-react'

interface ReceiptItemProps {
  number: string
  points: number
  merchant: string
  date: string
  time: string
  image: string
}

export function ReceiptItem({ number, points, merchant, date, time, image }: ReceiptItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white">
      <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={`Receipt ${number}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900">Receipt {number}</h3>
            <p className="text-sm text-gray-500">{points.toLocaleString()} points</p>
          </div>
          <span className="text-[#FF4B6E] text-sm">{merchant}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {date} • {time}
        </p>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
  )
}

