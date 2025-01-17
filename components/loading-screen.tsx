import { PawPrint } from 'lucide-react'

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#FF4B6E] flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center gap-3">
        <PawPrint className="w-16 h-16 text-white" strokeWidth={1.5} />
        <h1 className="text-white text-2xl font-medium">Loyalify</h1>
      </div>
      <div className="absolute bottom-12">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    </div>
  )
}

