import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center text-white"
    >
      {/* Background Image (put banner.jpeg inside /public) */}
      <Image
        src="/banner.jpeg"
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content (heading, subtitle, decorative star) */}
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="italic">Mahjong</span>
        </h1>

        <p className="uppercase tracking-widest text-sm md:text-base mb-6">
          Where every hour feels like happy hour.
        </p>

        <div className="flex items-center justify-center">
          <div className="w-16 border-t-2 border-amber-500" />
          <div className="mx-3 w-8 h-8 border-2 border-amber-500 rounded-full flex items-center justify-center">
            <span className="text-amber-500 text-lg">★</span>
          </div>
          <div className="w-16 border-t-2 border-amber-500" />
        </div>
      </div>

      {/* Scroll-down button centered at bottom, overlapping the next section */}
      <a
        href="#next-section"
        aria-label="Scroll down"
        className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 z-30 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
      >
        {/* double chevron down icon (inline SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-gray-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 9l6 6 6-6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 5l6 6 6-6" opacity="0.6" />
        </svg>
      </a>
    </section>
  );
}
