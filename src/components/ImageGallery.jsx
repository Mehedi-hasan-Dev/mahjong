"use client";

import { useState } from "react";
import Image from "next/image";

const allImages = [
  { src: "/1.jpg", category: "Menu", cols: 1, rows: 1, alt: "dish 1" },
  { src: "/2.jpg", category: "Menu", cols: 1, rows: 1, alt: "dish 2" },
  { src: "/3.jpg", category: "Menu", cols: 1, rows: 1, alt: "dish 3" },

  // big left image (spans 2 columns x 2 rows)
  { src: "/food.jpeg", category: "Menu", cols: 2, rows: 2, alt: "large soup" },

  // tall right image (spans 1 column x 2 rows)
  {
    src: "/banner.jpeg",
    category: "Restaurant",
    cols: 1,
    rows: 2,
    alt: "burger tall",
  },

  // bottom row small thumbnails
  {
    src: "/1.jpg",
    category: "Restaurant",
    cols: 1,
    rows: 1,
    alt: "restaurant interior",
  },
  { src: "/2.jpg", category: "Video", cols: 1, rows: 1, alt: "cookies" },
  { src: "/3.jpg", category: "Video", cols: 1, rows: 1, alt: "table top" },
  { src: "/food.jpeg", category: "Menu", cols: 1, rows: 1, alt: "dish 4" },
];

const categories = ["All", "Menu", "Restaurant", "Video"];

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 py-10">
      {/* Top nav */}
      <div className="text-center mb-4">
        <nav className="flex justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase text-xs tracking-wider font-medium transition-colors ${
                activeCategory === cat
                  ? "text-amber-600"
                  : "text-gray-500 hover:text-amber-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* thin lines + centered dot */}
        <div className="flex items-center justify-center mt-4">
          <div className="w-10 h-px bg-amber-500"></div>
          <div className="mx-3 text-amber-600 text-lg">•</div>
          <div className="w-10 h-px bg-amber-500"></div>
        </div>
      </div>

      {/* Gallery grid
          - grid-cols: 1 on mobile, 3 on sm+
          - auto-rows sets the base row height; row-span-2 doubles it
      */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[150px]">
        {filtered.map((img, idx) => {
          // convert numeric span to tailwind classes. Use sm: prefix so small screens stack cleanly
          const colClass = img.cols > 1 ? "sm:col-span-2" : "col-span-1";
          const rowClass = img.rows > 1 ? "row-span-2" : "row-span-1";

          return (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-md ${colClass} ${rowClass} bg-gray-100`}
            >
              <Image
                src={img.src}
                alt={img.alt || `gallery-${idx}`}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transform transition-transform duration-500 hover:scale-105"
                priority={idx < 4} // preload most important images
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
