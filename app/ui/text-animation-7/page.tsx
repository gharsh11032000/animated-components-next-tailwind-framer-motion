"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Section() {
  const words = ["CEO's", "Creators", "Experts", "Coaches", "Influencers"];

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
        className="min-h-screen grid place-content-center"
      >
        <h1 className="text-4xl md:text-5xl gap-4 lg:gap-6 flex flex-col md:flex-row items-center lg:text-7xl font-bold text-white">
          <span>A cloning tool for</span>
          <div className="lg:h-32 px-4 md:px-6 h-16 md:h-20 rounded-2xl lg:rounded-3xl overflow-hidden border border-blue-400">
            <AnimatedWords words={words} className="text-blue-400 h-full" />
          </div>
        </h1>
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
  const [width, setWidth] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [words]);

  useEffect(() => {
    if (wordRef.current) {
      setWidth(wordRef.current.offsetWidth);
    }
  }, [currentWordIndex, words]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentWordIndex}
          initial={{ width }}
          animate={{ width }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center h-full"
        >
          <motion.span
            ref={wordRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center justify-center h-full"
          >
            {words[currentWordIndex]}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
