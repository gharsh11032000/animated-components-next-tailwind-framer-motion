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
        className="min-h-screen w-full grid place-content-center"
      >
        <h1 className="text-4xl md:text-6xl leading-snug font-bold w-full lg:text-8xl  text-white">
          Grow Your{" "}
          <AnimatedWords
            words={["Sales", "Business", "Revenue"]}
            className=" text-gray-100 leading-snug "
          />
        </h1>
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
    <div className={`inline-flex  relative ${className}`}>
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
            initial={{
              filter: "blur(30px)",
              opacity: 0,
              rotateX: 90,
              skewX: -45,
            }}
            animate={{ filter: "blur(0px)", opacity: 1, rotateX: 0, skewX: 0 }}
            exit={{
              filter: "blur(30px)",
              opacity: 0,
              rotateX: -90,
              skewX: 45,

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 12,
                stiffness: 100,
              },
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 12,
              stiffness: 100,
            }}
            className="inline-flex items-center justify-center h-full py-2 md:py-4 px-4 md:px-8 bg-blue-400 rounded-xl md:rounded-3xl"
          >
            {words[currentWordIndex]}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
