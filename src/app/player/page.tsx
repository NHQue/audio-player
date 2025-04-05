"use client";

export default function Player() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Now Playing</h1>

      <audio controls className="w-full max-w-md">
        <source
          src="https://dl.dropboxusercontent.com/scl/fi/8p7iv3v1homrfiohi8vhg/Tag43.mp3?rlkey=wh9j0m9htw8zfcsq9bn82v1sx&dl=0"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
}
