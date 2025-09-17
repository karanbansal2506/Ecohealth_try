import React from "react";

export default function LandingPage({ onGetStarted, onSignIn }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-200 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-green-700">
        EcoHealth Tracker
      </h1>
      <p className="text-gray-700 max-w-lg mb-8 text-sm sm:text-base">
        Track your health, analyze data, and make eco-friendly lifestyle
        choices. Accessible anytime, anywhere.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onGetStarted}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Get Started
        </button>
        <button
          onClick={onSignIn}
          className="px-6 py-3 bg-white border border-green-600 text-green-700 rounded-lg shadow hover:bg-green-50 transition"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}