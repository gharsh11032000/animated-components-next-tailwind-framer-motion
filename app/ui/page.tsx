import Link from "next/link";
import React from "react";

export default function ComponentsPage() {
  return (
    <div className="flex p-2 flex-col bg-gray-950 min-h-screen ">
      {components.map((component, index) => (
        <Link
          key={component.href}
          href={`/ui/${component.href}`}
          className="py-2 border-b hover:px-2 transition-all duration-200 group relative border-gray-800 text-white hover:text-gray-900"
        >
          <span className="relative z-10 transition-colors duration-100">
            {component.name}
          </span>
          <span className="absolute group-hover:scale-y-100 scale-y-0 origin-bottom group-hover:origin-top inset-0 bg-blue-300 transition-transform duration-200"></span>
        </Link>
      ))}
    </div>
  );
}

const components = [
  {
    name: "Text Animation 1",
    href: "/text-animation-1",
  },
  {
    name: "Text Animation 2",
    href: "/text-animation-2",
  },
  {
    name: "Text Animation 3",
    href: "/text-animation-3",
  },
];
