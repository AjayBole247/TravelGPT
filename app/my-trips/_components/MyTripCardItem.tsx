"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

type Trip = {
  tripId: string;
  tripDetail: {
    destination?: string;
    origin?: string;
    duration?: string;
  };
  _id: string;
};

type Props = {
  trip: Trip;
};

function MyTripCardItem({ trip }: Props) {
  const destination =
    trip?.tripDetail?.destination || "Unknown Destination";

  const origin =
    trip?.tripDetail?.origin || "Unknown Origin";

  const duration =
    trip?.tripDetail?.duration || "Duration not available";

  return (
    <Link
      href={`/view-trips/${trip.tripId}`}
      className="group block"
    >
      <div className="h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

        {/* Image Section */}
        <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <Image
            src="/Logo.png"
            alt={`${destination} trip`}
            width={100}
            height={100}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow-sm">
            My Trip
          </div>
        </div>

        {/* Trip Information */}
        <div className="space-y-4 p-5">

          {/* Destination */}
          <div>
            <p className="mb-1 text-sm text-muted-foreground">
              Destination
            </p>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />

              <h2 className="truncate text-xl font-bold">
                {destination}
              </h2>
            </div>
          </div>

          {/* Origin to Destination */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="truncate">
              {origin}
            </span>

            <ArrowRight className="h-4 w-4 shrink-0 text-primary" />

            <span className="truncate font-medium text-foreground">
              {destination}
            </span>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t pt-4">

            <div className="flex items-center gap-2 text-sm">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>{duration}</span>
            </div>

            <div className="flex items-center gap-1 text-sm font-semibold text-primary">
              View Trip

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
}

export default MyTripCardItem;