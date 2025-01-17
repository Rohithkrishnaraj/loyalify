'use client'

import { ChevronLeft, Share2, MoreVertical } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface EVoucherProps {
  onBack?: () => void;
  onShare?: () => void;
  onMoreClick?: () => void;
}

export function EVoucher({ onBack, onShare, onMoreClick }: EVoucherProps) {
  return (
    <div className="min-h-screen bg-rose-500">
      <header className="flex items-center justify-between p-4">
        <Link href="#" className="text-white" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium text-white">E-Voucher</h1>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-rose-400"
            onClick={onShare}
          >
            <Share2 className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-rose-400"
            onClick={onMoreClick}
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="px-6 pb-6">
        <div className="bg-white rounded-lg p-6">
          <div className="relative w-full aspect-square mb-4">
            <Image
              src=""
              alt="QR Code"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-lg font-semibold text-center mb-2">
            Get Free 1 Cup Coffee E-Voucher
          </h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            Flash this E-Voucher at the cashier to unlock your awesome reward!
          </p>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Merchant</span>
              <span className="font-medium">Starbucks</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Points Used</span>
              <span className="font-medium">3,750 pts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Voucher Code</span>
              <span className="font-medium">VCC74837957</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Valid Until</span>
              <span className="font-medium">Dec 31, 2024</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-gray-600 text-sm text-center">
              Level up your rewards game with Loyalify!
              <br />
              Exclusive perks & benefits await!
            </p>
            <p className="text-rose-500 text-sm text-center mt-2">
              www.loyalify.yourdomain.com
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

