import { getUserRole, logout } from './actions'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { BookingForm } from '@/components/BookingForm'
import { DriverControls } from '@/components/DriverControls'
import { ActiveRides } from '@/components/ActiveRides'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
  const { role, user, isOnline } = await getUserRole()
  const supabase = await createClient()

  let availableRides: any[] = []
  if (role === 'DRIVER' && isOnline) {
    const { data: rides } = await supabase
      .from('rides')
      .select('*')
      .eq('status', 'REQUESTED')
      .order('requested_at', { ascending: false })
    availableRides = rides || []
  }

  let activeRides: any[] = []
  if (role === 'PASSENGER') {
    const { data: rides } = await supabase
      .from('rides')
      .select('*')
      .eq('passenger_id', user.id)
      .not('status', 'in', '("COMPLETED","CANCELLED")')
      .order('requested_at', { ascending: false })
    activeRides = rides || []
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TagMyTaxi Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{user.email} ({role})</span>
          <form action={logout}>
            <Button variant="outline" size="sm">Logout</Button>
          </form>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
                <p className="text-gray-600 mb-6">
                  You are logged in as a <strong>{role}</strong>.
                </p>

                {role === 'PASSENGER' && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Book a Ride</h3>
                      <BookingForm />
                    </div>

                    <ActiveRides initialRides={activeRides} userId={user.id} />
                  </div>
                )}

                {role === 'DRIVER' && (
                  <DriverControls initialIsOnline={isOnline} availableRides={availableRides} />
                )}


                {(role === 'ADMIN' || role === 'SUPER_ADMIN') && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Admin Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded text-center bg-gray-50">
                            <p className="text-sm text-gray-500">Active Rides</p>
                            <p className="text-2xl font-bold">0</p>
                        </div>
                        <div className="p-4 border rounded text-center bg-gray-50">
                            <p className="text-sm text-gray-500">Online Drivers</p>
                            <p className="text-2xl font-bold">0</p>
                        </div>
                        <div className="p-4 border rounded text-center bg-gray-50">
                            <p className="text-sm text-gray-500">Today's Revenue</p>
                            <p className="text-2xl font-bold">$0</p>
                        </div>
                    </div>
                  </div>
                )}
            </div>
        </div>
      </main>
    </div>
  )
}

