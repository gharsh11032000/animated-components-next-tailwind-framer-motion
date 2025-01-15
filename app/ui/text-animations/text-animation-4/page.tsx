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
        className="min-h-screen w-full gap-8 lg:gap-12 group p-4 md:p-8 rounded-2xl flex flex-col items-center justify-center overflow-hidden relative"
      >
        <motion.div
          animate={{
            opacity: [0.8, 1],
            scale: [1.8, 2],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: "calc(0% - 12rem)",
            top: "calc(50% - 12rem)",
          }}
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-400 to-violet-800 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <h1
          className="text-4xl md:text-5xl max-w-screen-md relative z-10
         lg:text-8xl font-bold text-white"
        >
          <AnimatedWords
            words={["Elevate", "Innovate", "Accelerate"]}
            className="w-full text-violet-400"
          />
          Your Business
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
    <div
      className={`leading-none inline-flex overflow-hidden relative ${className}`}
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
