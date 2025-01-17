'use client'

import { useState } from 'react'
import { PointsEarnedModal } from '@/components/points-earned-modal'
import { ConfettiAnimation } from '@/components/confetti-animation'

interface PointsEarnedPageProps {
  points: number
  onClose: () => void
}

export function PointsEarnedPage({ points, onClose }: PointsEarnedPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4FMToWyGalFtwcky6ccwHoPPfHUzQN.png')] bg-cover bg-center bg-no-repeat blur-sm" />

      <ConfettiAnimation />
      <PointsEarnedModal
        points={points}
        onClose={onClose}
      />
    </div>
  )
}

