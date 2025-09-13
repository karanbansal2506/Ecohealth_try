import React from "react";

export default function LoginPage({ onBack, onSwitch, onSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // stop refresh
    onSuccess(); // navigate to dashboard
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">
        <input type="email" placeholder="Email" className="p-2 border rounded" required />
        <input type="password" placeholder="Password" className="p-2 border rounded" required />
        <button type="submit" className="bg-[#13343b] text-white py-2 rounded">
          Login
        </button>
      </form>

      <button onClick={onSwitch} className="mt-4 text-blue-950 underline">
        Don’t have an account? Sign Up
      </button>

      <button onClick={onBack} className="mt-2 px-4 py-2 bg-gray-200 rounded">
        Back
      </button>
    </div>
  );
}