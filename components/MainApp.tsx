'use client'

import { useState } from 'react'
import { LoadingScreen } from './LoadingScreen'
import { LoginPage } from './LoginPage'
import { SignupPage } from './SignupPage'
import { SignInPage } from './SignInPage'
import { ForgotPasswordPage } from './ForgotPasswordPage'
import { VerifyOTPPage } from './VerifyOTPPage'
import { NewPasswordPage } from './NewPasswordPage'
import { SuccessPage } from './SuccessPage'
import { OnboardingPage } from './OnboardingPage'
import { HomePage } from './HomePage'
import { SurveysPage } from './SurveysPage'
import { SurveyDetailsPage } from './SurveyDetailsPage'
import { SurveyQuestionsPage } from './SurveyQuestionsPage'
import { ScanQRPage } from './ScanQRPage'
import { EnterCodePage } from './EnterCodePage'
import { BuyPointsPage } from './BuyPointsPage'
import { SelectPayment } from './SelectPayment'
import { PointsEarnedPage } from './PointsEarnedPage'
import { InviteFriendsPage } from './InviteFriendsPage'
import { ReceiptsPage } from './ReceiptsPage'
import { UploadReceiptPage } from './UploadReceiptPage'
import { SelectReceiptPage } from './SelectReceiptPage'
import{RewardDetail}from "@/components/reward-detail"
import{Merchants}from "@/components/merchants"
import{Activity}from "@/components/activity"
import{Account}from "@/components/account"
import{MyProfile}from "@/components/my-profile"
import{NotificationSettings}from "@/components/notification-settings"
import{AccountSecurity}from"@/components/account-security"
import{LinkedAccounts}from "@/components/linked-accounts"
import{DataAnalytics}from "@/components/data-analytics"
import{PaymentMethods}from "@/components/payment-methods"
import{AddNewPayment}from "@/components/add-new-payment"
import{AppAppearance}from "@/components/app-appearance"
import{ThemeModal}from "@/components/theme-modal"
import{LanguageModal}from "@/components/language-modal"
import{HelpSupport}from "@/components/help-support"
import{FAQ}from "@/components/faq"
import{PrivacyPolicy}from "@/components/privacy-policy"
import{ContactSupport}from "@/components/contact-support"
import{MyVoucher}from "@/components/my-voucher"
import{CashingPoints}from "@/components/cashing-points"
import{CashingTo}from "@/components/cashing-to"
import{ReviewSummary}from "@/components/review-summary"
import{Notification}from "@/components/notification"
import { PromoRewards } from './promo-rewards'
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

