import React from "react";

export default function Navbar({ currentPage, onNavigate, onLogout }) {
  return (
    <nav className="bg-[#111111] shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-green-600">EcoHealth</h1>

      <div className="flex gap-6">
        <button
          onClick={() => onNavigate("dashboard")}
          className={`${
            currentPage === "dashboard" ? "text-green-600 font-semibold" : "text-gray-600"
          } hover:text-green-600`}
        >
          Dashboard
        </button>
        <button
          onClick={() => onNavigate("upload")}
          className={`${
            currentPage === "upload" ? "text-green-600 font-semibold" : "text-gray-600"
          } hover:text-green-600`}
        >
          Upload
        </button>
        <button
          onClick={() => onNavigate("analysis")}
          className={`${
            currentPage === "analysis" ? "text-green-600 font-semibold" : "text-gray-600"
          } hover:text-green-600`}
        >
          Analysis
        </button>
        <button
          onClick={() => onNavigate("history")}
          className={`${
            currentPage === "history" ? "text-green-600 font-semibold" : "text-gray-600"
          } hover:text-green-600`}
        >
          History
        </button>
        <button
          onClick={() => onNavigate("profile")}
          className={`${
            currentPage === "profile" ? "text-green-600 font-semibold" : "text-gray-600"
          } hover:text-green-600`}
        >
          Profile
        </button>
      </div>

      <button
        onClick={onLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}