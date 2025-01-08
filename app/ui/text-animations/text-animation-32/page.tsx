"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section() {
  const gridBoxes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="relative overflow-x-hidden dark:bg-gray-950">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.25 }}
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
          className="absolute z-0 w-96 h-96 bg-blue-400 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <div className="relative z-10 text-4xl h-screen grid place-content-center w-screen md:text-5xl lg:text-9xl font-bold text-white">
          Pixelated World.
        </div>
      </motion.section>

      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 z-50">
        {gridBoxes.map((box) => (
          <motion.div
            key={box}
            className="w-full h-full bg-blue-400"
            initial={{ opacity: 1, visibility: "visible" }}
            animate={{ opacity: 0, visibility: "hidden" }}
            transition={{
              duration: 0.5,
              delay: Math.random(),
            }}
          />
        ))}
      </div>
    </div>
  );
}
