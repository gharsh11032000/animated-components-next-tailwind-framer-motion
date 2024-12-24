"use client";

import React from "react";
import { motion } from "framer-motion";

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
        className="min-h-screen w-full grid place-content-center relative overflow-hidden"
      >
        <motion.div
          animate={{
            opacity: [0.8, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: "calc(50% - 12rem)",
            bottom: "-12rem",
            scale: 2,
          }}
          className="absolute w-96 h-96 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full blur-3xl opacity-100"
        ></motion.div>

        <div className="font-bold w-full text-7xl lg:text-9xl  text-gray-100">
          <AnimatedWord word={"Gravity"} className="w-full" />
        </div>

        <div className="m-4 text-xl text-gray-300 max-w-2xl text-center">
          <p>Keeps us grounded, keeps us together</p>
        </div>
      </motion.section>
    </div>
  );
}

interface AnimatedWordProps {
  word: string;
  interval?: number;
  className?: string;
}

function AnimatedWord({ word, className }: AnimatedWordProps) {
  const colors = [
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-pink-500",
    "text-white",
  ];

  return (
    <div
      style={{
        perspective: "1000px",
      }}
      className={`inline-flex ${className}`}
    >
      <span className="text-transparent invisible opacity-0 pointer-events-none">
        {word}
      </span>

      {new Array(5).fill(word).map((_, parentIndex) => {
        return (
          <motion.div
            style={{
              transformStyle: "preserve-3d",
            }}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex"
            key={parentIndex}
          >
            {word.split("").map((letter, index) => {
              const delay = index * 0.075 + parentIndex * 0.075;
              return (
                <motion.div
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className={colors[parentIndex % colors.length]}
                  initial={{
                    opacity: 0,
                    z: 360,
                  }}
                  animate={{
                    opacity: 1,
                    z: 0,
                  }}
                  transition={{
                    delay,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  key={index}
                >
                  {letter}
                </motion.div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}
