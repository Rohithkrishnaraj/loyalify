'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { LoadingScreen } from '@/components/LoadingScreen'
import { LoginPage } from '@/components/LoginPage'
import { SignupPage } from '@/components/SignupPage'
import { ForgotPasswordPage } from '@/components/ForgotPasswordPage'
import { VerifyOTPPage } from '@/components/VerifyOTPPage'
import { NewPasswordPage } from '@/components/NewPasswordPage'
import { SuccessPage } from '@/components/SuccessPage'
import { OnboardingPage } from '@/components/OnboardingPage'
import { HomePage } from '@/components/HomePage'
import { ReceiptsPage } from '@/components/ReceiptsPage'
import { UploadReceiptPage } from '@/components/UploadReceiptPage'
import { SurveysPage } from '@/components/SurveysPage'
import { SurveyDetailsPage } from '@/components/SurveyDetailsPage'
import { PointsEarnedPage } from '@/components/PointsEarnedPage'
import { SurveyQuestionsPage } from '@/components/SurveyQuestionsPage'
import { EnterCodePage } from '@/components/EnterCodePage'
import { BuyPointsPage } from '@/components/BuyPointsPage'
import { PaymentMethodsPage } from '@/components/PaymentMethodsPage'
import { InviteFriendsPage } from '@/components/InviteFriendsPage'

const components = [
  { name: 'Loading Screen', component: LoadingScreen },
  { name: 'Login', component: LoginPage },
  { name: 'Signup', component: SignupPage },
  { name: 'Forgot Password', component: ForgotPasswordPage },
  { name: 'Verify OTP', component: VerifyOTPPage },
  { name: 'New Password', component: NewPasswordPage },
  { name: 'Success', component: SuccessPage },
  { name: 'Onboarding', component: OnboardingPage },
  { name: 'Home', component: HomePage },
  { name: 'Receipts', component: ReceiptsPage },
  { name: 'Upload Receipt', component: UploadReceiptPage },
  { name: 'Surveys', component: SurveysPage },
  { name: 'Survey Details', component: SurveyDetailsPage },
  { name: 'Points Earned', component: PointsEarnedPage },
  { name: 'Survey Questions', component: SurveyQuestionsPage },
  { name: 'Enter Code', component: EnterCodePage },
  { name: 'Buy Points', component: BuyPointsPage },
  { name: 'Payment Methods', component: PaymentMethodsPage },
  { name: 'Invite Friends', component: InviteFriendsPage },
]

export default function TestPage() {
  const [currentComponent, setCurrentComponent] = useState<string | null>(null)

  const renderComponent = () => {
    const ComponentToRender = components.find(c => c.name === currentComponent)?.component
    return ComponentToRender ? <ComponentToRender /> : null
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center mb-8">Loyalify Component Testing</h1>
        <Button
key={'reset'}
                onClick={() => setCurrentComponent(null)}
                className="w-full text-left flex items-center justify-between"
                variant="outline"
              >
                go to home
</Button>

        {currentComponent ? (
          renderComponent()
        ) : (
          <div className="space-y-4 max-w-md mx-auto">
            {components.map((comp) => (
              <Button
                key={comp.name}
                onClick={() => setCurrentComponent(comp.name)}
                className="w-full text-left flex items-center justify-between"
                variant="outline"
              >
                {comp.name}
                <span className="text-gray-400">→</span>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

