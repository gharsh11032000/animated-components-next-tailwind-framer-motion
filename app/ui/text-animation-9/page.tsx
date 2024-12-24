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
  className?: string;
}

function AnimatedWords({ words, className }: AnimatedWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);
  const lastUpdateTime = useRef(Date.now());
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      if (now - lastUpdateTime.current >= 3000) {
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

  useEffect(() => {
    if (wordRef.current) {
      setWidth(wordRef.current.offsetWidth);
    }
  }, [currentWordIndex, words]);

  const colors = ["bg-blue-400", "bg-green-400", "bg-pink-400"];

  return (
    <div
      className={`inline-flex relative ${className}`}
      style={{ perspective: "1000px" }}
    >
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
              filter: "blur(12px)",
              opacity: 0,
              rotateX: 90,
              skewX: -45,
              scale: 0.8,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              rotateX: 0,
              skewX: 0,
              scale: 1,
            }}
            exit={{
              filter: "blur(12px)",
              opacity: 0,
              rotateX: -90,
              skewX: 45,
              scale: 0.8,
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
            className={`inline-flex items-center justify-center h-full py-2 md:py-4 px-4 md:px-8 rounded-xl md:rounded-3xl ${
              colors[currentWordIndex % colors.length]
            }`}
          >
            {words[currentWordIndex]}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
