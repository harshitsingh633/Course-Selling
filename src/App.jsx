import { NavBar } from "./components/NavBar";
import React from "react";
import SideBar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <Routes>
    <div className="w-full h-screen bg-[#FFFFFF]">
      <NavBar />
      <SideBar />
    </div>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
