import React from "react";

export function NavBar() {
  return (
    <div className="bg-[#FFFFFF] flex w-full h-14 ">
      <div className="flex ml-7 pt-2"><img src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="100xDevs" className="h-10"/></div>
      <div className="p-3 m-1 border-solid pl-[1000px] ">
        <input type="text" title="Search" placeholder="Type here to search.." className="bg-transparent outline-2 outline-gray-700 flex-1 px-2 text-gray-700 placeholder-gray-400 " />
      </div>
      <div className="pt-2">
        <button className="rounded-lg  bg-blue-400 p-2 m-1 ml-22 text-slate-50 font-semibold">SignUp</button>
      </div>
      <div className="pt-2">
        <button className="rounded-lg bg-blue-400 p-2 m-1 ml-10 text-slate-50 font-semibold">Login</button>
      </div>
      </div>
  )
}
