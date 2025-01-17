'use client'

import { ChevronLeft } from 'lucide-react'
import Link from "next/link"

interface PrivacyPolicyProps {
  onBack?: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4">
        <Link href="#" className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-medium ml-3">Privacy Policy</h1>
      </header>

      <main className="p-4">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium ">Effective Date: December 19, 2024</p>
          </div>

          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-gray-600">
              Welcome to Loyalify! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our app.
            </p>

            <div className="space-y-4">
              <div>
                <h2 className="text-[15px] font-medium mb-2">1. Information We Collect:</h2>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  We collect basic user information such as name, email, and location for account creation and service delivery.
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-medium mb-2">2. How We Use Your Information:</h2>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Your information is used to provide personalized rewards, improve our services, and send relevant notifications. We do not sell your data.
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-medium mb-2">3. Data Security:</h2>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  We use industry-standard security measures to protect your data. However, please be aware that no online platform is entirely secure.
                </p>
              </div>

              <div>
                <h2 className="text-[15px] font-medium mb-2">4. Third-Party Services:</h2>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Loyalify may integrate with third-party services. Please review their privacy policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

