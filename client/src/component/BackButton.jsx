import React from "react";

export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
    >
      ⬅ Back
    </button>
  );
}