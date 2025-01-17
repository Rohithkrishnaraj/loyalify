interface PromoSectionProps {
  viewPromo: () => void;
}
export function PromoSection({ viewPromo }: PromoSectionProps) {
  const promos = [
    {
      title: "Starbucks Offer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FM6m4iPqne9cthOKLso3sreAVCq2D2.png"
    },
    {
      title: "McDonald's Deal",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FM6m4iPqne9cthOKLso3sreAVCq2D2.png"
    },
    {
      title: "Burger King Promo",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FM6m4iPqne9cthOKLso3sreAVCq2D2.png"
    }
  ]

  return (
    <div className="space-y-3 mx-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-900">Promo & Rewards</h2>
        <button className="text-[#FF4B6E] text-sm font-medium" onClick={viewPromo}>View All</button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="aspect-square rounded-xl overflow-hidden bg-gray-100"
          >
            <img
              src={promo.image || "/placeholder.svg"}
              alt={promo.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

