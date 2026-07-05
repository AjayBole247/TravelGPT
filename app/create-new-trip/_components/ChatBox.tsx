"use client"

import { Loader, Send } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import EmptyBoxState from "./EmptyBoxState"
import GroupSizeUi from "./GroupSizeUi"
import BudgetUi from "./BudgetUi"
import TripDurationUi from "./TripDurationUi"
import FinalTripUi from "./FinalTripUi"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { useTripDetail, useUserDetail } from "@/app/provider"
import { v4 as uuidv4 } from "uuid"

type Message = {
  role: "user" | "assistant"
  content: string
  ui?: string
}

export type TripInfo = {
  budget: string
  destination: string
  duration: string
  group_size: string
  hotels: Hotel[]
  itinerary: Itinerary[]
  origin: string
}

export type Hotel = {
  hotel_name: string
  hotel_address: string
  price_per_night: string
  rating: number
  description: string
  hotel_image_url: string
  geo_coordinates: {
    latitude: number
    longitude: number
  }
}

export type Activity = {
  place_image_url: string
  place_address: string
  ticket_pricing: string
  place_name: string
  place_details: string
  best_time_to_visit: string
  geo_coordinates: {
    latitude: number
    longitude: number
  }
  time_travel_each_location: string
}

type Itinerary = {
  day: number
  activities: Activity[]
  day_plan: string
  best_time_to_visit_day?: string
}

export type { Itinerary }

function ChatBox({
  onTripGenerated,
}: {
  onTripGenerated?: (trip: TripInfo) => void
}) {
  const [messages, setMessages] = useState<Message[]>([])
  const [userInput, setUserInput] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [isFinal, setIsFinal] = useState(false)
  const [tripDetail, setTripDetail] = useState<TripInfo>()
  const [finalRequestTriggered, setFinalRequestTriggered] =
    useState(false)

  const finalRequestTriggeredRef = useRef(false)

  const tripContext = useTripDetail()

  const setTripDetailInfo =
    tripContext?.setTripDetailInfo

  // Save trip to Convex database
  const SaveTripDetail = useMutation(
    api.tripDetail.CreateTripDetail
  )

  const { userDetail } = useUserDetail()

  const onSend = async (
    inputValue?: string,
    forceFinal?: boolean
  ) => {
    const content = (inputValue ?? userInput).trim()

    if (!content) return

    setUserInput("")

    const newMessage: Message = {
      role: "user",
      content,
    }

    const history = [...messages, newMessage]

    setMessages(history)
    setLoading(true)

    try {
      const shouldUseFinal =
        typeof forceFinal === "boolean"
          ? forceFinal
          : isFinal

      const result = await axios.post("/api/aimodel", {
        messages: history,
        isFinal: shouldUseFinal,
      })

      console.log("AI Response:", result.data)

      const assistantText = String(
        result?.data?.resp ??
          "Sorry, I could not generate a response."
      )

      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: "assistant",
          content: assistantText,
          ui: result?.data?.ui ?? "",
        },
      ])

      // Final trip generated
      if (shouldUseFinal) {
        const plan = result?.data?.trip_plan

        // Make sure AI returned the trip
        if (!plan) {
          console.error(
            "No trip plan received from AI"
          )
          return
        }

        // Make sure Convex user is available
        if (!userDetail?._id) {
          console.error(
            "User detail is not available"
          )
          return
        }

        // Store trip in global context
        setTripDetailInfo?.(plan)

        // Store trip locally
        setTripDetail(plan)

        // Send trip to parent component
        onTripGenerated?.(plan)

        // Generate unique trip ID
        const tripId = uuidv4()

        // Save trip in Convex database
        try {
          const savedTrip = await SaveTripDetail({
            tripId,
            uid: userDetail._id,
            tripDetail: plan,
          })

          console.log(
            "Trip detail saved:",
            savedTrip
          )
        } catch (saveError) {
          console.error(
            "Failed to save trip detail:",
            saveError
          )
        }
      }
    } catch (error) {
      console.error("AI Error:", error)

      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: "assistant",
          content:
            "There was a problem connecting to the AI service. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const RenderGenerativeUI = (ui: string) => {
    const normalizedUi = ui
      ?.trim()
      .toLowerCase()
      .replace(/\s+/g, "")

    if (normalizedUi === "budget") {
      return (
        <BudgetUi
          onSelectOption={(value: string) => {
            setUserInput(value)
            onSend(value)
          }}
        />
      )
    } else if (normalizedUi === "groupsize") {
      return (
        <GroupSizeUi
          onSelectOption={(value: string) => {
            setUserInput(value)
            onSend(value)
          }}
        />
      )
    } else if (
      normalizedUi === "tripduration"
    ) {
      return (
        <TripDurationUi
          onSelectOption={(value: string) => {
            setUserInput(value)
            onSend(value)
          }}
        />
      )
    } else if (normalizedUi === "final") {
      return (
        <FinalTripUi
          viewTrip={() => console.log()}
          tripDetail={tripDetail}
          disable={!tripDetail}
        />
      )
    } else {
      return null
    }
  }

  useEffect(() => {
    const lastMsg =
      messages[messages.length - 1]

    if (
      lastMsg?.ui === "final" &&
      !finalRequestTriggeredRef.current
    ) {
      finalRequestTriggeredRef.current = true

      setFinalRequestTriggered(true)
      setIsFinal(true)

      setUserInput(
        "Ok,Great! I am ready to generate the final trip plan."
      )

      onSend(undefined, true)
    }
  }, [messages])

  return (
    <div className="flex flex-col h-[80vh]">
      {messages.length === 0 && (
        <EmptyBoxState
          onSelectOption={(value: string) =>
            onSend(value)
          }
        />
      )}

      {/* Display messages */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map(
          (msg: Message, index) => {
            const isLastMessage =
              index === messages.length - 1

            return msg.role === "user" ? (
              <div
                key={index}
                className="flex justify-end mt-2"
              >
                <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                  {msg.content}
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex justify-start mt-2"
              >
                <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                  {msg.content}

                  {isLastMessage &&
                    !loading &&
                    RenderGenerativeUI(
                      msg.ui ?? ""
                    )}
                </div>
              </div>
            )
          }
        )}

        {loading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
              <Loader className="animate-spin" />
            </div>
          </div>
        )}
      </section>

      {/* Input area */}
      <section>
        <div className="mt-10 w-full max-w-3xl bg-white border rounded-2xl shadow-lg p-4">
          <textarea
            rows={1}
            placeholder="Start Typing Here..."
            className="w-full resize-none outline-none text-gray-700 placeholder:text-gray-400"
            onChange={(event) =>
              setUserInput(event.target.value)
            }
            value={userInput}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                !event.shiftKey
              ) {
                event.preventDefault()
                onSend()
              }
            }}
          />

          <div className="flex justify-end mt-3">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition disabled:opacity-50"
              onClick={() => onSend()}
              disabled={loading}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatBox