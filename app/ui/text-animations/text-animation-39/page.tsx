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
              "3+ years of experience",
              "100% customer satisfaction",
              "Top-rated service",
              "Quality workmanship",
            ]}
            className="relative text-2xl md:text-5xl lg:text-6xl text-gray-100"
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
            y: "0.4em",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: "0em",
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.25,
            ease: "easeOut",
          }}
          className="mb-[0.05em] relative flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[1.6em] h-[1.6em] text-blue-600"
          >
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>

          {word}
        </motion.div>
      ))}
    </div>
  );
}
