"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 500;

export default function Section() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: PARTICLE_COUNT }, (_, i) => i));
  }, []);

  return (
    <div className="relative overflow-hidden dark:bg-gray-950 text-4xl md:text-5xl lg:text-9xl min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="relative z-10 text-center font-bold text-white"
        >
          Particle Burst.
        </motion.div>
      </motion.section>

      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <Particle key={particle} />
        ))}
      </div>
    </div>
  );
}

function Particle() {
  const randomPosition = () => `${Math.random() * 100}%`;
  const randomSize = () => `${(Math.random() * 0.2) / 2}em`;
  const randomDelay = () => Math.random() * 2;
  const randomTailwindColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-red-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-purple-500",
      "bg-indigo-500",
      "bg-blue-500",
      "bg-red-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-purple-500",
      "bg-indigo-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${randomTailwindColor()}`}
      style={{
        width: randomSize(),
        aspectRatio: 1,
      }}
      initial={{
        opacity: 1,
        scale: 0,
        top: `calc(50% - ${randomSize()})`,
        left: `calc(50% - ${randomSize()})`,
      }}
      animate={{
        opacity: [1, 1, 0],
        scale: [0, 2, 0],
        top: randomPosition(),
        left: randomPosition(),
      }}
      transition={{
        duration: 1,
        delay: randomDelay(),
        ease: "easeOut",
      }}
    />
  );
}
