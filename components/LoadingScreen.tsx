import { useState, useEffect } from 'react'
import { PawPrint } from 'lucide-react'
// import { useRouter } from 'next/navigation' // Removed as it's no longer needed

export function LoadingScreen({ onContinue }: { onContinue: () => void }) {
  const [loading, setLoading] = useState(true)
  // const router = useRouter() // Removed as it's no longer needed

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  // const handleContinue = () => {
  //   router.push('/onboarding')
  // } // Removed as it's no longer needed

  return (
    <div className="min-h-screen bg-[#FF4B6E] flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center gap-3">
        <PawPrint className="w-16 h-16 text-white" strokeWidth={1.5} />
        <h1 className="text-white text-2xl font-medium">Loyalify</h1>
      </div>
      {loading ? (
        <div className="absolute bottom-12">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      ) : (
        <button
          onClick={onContinue}
          className="absolute bottom-12 bg-white text-[#FF4B6E] px-6 py-2 rounded-full font-medium"
        >
          Continue
        </button>
      )}
    </div>
  )
}

