"use client";

import Itinerary from "@/app/create-new-trip/_components/Itinerary";
import type { TripInfo } from "@/app/create-new-trip/_components/ChatBox";

import {
  useTripDetail,
  useUserDetail,
} from "@/app/provider";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useConvex } from "convex/react";

import {
  ArrowLeft,
  LoaderCircle,
  MapPin,
} from "lucide-react";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

type Trip = {
  tripId: string;
  tripDetail: TripInfo;
  _id: string;
};

function ViewTrip() {
  const params = useParams<{
    tripid: string;
  }>();

  const tripid = params?.tripid;

  const { userDetail } = useUserDetail();

  const tripContext = useTripDetail();

  const setTripDetailInfo =
    tripContext?.setTripDetailInfo;

  const convex = useConvex();

  const [tripData, setTripData] =
    useState<Trip | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const getTrip = useCallback(async () => {
    if (!userDetail?._id || !tripid) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await convex.query(
        api.tripDetail.GetTripById,
        {
          uid: userDetail._id,
          tripid,
        }
      );

      if (!result) {
        setError("Trip not found.");
        setTripData(null);
        return;
      }

      setTripData(result);

      setTripDetailInfo?.(
        result.tripDetail
      );

    } catch (error) {
      console.error(
        "Failed to fetch trip:",
        error
      );

      setError(
        "Something went wrong while loading your trip."
      );

      setTripData(null);

    } finally {
      setLoading(false);
    }
  }, [
    convex,
    setTripDetailInfo,
    tripid,
    userDetail?._id,
  ]);

  useEffect(() => {
    if (userDetail?._id && tripid) {
      void getTrip();
    }
  }, [
    getTrip,
    tripid,
    userDetail?._id,
  ]);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-3">
        <LoaderCircle className="h-9 w-9 animate-spin text-primary" />

        <p className="text-muted-foreground">
          Loading your trip...
        </p>
      </div>
    );
  }

  if (error || !tripData) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-5 text-center">
        <div className="rounded-full bg-primary/10 p-5">
          <MapPin className="h-10 w-10 text-primary" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Trip not found
          </h2>

          <p className="mt-2 text-muted-foreground">
            {error ||
              "We could not find this trip."}
          </p>
        </div>

        <Link href="/my-trips">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />

            Back to My Trips
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pt-6 md:px-10 lg:px-16">
        <Link
          href="/my-trips"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />

          Back to My Trips
        </Link>
      </div>

      <Itinerary />
    </div>
  );
}

export default ViewTrip;