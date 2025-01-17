import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatusBar } from '@/components/ui/status-bar'

interface SurveyDetailsPageProps {
  onBack: () => void
  onStartSurvey: () => void
  survey: {
    id: number
    title: string
    points: number
    duration: string
    image: string
  }
}

export function SurveyDetailsPage({ onBack, onStartSurvey, survey }: SurveyDetailsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      <div className="sticky top-0 z-10 bg-white">
        <div className="px-4 py-4 flex items-center gap-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Survey Details</h1>
        </div>
      </div>

      <div className="space-y-4">
        <div className="w-full aspect-video relative">
          <img
            src={survey.image || "/placeholder.svg"}
            alt={survey.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            {survey.title}
          </h2>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#FF4B6E]">{survey.points} points</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-400">{survey.duration}</span>
          </div>

          <p className="text-gray-600 leading-relaxed text-[15px]">
            Influence your rewards journey! We value your insights. Share your thoughts on rewarding
            experiences, and unlock the door to earning big with Loyalify. Your feedback shapes the
            future of your rewards!
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
          onClick={onStartSurvey}
        >
          Start Survey
        </Button>
      </div>
    </div>
  )
}

