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
    <div className="relative overflow-x-hidden dark:bg-gray-950 text-3xl md:text-4xl lg:text-7xl">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.25 }}
        className="min-h-screen flex flex-col justify-end relative overflow-hidden p-4 lg:p-8"
      >
        <div className="relative z-10 max-w-3xl   font-medium text-white">
          Partnership at the core, our offerings span every channel.
        </div>
      </motion.section>

      <div
        className="absolute bottom-0 left-0 w-full grid z-50 h-full pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${gridTemplate.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridTemplate.rows}, 1fr)`,
        }}
      >
        {gridBoxes.map((box) => (
          <motion.div
            key={box}
            className="w-full h-full rounded-full bg-gray-100"
            initial={{ scale: 1 }}
            animate={{ scale: 0 }}
            transition={{
              duration: 0.5,
              delay: Math.random() * 0.5,
              ease: "circInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
