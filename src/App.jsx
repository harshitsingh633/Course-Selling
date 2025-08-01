// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        {/* Define login, signup, etc. if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
