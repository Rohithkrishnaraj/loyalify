'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface LinkedAccountsProps {
  onBack: () => void;
  onConnect?: (provider: string) => void;
}

export function LinkedAccounts({ onBack, onConnect }: LinkedAccountsProps) {
  const accounts = [
    {
      id: 'google',
      name: 'Google',
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eSdz1vmmWOspOhwVgBDIFgPgeNFWhB.png",
      connected: true
    },
    {
      id: 'apple',
      name: 'Apple',
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eSdz1vmmWOspOhwVgBDIFgPgeNFWhB.png",
      connected: true
    },
    {
      id: 'facebook',
      name: 'Facebook',
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eSdz1vmmWOspOhwVgBDIFgPgeNFWhB.png",
      connected: false
    },
    {
      id: 'twitter',
      name: 'Twitter',
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eSdz1vmmWOspOhwVgBDIFgPgeNFWhB.png",
      connected: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center p-4 bg-white border-b">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium ml-3">Linked Accounts</h1>
      </header>

      <main className="p-4">
        <div className="space-y-3">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 relative">
                  {account.id === 'google' && (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  )}
                  {account.id === 'apple' && (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        fill="currentColor"
                        d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"
                      />
                    </svg>
                  )}
                  {account.id === 'facebook' && (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        fill="#1877F2"
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                  )}
                  {account.id === 'twitter' && (
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        fill="#1DA1F2"
                        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                      />
                    </svg>
                  )}
                </div>
                <span className="font-medium">{account.name}</span>
              </div>
              {account.connected ? (
                <span className="text-sm text-gray-500">Connected</span>
              ) : (
                <button
                  onClick={() => onConnect?.(account.id)}
                  className="text-sm font-medium text-rose-500"
                >
                  Connect
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

