"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Section() {
  return (
    <div className="relative overflow-x-hidden dark:bg-black">
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
        className="min-h-screen w-full flex justify-center items-center text-center relative overflow-hidden"
      >
        <div className="font-semibold text-6xl lg:text-9xl  text-white">
          <AnimatedWord word={"Design"} className="w-full" />
        </div>
      </motion.section>
    </div>
  );
}

interface AnimatedWordProps {
  word: string;
  className?: string;
}

function AnimatedWord({ word, className }: AnimatedWordProps) {
  return (
    <div className={`inline-flex relative ${className}`}>
      {word}
      <motion.span
        style={{
          left: "calc(50% - 1em)",
          top: "calc(50% - 1em)",
        }}
        initial={{
          scale: 0,
          x: 0,
          y: 0,
        }}
        animate={{
          scale: [0, 1, 1, 0.6, 1, 0.8, 0],
          x: ["0%", "0%", "-80%", "50%", "80%", "0%", "0%"],
          y: ["0%", "0%", "0%", "-10%", "10%", "0%", "0%"],
          transition: {
            duration: 4,
            ease: [0.6, 0.05, 0.01, 0.9],
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            delay: 1,
          },
        }}
        className="absolute w-[2em] h-[2em] rounded-full bg-white mix-blend-difference"
      ></motion.span>
    </div>
  );
}
