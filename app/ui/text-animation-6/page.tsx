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
        className="min-h-screen w-full gap-8 grid lg:gap-8 group rounded-2xl relative"
      >
        <div className="flex flex-col gap-4 lg:gap-6 overflow-hidden backdrop-blur-3xl relative text-center justify-center items-center">
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
              left: "calc(50% - 12rem)",
            }}
            className="absolute -bottom-1/4 -z-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-[8rem] opacity-100"
          ></motion.div>
          <h1 className="text-5xl md:text-7xl leading-snug w-full lg:text-9xl font-bold text-white">
            <AnimatedWords
              words={["Clone yourself.", "Clone yourself.", "Clone yourself."]}
              className=" text-gray-100 w-full leading-snug"
            />
          </h1>
          <div className="flex flex-col gap-4 items-center px-5 justify-center">
            <p className="lg:text-2xl !leading-normal text-gray-300 max-w-2xl">
              Build the digital version of you to scale your expertise and
              availability, infinitely and effortlessly.
            </p>
            <div className="flex justify-center mt-2 sm:mt-4 items-center gap-4 mx-auto sm:gap-8">
              <button className="px-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-300 justify-center gap-2 lg:text-xl font-semibold text-gray-900 bg-blue-400 rounded-xl lg:rounded-2xl hover:bg-blue-300 focus:outline-none focus:bg-blue-300">
                Try Now
              </button>

              <Link
                href="/#"
                className="text-gray-300 font-semibold flex items-center gap-2 lg:text-xl hover:underline"
              >
                See Examples <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
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

  return (
    <div className={` inline-flex overflow-hidden relative ${className}`}>
      <AnimatePresence mode="popLayout">
        <div key={currentWordIndex} className="w-full">
          {words[currentWordIndex].split("").map((letter, index) => (
            <span key={index} className="inline-block">
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    rotateY: 180,
                  },
                  visible: {
                    opacity: 1,
                    rotateY: 360,
                  },
                  exit: {
                    opacity: 0,
                    rotateY: 315,

                    transition: {
                      duration: 0.2,
                      delay: 0.03 * index,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.5,
                  delay: 0.03 * index,
                }}
                className="inline-block"
              >
                {letter}

                {letter === " " && <>&nbsp;</>}
              </motion.span>
            </span>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
