"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";

import { Unbounded } from "next/font/google";

const unboundred = Unbounded({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Section() {
  return (
    <div
      className={`relative overflow-x-hidden dark:bg-gray-950 ${unboundred.className}`}
    >
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
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
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
            left: "calc(50% - 12rem)",
          }}
          className="absolute z-0 -top-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <div className="relative container grid place-content-center mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWord
            words="Get started with us in 5-minutes for free"
            className="text-4xl relative max-w-7xl sm:text-4xl !leading-tight text-center md:text-5xl lg:text-6xl xl:text-8xl text-gray-100"
          />
        </div>
      </motion.section>
    </div>
  );
}

function AnimatedWord({
  words,
  className,
}: {
  words: string;
  className?: string;
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      await animate(
        ".bg--control",
        {
          scaleX: 1,
        },
        {
          duration: 0.5,
          delay: words.split(" ").length * 0.25,
        }
      );

      animate(
        ".underline--control",
        {
          scaleX: 1,
        },
        {
          duration: 0.5,
        }
      );
    };

    sequence();
  }, [animate, words]);

  return (
    <div ref={scope} className={`${className}`}>
      {words.split(" ").map((word, index) => (
        <>
          <span className="inline-block relative" key={index}>
            <motion.span
              className={`inline-block relative z-10 ${
                index === 7 ? "word--control" : ""
              }`}
              initial={{
                opacity: 0,
                filter: "blur(0.5em)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.17, 0.67, 0.83, 0.67],
              }}
            >
              {index === 5 && <>&nbsp;</>}
              {word}
              {index === 5 && <>&nbsp;</>}
            </motion.span>

            {index === 5 && (
              <motion.span
                className="absolute h-full bg--control w-full bg-purple-600 rounded-[0.25em] origin-left z-0 left-0 top-0 inline-block"
                initial={{
                  scaleX: 0,
                }}
              />
            )}

            {index === 7 && (
              <motion.span
                className="absolute h-[0.1em] underline--control w-full bg-purple-600 rounded-[0.25em] origin-left z-0 left-0 bottom-0 inline-block"
                initial={{
                  scaleX: 0,
                }}
              />
            )}
          </span>

          <>&nbsp;</>
        </>
      ))}
    </div>
  );
}
