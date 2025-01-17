'use client'

import { Share2 } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface QRCodeModalProps {
  onShare?: () => void;
  onClose?: () => void;
}

export function QRCodeModal({ onShare, onClose }: QRCodeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-[90%] max-w-sm p-6 mx-4">
        <h2 className="text-lg font-medium text-center mb-6">My QR Code</h2>
        
        <div className="relative aspect-square w-full mb-6">
          <Image
            src=""
            alt="QR Code"
            fill
            className="object-contain"
          />
        </div>

        <Button 
          onClick={onShare}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-12 text-base font-medium"
        >
          <Share2 className="h-5 w-5 mr-2" />
          Share My QR Code
        </Button>
      </div>
    </div>
  )
}

