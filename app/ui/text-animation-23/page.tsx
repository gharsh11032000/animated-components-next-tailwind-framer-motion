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
        <div className="relative container grid place-content-center mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSequence
            word1="Take"
            word2="Care"
            className="font-bold capitalize text-3xl relative sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-gray-100"
          />
        </div>
      </motion.section>
    </div>
  );
}

interface AnimatedWordProps {
  words: string[];
  className?: string;
}

function AnimatedSequence({
  word1,
  word2,
  className,
}: {
  word1: string;
  word2: string;
  className?: string;
}) {
  const dotControls = useAnimation();
  const word1Controls = useAnimation();
  const word2Controls = useAnimation();
  const spaceDivControls = useAnimation();

  React.useEffect(() => {
    async function animateSequence() {
      await dotControls.start({
        right: "100%",
        transition: { duration: 0.5, ease: "easeOut" },
      });

      dotControls.start({
        right: "4%",
        transition: { duration: 0.5, ease: "easeOut" },
      });

      word1Controls.start({
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      });

      await word2Controls.start({
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        transition: {
          duration: 0.25,
          delay: 0.25,
          ease: "easeOut",
        },
      });

      word1Controls.start({
        x: "0rem",
        transition: { duration: 0.25, ease: "easeOut", delay: 0.5 },
      });

      word2Controls.start({
        x: "0rem",
        transition: { duration: 0.25, ease: "easeOut", delay: 0.5 },
      });

      dotControls.start({
        right: "-5%",
        transition: { duration: 0.25, ease: "easeOut", delay: 0.5 },
      });

      await spaceDivControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.25, ease: "easeOut", delay: 0.5 },
      });
    }

    animateSequence();
  }, [dotControls, word1Controls, word2Controls, spaceDivControls]);

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        animate={dotControls}
        initial={{ right: "47%" }}
        className="absolute"
      >
        .
      </motion.div>

      <motion.div
        animate={word1Controls}
        initial={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          x: "0.5em",
        }}
        className="text-gray-100 mr-[0.125em]"
      >
        {word1}
      </motion.div>

      <motion.div
        animate={spaceDivControls}
        initial={{ scale: 0, opacity: 0 }}
        className="bg-blue-500 h-[1em] w-[1em] rounded-[0.25em]"
      >
        &nbsp;
      </motion.div>

      <motion.div
        animate={word2Controls}
        initial={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          x: "-0.5em",
        }}
        className="text-gray-100 ml-[0.125em]"
      >
        {word2}
      </motion.div>
    </div>
  );
}
