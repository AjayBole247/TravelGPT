"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Hotel } from './ChatBox'
import Link from 'next/link'
import { ExternalLink, Star, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
type Props={
    hotel:Hotel
}
function HotelCardItem({hotel}:Props) {

    const[photoUrl,setPhotoUrl]=useState<string | null >(null);
    
    useEffect(()=>{
       if(hotel?.hotel_name){
        GetGooglePlaceDetail()
       }
    },[hotel])
    const GetGooglePlaceDetail=async()=>{
        try{

            const result=await axios.post('/api/google-place-detail',{
                placeName:hotel?.hotel_name
            });
            console.log(result?.data);
            if(result?.data?.e){
                setPhotoUrl(null)
                return 
            }
            setPhotoUrl(result?.data?.photoUrl || null);
        }
        catch(error){
            console.log('Failed to fetch hotel photo:',error)
            setPhotoUrl(null)
        }
    }
  return (
    <div  className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                 <Image
                   src={photoUrl ||'/Logo.png'} 
                   alt={hotel.hotel_name}
                   width={400}
                   height={250}
                   className="mb-2 rounded-xl object-cover shadow"
                 />
   
                 <h2 className="text-lg font-semibold">{hotel.hotel_name}</h2>
                 <h2 className="text-gray-500">{hotel.hotel_address}</h2>
   
                 <div className="flex items-center justify-between">
                   <p className="flex gap-2 text-green-600">
                     <Wallet />
                     {hotel.price_per_night}
                   </p>
   
                   <p className="flex gap-2 text-yellow-500">
                     <Star />
                     {hotel.rating}
                   </p>
                 </div>
   
                 <p className="line-clamp-2 text-gray-500">{hotel.description}</p>
                  <Link href={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name} target="_blank">
                   <Button size="sm" variant="outline" className="mt-2 w-full">
                     View <ExternalLink/>
                   </Button>
                   </Link>
               </div>
  )
}

export default HotelCardItem
