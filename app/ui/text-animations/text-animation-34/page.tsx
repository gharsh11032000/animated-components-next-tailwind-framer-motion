"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section() {
  const textToAnimate = `Typing Animation

Watch as each character appears,
one by one, on the screen. 
It's like magic, but it's just code!
    
Create engaging text reveals
for your web applications.`;

  return (
    <div className={`relative overflow-x-hidden dark:bg-gray-950`}>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
          }}
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

        <div className="p-8 text-sm md:text-base md:p-12 rounded-xl bg-gray-950/10 backdrop-blur-md">
          <AnimatedText text={textToAnimate} className="text-gray-100" />
        </div>
      </section>
    </div>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  const [charStates, setCharStates] = useState<
    { opacity: number; blur: number }[]
  >([]);

  useEffect(() => {
    const initialStates = new Array(text.length).fill({ opacity: 0, blur: 5 });
    initialStates[0] = { opacity: 1, blur: 0 };
    setCharStates(initialStates);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setCharStates((prev) => {
          const newStates = [...prev];
          newStates[currentIndex] = { opacity: 1, blur: 0 };
          return newStates;
        });
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <pre className={`font-mono whitespace-pre-wrap ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{
            opacity: charStates[index]?.opacity,
            filter: `blur(${charStates[index]?.blur}px)`,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {char}
        </motion.span>
      ))}
    </pre>
  );
};