export function MainApp() {
  const [currentPage, setCurrentPage] = useState('loading')
  const [previousPages, setPreviousPages] = useState<string[]>([])
  const [selectedSurveyId, setSelectedSurveyId] = useState<number | null>(null)
  const [selectedPoints, setSelectedPoints] = useState(0)
  const [amount, setAmount] = useState<string>('0')

  const navigateTo = (page: string) => {
    setPreviousPages(prev => [...prev, currentPage])
    setCurrentPage(page)
  }

  const goBack = () => {
    if (previousPages.length > 0) {
      const prevPage = previousPages[previousPages.length - 1]
      setCurrentPage(prevPage)
      setPreviousPages(prev => prev.slice(0, -1))
    }
  }

  const handleAccountMenuItemClick = (item: string) => {
    switch (item) {
      case 'profile':
        setCurrentPage('my-profile')
        break
      case 'notifications':
        setCurrentPage('notification-settings')
        break
      case 'security':
        setCurrentPage('account-security')
        break
      case 'payment':
        setCurrentPage('payment-methods')
        break
      case 'linked':
        setCurrentPage('linked-accounts')
        break
      case 'appearance':
        setCurrentPage('app-appearance')
        break
      case 'analytics':
        setCurrentPage('data-analytics')
        break
      case 'help':
        setCurrentPage('help-support')
        break
      default:
        console.log('Menu item clicked:', item)
    }
  }

  const handleHelpSupportItemClick = (item: string) => {
    switch (item) {
      case 'faq':
        setCurrentPage('faq')
        break
      case 'contact':
        setCurrentPage('contact-support')
        break
      case 'privacy':
        setCurrentPage('privacy-policy')
        break
      default:
        console.log('Help & Support item clicked:', item)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'loading':
        return <LoadingScreen onContinue={() => navigateTo('onboarding')} />
      case 'onboarding':
        return <OnboardingPage onComplete={() => navigateTo('login')} />
      case 'login':
        return <LoginPage onSignIn={() => navigateTo('signin')} onSignUp={() => navigateTo('signup')} />
      case 'signin':
        return <SignInPage onSuccess={() => navigateTo('home')} onForgotPassword={() => navigateTo('forgot-password')} onBack={goBack} />
      case 'signup':
        return <SignupPage onSuccess={() => navigateTo('home')} onBack={() => navigateTo('login')} />
      case 'forgot-password':
        return <ForgotPasswordPage onSubmit={() => navigateTo('verify-otp')} onBack={goBack} />
      case 'verify-otp':
        return <VerifyOTPPage onVerify={() => navigateTo('new-password')} onBack={goBack} />
      case 'new-password':
        return <NewPasswordPage onSubmit={() => navigateTo('success')} onBack={goBack} />
      case 'success':
        return <SuccessPage onContinue={() => navigateTo('home')} />
      case 'home':
        return <HomePage 
          onNotify={() => navigateTo('notify')}
          onSurveysClick={() => navigateTo('surveys')} 
          onScanQR={() => navigateTo('scan-qr')}
          onBuyPoints={() => navigateTo('buy-points')}
          onInviteFriends={() => navigateTo('invite-friends')}
          onReceiptPhoto={() => navigateTo('receipts')}
          onHomeClick={() => navigateTo('home')}
          onRewardsClick={() => navigateTo('merchants')}
          onScanClick={() => navigateTo('voucher')}
          onActivityClick={() => navigateTo('activity')}
          onProfileClick={() => navigateTo('account')}
          onCashing={() => navigateTo('cashing-points')}
          viewMerchants={()=> navigateTo('merchants') }
          viewPromo={()=>navigateTo('promo')}
        />
        case 'promo':
          return <PromoRewards  onBack={goBack} />
      case 'notify':
        return <Notification  onBack={goBack}/>
        case 'cashing-points':
          return <CashingPoints 
            onBack={goBack} 
            onContinue={(amount) => {
              setAmount(amount)
              setCurrentPage('cashing-to')
            }} 
          />
        case 'cashing-to':
          return <CashingTo 
            onBack={goBack}
            onContinue={(method) => {
             
              setCurrentPage('review-summary')
            }}
            onAddNew={() => console.log('Add new payment method')}
          />
        case 'review-summary':
          return <ReviewSummary 
            onBack={goBack}
            onCashingNow={() => navigateTo('home')}
            onChangePayment={() => setCurrentPage('home')}
          />
      case 'surveys':
        return <SurveysPage onBack={goBack} onSelectSurvey={(surveyId) => {
          setSelectedSurveyId(surveyId)
          navigateTo('survey-details')
        }} />
      case 'survey-details':
        const selectedSurvey = surveys.find(survey => survey.id === selectedSurveyId)
        return selectedSurvey ? (
          <SurveyDetailsPage
            survey={selectedSurvey}
            onBack={goBack}
            onStartSurvey={() => {
              navigateTo('survey-questions')
            }}
          />
        ) : null
      case 'survey-questions':
        const surveyQuestions = surveys.find(survey => survey.id === selectedSurveyId)
        return surveyQuestions ? (
          <SurveyQuestionsPage
            survey={surveyQuestions}
            onBack={goBack}
            onSubmit={() => {
              console.log('Survey submitted:', surveyQuestions.id)
              navigateTo('home')
            }}
          />
        ) : null
      case 'scan-qr':
        return (
          <ScanQRPage
            onClose={goBack}
            onManualEntry={() => navigateTo('enter-code')}
          />
        )
      case 'enter-code':
        return (
          <EnterCodePage
            onBack={goBack}
            onSubmit={() => {
              console.log('Code submitted')
              navigateTo('home')
            }}
          />
        )
      case 'buy-points':
        return (
          <BuyPointsPage
            onBack={goBack}
            onContinue={(points) => {
              setSelectedPoints(points)
              navigateTo('select-payment')
            }}
          />
        )
      case 'select-payment':
        return (
          <SelectPayment
            onBack={goBack}
            onConfirm={() => {
              console.log('Payment confirmed')
              navigateTo('points-earned')
            }}
            selectedPoints={selectedPoints}
          />
        )
      case 'points-earned':
        return (
          <PointsEarnedPage
            points={selectedPoints}
            onClose={() => navigateTo('home')}
          />
        )
      case 'invite-friends':
        return (
          <InviteFriendsPage
            onBack={goBack}
          />
        )
      case 'receipts':
        return (
          <ReceiptsPage
            onBack={goBack}
            onSelectReceipt={() => navigateTo('select-receipt')}
            onUploadReceipt={() => navigateTo('upload-receipt')}
          />
        )
      case 'select-receipt':
        return (
          <SelectReceiptPage
            onBack={() => navigateTo('receipts')}
            onContinue={() => {
              console.log('Receipt selected successfully')
              navigateTo('home')
            }}
          />
        )
      case 'upload-receipt':
        return (
          <UploadReceiptPage
            onBack={() => navigateTo('receipts')}
            onUploadComplete={() => {
              console.log('Receipt uploaded successfully')
              navigateTo('home')
            }}
          />
        )
        case 'voucher':
          return (
            <MyVoucher
              onBack={() => navigateTo('home')}
              // onUploadComplete={() => {
              //   console.log('Receipt uploaded successfully')
              //   navigateTo('home')
              // }}
            />
          )
          case 'merchants':
            return (
              <Merchants
               onBack={goBack}
                // onUploadComplete={() => {
                //   console.log('Receipt uploaded successfully')
                //   navigateTo('home')
                // }}
              />
            )
            case 'activity':
              return (
                <Activity
                  onBack={() => navigateTo('home')}
                  // onUploadComplete={() => {
                  //   console.log('Receipt uploaded successfully')
                  //   navigateTo('home')
                  // }}
                />
              )
              case 'account':
                return (
                  <Account
                  onMenuItemClick={handleAccountMenuItemClick}     
                    onBack={() => navigateTo('home')}
                    // onUploadComplete={() => {
                    //   console.log('Receipt uploaded successfully')
                    //   navigateTo('home')
                    // }}
                  />
                )
                case 'my-profile':
                  return (
                    <MyProfile
                    // onMenuItemClick={handleAccountMenuItemClick}     
                      onBack={() => navigateTo('account')}
                      // onUploadComplete={() => {
                      //   console.log('Receipt uploaded successfully')
                      //   navigateTo('home')
                      // }}
                    />
                  )
                  case 'notification-settings':
                    return (
                      <NotificationSettings
                      // onMenuItemClick={handleAccountMenuItemClick}     
                        onBack={() => navigateTo('account')}
                        // onUploadComplete={() => {
                        //   console.log('Receipt uploaded successfully')
                        //   navigateTo('home')
                        // }}
                      />
                    )
                    case 'account-security':
                      return (
                        <AccountSecurity
                        // onMenuItemClick={handleAccountMenuItemClick}     
                          onBack={() => navigateTo('account')}
                          // onUploadComplete={() => {
                          //   console.log('Receipt uploaded successfully')
                          //   navigateTo('home')
                          // }}
                        />
                      )
                      case 'linked-accounts':
                        return (
                          <LinkedAccounts
                          // onMenuItemClick={handleAccountMenuItemClick}     
                            onBack={() => navigateTo('account')}
                            // onUploadComplete={() => {
                            //   console.log('Receipt uploaded successfully')
                            //   navigateTo('home')
                            // }}
                          />
                        )
                        case 'data-analytics':
                          return (
                            <DataAnalytics
                            // onMenuItemClick={handleAccountMenuItemClick}     
                              onBack={() => navigateTo('account')}
                              // onUploadComplete={() => {
                              //   console.log('Receipt uploaded successfully')
                              //   navigateTo('home')
                              // }}
                            />
                          )
                          case 'payment-methods':
                            return (
                              <PaymentMethods

                                onBack={() => navigateTo('account')}
                                onAddNew={() => setCurrentPage('add-new-payment')}
                               

                              />
                            )
                            case 'add-new-payment':
                              return (
                                <AddNewPayment
                                onSave={(data) => {
                                  console.log('Save payment:', data)
                                  setCurrentPage('payment-methods')
                                }}

                                  onClose={() => navigateTo('payment-methods')}
       
                                />
                              )
                              case 'app-appearance':
                                return (
                                  <AppAppearance
                                  onBack={() => navigateTo('account')}
                                  onThemeChange={() => {
                                    setPreviousPages('app-appearance')
                                    setCurrentPage('theme-modal')
                                  }}
                                  onLanguageChange={() => {
                                    setPreviousPages('app-appearance')
                                    setCurrentPage('language-modal')
                                  }}
                                  />
                                )  
                                case 'theme-modal':
                                  return (
                                    <ThemeModal
                                    onCancel={() => navigateTo('app-appearance')}
                                      
                                    />
                                  ) 
                                  case 'language-modal':
                                    return (
                                      <LanguageModal
                                        onBack={() => navigateTo('app-appearance')}
                                        
                                      />
                                    )  
                                    case 'help-support':
                                      return <HelpSupport 
                                        onBack={() => navigateTo('account')}
                                        onItemClick={handleHelpSupportItemClick}
                                      />
                                    case 'faq':
                                      return <FAQ onBack={() => navigateTo('help-support')} />
                                    case 'contact-support':
                                      return <ContactSupport 
                                        onBack={() => navigateTo('help-support')}
                                        onChannelClick={(channel) => console.log('Channel clicked:', channel)}
                                      />
                                    case 'privacy-policy':
                                      return <PrivacyPolicy onBack={() => navigateTo('help-support')} />      
      default:
        return <LoadingScreen onContinue={() => navigateTo('onboarding')} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  )
}

