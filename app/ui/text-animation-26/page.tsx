"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Section() {
  return (
    <div className="relative overflow-x-hidden dark:bg-gray-950">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
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
          }}
          className="absolute -top-1/4 z-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-[8rem] opacity-100"
        ></motion.div>

        <WritingText className="relative z-10" />
      </motion.section>
    </div>
  );
}

function WritingText({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        height="100%"
        id="wJH25DDmD"
        style={{ maxWidth: "100%", width: "100%", opacity: 1 }}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 523.85 239.02"
      >
        <defs>
          <linearGradient id="svg-:R6msbjkm:" x1="0.44" y1={0} x2="0.56" y2={1}>
            <stop
              offset="0%"
              stopColor="var(--token-99e25278-e64d-4112-b228-c778c2d0de5e, rgb(255, 255, 255))"
            />
            <stop
              offset="100%"
              stopColor="var(--token-99e25278-e64d-4112-b228-c778c2d0de5e, rgb(255, 255, 255))"
            />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 5,
            duration: 1,
            ease: "easeOut",
          }}
          d="M151.29,115.71c-.65,2.34-3.47,10.25-4.13,12.6"
          fill="none"
          stroke="var(--token-99e25278-e64d-4112-b228-c778c2d0de5e, rgb(255, 255, 255))"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={14}
          strokeDasharray="1px 1px"
          opacity={1}
          pathLength={1}
          strokeDashoffset="0px"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 5,
            ease: "easeOut",
          }}
          d="M59.16,64.43c59.09-31.98,114.61-43.81,124.02-26.42,9.41,17.38-30.87,57.39-89.95,89.37-32.05,17.35-63.06,28.76-86.22,32.81,0,0,35.31-8.94,43.29-12.76l5.64-15.8L96.11,27.7S43.88,153.58,24.32,230.16h0s31.91-42.61,54.64-60.34c0,0,8.92-9.2,17.24-1.55,0,0-8.73-8.81-25.66,8.87-8.61,8.99-13.3,21.95-12.63,33.03.74,12.21,9.56,7.34,14.27,2.06,14.42-16.16,25.97-33.87,34.05-52.21-7.77,22.74-12.04,34.42-16.68,57.04,25.49-38.45,54.24-66.4,54.24-66.4-6.83,19.29-12.2,40.14-16.4,58.89,23.92-36.29,50.45-63.87,50.45-63.87-8.03,22.61-10.48,35.18-16.46,57.08,5.78-15.53,16.13-42.39,27.8-44.72,0,0,21.76-7.08,13.12,36.39l17.45-26.29-15.39,63.89c17.27-73.47,27.96-120,57.69-191.27l-11.74,29.66c-1.14,2.88-3.57,5.04-6.56,5.84-13.85,3.67-55.79,14.95-96.56,27.71,0,0,148.53-46.81,236.97-57.09,0,0-30.45,2.55-105.02,20.43-3.65.88-6.6,3.59-7.77,7.16-6.02,18.36-24.89,77-35.06,120.44l10.63-39.53c2.43-7.19,7.35-16.37,12.59-20.69,5.23-4.32,14.73-6.58,19.38-2.89,3.07,2.43,3.9,5.87,3.76,9.49-.32,8.62-3.86,16.79-9.97,24.25-13.57,16.57-25.46,17.83-41.26,17.83,0,0,24.22,3.82,40.1-16.45,0,0,13.22-13.35,10.81-29.58,0,0,1.8,20.42,13.41,6.77,0,0,6.35-13.51,17.36-20.2-9.75,6.51-16.84,16.45-19.3,25.54-.78,2.88-1.08,5.87-.15,8.53.93,2.65,3.32,4.93,6.66,5.42,4.48.67,9.3-1.91,12.9-4.81,9.63-7.74,14.94-18.95,13.76-29.04-.31-2.64-1.3-5.14-3.72-6.82s-7.13-.67-8.45,1.95c0,0,3.35-4.04,8.45-1.95,0,0,7.68,4.86,1.85,20,0,0-2.75,6.37-5.54,9.51l-6.44,27.03,43.46-45.69-19.62-26.08c12,15.55,26.87,37.04,40.08,53.46l-20.46-27.38,32.94-34.57-2.9,37.39c10.64-3.07,20.34-9.44,26.99-17.72,1.98-2.47,3.73-5.18,4.27-8.1s-.37-6.08-2.92-7.7c-2.46-1.57-6.03-1.42-8.98-.21s-5.38,3.34-7.5,5.59c-8.04,8.55-12.47,19.67-12.09,30.35.15,4.13,1.19,8.51,4.7,10.94,2.97,2.06,7.24,2.3,11.09,1.36s7.37-2.94,10.67-5.07c9.69-6.24,17.2-12.96,24.14-21.67l3.25-4.76,3.13-8.15c2.23-4.64,5.16-9.15,8.56-13.39,7.52-9.35,22.72-18.77,33.65-10.27,0,0-19.12-14.25-39.16,18.25,0,0-7.37,11.46-7.71,22.27-.16,5.03,1.35,10.84,6.54,11.66,5.21.82,10.2-3.88,13.69-8.17,30.12-37.03,41.5-81.68,57.89-124.59-17.92,47.72-28.49,83.88-41.73,131.58"
          fill="none"
          stroke="url(#svg-:R6msbjkm:)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={14}
          strokeDasharray="1px 1px"
          opacity={1}
          pathLength={1}
          strokeDashoffset="0px"
        />
      </svg>
    </div>
  );
}
