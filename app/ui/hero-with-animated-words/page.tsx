"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SimpleHero() {
  const words = ["Innovative", "Performant", "Responsive", "User-Centric"];

  return (
    <div className="overflow-x-hidden bg-gray-950 text-white">
      <section className="h-screen w-full group relative flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl mx-auto">
              Crafting Digital <br /> Experiences That Are
              <AnimatedWords words={words} className="w-full text-blue-400" />
            </h1>

            <p className="text-lg sm:text-xl leading-8 text-gray-400 max-w-2xl mx-auto mt-4 sm:mt-8">
              Elevate your online presence with cutting-edge web solutions that
              captivate, engage, and convert.
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-4">
              <button className="px-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-300 justify-center gap-2 text-lg lg:text-xl font-semibold text-gray-900 bg-blue-400 rounded-full hover:bg-blue-300 focus:outline-none focus:bg-blue-500">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
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
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
  
    return () => clearInterval(interval);
  }, [words]);

  const variants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
    exit: { y: "-100%" },
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
            duration: 0.4,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
          className="w-full text-center"
        >
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.4,
                delay: 0.04 * index,
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