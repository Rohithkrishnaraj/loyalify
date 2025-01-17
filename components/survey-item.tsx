import { ChevronRight } from 'lucide-react'

interface SurveyItemProps {
  id: number
  title: string
  description: string
  points: number
  duration: string
  image: string
  onClick: () => void
}

export function SurveyItem({ id, title, description, points, duration, image, onClick }: SurveyItemProps) {
  return (
    <button onClick={onClick} className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium text-gray-900 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-[#FF4B6E]">{points.toLocaleString()} points</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-400">{duration}</span>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
    </button>
  )
}

