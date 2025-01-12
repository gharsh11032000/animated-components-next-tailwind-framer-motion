"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Section() {
  const text = "Build Beautiful Interfaces with Tailwind CSS.";

  const words = text.split(" ");

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className={`overflow-hidden relative dark:bg-gray-950 text-gray-100 ${space_mono.className}`}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.8, 1],
          scale: [1.8, 2],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          left: "calc(50% - 12rem)",
        }}
        className="absolute z-0 -bottom-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur-[8rem] opacity-100"
      ></motion.div>

      <div className="h-screen flex sticky top-0 px-5 max-w-5xl mx-auto items-center justify-center">
        <AnimatedSection words={words} />
      </div>
    </motion.div>
  );
}

const AnimatedSection = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-col gap-8">
      <p className="max-w-sm lg:max-w-screen-lg text-4xl lg:text-8xl">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.2, fontWeight: "400" }}
            className="inline overflow-hidden"
            animate={{
              opacity: index === currentWordIndex ? 1 : 0.2,
              fontWeight: index === currentWordIndex ? "700" : "400",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </p>
    </div>
  );
};
