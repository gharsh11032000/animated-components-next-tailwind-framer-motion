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
        className="min-h-screen w-full grid place-content-center text-center"
      >
        <h1 className="text-4xl md:text-6xl !leading-tight text-white">
          A Modern Design <br /> Solution for{" "}
          <AnimatedWords
            words={[
              "Businesses",
              "Startups",
              "Enterprises",
              "SMEs",
              "Agencies",
            ]}
            className="text-blue-400 border-dashed font-bold px-2 md:px-4 py-2 border-2 border-gray-700"
          />
        </h1>
      </motion.section>
    </div>
  );
}

interface AnimatedWordsProps {
  words: string[];
  className?: string;
}

function AnimatedWords({ words, className }: AnimatedWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting && currentCharIndex < currentWord.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else if (isDeleting && currentCharIndex > 0) {
        setCurrentCharIndex((prev) => prev - 1);
      } else if (!isDeleting && currentCharIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const delay = isDeleting ? 50 : 150;
    const timeout = setTimeout(handleTyping, delay);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, words, currentWordIndex]);

  const currentText = words[currentWordIndex].slice(0, currentCharIndex);

  return (
    <div className={`inline-flex items-center relative ${className}`}>
      <span className="absolute -top-1.5 -left-1.5 dark:bg-gray-950 text-gray-700 w-3 h-3 border border-gray-700 rounded-full" />
      <span className="absolute -top-1.5 -right-1.5 dark:bg-gray-950 text-gray-700 w-3 h-3 border border-gray-700 rounded-full" />
      <span className="absolute -bottom-1.5 -left-1.5 dark:bg-gray-950 text-gray-700 w-3 h-3 border border-gray-700 rounded-full" />
      <span className="absolute -bottom-1.5 -right-1.5 dark:bg-gray-950 text-gray-700 w-3 h-3 border border-gray-700 rounded-full" />
      <span>
        {currentText}
        <span className="opacity-0 invisible pointer-events-none">1</span>
      </span>
      <motion.span
        className="inline-block bg-blue-400 h-10 md:h-14 w-0.5 md:w-1 -ml-2 md:-ml-5"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </div>
  );
}
