"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollTextWordAnimation2() {
  const words = [
    "Science helps us understand the world. ",
    "It explains how things work. ",
    "From tiny atoms to vast galaxies, ",
    "science reveals the secrets of nature. ",
    "Let's explore and discover together.",
  ];

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
      className="font-mono overflow-hidden relative dark:bg-gray-950 text-gray-100"
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

      <div className="h-screen flex sticky top-0 px-5 max-w-xl mx-auto items-center justify-center">
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
    }, 1000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-col gap-8">
      <p className="max-w-screen-lg md:text-3xl">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.2 }}
            className="inline overflow-hidden"
            animate={{
              opacity: index === currentWordIndex ? 1 : 0.2,
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  );
};
