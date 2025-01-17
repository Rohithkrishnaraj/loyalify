'use client'

import { ChevronLeft, MoreVertical, Share2 } from 'lucide-react'
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface InviteFriendsProps {
  onBack?: () => void;
  onShare?: () => void;
}

export function InviteFriends({ onBack, onShare }: InviteFriendsProps) {
  const referrals = [
    {
      name: "Person One",
      joinDate: "Joined Today, Dec 22, 2024",
      points: "5,000 pts",
      avatar: "/placeholder.svg",
      initials: "CH"
    },
    {
      name: "Person Two",
      joinDate: "Joined on Dec 19, 2024",
      points: "5,000 pts",
      avatar: "/placeholder.svg",
      initials: "WB"
    },
    {
      name: "Person Three",
      joinDate: "Joined on Dec 17, 2024",
      points: "5,000 pts",
      avatar: "/placeholder.svg",
      initials: "MW"
    },
    {
      name: "Person Four",
      joinDate: "Joined on Dec 15, 2024",
      points: "5,000 pts",
      avatar: "/placeholder.svg",
      initials: "RC"
    },
    {
      name: "Person Five",
      joinDate: "Joined on Dec 15, 2024",
      points: "5,000 pts",
      avatar: "/placeholder.svg",
      initials: "KW"
    },
    {
      name: "Person Six",
      joinDate: "Joined on Dec 15, 2024",
      points: "5,000 pts",
      avatar: "/placeholder.svg",
      initials: "JC"
    },
    {
      name: "Person Seven",
      joinDate: "Joined on Dec 15, 2024",
      points: "5,000 pts",
      avatar: "/placeholder.svg",
      initials: "TH"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Link href="#" className="text-gray-600" onClick={onBack}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-lg font-semibold">Invite Friends</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </header>
        
        <div className="flex border-b">
          <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent">
            Your Referrals
          </button>
          <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-900 border-b-2 border-rose-500">
            Invited Friends (25)
          </button>
        </div>
      </div>

      <main className="pt-28 pb-24">
        <div className="px-4">
          <div className="space-y-6">
            {referrals.map((referral, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-gray-100">
                    <AvatarImage src={referral.avatar} alt={referral.name} />
                    <AvatarFallback>{referral.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{referral.name}</p>
                    <p className="text-sm text-gray-500">{referral.joinDate}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{referral.points}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <Button 
          onClick={onShare}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-14 text-base font-medium"
        >
          <Share2 className="h-5 w-5 mr-2" />
          Share My Referral Code
        </Button>
      </div>
    </div>
  )
}

