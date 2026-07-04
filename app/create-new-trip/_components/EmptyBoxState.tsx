"use client";

import { Sparkles, Plane, Landmark, Compass } from "lucide-react";

interface EmptyBoxStateProps {
  onSelectOption: (value: string) => void;
}

const options = [
  {
    title: "Create New Trip",
    icon: Sparkles,
    color: "text-blue-500",
    active: true,
  },
  {
    title: "Inspire me where to go",
    icon: Plane,
    color: "text-green-500",
  },
  {
    title: "Discover Hidden gems",
    icon: Landmark,
    color: "text-orange-500",
  },
  {
    title: "Adventure Destination",
    icon: Compass,
    color: "text-yellow-500",
  },
];

export default function EmptyBoxState({ onSelectOption }: EmptyBoxStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">
        Start Planning new{" "}
        <span className="text-orange-500">Trip</span> using AI
      </h1>

      {/* Subtitle */}
      <p className="mt-4 max-w-3xl text-center text-gray-500">
        Discover personalized travel itineraries, find the best destinations,
        and plan your dream vacation effortlessly with the power of AI. Let our
        smart assistant do the hard work while you enjoy the journey.
      </p>

      {/* Cards */}
      <div className="mt-10 w-full max-w-4xl space-y-5">
        {options.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              onClick={() => onSelectOption(item.title)}
              className={`group flex w-full items-center gap-4 rounded-2xl border bg-white px-6 py-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                item.active
                  ? "border-orange-300 ring-1 ring-orange-200"
                  : "border-gray-200"
              }`}
            >
              <div
                className={`rounded-full bg-gray-100 p-2 ${item.color}`}
              >
                <Icon className="h-2 w-2" />
              </div>

              <span
                className={`text-sm font-semibold ${
                  item.active
                    ? "text-orange-500"
                    : "text-gray-800 group-hover:text-orange-500"
                }`}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}