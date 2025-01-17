'use client'

import { ChevronLeft, Plus } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PaymentMethodsProps {
  onBack: () => void;
  onAddNew: () => void; 
}

export function PaymentMethods({ onBack, onAddNew }: PaymentMethodsProps) {
  const paymentMethods = [
    {
      id: 'paypal',
      name: 'PayPal',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fill="#00457C"
            d="M20.067 8.478c.492.315.844.825.962 1.429.117.604.003 1.225-.325 1.73-.329.505-.839.837-1.465.953-.626.116-1.271-.016-1.845-.377-.574-.362-.98-.921-1.163-1.605-.184-.684-.102-1.412.235-2.089.336-.677.898-1.214 1.619-1.54.721-.326 1.521-.366 2.291-.115.77.251 1.399.772 1.809 1.493.41.72.523 1.56.323 2.364-.199.804-.676 1.496-1.366 1.981-.69.486-1.524.706-2.392.63-.867-.075-1.681-.426-2.33-1.007-.65-.581-1.097-1.354-1.28-2.219-.184-.865-.094-1.766.257-2.595.352-.829.935-1.495 1.673-1.91.738-.414 1.587-.574 2.436-.458.85.116 1.643.463 2.273.995.63.532 1.064 1.234 1.243 2.016.18.782.094 1.597-.245 2.34-.34.744-.903 1.344-1.618 1.721-.715.377-1.528.524-2.352.419-.823-.105-1.6-.445-2.224-975-.624-.53-1.055-1.23-1.236-2.008-.18-.778-.098-1.59.235-2.332.334-.742.888-1.343 1.592-1.726.705-.383 1.511-.539 2.33-.445.818.094 1.59.422 2.215.94.624.518 1.063 1.205 1.257 1.975.194.77.127 1.578-.19 2.32-.318.742-.85 1.357-1.53 1.761-.68.404-1.47.583-2.286.512-.816-.07-1.59-.37-2.22-.86-.63-.489-1.075-1.143-1.275-1.88-.2-.736-.132-1.51.194-2.214.327-.705.87-1.29 1.56-1.68.69-.39 1.49-.557 2.31-.48.82.077 1.6.384 2.24.88.64.495 1.09 1.156 1.3 1.9.21.743.15 1.523-.17 2.235-.32.712-.85 1.305-1.53 1.705-.68.4-1.47.577-2.29.507-.82-.07-1.6-.37-2.24-.86-.64-.49-1.09-1.143-1.29-1.88-.2-.736-.14-1.51.19-2.214.33-.705.87-1.29 1.56-1.68.69-.39 1.49-.557 2.31-.48.82.077 1.6.384 2.24.88"
          />
        </svg>
      ),
      connected: true
    },
    {
      id: 'google-pay',
      name: 'Google Pay',
      logo: (
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
      ),
      connected: true
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fill="currentColor"
            d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"
          />
        </svg>
      ),
      connected: true
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      last4: '4679',
      logo: (
        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <circle cx="8" cy="12" r="6" fill="#EB001B" />
            <circle cx="16" cy="12" r="6" fill="#F79E1B" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16.355A5.988 5.988 0 0 0 14 12c0-1.657-.672-3.156-1.757-4.243a6 6 0 0 0 0 8.486z"
              fill="#FF5F00"
            />
          </svg>
        </div>
      ),
      connected: true
    },
    {
      id: 'visa',
      name: 'Visa',
      last4: '5567',
      logo: (
        <div className="w-6 h-6 rounded-full bg-[#1434CB] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white">
            <path
              fill="currentColor"
              d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 0 1 .894.764l.817 4.338 2.018-5.102h2.037zm8.02 5.015c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 0 1 1.913.336l.34-1.59a5.207 5.207 0 0 0-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.726-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.481h1.8l-1.57-7.496h-1.566c-.352 0-.649.204-.78.518l-2.747 6.978h2.037l.382-1.06h2.35l.094 1.06zM19.62 12.95l.966-2.67.555 2.67h-1.521zm-6.418-2.333l.308-1.415.73-3.538h-2.016l-2.339 7.496h2.016l1.301-4.543z"
            />
          </svg>
        </div>
      ),
      connected: true
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center p-4 bg-white border-b">
        <button className="text-gray-600" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium ml-3">Payment Methods</h1>
      </header>

      <main className="p-4">
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg"
            >
              <div className="flex items-center gap-3">
                {method.logo}
                <div className="flex items-center gap-2">
                  <span className="font-medium">{method.name}</span>
                  {method.last4 && (
                    <span className="text-gray-500">
                      •••• •••• •••• {method.last4}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-500">Connected</span>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <Button
          onClick={onAddNew}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full h-12 text-base font-medium"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Payment
        </Button>
      </div>
    </div>
  )
}

