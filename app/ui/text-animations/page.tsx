"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

type AnimationComponent = React.ComponentType<{}>;

const TextAnimationsClient = () => {
  const [SelectedSection, setSelectedSection] =
    useState<AnimationComponent | null>(() =>
      dynamic(() => import(`./text-animation-1/page`), {
        loading: () => <p>Loading...</p>,
      })
    );
  const [activeIndex, setActiveIndex] = useState(1);

  const handleLinkClick = useCallback(async (index: number) => {
    const AnimationComponent = dynamic(
      () => import(`./text-animation-${index}/page`),
      {
        loading: () => <p>Loading...</p>,
      }
    );
    setSelectedSection(() => AnimationComponent);
    setActiveIndex(index);
  }, []);

  return (
    <div className="h-screen bg-gray-950 relative overflow-hidden">
      <div
        className="grid z-[100] absolute gap-1 bg-gray-950/40 backdrop-blur-md overflow-x-auto w-full top-0 left-0"
        style={{
          scrollbarWidth: "none",
          gridTemplateColumns: "repeat(40,2em)",
        }}
      >
        {Array.from({ length: 40 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleLinkClick(index + 1)}
            className={`transition-all overflow-hidden text-sm focus:bg-gray-100 focus:outline-none focus:text-gray-950 flex justify-center items-center flex-col gap-8 duration-100 group relative border-gray-950 p-2 rounded-md  text-gray-100 hover:text-gray-900 ${
              activeIndex === index + 1 ? "bg-gray-100 text-gray-950" : ""
            }`}
          >
            <span className="z-10 font-semibold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute group-hover:scale-y-100 scale-y-0 block origin-bottom group-hover:origin-top inset-0 bg-gray-100 transition-transform duration-200"></span>
          </button>
        ))}
      </div>
      <div>{SelectedSection && <SelectedSection />}</div>
    </div>
  );
};

export default TextAnimationsClient;
