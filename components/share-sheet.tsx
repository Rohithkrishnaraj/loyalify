'use client'

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Person {
  id: string
  name: string
  image: string
}

interface ShareSheetProps {
  isOpen: boolean
  onClose: () => void
}

const recentPeople: Person[] = [
  {
    id: '1',
    name: 'Charlotte',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-1-FM6m4iPqne9cthOKLso3sreAVCq2D2.png'
  },
  {
    id: '2',
    name: 'Kristin',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-2-FM6m4iPqne9cthOKLso3sreAVCq2D2.png'
  },
  {
    id: '3',
    name: 'Clinton',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-3-FM6m4iPqne9cthOKLso3sreAVCq2D2.png'
  },
  {
    id: '4',
    name: 'Maryland',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-4-FM6m4iPqne9cthOKLso3sreAVCq2D2.png'
  },
  {
    id: '5',
    name: 'Alex',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-5-FM6m4iPqne9cthOKLso3sreAVCq2D2.png'
  }
]

const socialSharing = [
  {
    name: 'WhatsApp',
    icon: 'https://cdn.pixabay.com/photo/2016/05/23/19/52/whatsapp-1411048_640.jpg',
    color: '#25D366'
  },
  {
    name: 'Facebook',
    icon: 'https://cdn.pixabay.com/photo/2017/10/04/11/58/facebook-2815970_640.jpg',
    color: '#1877F2'
  },
  {
    name: 'Instagram',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram-icon-FM6m4iPqne9cthOKLso3sreAVCq2D2.png',
    color: '#E4405F'
  },
  {
    name: 'Telegram',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-icon-FM6m4iPqne9cthOKLso3sreAVCq2D2.png',
    color: '#0088cc'
  },
  {
    name: 'Twitter',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter-icon-FM6m4iPqne9cthOKLso3sreAVCq2D2.png',
    color: '#1DA1F2'
  }
]

export function ShareSheet({ isOpen, onClose }: ShareSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[400px] p-0">
        <div className="p-4 space-y-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold">Share</h2>
          </div>

          {/* Recent People */}
          <div className="space-y-3">
            <p className="text-sm text-gray-500 px-2">Recent people</p>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex w-max space-x-4 p-2">
                {recentPeople.map((person) => (
                  <button key={person.id} className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-gray-600">{person.name}</span>
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* Social Media Sharing */}
          <div className="space-y-3">
            <p className="text-sm text-gray-500 px-2">Social media</p>
            <div className="grid grid-cols-4 gap-4 px-2">
              {socialSharing.map((platform) => (
                <button
                  key={platform.name}
                  className="flex flex-col items-center gap-1"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${platform.color}15` }}
                  >
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-xs text-gray-600">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

