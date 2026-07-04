import React from 'react'
import Image from 'next/image';
import { Timeline } from "@/components/ui/timeline";
import { Clock, ExternalLink, Star, Ticket, Timer, Wallet } from 'lucide-react';
import type { TripInfo } from './ChatBox';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';

const TRIP_DATA: TripInfo = {
   "destination": "Mumbai",
        "duration": "3 Days",
        "origin": "Bilaspur",
        "budget": "Moderate",
        "group_size": "Family (3-5 People)",
        "hotels": [
            {
                "hotel_name": "Royal Orchid Hotel Mumbai",
                "hotel_address": "New Airport Rd, Awirampur, Vile Parle, Mumbai, Maharashtra 400099, India",
                "price_per_night": "$120",
                "hotel_image_url": "https://example.com/royal_orchid.jpg",
                "geo_coordinates": {
                    "latitude": 19.0806,
                    "longitude": 72.8674
                },
                "rating": 4.5,
                "description": "A luxury hotel near the airport with fantastic amenities and easy access to food markets."
            },
            {
                "hotel_name": "The Taj Mahal Palace",
                "hotel_address": "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001, India",
                "price_per_night": "$200",
                "hotel_image_url": "https://example.com/taj_mahal.jpg",
                "geo_coordinates": {
                    "latitude": 18.9217,
                    "longitude": 72.8348
                },
                "rating": 4.8,
                "description": "An iconic hotel offering stunning views of the Gateway of India, known for its exceptional dining options."
            },
            {
                "hotel_name": "Hotel Marine Plaza",
                "hotel_address": "29 Marine Drive, Netaji Subhash Rd, Marine Drive, Mumbai, Maharashtra 400020, India",
                "price_per_night": "$100",
                "hotel_image_url": "https://example.com/marine_plaza.jpg",
                "geo_coordinates": {
                    "latitude": 18.922,
                    "longitude": 72.8326
                },
                "rating": 4.2,
                "description": "Situated along Marine Drive, this hotel offers great access to local eateries and scenic views."
            }
        ],
        "itinerary": [
            {
                "day": 1,
                "day_plan": "Arrival in Mumbai and food exploration",
                "best_time_to_visit_day": "Evening",
                "activities": [
                    {
                        "place_name": "Chhatrapati Shivaji Terminus",
                        "place_details": "A UNESCO World Heritage site and an architectural masterpiece.",
                        "place_image_url": "https://example.com/cst.jpg",
                        "geo_coordinates": {
                            "latitude": 18.9402,
                            "longitude": 72.8347
                        },
                        "place_address": "Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001, India",
                        "ticket_pricing": "Free",
                        "time_travel_each_location": "1 hour from hotel",
                        "best_time_to_visit": "Evening"
                    },
                    {
                        "place_name": "K Rustom's Ice Cream",
                        "place_details": "Famous for its delicious ice creams served in a unique way.",
                        "place_image_url": "https://example.com/k_rustoms.jpg",
                        "geo_coordinates": {
                            "latitude": 18.9529,
                            "longitude": 72.8305
                        },
                        "place_address": "Near Bombay High Court, Dhobi Talao, Mumbai, Maharashtra 400001, India",
                        "ticket_pricing": "INR 100",
                        "time_travel_each_location": "20 minutes from CST",
                        "best_time_to_visit": "Night"
                    }
                ]
            },
            {
                "day": 2,
                "day_plan": "Adventure outing and local food",
                "best_time_to_visit_day": "Morning",
                "activities": [
                    {
                        "place_name": "Essel World",
                        "place_details": "Asia's largest amusement park offering multiple thrilling rides.",
                        "place_image_url": "https://example.com/esselworld.jpg",
                        "geo_coordinates": {
                            "latitude": 19.2531,
                            "longitude": 72.8252
                        },
                        "place_address": "Gorai Island, Borivali, Mumbai, Maharashtra 400091, India",
                        "ticket_pricing": "INR 1,200",
                        "time_travel_each_location": "1-hour drive from hotel",
                        "best_time_to_visit": "9 AM - 12 PM"
                    },
                    {
                        "place_name": "Bandra-Worli Sea Link",
                        "place_details": "A stunning bridge with picturesque views ideal for family photos.",
                        "place_image_url": "https://example.com/bandra_worli.jpg",
                        "geo_coordinates": {
                            "latitude": 19.0372,
                            "longitude": 72.8258
                        },
                        "place_address": "Bandra, Mumbai, Maharashtra 400050, India",
                        "ticket_pricing": "Free",
                        "time_travel_each_location": "30 minutes from Essel World",
                        "best_time_to_visit": "Evening"
                    }
                ]
            },
            {
                "day": 3,
                "day_plan": "Shopping and local cuisine tasting",
                "best_time_to_visit_day": "Afternoon",
                "activities": [
                    {
                        "place_name": "Crawford Market",
                        "place_details": "A bustling market famous for its fresh produce and spices.",
                        "place_image_url": "https://example.com/crawford_market.jpg",
                        "geo_coordinates": {
                            "latitude": 18.9602,
                            "longitude": 72.8348
                        },
                        "place_address": "D. B. Marg, Mumbai, Maharashtra 400001, India",
                        "ticket_pricing": "Free",
                        "time_travel_each_location": "30 minutes from hotel",
                        "best_time_to_visit": "Afternoon"
                    },
                    {
                        "place_name": "Leopold Cafe",
                        "place_details": "Iconic cafe known for its unique ambience and great food.",
                        "place_image_url": "https://example.com/leopold_cafe.jpg",
                        "geo_coordinates": {
                            "latitude": 18.922,
                            "longitude": 72.8322
                        },
                        "place_address": "Leopold Cafe, Colaba, Mumbai, Maharashtra 400005, India",
                        "ticket_pricing": "INR 500",
                        "time_travel_each_location": "10 minutes from Crawford Market",
                        "best_time_to_visit": "Lunch"
                    }
                ]
            }
        ]
}

function Itinerary() {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {TRIP_DATA.hotels.map((hotel, index) => (
           <HotelCardItem key={hotel.hotel_name??index} hotel={hotel} />
          ))}
        </div>
      ),
    },
    ...TRIP_DATA.itinerary.map((dayData) => ({
      title: `Day ${dayData.day}`,
      content: (
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
           <Timer/> {dayData.best_time_to_visit_day ?? "Planned day"}
          </p>
          <h3 className="text-lg font-semibold text-slate-900">{dayData.day_plan}</h3>
          <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayData.activities.map((activity, index) => (
             <PlaceCardItem activity={activity} />
            ))}
          </div>
        </div>
      ),
    })),
  ];

  return (
    <div className="relative w-full max-h-[80vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA} />
    </div>
  );
}

export default Itinerary;
