import React from "react";

export function NavBar() {
  return (
    <div className="bg-[#FFFFFF] flex ">
      <div><img src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="100xDevs" className="h-10"/></div>
      <div className="p-3 m-1 border-black pl-[1000px] ">
        <input type="text" title="Search" className="bg-blue-300 border-b-2 to-black"/>
      </div>
      <div>
        <button className="rounded  bg-blue-400 p-3 m-1 ml-24">SignUp</button>
      </div>
      <div>
        <button className="rounded bg-blue-400 p-3 m-1 ml-10">Login</button>
      </div>
    </div>
  )
}
