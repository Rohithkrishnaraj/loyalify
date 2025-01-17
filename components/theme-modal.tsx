'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ThemeModalProps {
  onCancel?: () => void;
  onConfirm?: (theme: string) => void;
}

export function ThemeModal({ onCancel, onConfirm }: ThemeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50">
      <div className="w-full bg-white rounded-t-xl p-4 animate-in slide-in-from-bottom">
        <h2 className="text-lg font-medium text-center mb-6">Choose Theme</h2>
        
        <RadioGroup defaultValue="light" className="space-y-4 border-y-2 mb-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="system" id="system" className="border-2" />
            <Label htmlFor="system" className="text-base font-normal">System Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="light" id="light" className="border-2" />
            <Label htmlFor="light" className="text-base font-normal">Light</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dark" id="dark" className="border-2" />
            <Label htmlFor="dark" className="text-base font-normal">Dark</Label>
          </div>
        </RadioGroup>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 rounded-full"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            className="flex-1 rounded-full bg-rose-500 hover:bg-rose-600"
            onClick={() => onConfirm?.('light')}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  )
}

