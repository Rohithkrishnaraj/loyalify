'use client'

import { useState } from 'react'
import { ArrowLeft, MoreVertical, Copy, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { toast } from '@/components/ui/use-toast'
import { ShareSheet } from '@/components/share-sheet'

interface InviteFriendsPageProps {
  onBack: () => void
}

export function InviteFriendsPage({ onBack }: InviteFriendsPageProps) {
  const [activeTab, setActiveTab] = useState('referrals')
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false)
  const referralCode = 'ANDREW856'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralCode)
      toast({
        description: "Referral code copied to clipboard!",
      })
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Failed to copy referral code.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Invite Friends</h1>
        </div>
        <button>
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <Tabs defaultValue="referrals" className="w-full">
        <div className="px-4 pt-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="referrals">Your Referrals</TabsTrigger>
            <TabsTrigger value="invited">Invited Friends (24)</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="referrals" className="p-4 pt-6 space-y-6">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invite-friends-illustration-FM6m4iPqne9cthOKLso3sreAVCq2D2.png"
              alt="Friends illustration"
              className="w-full h-48 object-contain"
            />
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 w-6 h-6 text-[#FFD700]">✨</div>
              <div className="absolute top-4 right-4 w-6 h-6 text-[#FF6B6B]">✨</div>
              <div className="absolute bottom-4 left-1/4 w-6 h-6 text-[#4CAF50]">✨</div>
              <div className="absolute bottom-4 right-1/4 w-6 h-6 text-[#FF4B6E]">✨</div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Invite Friends, Get 5,000 Points!
            </h2>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Your Referral Code</p>
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-2 w-full p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span className="font-mono text-lg font-medium">{referralCode}</span>
                <Copy className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">⭐</span>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">Invite your friends</h3>
                  <p className="text-sm text-gray-500">
                    Send your friends your personal invite link.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">⭐</span>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">You get free points</h3>
                  <p className="text-sm text-gray-500">
                    When they join Loyalify, you unlock 5,000 free points.{' '}
                    <a href="#" className="text-[#FF4B6E]">
                      Terms apply
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => setIsShareSheetOpen(true)}
            className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share My Referral Code
          </Button>
        </TabsContent>

        <TabsContent value="invited" className="p-4">
          <div className="py-8 text-center text-gray-500">
            Your invited friends will appear here
          </div>
        </TabsContent>
      </Tabs>

      <ShareSheet 
        isOpen={isShareSheetOpen}
        onClose={() => setIsShareSheetOpen(false)}
      />
    </div>
  )
}

