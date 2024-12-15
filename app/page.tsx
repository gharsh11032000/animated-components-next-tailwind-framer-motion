import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen grid place-content-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/ui"
          className="text-white hover:text-blue-300 hover:underline transition-all duration-150"
        >
          Explore Components
        </Link>
      </div>
    </main>
  );
}
