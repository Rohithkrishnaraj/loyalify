import { StatusBar } from '@/components/ui/status-bar'
import { PointsDisplay } from '@/components/points-display'
import { ActionGrid } from '@/components/action-grid'
import { MerchantsSection } from '@/components/merchants-section'
import { PromoSection } from '@/components/promo-section'
import { BottomNav } from '@/components/bottom-nav'
import { PawPrint,BellDot } from 'lucide-react'

interface HomePageProps {
  onSurveysClick: () => void
  onScanQR: () => void 
  onBuyPoints: () => void
  onInviteFriends: () => void
  onReceiptPhoto: () => void
  onNotify: () => void;
  viewMerchants: () => void;
  viewPromo: () => void;
}

export function HomePage({ onSurveysClick, onScanQR, onBuyPoints, onInviteFriends, onReceiptPhoto,onHomeClick,onRewardsClick,onScanClick,onActivityClick,onProfileClick,onCashing,onNotify,viewMerchants,viewPromo }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="bg-gradient-to-b from-[#FF4B6E] to-white/0 pt-0">
        {/* <StatusBar /> */}
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PawPrint className="w-6 h-6 text-white" strokeWidth={1.5} />
            <span className="text-white font-medium">Loyalify</span>
          </div>
          <div onClick={onNotify} >
            <BellDot className='text-white' />
          </div>
        </div>
        <PointsDisplay />
      </div>

      <div className="space-y-6 pt-6">
        <ActionGrid onActionClick={(action) => {
          if (action === 'surveys') {
            onSurveysClick()
          } else if (action === 'scan-qr') {
            onScanQR()
          } else if (action === 'buy-points') {
            onBuyPoints()
          } else if (action === 'invite') {
            onInviteFriends()
          } else if (action === 'receipts') {
            onReceiptPhoto()
          }else if (action === 'cashing-points') {
            onCashing()
          }
        }} />
        <MerchantsSection viewMerchants={viewMerchants} />
        <PromoSection viewPromo={viewPromo} />
      </div>

      <BottomNav 
  onNavClick={(route) => {
    if (route === 'home') {
      onHomeClick()
    } else if (route === 'merchants') {
      onRewardsClick()
    } else if (route === 'voucher') {
      onScanClick()
    } else if (route === 'activity') {
      onActivityClick()
    } else if (route === 'profile') {
      onProfileClick()
    }
  }} 
/>
    </div>
  )
}

