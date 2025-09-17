import React from "react";

export default function UploadPage({ onBack }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgba(38,40,40,1)]">
      <h2 className="text-2xl font-bold mb-4">Upload Page</h2>

      <input
        type="file"
        className="mb-4 p-2 border rounded"
        accept="image/*" 
        capture="camera"
      />

      <button className="px-4 py-2 bg-green-500 text-white rounded">
        Upload
      </button>

    </div>
  );
}