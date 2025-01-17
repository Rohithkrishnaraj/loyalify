'use client'

import { ChevronLeft, MoreVertical, Calendar, ChevronDown } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MyProfileProps {
  onBack: () => void;
  onMoreClick?: () => void;
}

export function MyProfile({ onBack, onMoreClick }: MyProfileProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">My Profile</h1>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-600"
          onClick={onMoreClick}
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </header>

      <main className="px-4 pb-8">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src=""
                alt="Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-1 -top-1 w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-sm">
              2
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-900">
              Full Name
            </label>
            <Input 
              defaultValue="Andrew Ainsley"
              className="bg-gray-50 border-0"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-900">
              Email
            </label>
            <div className="relative">
              <Input 
                defaultValue="andrew.ainsley@yourdomain.com"
                className="bg-gray-50 border-0 pl-8"
              />
              <svg 
                viewBox="0 0 24 24" 
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              >
                <path
                  fill="currentColor"
                  d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <div className="flex gap-2">
              <Select defaultValue="us">
                <SelectTrigger className="w-[100px] bg-gray-50 border-0">
                  <SelectValue>
                    <span className="flex items-center gap-2">
                      <span className="text-sm">🇺🇸</span>
                      <span>+1</span>
                    </span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">
                    <span className="flex items-center gap-2">
                      <span>🇺🇸</span>
                      <span>+1</span>
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input 
                defaultValue="111 467 378 399"
                className="bg-gray-50 border-0"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-900">
              Gender
            </label>
            <Select defaultValue="male">
              <SelectTrigger className="w-full bg-gray-50 border-0">
                <SelectValue>Male</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-900">
              Birthdate
            </label>
            <div className="relative">
              <Input 
                defaultValue="12/25/1995"
                className="bg-gray-50 border-0 pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

