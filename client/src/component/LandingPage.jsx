import React from "react";
import "./Landing.css";

export default function LandingPage({ onGetStarted, onSignIn }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-animated">
        <div className="w-40 h-40 flex items-center justify-center mb-4 animate-fadeInUp">
          <img
            src="logo.png"
            alt="eco health"
            className="w-40 h-auto rounded-full transition-transform duration-500 hover:scale-110 hover:rotate-3"
          />
        </div>

        <h1 className="text-4xl text-green-700 font-bold mb-4 drop-shadow-md transition-all duration-700 hover:scale-105">
          EcoHealth
        </h1>

        <p className="mb-6 text-gray-700 max-w-md text-center text-lg transition-opacity duration-700 hover:opacity-90">
          “Your personalized health companion — optimizing wellness while reducing carbon footprints.”
        </p>

        <div className="flex gap-4">
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md
                      transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-105"
            onClick={onGetStarted}
          >
            Get Started
          </button>
          <button
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-md
                      transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
            onClick={onSignIn}
          >
            Login
          </button>
        </div>
    </div>
  );
}