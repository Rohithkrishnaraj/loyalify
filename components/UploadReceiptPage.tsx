'use client'

import { useState } from 'react'
import { ArrowLeft, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UploadArea } from '@/components/upload-area'
import { StatusBar } from '@/components/ui/status-bar'

interface UploadReceiptPageProps {
  onBack: () => void
  onUploadComplete: () => void
}

export function UploadReceiptPage({ onBack, onUploadComplete }: UploadReceiptPageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
  }

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically handle the file upload
      console.log('Uploading file:', selectedFile.name)
      // After upload is complete, call onUploadComplete
      onUploadComplete()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <StatusBar />
      <div className="px-4 py-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Upload Receipt</h1>
        </div>
        <button>
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <UploadArea onFileSelect={handleFileSelect} />

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <Button 
          className="w-full bg-[#FF4B6E] hover:bg-[#FF4B6E]/90 text-white py-6"
          disabled={!selectedFile}
          onClick={handleUpload}
        >
          Upload Receipt
        </Button>
      </div>
    </div>
  )
}

