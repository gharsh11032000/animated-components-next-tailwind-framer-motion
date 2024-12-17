"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Section() {
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
        className="min-h-screen w-full gap-8 grid lg:gap-8 group p-4 md:p-8 rounded-2xl relative"
      >
        <div className="flex flex-col overflow-hidden gap-6 bg-gray-900/20 relative rounded-3xl text-center justify-center items-center">
          <div className="absolute -bottom-1/4 lg:scale-150 -translate-x-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -top-1/4 lg:scale-150 -translate-x-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>

          <h1 className="text-6xl md:text-7xl w-full uppercase lg:text-9xl font-bold text-white">
            <AnimatedWords
              words={["Imagine", "Design", "Create"]}
              className=" text-blue-400 w-full"
            />
            <br />
            <span>With Us</span>
          </h1>
          <button className="px-4 mt-2 sm:mt-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-300 justify-center gap-2 lg:text-lg font-semibold text-gray-900 bg-blue-400 rounded-full lg:rounded-full hover:bg-blue-300 focus:outline-none focus:bg-blue-300">
            Get Started Now
          </button>
        </div>
      </motion.section>
    </div>
  );
}

interface AnimatedWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

function AnimatedWords({ words, className }: AnimatedWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const lastUpdateTime = useRef(Date.now());
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      if (now - lastUpdateTime.current >= 2000) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        lastUpdateTime.current = now;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [words]);

  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      x: -20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
    },
    exit: {
      opacity: 0,
      filter: "blur(12px)",
      x: 20,
    },
  };

  return (
    <div
      className={`leading-none inline-flex overflow-hidden relative ${className}`}
    >
      <AnimatePresence mode="popLayout">
        <div key={currentWordIndex} className="w-full">
          {words[currentWordIndex].split("").map((letter, index) => (
            <span key={index} className="inline-block">
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
            </span>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
