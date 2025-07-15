'use client'

import React from 'react'
import { useMobileMenu } from './MobileMenuContext'

export default function MobileMenuButton() {
  const { isOpen, toggle } = useMobileMenu()

  return (
    <button
      onClick={toggle}
      className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white border border-gray-200 shadow-lg hover:bg-gray-50 transition-colors duration-200"
      aria-label="Toggle mobile menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <span 
          className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
          }`}
        />
        <span 
          className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span 
          className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          }`}
        />
      </div>
    </button>
  )
} 