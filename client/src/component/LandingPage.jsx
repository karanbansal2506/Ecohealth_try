import React from "react";

export default function LandingPage({ onGetStarted, onSignIn }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
      <h1 className="text-4xl font-bold mb-4">EcoHealth Tracker</h1>
      <p className="mb-6 text-gray-600 max-w-md text-center">
        Upload meal photos, get instant nutrition insights, and track your
        environmental impact.
      </p>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-[#13343b] text-white rounded-lg shadow hover:bg-[#13343b]"
          onClick={onGetStarted}
        >
          Get Started
        </button>
        <button
          className="px-6 py-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100"
          onClick={onSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}