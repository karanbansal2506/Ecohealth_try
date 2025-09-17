import React from "react";

export default function UploadPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Upload Data</h2>

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <input type="file" className="mb-4 w-full p-2 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Upload
        </button>
      </div>
    </div>
  );
}