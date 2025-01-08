"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Section() {
  const words = [
    "Startups",
    "SMEs",
    "Enterprises",
    "Agencies",
    "Freelancers",
    "Developers",
    "Designers",
    "Marketers",
    "Consultants",
    "Innovators",
  ];

  return (
    <div className="relative font-sans overflow-x-hidden dark:bg-gray-950">
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
        className="min-h-screen w-full relative overflow-hidden flex items-end"
      >
        <div
          style={{
            fontSize: "clamp(2rem, 12vw, 28rem)",
          }}
          className="font-black w-full uppercase leading-none relative z-50 text-gray-100"
        >
          <AnimatedsWord words={words} />
        </div>
      </motion.section>
    </div>
  );
}

interface AnimatedsWordProps {
  words: string[];
  className?: string;
}

function AnimatedsWord({ words, className }: AnimatedsWordProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (words.length > 0) {
      const startTimer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentWordIndex((prevIndex) => {
            if (prevIndex < words.length - 1) {
              return prevIndex + 1;
            } else {
              clearInterval(interval);
              return prevIndex;
            }
          });
        }, 250);

        return () => clearInterval(interval);
      }, 1500);

      return () => clearTimeout(startTimer);
    }
  }, [words]);

  return (
    <>
      <motion.span
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.25,
          delay: 0.5,
        }}
      >
        WE
      </motion.span>{" "}
      <br />{" "}
      <motion.span
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.25,
          delay: 1,
        }}
      >
        SERVE
      </motion.span>{" "}
      <br />
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.25,
          delay: 1.5,
        }}
        className={`inline-flex text-blue-400 ${className}`}
      >
        <div key={currentWordIndex} className="inline-block">
          {words[currentWordIndex]}
        </div>
      </motion.div>
      <motion.span
        animate={{
          opacity: [0, 1],
        }}
        className="inline-block text-blue-400"
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: words.length * 0.25 + 1.75,
        }}
      >
        *
      </motion.span>
    </>
  );
}
