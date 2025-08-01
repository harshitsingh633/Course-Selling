// MainPage.js
import React from "react";
import { NavBar } from "./NavBar";
import SideBar from "./SideBar";
import Hero from "./ImageSlider";

function Home() {
  return (
    <div className="pt-1"> {/* padding-top to offset fixed NavBar height */}
      <NavBar />
      <div className="flex">
        <div className="w-[18%] h-screen bg-orange-200">
          <SideBar />
        </div>
        <div className="flex-grow p-5">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default Home;
