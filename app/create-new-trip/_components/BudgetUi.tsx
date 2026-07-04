"use client";

import React, { useState } from "react";

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
    color: "bg-purple-100 text-purple-600",
  },
];

function BudgetUi({ onSelectOption }: any) {
  const [selected, setSelected] = useState<number>();

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {SelectBudgetOptions.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelected(item.id);
            onSelectOption(item.title);
          }}
          className={`border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md hover:scale-105 ${
            selected === item.id
              ? "border-orange-500 ring-2 ring-orange-200"
              : ""
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl mx-auto ${item.color}`}
          >
            {item.icon}
          </div>

          <h2 className="font-bold text-center mt-3">
            {item.title}
          </h2>

          <p className="text-sm text-gray-500 text-center">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BudgetUi;