import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Animated Components Next + Tailwind + Framer Motion",
  description: "Free resource for learning and usage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={spacemono.className}>{children}</body>
    </html>
  );
}
