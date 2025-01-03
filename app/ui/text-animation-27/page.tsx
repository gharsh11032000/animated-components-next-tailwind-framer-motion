"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section() {
  return (
    <div className={`relative overflow-x-hidden dark:bg-gray-950`}>
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
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        <div className="relative container grid place-content-center mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWord
            word="Loading"
            className="text-4xl relative sm:text-4xl md:text-5xl lg:text-6xl text-gray-100"
          />
        </div>
      </motion.section>
    </div>
  );
}

function AnimatedWord({
  word,
  className,
}: {
  word: string;
  className?: string;
}) {
  const [displayedWord, setDisplayedWord] = useState(
    word.split("").map(() => "")
  );
  const [isAnimating, setIsAnimating] = useState(true);
  const [colors, setColors] = useState<string[]>([]);

  const animateWord = useCallback(() => {
    setIsAnimating(true);
    const interval = setInterval(() => {
      setDisplayedWord((prev) =>
        prev.map((char, index) => {
          if (char === word[index]) return char;
          const randomChar = String.fromCharCode(
            33 + Math.floor(Math.random() * 94)
          );
          return randomChar;
        })
      );
      setColors((prev) =>
        prev.map(() => `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`)
      );
    }, 75);

    setTimeout(() => {
      clearInterval(interval);
      setDisplayedWord(word.split(""));
      setColors(word.split("").map(() => "hsl(0, 0%, 100%)"));
      setIsAnimating(false);
    }, 1000);
  }, [word]);

  const resetWord = useCallback(() => {
    setDisplayedWord(word.split("").map(() => ""));
    setColors(word.split("").map(() => "hsl(0, 0%, 100%)"));
    animateWord();
  }, [word, animateWord]);

  useEffect(() => {
    animateWord();
    const resetInterval = setInterval(resetWord, 3000);
    return () => clearInterval(resetInterval);
  }, [animateWord, resetWord]);

  return (
    <div className={`flex items-center ${className}`}>
      {displayedWord.map((char, index) => (
        <span key={index} style={{ color: colors[index] }}>
          {char}
        </span>
      ))}
    </div>
  );
}
