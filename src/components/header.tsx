import React from 'react'

import ThemeModeToggle from '@/components/theme-mode-toggle'

function Header() {
  return (
    <header className="text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">
          <span className="sr-only">Search</span>
          🔍
        </button>
        <button className="text-gray-300 hover:text-white">
          <span className="sr-only">Notifications</span>
          🔔
        </button>
        <button className="text-gray-300 hover:text-white">
          <span className="sr-only">User Profile</span>
          👤
        </button>
        <ThemeModeToggle />
      </div>
    </header>
  )
}

export default Header
