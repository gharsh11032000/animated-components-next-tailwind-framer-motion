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
            top: "calc(50% - 12rem)",
          }}
          className="absolute z-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <div className="relative container grid place-content-center mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWord
            words="Get started with us in 5 minutes, for free!"
            className="text-4xl relative max-w-5xl sm:text-4xl font-bold text-center md:text-5xl lg:text-6xl xl:text-8xl text-gray-100"
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
  return (
    <div className={`${className}`}>
      {words.split("").map((char, index) => (
        <span key={index}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: Math.random(),
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
