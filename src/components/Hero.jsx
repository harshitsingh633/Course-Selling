import React from "react";
import { motion } from "motion/react";
function Hero() {
  return (
    <div className="w-full h-full flex ">
      <div className="w-full h-full">
        <img
          src="https://appxcontent.kaxa.in/subject/2024-07-07-0.9522250790418232.png"
          alt=""
          className="w-[80%] pt-10 pl-5"
        />
        <img
          src="https://appxcontent.kaxa.in/subject/2024-07-05-0.8025085370209641.jpeg"
          alt=""
          className="w-[80%] pt-10 pl-5"
        />
        <img
          src="https://appxcontent.kaxa.in/subject/2024-07-05-0.3715048534115637.jpeg"
          alt=""
          className="w-[80%] pt-10 pl-5"
        />
      </div>
    </div>
  );
}

export default Hero;
