"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // For client-side check
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Mark as client-side after mount
  }, []);

  const times = ["5 MINS", "10 MINS", "20 MINS", "30 MINS"];

  if (!isClient) return null; // Ensure that rendering only happens client-side

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <button className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gray-600 text-white">
        Back
      </button>

      <div className="w-full max-w-md p-6 bg-white rounded-t-3xl shadow-lg text-center mt-32">
        <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-900">
          Choose session duration
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {times.map((time) => (
            <button
              key={time}
              className={`px-6 py-3 rounded-lg border text-gray-900 font-medium transition ${
                selectedTime === time ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <button
          className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold z-10"
          onClick={() => router.push("/player")}
        >
          Start
        </button>
      </div>
    </main>
  );
}
