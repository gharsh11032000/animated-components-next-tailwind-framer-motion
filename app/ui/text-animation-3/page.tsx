"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        className="min-h-screen w-full gap-8 lg:gap-12 group p-4 md:p-8 rounded-2xl flex flex-col relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 pb-0 md:pb-0">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white">
            Building
            <AnimatedWords
              words={["Partnerships", "Experiences", "Relationships"]}
              className="w-full text-blue-400"
            />
          </h1>
          <div className="flex flex-col gap-4 items-start">
            <p className="text-lg lg:text-xl !leading-normal text-gray-400 max-w-2xl">
              We are a team of passionate individuals who are dedicated to
              crafting digital solutions that are innovative, performant,
              responsive, and user-centric.
            </p>
            <button className="px-4 mt-2 sm:mt-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-300 justify-center gap-2 lg:text-lg font-semibold text-gray-900 bg-blue-400 rounded-xl lg:rounded-2xl hover:bg-blue-300 focus:outline-none focus:bg-blue-300">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1 relative bg-gray-800 overflow-hidden rounded-3xl w-full h-full"></div>
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
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  return (
    <div
      className={`leading-none inline-flex relative overflow-hidden ${className}`}
    >
      <AnimatePresence mode="popLayout">
        <div key={currentWordIndex} className="w-full">
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
        </div>
      </AnimatePresence>
    </div>
  );
}
