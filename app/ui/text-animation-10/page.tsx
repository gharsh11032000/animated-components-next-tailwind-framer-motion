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
            left: "calc(50% - 10rem)",
            top: "calc(50% - 10rem)",
          }}
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-100"
        ></motion.div>

        <div className="text-6xl overflow-hidden uppercase h-[1em] !leading-none font-black w-full lg:text-8xl text-white">
          <AnimatedWord word={"rolling"} />
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
  const MAX = 8;
  const MIN = 6;
  const [randomValues, setRandomValues] = useState<number[]>([]);

  useEffect(() => {
    const values = word
      .split("")
      .map(() => Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
    setRandomValues(values);
  }, [word]);

  return (
    <div className={`inline-flex relative ${className}`}>
      {randomValues.length > 0 && (
        <>
          {word.split("").map((letter, index) => {
            const random = randomValues[index];

            return (
              <motion.div
                initial={{
                  transform:
                    index % 2 === 0
                      ? `translateY(calc(100% - ${MAX}em))`
                      : `translateY(calc(-100% + ${MAX - random + 1}em))`,
                }}
                className="flex flex-col"
                key={index}
                animate={{
                  transform:
                    index % 2 === 0
                      ? `translateY(calc(-100% + ${MAX - random + 1}em))`
                      : `translateY(calc(100% - ${MAX}em))`,
                }}
                transition={{
                  duration: 2,
                  ease: "circInOut",
                }}
              >
                {new Array(random).fill(0).map((_, i) => (
                  <div key={i} className="inline-block">
                    {letter}

                    {letter === " " && (
                      <span className="invisible whitespace-pre">_</span>
                    )}
                  </div>
                ))}
              </motion.div>
            );
          })}
        </>
      )}
    </div>
  );
}
