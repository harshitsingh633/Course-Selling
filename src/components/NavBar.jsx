import React from "react";

export function NavBar() {
  return (
    <div className="bg-[#FFFFFF] items-center flex w-full h-14 px-7">
      <img
        src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
        alt="100xDevs"
        className="h-10"
      />

      <div className="flex-grow mx-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-gray-100 rounded-full py-2 px-4 pr-10 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="absolute right-3 top-2 text-gray-500">🔍</button>
        </div>
      </div>

      <button className="rounded-lg bg-blue-500 px-4 py-2 text-white font-semibold mx-2 hover:bg-blue-600">
        Sign Up
      </button>
      <button className="rounded-lg bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-600">
        Login
      </button>
    </div>
  );
}
