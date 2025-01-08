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
        <div className="uppercase font-bold h-[5em] border border-white overflow-hidden w-full text-6xl text-white">
          <AnimatedWord word={"animation"} />
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
    <div className={`inline-flex ${className}`}>
      <>
        {word.split("").map((letter, index) => {
          return (
            <motion.div
              style={{
                transformOrigin: "0% 80%",
              }}
              initial={{
                scaleY: 0,
                y: "4em",
              }}
              animate={{
                scaleY: [0, 1, 7.5, 1, 1],
                y: ["4em", "4em", "4em", "0em", "-1em"],

                transition: {
                  duration: 2.5,
                  ease: "circInOut",
                  delay: Math.random() * 0.25,
                  repeat: Infinity,
                  repeatType: "loop",
                },
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
