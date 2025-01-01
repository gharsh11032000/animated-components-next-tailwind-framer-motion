"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section() {
  return (
    <div className="relative overflow-x-hidden dark:bg-gray-950">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        <FadeWaveText
          text="Store Open 24/7"
          className="text-4xl relative rounded-3xl sm:text-4xl font-bold uppercase bg-gray-950 border-4 w-min mx-auto px-8 py-8 md:px-12 md:py-12 md:text-5xl lg:text-6xl text-gray-100 border-gray-100"
        />
      </motion.section>
    </div>
  );
}

function FadeWaveText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLength = text.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
    }, 100);

    return () => clearInterval(interval);
  }, [totalLength]);

  const getOpacity = (index: number) => {
    const distance = Math.abs(currentIndex - index);
    if (distance === 0) return 1;
    if (distance === 1) return 0.7;
    if (distance === 2) return 0.4;
    return 0.2;
  };

  const getTextShadow = (index: number) => {
    const distance = Math.abs(currentIndex - index);
    if (distance === 0) return "0 0 10px rgba(255, 255, 255, 1)";
    if (distance === 1) return "0 0 8px rgba(255, 255, 255, 0.7)";
    if (distance === 2) return "0 0 5px rgba(255, 255, 255, 0.4)";
    return "none";
  };

  return (
    <div
      style={{
        boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
      }}
      className={`flex flex-col items-center justify-center ${className}`}
    >
      <div>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              opacity: getOpacity(index),
              transition: "all 0.25s ease-out",
              textShadow: getTextShadow(index),
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
