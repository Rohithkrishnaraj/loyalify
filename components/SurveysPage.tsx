'use client'

import { ArrowLeft, MoreVertical } from 'lucide-react'
import { SurveyItem } from '@/components/survey-item'
import { StatusBar } from '@/components/ui/status-bar'

const surveys = [
  {
    id: 1,
    title: "Rewarding Experiences: Share Your Thoughts, Earn More!",
    points: 750,
    duration: "1 min",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5tzzJoXxmRkpBGSlxokgWkoUddRTOv.png"
  },
  {
    id: 2,
    title: "Loyalty Preferences: Your Ideal Rewards Await!",
    points: 1500,
    duration: "3 mins",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png"
  },
  {
    id: 3,
    title: "Shopping Habits Unleashed: Earn Points While You Share",
    points: 2000,
    duration: "3 mins",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png"
  },
  {
    id: 4,
    title: "Merchant Magic: Which Brands Do You Love Most?",
    points: 750,
    duration: "1 min",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png"
  },
  {
    id: 5,
    title: "Points Power: Tell Us Your Preferred Earning Methods",
    points: 1000,
    duration: "2 mins",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jxWPdsN0w12UP8rgwjfd2OFAb4BT4.png"
  }
]

export function SurveysPage({ onBack, onSelectSurvey }: { onBack: () => void, onSelectSurvey: (surveyId: number) => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <StatusBar />
      <div className="bg-white sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Survey</h1>
          </div>
          <button>
            <MoreVertical className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4 bg-[#FF4B6E] text-white">
          <h2 className="font-medium">Earn Points by Answering Surveys</h2>
          <p className="text-sm text-white/80 mt-1">Terms & Conditions Apply</p>
        </div>
      </div>

      <div className="bg-white divide-y divide-gray-100">
        {surveys.map((survey) => (
          <SurveyItem
            key={survey.id}
            {...survey}
            description={survey.title}
            onClick={() => onSelectSurvey(survey.id)}
          />
        ))}
      </div>
    </div>
  )
}

