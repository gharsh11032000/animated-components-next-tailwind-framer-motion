"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Section() {
  const words = ["Innovative", "Performant", "Responsive", "User-Centric"];

  return (
    <div className="overflow-x-hidden bg-gray-950 text-white">
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
        className="h-screen w-full group relative overflow-hidden flex items-center justify-center"
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
          className="absolute top-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-4xl mx-auto">
              Crafting Digital <br /> Experiences That Are
              <AnimatedWords words={words} className="w-full text-blue-400" />
            </h1>

            <p className="text-lg lg:text-xl leading-8 text-gray-400 max-w-2xl mx-auto mt-4 sm:mt-8">
              Elevate your online presence with cutting-edge web solutions that
              captivate, engage, and convert.
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-4">
              <button className="px-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-300 justify-center gap-2 lg:text-lg font-semibold text-gray-900 bg-blue-400 rounded-full hover:bg-blue-300 focus:outline-none focus:bg-blue-500">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export interface AnimatedWordsProps {
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

  const variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  return (
    <div
      className={`leading-none inline-flex relative overflow-hidden ${className}`}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentWordIndex}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 0.25,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
          className="w-full text-center"
        >
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.25,
                delay: 0.05 * index,
                type: "spring",
                damping: 12,
                stiffness: 100,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
