'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle2 } from 'lucide-react'
import { submitToGoogleSheets } from '@/app/actions/sheets'
import * as gtag from '../../utils/gtag'

interface UnifiedContactFormProps {
  formType: 'contact' | 'quote'
  variant?: 'landing' | 'contact'
}

export function UnifiedContactForm({ formType, variant = 'landing' }: UnifiedContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    company: '',
    country: '',
    fleetSize: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mobile number validation (requires both code and number)
    if (!formData.name || !formData.email || !formData.countryCode || !formData.phone) {
      setError("Please fill in all required fields (Name, Email, Country Code, and Mobile Number).")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await submitToGoogleSheets({
        formType,
        name: formData.name,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        fleetSize: formData.fleetSize,
        numberOfCars: formData.fleetSize, // Map to both for sheet column compatibility
        message: formData.message,
      })

      if (response.success) {
        // Track lead submission in Google Analytics
        const label = formType === 'quote' ? 'Request Quote Form' : 'Contact Form'
        gtag.event({
          action: 'generate_lead',
          category: 'Form Submission',
          label,
        })
        gtag.trackConversion('AW-17760687003/PXr2CPzF9s0bEJun-pRC')

        setSuccess(true)
        setFormData({
          name: '',
          email: '',
          countryCode: '',
          phone: '',
          company: '',
          country: '',
          fleetSize: '',
          message: '',
        })
      } else {
        setError(response.error || "Failed to submit request. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full h-13 bg-gray-50 border border-gray-200 rounded-xl px-5 focus:outline-none focus:bg-white focus:border-[#dc2626] focus:ring-2 focus:ring-red-600/10 transition-all text-[15px] text-gray-700"
  const selectClass = "w-full h-13 bg-gray-50 border border-gray-200 rounded-xl px-5 focus:outline-none focus:bg-white focus:border-[#dc2626] focus:ring-2 focus:ring-red-600/10 transition-all text-[15px] text-gray-700 appearance-none cursor-pointer"
  const textareaClass = "w-full h-32 bg-gray-50 border border-gray-200 rounded-2xl p-5 focus:outline-none focus:bg-white focus:border-[#dc2626] focus:ring-2 focus:ring-red-600/10 transition-all resize-none text-[15px] text-gray-700"

  const formFields = (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name & Email */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Name *</label>}
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your Name *"
            aria-label="Name"
          />
        </div>
        <div className="space-y-1.5">
          {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Work Email *</label>}
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="Work Email *"
            aria-label="Work email"
          />
        </div>
      </div>

      {/* Row 2: Mobile Number (Country Code & Phone) */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="space-y-1.5 md:col-span-1">
          {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Code *</label>}
          <div className="relative">
            <select
              name="countryCode"
              required
              value={formData.countryCode}
              onChange={handleChange}
              className={selectClass}
              aria-label="Country code"
            >
              <option value="">Code *</option>
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
        </div>
        <div className="space-y-1.5 md:col-span-2">
          {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Mobile Number *</label>}
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="Mobile Number *"
            aria-label="Mobile number"
          />
        </div>
      </div>

      {/* Row 3: Company & Country */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Company Name</label>}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
            placeholder="Company Name"
            aria-label="Company name"
          />
        </div>
        <div className="space-y-1.5">
          {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Country</label>}
          <div className="relative">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={selectClass}
              aria-label="Country"
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
      </div>

      {/* Row 4: Fleet Size */}
      <div className="space-y-1.5">
        {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Fleet Size</label>}
        <div className="relative">
          <select
            name="fleetSize"
            value={formData.fleetSize}
            onChange={handleChange}
            className={selectClass}
            aria-label="Fleet size"
          >
            <option value="">Number of Cars / Fleet Size</option>
            <option value="1-10">1 - 10 vehicles</option>
            <option value="11-50">11 - 50 vehicles</option>
            <option value="51-100">51 - 100 vehicles</option>
            <option value="101-500">101 - 500 vehicles</option>
            <option value="500+">500+ vehicles</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 5: Message */}
      <div className="space-y-1.5">
        {variant === 'contact' && <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message (Optional)</label>}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={textareaClass}
          placeholder="Message (Optional)"
          aria-label="Message"
        />
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-semibold leading-relaxed border border-red-100">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#dc2626] hover:bg-[#b91c1c] h-14 rounded-xl font-bold uppercase tracking-wider text-white shadow-xl shadow-red-200/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-[15px]"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          <>
            {formType === 'quote' ? 'Request A Quote' : 'Send Inquiry'}
            <Send className="w-4 h-4 ml-1" />
          </>
        )}
      </Button>
    </form>
  )

  const successView = (
    <div className="text-center py-8 space-y-5">
      <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
        <CheckCircle2 className="w-9 h-9" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
          Inquiry <span className="text-[#dc2626]">Submitted!</span>
        </h3>
        <p className="text-base text-gray-600 leading-relaxed max-w-md mx-auto">
          {formType === 'quote'
            ? 'Thank you for requesting a quote. Our team will review your fleet requirements and contact you within one business day.'
            : 'Thank you for contacting us. Your message has been safely saved, and our team will get in touch with you shortly.'
          }
        </p>
      </div>
      <Button
        onClick={() => setSuccess(false)}
        className="bg-[#dc2626] hover:bg-[#b91c1c] px-8 py-3 rounded-full font-bold uppercase tracking-wider text-white shadow-xl shadow-red-200 transition-all text-sm"
      >
        Submit Another Request
      </Button>
    </div>
  )

  if (variant === 'contact') {
    return (
      <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group min-h-[550px] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10">
          {success ? successView : formFields}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {success ? successView : formFields}
    </div>
  )
}
