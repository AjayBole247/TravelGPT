// app/api/google-place-detail/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { placeName } = await req.json();
    const apiKey = process.env.GOOGLE_PLACE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { photoUrl: null, error: "Missing GOOGLE_PLACE_API_KEY" },
        { status: 500 }
      );
    }

    const result = await axios.post(
      "https://places.googleapis.com/v1/places:searchText",
      { textQuery: placeName },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.photos,places.displayName",
        },
      }
    );

    const photoName = result?.data?.places?.[0]?.photos?.[0]?.name;

    if (!photoName) {
      return NextResponse.json({ photoUrl: null });
    }

    const photoUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=1000&maxWidthPx=1000&key=${apiKey}`;
    return NextResponse.json({ photoUrl });
  } catch (error) {
    console.error("Google place detail error:", error);
    return NextResponse.json(
      { photoUrl: null, error: "Google Places request failed" },
      { status: 500 }
    );
  }
}