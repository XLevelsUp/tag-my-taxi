'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { requestRide } from '@/app/dashboard/actions'

export function BookingForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const formData = new FormData(e.currentTarget)
    const pickup = formData.get('pickup') as string
    const dropoff = formData.get('dropoff') as string

    const res = await requestRide(pickup, dropoff)
    
    setLoading(false)
    if (res?.error) {
      setError(res.error)
    } else {
      setSuccess(true)
      e.currentTarget.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="pickup">Pickup Address</Label>
        <Input id="pickup" name="pickup" placeholder="Enter pickup location" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dropoff">Dropoff Address</Label>
        <Input id="dropoff" name="dropoff" placeholder="Enter destination" required />
      </div>
      
      {error && <p className="text-sm text-red-500">{error}</p>}
      {success && <p className="text-sm text-green-500">Ride requested successfully!</p>}
      
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Requesting...' : 'Request Ride'}
      </Button>
    </form>
  )
}
