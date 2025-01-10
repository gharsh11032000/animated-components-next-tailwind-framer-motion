"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Section() {
  return (
    <div
      className={`relative overflow-x-hidden dark:bg-gray-950 ${unbounded.className}`}
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
        <div className="relative container grid place-content-center mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWord
            words="Innovate. Create. Inspire."
            className="text-3xl relative max-w-xl md:max-w-4xl !leading-tight sm:text-5xl p-0.5 rounded-2xl lg:rounded-3xl overflow-hidden font-bold  text-center md:text-6xl xl:text-7xl text-gray-100"
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
    async function animateSequence() {
      await animate(
        scope.current,
        {
          "--lighter-deg": "24deg",
          opacity: 1,
        },
        { duration: 1.25, ease: "easeOut" }
      );
    }

    animateSequence();
  }, [animate, scope]);

  return (
    <motion.div
      className={`${className}`}
      ref={scope}
      initial={{ "--lighter-deg": "0deg", opacity: 0 }}
    >
      <div className="flex items-center gap-[1em] flex-col py-[0.8em] px-[0.4em] justify-center relative rounded-2xl z-10 lg:rounded-3xl">
        <span>{words}</span>

        <div className="relative w-96 h-0.5 scale-100 sm:scale-125 md:scale-150 xl:scale-[2] pointer-events-none opacity-100 top-0 z-0 mix-blend-color-dodge">
          <div className="absolute bottom-[-16rem] overflow-hidden w-96 h-[40rem] right-[calc(24rem/2)]">
            <span
              style={{
                background: `conic-gradient(from 0deg at 50% 50%, black 0deg, rgba(86, 86, 86, 0) calc(127.363deg - var(--lighter-deg)), rgba(47, 47, 47, 0) calc(231.791deg - var(--lighter-deg)), #aaa calc(358.9deg - var(--lighter-deg)), #f8f8f8 calc(359.6deg - 0deg), #f8f8f8 calc(359.8deg - 0deg), #f8f8f8 calc(359.9deg - 0deg), black)`,
              }}
              className="absolute top-12 w-full h-full mix-blend-color-dodge left-12 rotate-90"
            ></span>
          </div>

          <div className="absolute bottom-[-16rem] overflow-hidden w-96 h-[40rem] left-[calc(24rem/2)]">
            <span
              style={{
                backgroundImage: `conic-gradient(from 0deg at 50% 50%, black 0deg, rgba(86, 86, 86, 0) calc(127.363deg - var(--lighter-deg)), rgba(47, 47, 47, 0) calc(231.791deg - var(--lighter-deg)), #aaa calc(358.9deg - var(--lighter-deg)), #f8f8f8 calc(359.6deg - 0deg), #f8f8f8 calc(359.8deg - 0deg), #f8f8f8 calc(359.9deg - 0deg), black)`,
                transform: `rotate(-90deg) rotateY(180deg)`,
              }}
              className="absolute top-12 w-full h-full mix-blend-color-dodge right-12"
            ></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
