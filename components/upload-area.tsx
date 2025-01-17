import { Upload } from 'lucide-react'

interface UploadAreaProps {
  onFileSelect: (file: File) => void
}

export function UploadArea({ onFileSelect }: UploadAreaProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onFileSelect(file)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)]">
      <label 
        htmlFor="file-upload" 
        className="flex flex-col items-center justify-center gap-4 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <Upload className="w-8 h-8 text-gray-400" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-gray-900 font-medium">Upload</p>
          <p className="text-sm text-gray-500">Select a receipt to upload.</p>
          <p className="text-xs text-gray-400">Files supported: jpg, jpeg, png, or pdf</p>
        </div>
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={handleFileChange}
      />
    </div>
  )
}

