'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function getUserRole() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Get user profile to check role and status
  const { data: profile } = await supabase
    .from('profiles')
    .select('role, is_online, tenant_id')
    .eq('id', user.id)
    .single()

  return {
    role: profile?.role || 'PASSENGER',
    isOnline: profile?.is_online || false,
    tenantId: profile?.tenant_id,
    user
  }
}

export async function toggleOnlineStatus(isOnline: boolean) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return { error: 'Not authenticated' }

  const { error } = await supabase
    .from('profiles')
    .update({ is_online: isOnline })
    .eq('id', user.id)

  if (error) return { error: error.message }
  revalidatePath('/dashboard')
}

export async function requestRide(pickup: string, dropoff: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return { error: 'Not authenticated' }

  // Get profile to get tenant_id
  const { data: profile } = await supabase
    .from('profiles')
    .select('tenant_id')
    .eq('id', user.id)
    .single()

  if (!profile?.tenant_id) return { error: 'No tenant assigned' }

  const { error } = await supabase
    .from('rides')
    .insert({
      passenger_id: user.id,
      tenant_id: profile.tenant_id,
      pickup_address: pickup,
      dropoff_address: dropoff,
      status: 'REQUESTED'
    })

  if (error) return { error: error.message }
  revalidatePath('/dashboard')
}

export async function acceptRide(rideId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return { error: 'Not authenticated' }

  const { error } = await supabase
    .from('rides')
    .update({ 
      driver_id: user.id,
      status: 'ACCEPTED',
      accepted_at: new Date().toISOString()
    })
    .eq('id', rideId)
    .eq('status', 'REQUESTED')

  if (error) return { error: error.message }
  revalidatePath('/dashboard')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

