'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface RewardDetailProps {
  onBack?: () => void;
  onRedeem?: () => void;
}

export function RewardDetail({ onBack, onRedeem }: RewardDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4">
        <Link href="#" className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium ml-3">Rewards</h1>
      </header>

      <main className="px-4 pb-24">
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <Image
            src=""
            alt="Starbucks Coffee Voucher"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-xl font-semibold mb-1">
          Get Free 1 Cup Coffee E-Voucher
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Offer will end on December 31, 2024
        </p>

        <div className="flex items-center gap-2 mb-6">
          <span className="text-rose-500 font-semibold">249,560</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">3,750</span>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Welcome to Starbucks Loyalty! Earn points with every purchase and unlock delightful rewards. As a valued member, enjoy exclusive perks and freebies tailored just for you.
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold">Terms and Conditions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Available to members with a minimum of 3,750 points.</li>
              <li>Redeemable once within 30 days.</li>
              <li>E-voucher valid for 30 days from redemption.</li>
              <li>Complimentary tall-sized coffee of your choice.</li>
            </ol>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={onRedeem}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-12 text-base font-medium"
        >
          Redeem
        </Button>
      </div>
    </div>
  )
}

