'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface ActiveRidesProps {
  initialRides: any[]
  userId: string
}

export function ActiveRides({ initialRides, userId }: ActiveRidesProps) {
  const [rides, setRides] = useState(initialRides)
  const supabase = createClient()

  useEffect(() => {
    setRides(initialRides)
  }, [initialRides])

  useEffect(() => {
    const channel = supabase
      .channel(`my-rides-${userId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rides',
          filter: `passenger_id=eq.${userId}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setRides((prev) => [payload.new, ...prev])
          } else if (payload.eventType === 'UPDATE') {
            if (payload.new.status === 'COMPLETED' || payload.new.status === 'CANCELLED') {
              setRides((prev) => prev.filter((r) => r.id !== payload.new.id))
            } else {
              setRides((prev) => prev.map((r) => r.id === payload.new.id ? payload.new : r))
            }
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userId, supabase])

  if (rides.length === 0) return null

  return (
    <div className="space-y-4 pt-8 border-t">
      <h3 className="text-lg font-medium">Active Rides</h3>
      <div className="space-y-3">
        {rides.map((ride) => (
          <div key={ride.id} className="p-4 border rounded-lg bg-blue-50 border-blue-100 flex justify-between items-center">
            <div>
              <p className="font-medium text-blue-900">Status: {ride.status}</p>
              <p className="text-sm text-blue-700">From: {ride.pickup_address}</p>
              <p className="text-sm text-blue-700">To: {ride.dropoff_address}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-blue-500">{new Date(ride.requested_at).toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
