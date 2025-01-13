"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section() {
  return (
    <div className={`relative overflow-x-hidden dark:bg-gray-950`}>
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
        <div className="relative container grid place-content-center mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWords
            words={[
              "Over 3 years of experience",
              "in the design industry",
              "crafting websites and designs",
              "work for clients of all sizes.",
            ]}
            className="relative text-xl sm:2xl md:text-5xl lg:text-6xl text-gray-100"
          />
        </div>
      </motion.section>
    </div>
  );
}

function AnimatedWords({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: index * 0.25,
            duration: 0.25,
            ease: "easeOut",
          }}
          className="h-[1em] font-bold leading-none uppercase whitespace-nowrap overflow-hidden text-center items-center relative flex flex-col"
        >
          <motion.span
            className="opacity-20"
            animate={{
              y: "-100%",
            }}
            transition={{
              duration: 0.25,
              delay: 1.25 + index * 0.05,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
          <motion.span
            animate={{
              y: "-100%",
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
              delay: 1.25 + index * 0.05,
            }}
          >
            {word}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}
