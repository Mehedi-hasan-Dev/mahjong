// components/OurMenu.js
export default function OurMenu() {
  return (
    <section id="menu"
      className="relative w-full h-[250px] flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/bar2.jpeg')" }} // Single background image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h2 className="text-2xl font-bold tracking-wide">OUR MENU</h2>
        <p className="text-yellow-400 italic mt-1">
          Pellentesque habitant morbi
        </p>
        <div className="mt-2 flex items-center justify-center space-x-4">
          <span className="h-px w-8 bg-yellow-400"></span>
          <span className="text-yellow-400">•</span>
          <span className="h-px w-8 bg-yellow-400"></span>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 w-full z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-6"
        >
          <path
            d="M0,0V46.29c47.74,22.88,103.78,29.28,158,17.39C230.82,50.52,284,16.46,339,9.22c54.3-7.12,107.73,10.67,161,21.79,58.33,12.18,116.54,18.26,175,8.13,48.78-8.44,95.19-27.75,143-36.9,66.14-12.64,130.39-1.73,193,16.12,55.09,15.85,109.22,35.53,166,35.53V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
