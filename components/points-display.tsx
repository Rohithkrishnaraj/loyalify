import { ChevronRight } from 'lucide-react'

export function PointsDisplay() {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between shadow-sm mx-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            className="w-8 h-8"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-xl font-semibold">249,560</p>
            <span className="text-xs text-gray-400">(Level 24)</span>
          </div>
          <p className="text-sm text-gray-500">Your Points</p>
        </div>
      </div>
      <ChevronRight className="text-gray-400" />
    </div>
  )
}

