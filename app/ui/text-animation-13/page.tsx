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
            top: "calc(50% - 12rem)",
          }}
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-red-400 rounded-full blur-3xl opacity-100"
        ></motion.div>

        <div className="uppercase font-bold w-full text-5xl md:text-6xl lg:text-8xl text-gray-100">
          <AnimatedWord word={"illumination"} />
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
  return (
    <div
      style={{
        perspective: "1000px",
      }}
      className={`inline-flex ${className}`}
    >
      <>
        {word.split("").map((letter, index) => {
          const centerIndex = (word.length - 1) / 2;
          const z = Math.abs(centerIndex - index) * 40 + 360;
          const delay = Math.abs(centerIndex - index) * 0.1;

          return (
            <motion.div
              style={{
                transformStyle: "preserve-3d",
              }}
              initial={{
                opacity: 0,
                z: z,
                filter: "blur(12px)",
                rotateX: 180,
              }}
              animate={{
                opacity: 1,
                z: 0,
                filter: "blur(0px)",
                rotateX: 0,
              }}
              transition={{
                delay,
                duration: 0.75,
                ease: "easeOut",
              }}
              key={index}
            >
              {letter}
            </motion.div>
          );
        })}
      </>
    </div>
  );
}
