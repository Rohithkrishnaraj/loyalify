interface MerchantsSectionProps {
  viewMerchants: () => void;
}

export function MerchantsSection({ viewMerchants }: MerchantsSectionProps) {
  const merchants = [
    { name: 'Starbucks', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ay7OnC4CrbdZ0YObKh2nvBG35081pj.png' },
    { name: "McDonald's", logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ay7OnC4CrbdZ0YObKh2nvBG35081pj.png' },
    { name: 'Subway', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ay7OnC4CrbdZ0YObKh2nvBG35081pj.png' },
    { name: 'Burger King', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ay7OnC4CrbdZ0YObKh2nvBG35081pj.png' },
  ]

  return (
    <div className="space-y-3 mx-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-900">Popular Merchants</h2>
        <button className="text-[#FF4B6E] text-sm font-medium" onClick={viewMerchants}>View All</button>
      </div>
      <div className="flex gap-4 overflow-x-auto py-2 no-scrollbar">
        {merchants.map((merchant, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center"
          >
            <img
              src={merchant.logo || "/placeholder.svg"}
              alt={merchant.name}
              className="w-10 h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

