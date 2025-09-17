import React from "react";

export default function Home({ user }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-700">
        Welcome {user?.name || "Guest"}!
      </h1>
      <p className="text-gray-600 max-w-xl">
        Logged in as <span className="font-medium">{user?.email}</span>
      </p>
      <p className="mt-4 text-gray-500">
        Use the navigation bar above to upload data, view analysis, check history, or edit your profile.
      </p>
    </div>
  );
}