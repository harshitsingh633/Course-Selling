import { NavBar } from "./components/NavBar";
import React from "react";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="w-full h-screen bg-[#FFFFFF]">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
