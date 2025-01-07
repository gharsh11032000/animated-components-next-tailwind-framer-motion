"use client";

import React, { use, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Section() {
  return (
    <div
      className={`relative overflow-x-hidden dark:bg-gray-950 ${spaceMono.className}`}
    >
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
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      >
        <AnimatedWord
          word="Animate your text like a pro*"
          className="text-4xl relative px-4 text-center sm:text-4xl md:text-5xl lg:text-6xl text-gray-100"
        />
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

  const animateWord = useCallback(() => {
    setIsAnimating(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedWord((prev) =>
        prev.map((char, index) => {
          if (index < currentIndex) return word[index];
          if (index === currentIndex) {
            const randomChar = String.fromCharCode(
              33 + Math.floor(Math.random() * 94)
            );
            return randomChar;
          }
          return prev[index];
        })
      );
      currentIndex++;
      if (currentIndex >= word.length) {
        clearInterval(interval);
        setDisplayedWord(word.split(""));
        setIsAnimating(false);
      }
    }, 75);
  }, [word]);

  useEffect(() => {
    animateWord();
  }, [animateWord]);

  return (
    <div className={`${className} textbl`}>
      {displayedWord.map((char, index) => (
        <span
          style={{
            color: index === word.length - 1 ? "#2563eb" : "#f3f4f6",
          }}
          key={index}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
