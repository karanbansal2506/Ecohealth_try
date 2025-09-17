import React, { useState } from "react";

export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { name: "Home", page: "home" },
    { name: "Upload", page: "upload" },
    { name: "Analysis", page: "analysis" },
    { name: "Profile", page: "profile" },
    { name: "Carbon calculator", page: "carbon Calculator" },
  ];

  return (
    <nav className="  bg-green-600 text-white shadow-md">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            onClick={() => setPage("landing")}
            className="cursor-pointer text-lg sm:text-xl font-bold flex items-center gap-2"
          >
            <div className=" bg-green-600 ">
              <img src="logo.png"
                alt="eco health"
                className="w-10 h-10 rounded-full"
              ></img>
            </div>
            EcoHealth
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setPage(item.page)}
                className="hover:text-yellow-300 transition"
              >
                {item.name}
              </button>
            ))}
            {/* Logout Button */}
            <button
              onClick={() => setPage("landing")}
              className="ml-4 px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-green-700 px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                setPage(item.page);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-green-800 transition"
            >
              {item.name}
            </button>
          ))}

          {/* Mobile Logout */}
          <button
            onClick={() => {
              setPage("landing");
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 bg-red-500 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}