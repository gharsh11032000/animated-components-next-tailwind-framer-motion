"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TextAnimatedSection() {
  const words = ["Brands", "Experiences", "Relationships"];

  return (
    <div className="relative overflow-x-hidden dark:bg-gray-900">
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
        className="min-h-screen w-full gap-8 lg:gap-12 group p-4 md:p-8 rounded-2xl flex flex-col relative dark:from-gray-900 dark:to-gray-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 pb-0 md:pb-0">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white">
            Building
            <AnimatedWords words={words} className="w-full text-blue-400" />
          </h1>
          <div className="flex flex-col gap-4 items-start">
            <p className="text-lg lg:text-xl !leading-normal text-gray-400 max-w-2xl">
              We are a creative agency that focuses on building strong brands,
              creating memorable experiences, and fostering lasting
              relationships. Let&apos;s work together to build your brand. Get
              in touch with us today.
            </p>
            <button className="px-4 mt-2 sm:mt-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-300 justify-center gap-2 lg:text-lg font-semibold text-gray-900 bg-blue-400 rounded-xl lg:rounded-2xl hover:bg-blue-300 focus:outline-none focus:bg-blue-300">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1 relative bg-gray-800 overflow-hidden rounded-3xl w-full h-full mt-4 md:mt-0"></div>
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

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const stopAnimation = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  const startAnimation = useCallback(() => {
    intervalId.current = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
  }, [words.length]);

  useEffect(() => {
    startAnimation();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAnimation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [words, startAnimation]);

  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  return (
    <div
      className={`leading-none inline-flex relative overflow-hidden ${className}`}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentWordIndex}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.25,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
          className="w-full"
        >
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.25,
                delay: 0.05 * index,
                type: "spring",
                damping: 12,
                stiffness: 100,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
