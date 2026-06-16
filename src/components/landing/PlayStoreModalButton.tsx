'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { UnifiedContactForm } from './UnifiedContactForm'

export function PlayStoreModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-zinc-900 transition-all shadow-lg hover:shadow-xl group active:scale-95"
        style={{
          boxShadow: '0 4px 20px -2px rgba(0,0,0,0.3)',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5.5 h-5.5">
          <path fill="#00e5ff" d="M10 28.4v455.1c0 17 9.8 24.2 23.3 14.6L293.7 256 33.3 13.8C19.8 4.2 10 11.4 10 28.4z"/>
          <path fill="#ffeb3b" d="M344 219.7L293.7 256l50.3 36.3 75.3-43.2c19.3-11.1 19.3-29.2 0-40.3l-75.3-43.1z"/>
          <path fill="#ff1744" d="M293.7 256L33.3 498.2c9.2 6.5 21 4.7 29.8-.3l280.9-160.9-50.3-36.3z"/>
          <path fill="#00e676" d="M293.7 256l50.3-36.3-280.9-160.9c-8.8-5-20.6-3.2-29.8 3.3L293.7 256z"/>
        </svg>
        <div className="text-left leading-none">
          <div className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">GET IT ON</div>
          <div className="text-[14px] font-extrabold text-white">Google Play</div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
          
          {/* Modal card */}
          <div className="relative bg-white rounded-3xl w-full max-w-lg p-8 md:p-10 shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
                Get Our <span className="text-[#dc2626]">Demo App</span>
              </h3>
              <p className="text-[14px] text-gray-500 mt-2 leading-relaxed">
                Fill out this form to receive the Android Play Store download link and test credentials.
              </p>
            </div>

            <UnifiedContactForm formType="quote" variant="landing" />
          </div>
        </div>
      )}
    </>
  )
}
