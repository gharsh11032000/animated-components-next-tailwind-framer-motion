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
        <div className="flex flex-col gap-6 p-2 md:p-8 pb-0 md:pb-0">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white">
            Elevating
            <AnimatedWords
              words={["Brands", "Strategies", "Success"]}
              className="w-full text-blue-400"
            />
          </h1>
          <div className="flex flex-col gap-4 items-start">
            <p className="text-lg lg:text-xl !leading-normal text-gray-400 max-w-2xl">
              We are a team of creative marketers and strategists committed to
              helping businesses grow by crafting impactful campaigns, building
              strong brand identities, and driving measurable results.
            </p>
            <button className="px-4 mt-2 sm:mt-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-300 justify-center gap-2 lg:text-lg font-semibold text-gray-900 bg-blue-400 rounded-xl lg:rounded-2xl hover:bg-blue-300 focus:outline-none focus:bg-blue-300">
              Contact Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          <div className="bg-gray-800 rounded-3xl w-full h-[24rem] lg:h-[32rem]"></div>
          <div className="bg-gray-800 rounded-3xl w-full h-[24rem] lg:h-[32rem]"></div>
          <div className="bg-gray-800 rounded-3xl w-full h-[24rem] lg:h-[32rem]"></div>
          <div className="bg-gray-800 rounded-3xl w-full h-[24rem] lg:h-[32rem]"></div>
          <div className="bg-gray-800 rounded-3xl w-full h-[24rem] lg:h-[32rem]"></div>
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
      rotateX: 90,
      transformOrigin: "top",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      transformOrigin: "top",
    },
    exit: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "bottom",
    },
  };

  return (
    <div className={`leading-none inline-flex relative ${className}`}>
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
