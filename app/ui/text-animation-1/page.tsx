"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Section() {
  const words = [
    "Profit",
    "Growth",
    "Value",
    "Revenue",
    "Opportunity",
    "Advantage",
  ];

  return (
    <div className="relative overflow-x-hidden dark:bg-gray-950">
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
        className="min-h-screen relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
            Transforming Ideas <br /> Into{" "}
            <AnimatedWords words={words} className="text-blue-400" />
          </h1>

          <div className="relative bg-gray-800 overflow-hidden rounded-3xl w-full h-[35rem] lg:h-[40rem] mt-8 md:mt-12"></div>
        </div>
      </motion.section>
    </div>
  );
}

export interface AnimatedWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

function AnimatedWords({ words, className }: AnimatedWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [words]);

  return (
    <div className={`inline-flex ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentWordIndex}
          initial={{ x: 20, opacity: 0, filter: "blur(12px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ x: -20, opacity: 0, filter: "blur(12px)" }}
          transition={{
            duration: 0.5,
          }}
          className="text-center w-full"
        >
          {words[currentWordIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
