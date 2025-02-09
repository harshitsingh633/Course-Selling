import React from "react";
import Hero from "./Hero";

function SideBar() {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-[18%] bg-orange-200 flex text-gray-600 ">
        <div>
          <p className="flex pl-7 pt-10 text-sm">MAIN MENU</p>
          <button className="pl-7 pt-6 text-lg">Home</button>
          <br />
          <button className="pl-7 pt-6 text-lg">Courses</button>
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default SideBar;
