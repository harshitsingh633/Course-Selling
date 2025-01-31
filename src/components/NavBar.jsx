import React from "react";

export function NavBar() {
  return (
    <div className="bg-slate-300 flex justify-evenly">
      <div><img src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="100xDevs" className="h-10"/></div>
      <div>
        <input type="text" title="Search"/>
      </div>
      <div>
        <button className="rounded bg-blue-400 p-3 m-1 ">SignUp</button>
      </div>
      <div>
        <button className="rounded bg-blue-400 p-3 m-1">Login</button>
      </div>
    </div>
  )
}
