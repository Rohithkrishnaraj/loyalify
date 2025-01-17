export function StatusBar() {
  return (
    <div className="px-6 py-3 flex justify-between text-white text-sm">
      <div className="flex items-center gap-2">
        <span>9:41</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          <div className="h-2.5 w-1.5 bg-white rounded-sm" />
          <div className="h-2.5 w-1.5 bg-white rounded-sm" />
          <div className="h-2.5 w-1.5 bg-white rounded-sm" />
          <div className="h-2.5 w-1.5 bg-white rounded-sm" />
        </div>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
          <path d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" />
        </svg>
        <svg className="w-6 h-3" viewBox="0 0 24 12" fill="white">
          <path d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V8C22 9.10457 21.1046 10 20 10H4C2.89543 10 2 9.10457 2 8V4Z" />
        </svg>
      </div>
    </div>
  )
}

