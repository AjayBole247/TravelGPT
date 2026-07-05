import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const { placeName } = await req.json();
  const apiKey = process.env.GOOGLE_PLACE_API_KEY;

  if (!apiKey) {
    console.error("Missing GOOGLE_PLACE_API_KEY environment variable")
    return NextResponse.json({ photoUrl: null, error: "Missing GOOGLE_PLACE_API_KEY" });
  }

  const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

  try {
    // Provide API key as query param (safer compatibility across Google endpoints)
    const url = `${BASE_URL}?key=${encodeURIComponent(apiKey)}&readMask=places.id,places.photos,places.display_name`;

    const result = await axios.post(url, { textQuery: placeName }, { headers: { 'Content-Type': 'application/json' } });

    const photoName = result?.data?.places?.[0]?.photos?.[0]?.name;

    if (!photoName) {
      // No photo available for this place
      return NextResponse.json({ photoUrl: null });
    }

    const photoUrl = `https://places.googleapis.com/v1/${encodeURIComponent(photoName)}/media?maxHeightPx=1000&maxWidthPx=1000&key=${encodeURIComponent(apiKey)}`;
    return NextResponse.json({ photoUrl });
  } catch (err: any) {
    // Surface useful details to logs to aid debugging (don't leak secrets to client)
    const status = err?.response?.status;
    const data = err?.response?.data;
    console.error("Google Places API error", { status, data, placeName });
    const message = data?.error?.message ?? err?.message ?? "Google Places request failed";
    return NextResponse.json({ photoUrl: null, error: message });
  }
}