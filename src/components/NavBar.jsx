import React from "react";
import Hero from "./Hero";

export function NavBar() {
  return (
    <div className="bg-[#FFFFFF] items-center flex w-full h-14 px-7 fixed">
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

      <button className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500  px-6 py-3 text-white font-semibold mx-2 hover:from-purple-600
        hover:to-blue-600 focus:outline-none focus-ring focus:ring-purple-300 active:bg-blue-700 shadow-md transition duration-150 ease-in-out transform hover:scale-95">
        Sign Up
      </button>
      <button className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500  px-6 py-3 text-white font-semibold mx-2 hover:from-purple-600
        hover:to-blue-600 focus:outline-none focus-ring focus:ring-purple-300 active:bg-blue-700 shadow-md transition duration-150 ease-in-out transform hover:scale-95">
        Login
      </button>
    </div>
  );
}
