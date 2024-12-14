'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function RotateSectionOnScroll() {
  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['0 1', '1 1'],
  });

  const rotateZ = useTransform(scrollYProgress, [0.2, 1], [-360, 360]);
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '20%']);
  return (
    <>
      <div className="h-screen w-full bg-gray-950"></div>
      <div ref={refContainer} className="h-[400vh] w-full">
        <div className="sticky top-0 left-0 h-screen grid grid-cols-2">
          <div className="bg-gray-950 h-full w-full"></div>
          <div className="bg-gray-900 relative h-full w-full">
            <motion.div
              // style={{
              //   y,
              //   rotateZ,
              // }}
              className="absolute left-0 w-full h-full"
            >
              {Array.from({ length: 12 }).map((src, i) => (
                <ImageCard
                  key={i}
                  alt={`Image ${i + 1}`}
                  totalImages={12}
                  i={i}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-gray-950"></div>
    </>
  );
}

function ImageCard({
  alt,
  totalImages,
  i,
}: {
  alt: string;
  totalImages: number;
  i: number;
}) {
  return (
    <motion.div
      key={i}
      style={{
        transform: `rotate(${
          i * (360 / totalImages)
        }deg) translate(-50%,-100%)`,
        zIndex: i,
      }}
      className="absolute top-[calc(50%-48vw)] -right-[160%] h-[48vw] origin-bottom-left w-[24vw]"
    >
      <div
        className="relative overflow-hidden h-full bg-b w-full"
        style={{ paddingTop: '100%' }}
      >
        <picture
          style={{
            borderRadius: '16px',
          }}
          className="w-full absolute top-0 bg-gray-800 left-0 h-full"
        ></picture>
      </div>
    </motion.div>
  );
}
