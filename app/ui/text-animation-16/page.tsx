"use client";

import React from "react";
import { easeIn, motion, useAnimation } from "framer-motion";

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
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
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
            repeatType: "mirror",
          }}
          style={{
            left: "calc(50% - 12rem)",
            bottom: "-12rem",
            scale: 2,
          }}
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full blur-3xl opacity-100"
        ></motion.div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWords words={["Multi", "Disciplinary", "Designer"]} />
        </div>
      </motion.section>
    </div>
  );
}

interface AnimatedWordProps {
  words: string[];
  className?: string;
}

function AnimatedWords({ words, className }: AnimatedWordProps) {
  return (
    <div className={`leading-tight relative ${className}`}>
      {words.map((w, i) => (
        <AnimatedWord
          key={i}
          index={i}
          word={w}
          className="font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-gray-100"
        />
      ))}

      <motion.div
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="xl:absolute text-xs xl:text-base left-2 bottom-4 w-48 text-white/60"
      >
        <p> Keen on creating meaningful experiences.</p>
      </motion.div>
    </div>
  );
}

function AnimatedWord({
  word,
  className,
  index,
}: {
  word: string;
  className?: string;
  index: number;
}) {
  const yControls = useAnimation();
  const xControls = useAnimation();

  React.useEffect(() => {
    async function animateText() {
      await yControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: index * 0.05,
          ease: [0.6, 0.05, 0.01, 0.9],
        },
      });

      if (index === 1) {
        await xControls.start({
          x: "100%",
          transition: {
            duration: 1,
            delay: 0.75,
            ease: [0.6, 0.05, 0.01, 0.9],
          },
        });
      }

      if (index === 2) {
        await xControls.start({
          x: "50%",
          transition: {
            duration: 1,
            delay: 0.75,
            ease: [0.6, 0.05, 0.01, 0.9],
          },
        });
      }
    }

    animateText();
  }, [yControls, xControls, index]);

  const letterVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.75,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  return (
    <>
      <motion.div
        animate={xControls}
        initial={{ x: 0 }}
        className={`overflow-hidden inline-block ${className}`}
      >
        <motion.div
          animate={yControls}
          initial={{ y: "100%", opacity: 0 }}
          className=""
        >
          {word.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="text-gray-100 inline-block"
            >
              {letter}
            </motion.span>
          ))}
          &nbsp;
        </motion.div>
      </motion.div>
      {index === 0 && <br className="sm:hidden" />}
      {index === 1 && <br />}
    </>
  );
}
