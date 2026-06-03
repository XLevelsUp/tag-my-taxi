'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle2 } from 'lucide-react'
import { submitToGoogleSheets } from '@/app/actions/sheets'
import * as gtag from '../../utils/gtag'

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    fleetSize: '1 - 10 vehicles',
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

    if (!formData.firstName || !formData.email || !formData.message) {
      setError("Please fill in all required fields (First Name, Email, Message).")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await submitToGoogleSheets({
        formType: 'contact',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        fleetSize: formData.fleetSize,
        message: formData.message,
      })

      if (response.success) {
        // Track lead submission in Google Analytics
        gtag.event({
          action: 'generate_lead',
          category: 'Form Submission',
          label: 'Contact Form',
        })

        setSuccess(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          fleetSize: '1 - 10 vehicles',
          message: '',
        })
      } else {
        setError(response.error || "Failed to send inquiry. Please try again.")
      }
    } catch (err) {

      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group min-h-[550px] flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      {success ? (
        <div className="relative z-10 text-center space-y-6 py-8">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-black uppercase tracking-tight text-gray-900">
              Inquiry <span className="text-[#ff0000]">Sent!</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
              Thank you for contacting us. Your message has been safely saved, and our team will get in touch with you shortly.
            </p>
          </div>
          <Button 
            onClick={() => setSuccess(false)}
            className="bg-[#ff0000] hover:bg-[#E53935] px-8 py-3 rounded-full font-black uppercase tracking-[0.1em] text-white shadow-xl shadow-red-200 transition-all"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500">First Name *</label>
              <input 
                type="text" 
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#ff0000] transition-colors text-sm text-gray-700" 
                placeholder="John" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#ff0000] transition-colors text-sm text-gray-700" 
                placeholder="Doe" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Work Email *</label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#ff0000] transition-colors text-sm text-gray-700" 
              placeholder="john@company.com" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Fleet Size</label>
            <div className="relative">
              <select 
                name="fleetSize"
                value={formData.fleetSize}
                onChange={handleChange}
                className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#ff0000] transition-colors text-sm text-gray-700 appearance-none cursor-pointer"
              >
                <option>1 - 10 vehicles</option>
                <option>11 - 50 vehicles</option>
                <option>51 - 200 vehicles</option>
                <option>200+ vehicles</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Message *</label>
            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full h-40 bg-gray-50 border border-gray-200 rounded-3xl p-6 focus:outline-none focus:border-[#ff0000] transition-colors resize-none text-sm text-gray-700" 
              placeholder="Tell us about your business goals..."
            />
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-50 text-red-600 text-xs font-semibold leading-relaxed border border-red-100">
              {error}
            </div>
          )}

          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff0000] hover:bg-[#E53935] h-16 rounded-full font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-red-200 group transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Inquiry <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
