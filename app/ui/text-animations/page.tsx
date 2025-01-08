import Link from "next/link";
import React from "react";

export default function TextAnimaionsPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="grid grid-cols-2 p-8 container mx-auto gap-8">
        {new Array(31).fill(0).map((_, index) => (
          <Link
            key={index}
            href={`/ui/text-animations/text-animation-${index + 1}`}
            className="border p-8 transition-all duration-200 group relative border-gray-800 text-white hover:text-gray-900"
          >
            <span className="relative z-10 transition-colors duration-100">
              Text Animation {index + 1}
            </span>
            <span className="absolute group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:origin-top inset-0 bg-blue-300 transition-transform duration-200"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
