'use client'

export function PhoneCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative w-[280px] mx-auto">
      {/* Top-right red accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#E31E24] z-10" />
      {/* Bottom-left red accent */}
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#E31E24] z-10" />

      {/* Phone frame */}
      <div className="relative z-20 rounded-[2rem] border-[6px] border-gray-300 overflow-hidden shadow-lg bg-white">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-b-xl z-30" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-[340px] object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
              parent.style.height = '340px'
              parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-weight:bold;font-size:1.1rem;">${title}</div>`
            }
          }}
        />
      </div>
    </div>
  )
}
