import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { toggleOnlineStatus, acceptRide } from '@/app/dashboard/actions'
import { createClient } from '@/utils/supabase/client'

interface DriverControlsProps {
  initialIsOnline: boolean
  availableRides: any[]
}

export function DriverControls({ initialIsOnline, availableRides: initialRides }: DriverControlsProps) {
  const [isOnline, setIsOnline] = useState(initialIsOnline)
  const [rides, setRides] = useState(initialRides)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    setRides(initialRides)
  }, [initialRides])

  useEffect(() => {
    if (!isOnline) return

    const channel = supabase
      .channel('available-rides')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rides',
          filter: 'status=eq.REQUESTED'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setRides((prev) => [payload.new, ...prev])
          } else if (payload.eventType === 'DELETE' || (payload.eventType === 'UPDATE' && payload.new.status !== 'REQUESTED')) {
            setRides((prev) => prev.filter((r) => r.id !== (payload.old as any).id))
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [isOnline, supabase])

  const handleToggleOnline = async () => {

    setLoading(true)
    const newStatus = !isOnline
    const res = await toggleOnlineStatus(newStatus)
    if (!res?.error) {
      setIsOnline(newStatus)
    }
    setLoading(false)
  }

  const handleAcceptRide = async (rideId: string) => {
    setLoading(true)
    await acceptRide(rideId)
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 border rounded bg-gray-50">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Status</span>
          <span className={`font-bold ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
        <Button onClick={handleToggleOnline} disabled={loading} variant={isOnline ? "destructive" : "default"}>
          {isOnline ? 'Go Offline' : 'Go Online'}
        </Button>
      </div>

      {isOnline && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Available Rides</h3>
          {rides.length === 0 ? (
            <p className="text-gray-500 text-sm italic">No ride requests at the moment.</p>
          ) : (
            <div className="space-y-3">
              {rides.map((ride: any) => (
                <div key={ride.id} className="p-4 border rounded-lg bg-white shadow-sm flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">From: {ride.pickup_address}</p>
                    <p className="text-sm font-medium">To: {ride.dropoff_address}</p>
                    <p className="text-xs text-gray-400">{new Date(ride.requested_at).toLocaleTimeString()}</p>
                  </div>
                  <Button size="sm" onClick={() => handleAcceptRide(ride.id)} disabled={loading}>
                    Accept
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  )
}
