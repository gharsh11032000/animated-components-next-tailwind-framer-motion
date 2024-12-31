"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Section() {
  return (
    <div
      className={`relative overflow-x-hidden dark:bg-gray-950 ${unbounded.className}`}
    >
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        <div className="relative container grid place-content-center mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWord
            word="Lightning Fast"
            className="text-4xl relative sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl text-gray-100"
          />
        </div>
      </motion.section>
    </div>
  );
}

function AnimatedWord({
  word,
  className,
}: {
  word: string;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLength = word.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
    }, 100);

    return () => clearInterval(interval);
  }, [totalLength]);

  const getFontWeight = (index: number) => {
    const distance = Math.abs(currentIndex - index);
    if (distance === 0) return 700;
    if (distance === 1) return 500;
    if (distance === 2) return 300;
    return 200;
  };

  const getTextShadow = (index: number) => {
    const distance = Math.abs(currentIndex - index);
    if (distance === 0) return "0 0 10px rgba(255, 255, 255, 0.8)";
    if (distance === 1) return "0 0 8px rgba(255, 255, 255, 0.5)";
    if (distance === 2) return "0 0 5px rgba(255, 255, 255, 0.2)";
    return "none";
  };

  const getColor = (index: number) => {
    const distance = Math.abs(currentIndex - index);
    if (distance === 0) return "#ffffff";
    if (distance === 1) return "#cccccc";
    if (distance === 2) return "#999999";
    return "#666666";
  };

  return (
    <div className={`flex items-center ${className}`}>
      {word.split("").map((char, index) => (
        <span
          key={index}
          style={{
            fontWeight: getFontWeight(index),
            textShadow: getTextShadow(index),
            color: getColor(index),
            transition: "all 0.2s",
          }}
        >
          {char}
          {char === " " ? <>&nbsp;</> : null}
        </span>
      ))}
    </div>
  );
}
