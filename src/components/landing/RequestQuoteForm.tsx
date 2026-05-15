'use client'

import { useState } from 'react'

export function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    company: '',
    country: '',
    numberOfCars: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E31E24] transition-colors"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E31E24] transition-colors"
        />
      </div>

      {/* Row 2: Country Code & Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[#E31E24] transition-colors"
          >
            <option value="">Code</option>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (IN)</option>
            <option value="+971">+971 (UAE)</option>
            <option value="+61">+61 (AU)</option>
            <option value="+49">+49 (DE)</option>
            <option value="+33">+33 (FR)</option>
            <option value="+86">+86 (CN)</option>
            <option value="+81">+81 (JP)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E31E24] transition-colors"
        />
      </div>

      {/* Row 3: Company & Country */}
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#E31E24] transition-colors"
        />
        <div className="relative">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[#E31E24] transition-colors"
          >
            <option value="">Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            <option value="AE">United Arab Emirates</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="CA">Canada</option>
            <option value="SG">Singapore</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 4: Number of Cars */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <select
            name="numberOfCars"
            value={formData.numberOfCars}
            onChange={handleChange}
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[#E31E24] transition-colors"
          >
            <option value="">Number of Cars</option>
            <option value="1-10">1 - 10</option>
            <option value="11-50">11 - 50</option>
            <option value="51-100">51 - 100</option>
            <option value="101-500">101 - 500</option>
            <option value="500+">500+</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div></div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#E31E24] hover:bg-red-700 text-white font-bold text-lg py-4 rounded-lg transition-colors mt-4"
      >
        Request A Quote
      </button>
    </form>
  )
}
