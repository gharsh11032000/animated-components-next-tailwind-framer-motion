"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section() {
  const [gridBoxes, setGridBoxes] = useState<number[]>([]);
  const [gridTemplate, setGridTemplate] = useState({ cols: 10, rows: 6 });

  useEffect(() => {
    const updateGridBoxes = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const size = Math.min(width, height) / 10; // Adjust the divisor to control the size of the squares
      const cols = Math.ceil(width / size);
      const rows = Math.ceil(height / size);
      setGridTemplate({ cols, rows });
      setGridBoxes(Array.from({ length: cols * rows }, (_, i) => i));
    };

    updateGridBoxes();
    window.addEventListener("resize", updateGridBoxes);

    return () => window.removeEventListener("resize", updateGridBoxes);
  }, []);

  return (
    <div className="relative overflow-x-hidden dark:bg-gray-950 text-4xl md:text-5xl lg:text-9xl">
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
            left: "calc(50% - 1em)",
            top: "calc(50% - 1em)",
          }}
          className="absolute z-0 w-[2em] h-[2em] bg-blue-400 rounded-full blur-[1em] opacity-100"
        ></motion.div>

        <div className="relative z-10  h-screen grid place-content-center w-screen  font-bold text-white">
          Pixelated World.
        </div>
      </motion.section>

      <div
        className="absolute inset-0 grid z-50"
        style={{
          gridTemplateColumns: `repeat(${gridTemplate.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridTemplate.rows}, 1fr)`,
        }}
      >
        {gridBoxes.map((box) => (
          <motion.div
            key={box}
            className="w-full h-full bg-gray-800"
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
