"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Section() {
  const words = [
    "The universe is a vast",
    "and mysterious place",
    "full of wonders",
    "waiting to be discovered.",
  ];

  return (
    <div className={`relative overflow-hidden dark:bg-gray-950`}>
      <section className="min-h-screen flex flex-col justify-center items-center">
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
          className="absolute z-0 -bottom-1/4 w-96 h-96 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <div className="text-2xl md:text-4xl text-gray-100">
          <AnimatedWords words={words} />
        </div>
      </section>
    </div>
  );
}

interface AnimatedWordsProps {
  words: string[];
}

export function AnimatedWords({ words }: AnimatedWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="max-w-screen-lg">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
