'use client'

interface CircularProgressProps {
  progress: number
}

export function CircularProgress({ progress }: CircularProgressProps) {
  const radius = 45
  const strokeWidth = 8
  const normalizedProgress = Math.min(100, Math.max(0, progress))
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (normalizedProgress / 100) * circumference

  return (
    <div className="relative w-24 h-24">
      <svg
        className="transform -rotate-90 w-24 h-24"
        viewBox="0 0 100 100"
      >
        <circle
          className="stroke-[#FF4B6E]/10"
          fill="none"
          strokeWidth={strokeWidth}
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="stroke-[#FF4B6E] transition-all duration-300 ease-in-out"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx="50"
          cy="50"
        />
      </svg>
    </div>
  )
}

