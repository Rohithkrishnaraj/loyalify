'use client'

import { useState } from 'react'
import { X, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ScanQRPage({ onClose, onManualEntry }: { onClose: () => void, onManualEntry: () => void }) {
  const [isScanning, setIsScanning] = useState(true)

  return (
    <div className="min-h-screen bg-black">
      {/* Status Bar */}
      <div className="px-6 py-3 flex justify-between text-white text-sm bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span>9:41</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <div className="h-2.5 w-1.5 bg-white rounded-sm" />
            <div className="h-2.5 w-1.5 bg-white rounded-sm" />
            <div className="h-2.5 w-1.5 bg-white rounded-sm" />
            <div className="h-2.5 w-1.5 bg-white rounded-sm" />
          </div>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
            <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" />
          </svg>
          <svg className="w-6 h-3" viewBox="0 0 24 12" fill="white">
            <path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V8C22 9.10457 21.1046 10 20 10H4C2.89543 10 2 9.10457 2 8V4Z" />
          </svg>
        </div>
      </div>

      <div className="relative h-[calc(100vh-2.75rem)]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4FMToWyGalFtwcky6ccwHoPPfHUzQN.png")' }}
        />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="px-4 py-4 flex items-center justify-between">
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center">
              <X className="w-6 h-6 text-white" />
            </button>
            <span className="text-white font-medium">Scan QR Code</span>
            <button className="w-8 h-8 flex items-center justify-center">
              <MoreVertical className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Scanning Frame */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="w-full aspect-square relative max-w-xs">
            {/* Scanner Border */}
            <div className="absolute inset-0 border-2 border-[#FF4B6E]" />
            
            {/* Corner Markers */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#FF4B6E]" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#FF4B6E]" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#FF4B6E]" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#FF4B6E]" />
          </div>
        </div>

        {/* Help Text & Manual Entry Button */}
        <div className="absolute bottom-32 left-0 right-0 flex flex-col items-center gap-2">
          <p className="text-white/80 text-sm">Can't scan the QR code?</p>
          <Button
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full px-6"
            onClick={onManualEntry}
          >
            Enter Code Manually
          </Button>
        </div>

        {/* Bottom Toolbar */}
        <div className="absolute bottom-8 left-0 right-0 px-12">
          <div className="flex items-center justify-between">
            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-6 h-6 bg-white/90 rounded" />
            </button>
            <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-4 border-[#FF4B6E]" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-6 h-6 bg-white/90 rounded" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

