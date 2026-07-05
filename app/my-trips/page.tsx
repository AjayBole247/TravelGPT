"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { useUserDetail } from "../provider";
import type { TripInfo } from "../create-new-trip/_components/ChatBox";
import MyTripCardItem from "./_components/MyTripCardItem";
import { LoaderCircle, Map } from "lucide-react";

type Trip = {
  tripId: string;
  tripDetail: TripInfo;
  _id: string;
};

function MyTrips() {
  const [myTrips, setMyTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  const { userDetail } = useUserDetail();
  const convex = useConvex();

  const getUserTrips = useCallback(async () => {
    if (!userDetail?._id) return;

    try {
      setLoading(true);

      const result = await convex.query(
        api.tripDetail.GetUserTrips,
        {
          uid: userDetail._id,
        }
      );

      setMyTrips(result ?? []);
    } catch (error) {
      console.error("Failed to fetch trips:", error);
      setMyTrips([]);
    } finally {
      setLoading(false);
    }
  }, [convex, userDetail?._id]);

  useEffect(() => {
    if (userDetail?._id) {
      void getUserTrips();
    }
  }, [getUserTrips, userDetail?._id]);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-5 py-10 md:px-10 lg:px-16">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold md:text-4xl">
          My Trips
        </h1>

        <p className="mt-2 text-muted-foreground">
          View and manage all your AI-generated travel plans.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex min-h-[300px] items-center justify-center">
          <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {/* Empty State */}
      {!loading && myTrips.length === 0 && (
        <div className="mt-6 flex min-h-[350px] flex-col items-center justify-center gap-5 rounded-2xl border border-dashed bg-muted/20 p-7 text-center">

          <div className="rounded-full bg-primary/10 p-5">
            <Map className="h-10 w-10 text-primary" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              No trips created yet
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Create your first AI-powered travel plan.
            </p>
          </div>

          <Link href="/create-new-trip">
            <Button>
              Create New Trip
            </Button>
          </Link>
        </div>
      )}

      {/* Trips Grid */}
      {!loading && myTrips.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {myTrips.map((trip) => (
            <MyTripCardItem
              key={trip._id}
              trip={trip}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default MyTrips;