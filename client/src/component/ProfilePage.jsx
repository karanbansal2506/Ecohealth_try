import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4">
      <h2 className="text-2xl font-bold mb-4 text-pink-700">Profile</h2>
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <p className="text-gray-700 mb-2">Name: John Doe</p>
        <p className="text-gray-700 mb-2">Email: john@example.com</p>
        
      </div>
    </div>
  );
}