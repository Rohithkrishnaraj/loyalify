'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { StatusBar } from '@/components/ui/status-bar'

interface Question {
  id: number
  text: string
  options: string[]
}

interface SurveyQuestionsPageProps {
  survey: {
    id: number
    title: string
    points: number
    duration: string
  }
  onBack: () => void
  onSubmit: () => void
}

export function SurveyQuestionsPage({ survey, onBack, onSubmit }: SurveyQuestionsPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions: Question[] = [
    {
      id: 1,
      text: 'Which type of rewards excites you the most?',
      options: [
        'Discounts on purchases',
        'Free products or services',
        'Exclusive access to events'
      ]
    },
    {
      id: 2,
      text: 'How likely are you to participate in special promotions for bonus points?',
      options: [
        'Very likely',
        'Somewhat likely',
        'Not likely'
      ]
    },
    {
      id: 3,
      text: 'What motivates you to share your rewarding experiences with friends?',
      options: [
        'Extra points for referrals',
        'Sharing great deals',
        'Being part of a community'
      ]
    },
    {
      id: 4,
      text: 'Which aspect of the loyalty program encourages you to stay active?',
      options: [
        'Regular point accumulation',
        'Special member benefits',
        'Exclusive promotions'
      ]
    }
  ]

  const currentQuestion = questions[currentQuestionIndex]

  const handleOptionSelect = (option: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      onSubmit()
    }
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1

  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="px-4 py-4 flex items-center gap-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">{survey.title}</h1>
        </div>
      </div>

      <div className="px-4 py-3 flex justify-between items-center text-sm">
        <div className="w-full">
          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#FF4B6E]" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        <span className="ml-4 text-gray-500 whitespace-nowrap">
          {currentQuestionIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="p-4 space-y-8">
        <div className="space-y-4">
          <h2 className="font-medium text-gray-900">
            {currentQuestion.text}
          </h2>
          <RadioGroup 
            value={answers[currentQuestion.id] || ''}
            onValueChange={handleOptionSelect}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={option}
                  id={`${currentQuestion.id}-${option}`}
                  className="border-2 text-[#FF4B6E] border-gray-200 data-[state=checked]:border-[#FF4B6E] data-[state=checked]:bg-[#FF4B6E]"
                />
                <Label 
                  htmlFor={`${currentQuestion.id}-${option}`}
                  className="text-gray-700"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
          onClick={handleNext}
          disabled={!answers[currentQuestion.id]}
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

