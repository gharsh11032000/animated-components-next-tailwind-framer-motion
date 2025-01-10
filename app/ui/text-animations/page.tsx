import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TextAnimaionsPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="grid grid-cols-2 p-8 container mx-auto gap-8">
        {new Array(32).fill(0).map((_, index) => (
          <Link
            key={index}
            href={`/ui/text-animations/text-animation-${index + 1}`}
            className="border p-8 transition-all flex flex-col gap-8 duration-200 group relative border-gray-800 text-gray-100 hover:text-gray-900"
          >
            <div className="h-96 bg-white mb-16 transition-all duration-100">
              <Image
                src={`/images/text-animation-${index + 1}.png`}
                alt={`Text Animation ${index + 1}`}
                className="w-full h-full object-contain"
                width={400}
                height={400}
              />
            </div>
            <span className="z-10 text-xl font-semibold absolute bottom-8 left-8 group-hover:text-4xl transition-all duration-100">
              Text Animation {index + 1}
            </span>
            <span className="absolute group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:origin-top inset-0 bg-blue-300 transition-transform duration-200"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
