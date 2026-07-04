"use client"
import {useUser} from '@clerk/nextjs';
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Send } from "lucide-react";
import { useRouter } from 'next/navigation';

const Hero = () => {
 const {user}=useUser();
 const router=useRouter();
 const onSend=()=>{
    if(!user){
        router.push('/sign-in');
        return;
    }
    router.push('/create-new-trip');
 }
 
  return (
    <section className="w-full flex flex-col items-center px-6 py-14">
      {/* Heading */}
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          Hey, I'm your personal{" "}
          <span className="text-orange-500">Trip Planner</span>
        </h1>

        <p className="mt-4 text-gray-500 text-lg">
          Tell me what you want, and I'll handle the rest:
          Flights, Hotels, Activities & complete trip planning in seconds.
        </p>
      </div>

      {/* Search Box */}
      <div className="mt-10 w-full max-w-3xl bg-white border rounded-2xl shadow-lg p-4">
        <textarea
          rows={4}
          placeholder="Create a trip for Paris from New York..."
          className="w-full resize-none outline-none text-gray-700 placeholder:text-gray-400"
        />

        <div className="flex justify-end mt-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition " onClick={()=>{
            onSend()
          }} >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button className="px-4 py-2 rounded-full border bg-white shadow-sm hover:bg-gray-100 text-sm">
          ✈️ Create New Trip
        </button>

        <button className="px-4 py-2 rounded-full border bg-white shadow-sm hover:bg-gray-100 text-sm">
          🌍 Inspire me where to go
        </button>

        <button className="px-4 py-2 rounded-full border bg-white shadow-sm hover:bg-gray-100 text-sm">
          💎 Discover Hidden Gems
        </button>

        <button className="px-4 py-2 rounded-full border bg-white shadow-sm hover:bg-gray-100 text-sm">
          🏕 Adventure Destination
        </button>
      </div>

      {/* Subtitle */}
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm">
          Not sure where to start?
          <span className="font-semibold text-black ml-1">
            See how it works ↓
          </span>
        </p>
      </div>

      {/* Video */}
      <div className="mt-8 w-full max-w-4xl">
        <HeroVideoDialog
          animationStyle="from-center"
          className="rounded-3xl overflow-hidden shadow-2xl"

          thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_mindtripProduct.jpg?p=facebook"
          thumbnailAlt="TravelGPT Demo"
          videoSrc="YOUR_VIDEO_URL"
        />
      </div>
    </section>
  );
};

export default Hero;