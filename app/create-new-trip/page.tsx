"use client"
import React, { useState } from 'react'
import ChatBox, { type TripInfo } from './_components/ChatBox'
import Itinerary from './_components/Itinerary'

function CreateNewTrip() {
  const [tripDetail, setTripDetail] = useState<TripInfo | null>(null)

  return (
    <div className='grid grid-cols-1 gap-5 p-10 md:grid-cols-3'>
      <div>
        <ChatBox onTripGenerated={setTripDetail} />
      </div>

      <div className='col-span-2'>
        <Itinerary tripData={tripDetail ?? undefined} />
      </div>
    </div>
  )
}

export default CreateNewTrip

