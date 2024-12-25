"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Section() {
  const words = [
    "Design",
    "Development",
    "Marketing",
    "Strategy",
    "Technology",
    "Creativity",
    "Consulting",
    "Branding",
    "Digital",
    "Innovation",
  ];
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
        className="min-h-screen w-full flex justify-center items-center relative overflow-hidden"
      >
        <div className="font-semibold border-gray-100/20 text-4xl w-full max-w-2xl lg:text-6xl  text-gray-100">
          <AnimatedWords words={words} className="w-full" />
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
  return (
    <div className={`inline-flex flex-col items-start gap-4 ${className}`}>
      {words.map((word, index) => (
        <AnimatedWord key={index} word={word} index={index} />
      ))}
    </div>
  );
}

function AnimatedWord({
  word,
  index,
  className,
}: {
  word: string;
  index: number;
  className?: string;
}) {
  const wordRef = React.useRef<HTMLDivElement>(null);
  const [wordWidth, setWordWidth] = React.useState(0);

  React.useEffect(() => {
    if (wordRef.current) {
      setWordWidth(wordRef.current.clientWidth / 16);
    }
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0.2,
        left: "0%",
      }}
      ref={wordRef}
      animate={{
        opacity: 1,
        left: `calc(100% - ${wordWidth}rem)`,
      }}
      transition={{
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: index * 0.075,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.25,
      }}
      className={`relative ${className}`}
    >
      {word}
    </motion.div>
  );
}
