"use client";

import { LoaderCircle } from "lucide-react";

function FinalTripUi({ viewTrip, tripDetail, disable }: any) {
  return (
    <div className="mt-5 border rounded-xl p-8">

      <div className="flex justify-center">
        <LoaderCircle
          size={40}
          className="animate-spin text-orange-500"
        />
      </div>

      <h2 className="font-bold text-xl text-center mt-5">
        Planning your dream trip...
      </h2>

      <p className="text-gray-500 text-center mt-2">
        Gathering destinations, activities and travel details.
      </p>

      <button
        className="mt-5 mx-auto block bg-orange-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
        onClick={viewTrip}
        disabled={disable}
      >
        View Trip
      </button>

    </div>
  );
}

export default FinalTripUi;