import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

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
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
