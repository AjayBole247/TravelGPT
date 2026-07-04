"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "France",
    title: "Explore Paris – Eiffel Tower, Louvre & Seine River",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Italy",
    title: "Walk Through Rome – Colosseum, Vatican & Roman Forum",
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Japan",
    title: "Discover Tokyo – Shibuya, Temples & Cherry Blossoms",
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "United Arab Emirates",
    title: "Experience Dubai – Burj Khalifa, Desert Safari & Luxury",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Switzerland",
    title: "Journey Through the Swiss Alps & Scenic Villages",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "India",
    title: "Visit the Taj Mahal – India's Timeless Wonder",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Greece",
    title: "Santorini – White Houses, Blue Domes & Sunset Views",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Maldives",
    title: "Relax in the Maldives – Crystal Waters & Water Villas",
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",
    content: <DummyContent />,
  },
];
