"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Activity } from './ChatBox'
import Link from 'next/link'
import { ExternalLink, Clock, Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import axios from 'axios'

type Props = {
  activity: Activity
}

function PlaceCardItem({ activity }: Props) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchGooglePlaceDetail = async () => {
      try {
        const result = await axios.post('/api/google-place-detail', {
          placeName: `${activity?.place_name}: ${activity?.place_address}`,
        })

        if (!isMounted) return

        const nextPhotoUrl = result?.data?.photoUrl || null
        setPhotoUrl(nextPhotoUrl)
      } catch (error) {
        if (!isMounted) return
        setPhotoUrl(null)
      }
    }

    if (activity?.place_name) {
      fetchGooglePlaceDetail()
    }

    return () => {
      isMounted = false
    }
  }, [activity?.place_name, activity?.place_address])

  const imageSrc = photoUrl || '/Logo.png'

  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
      <Image
        src={imageSrc}
        width={400}
        height={250}
        alt={activity.place_name}
        className="mb-2 rounded-xl object-cover shadow"
        onError={() => setPhotoUrl(null)}
      />
      <h4 className="font-semibold text-slate-800">{activity.place_name}</h4>
      <p className="mt-1 text-sm text-slate-600">{activity.place_details}</p>
      <p className="mt-2 text-xs text-slate-500">
        <Clock /> {activity.time_travel_each_location}
      </p>
      <h2 className="flex items-center gap-2 text-lg font-bold text-green-600">
        <Ticket />
        {activity.ticket_pricing}
      </h2>
      <Link href={`https://www.google.com/maps/search/?api=1&query=${activity?.place_name}`} target="_blank">
        <Button size="sm" variant="outline" className="mt-2 w-full">
          View <ExternalLink />
        </Button>
      </Link>
    </div>
  )
}

export default PlaceCardItem
