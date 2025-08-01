import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SideBar from "./SideBar";

const images = [
  "https://appxcontent.kaxa.in/subject/2024-07-07-0.9522250790418232.png",
  "https://appxcontent.kaxa.in/subject/2024-07-05-0.8025085370209641.jpeg",
  "https://appxcontent.kaxa.in/subject/2024-07-05-0.3715048534115637.jpeg"
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Added dependency array

  return (
    <div className="w-full h-full">
    <div className="relative w-full max-w-3xl mx-auto rounded-lg shadow-lg top-20">
      <motion.img
        key={index}
        src={images[index]} // Use the dynamic index
        alt="slider"
        className="w-full h-full rounded-lg object-cover cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      />
    </div></div>
  );
};

export default ImageSlider; 
