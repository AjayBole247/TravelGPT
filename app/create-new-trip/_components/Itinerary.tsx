"use client";

import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Timer } from "lucide-react";

import type {
  TripInfo,
  Hotel,
  Activity,
  Itinerary as ItineraryType,
} from "./ChatBox";

import HotelCardItem from "./HotelCardItem";
import PlaceCardItem from "./PlaceCardItem";
import { useTripDetail } from "@/app/provider";

function Itinerary() {
  const context = useTripDetail();

  const tripData: TripInfo | null =
    context?.tripDetailInfo ?? null;

  const data = tripData
    ? [
        {
          title: "Recommended Hotels",
          content: (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {tripData.hotels.map(
                (hotel: Hotel, index: number) => (
                  <HotelCardItem
                    key={hotel.hotel_name ?? index}
                    hotel={hotel}
                  />
                )
              )}
            </div>
          ),
        },

        ...tripData.itinerary.map(
          (dayData: ItineraryType) => ({
            title: `Day ${dayData.day}`,

            content: (
              <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  <Timer className="h-4 w-4" />

                  {dayData.best_time_to_visit_day ??
                    "Planned day"}
                </p>

                <h3 className="text-lg font-semibold text-slate-900">
                  {dayData.day_plan}
                </h3>

                <div className="grid grid-cols-1 gap-4 space-y-2 md:grid-cols-2">
                  {dayData.activities.map(
                    (
                      activity: Activity,
                      index: number
                    ) => (
                      <PlaceCardItem
                        key={
                          activity.place_name ?? index
                        }
                        activity={activity}
                      />
                    )
                  )}
                </div>
              </div>
            ),
          })
        ),
      ]
    : [];

  return (
    <div className="relative w-full max-h-[80vh] overflow-auto">
      <div>
        {tripData ? (
          <Timeline
            data={data}
            tripData={tripData}
          />
        ) : (
          <Image
            src="/forest1.jpg"
            alt="travel"
            width={700}
            height={900}
            className="w-full h-full object-cover rounded-3xl"
          />
        )}

        <h2>
          Getting to know you to build perfect trip here...
        </h2>
      </div>
    </div>
  );
}

export default Itinerary;