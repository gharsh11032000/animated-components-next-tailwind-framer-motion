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
    <div className="relative  overflow-x-hidden dark:bg-gray-950">
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
        className="min-h-screen relative overflow-hidden grid place-content-center"
      >
        <motion.div
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
          className="absolute bottom-0 w-96 h-96 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl relative z-10 font-bold text-white">
          Transforming Ideas <br /> Into{" "}
          <AnimatedWords words={words} className="text-green-400" />
        </h1>
      </motion.section>
    </div>
  );
}

export interface AnimatedWordsProps {
  words: string[];
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
