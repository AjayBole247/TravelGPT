"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

function TripDurationUi({ onSelectOption }: any) {
  const [days, setDays] = useState(3);

  return (
    <div className="mt-5 border rounded-xl p-6">

      <h2 className="font-semibold text-center text-lg">
        How many days do you want to travel?
      </h2>

      <div className="flex justify-center items-center gap-8 mt-6">

        <button
          className="border rounded-full w-12 h-12 flex justify-center items-center hover:bg-gray-100"
          onClick={() => setDays((prev) => Math.max(1, prev - 1))}
        >
          <Minus />
        </button>

        <h2 className="text-3xl font-bold">
          {days} Days
        </h2>

        <button
          className="border rounded-full w-12 h-12 flex justify-center items-center hover:bg-gray-100"
          onClick={() => setDays(days + 1)}
        >
          <Plus />
        </button>

      </div>

      <div className="flex justify-center mt-6">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg"
          onClick={() => onSelectOption(days + " Days")}
        >
          Confirm
        </button>
      </div>

    </div>
  );
}

export default TripDurationUi;