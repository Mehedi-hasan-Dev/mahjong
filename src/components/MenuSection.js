"use client";

import { useEffect, useState } from "react";

export default function MenuSection({ jsonPath }) {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((data) => setMenuData(data));
  }, [jsonPath]);

  if (!menuData) return null;

  const mid = Math.ceil(menuData.dishes.length / 2);
  const leftCol = menuData.dishes.slice(0, mid);
  const rightCol = menuData.dishes.slice(mid);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-cursive text-amber-600">
          {menuData.title}
        </h2>
        <p className="text-sm font-bold tracking-wider mt-1 text-gray-600 uppercase">
          {menuData.subtitle}
        </p>

        {/* Divider with icon */}
        <div className="flex items-center justify-center mt-2">
          <div className="w-12 h-px bg-gray-300"></div>
          <span className="mx-3 text-amber-600 text-lg">🍽</span>
          <div className="w-12 h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Menu columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[leftCol, rightCol].map((col, idx) => (
          <div key={idx} className="space-y-8">
            {col.map((dish, i) => (
              <div
                key={i}
                className={`${
                  dish.chefSelection
                    ? "border border-amber-500 p-4 rounded-sm"
                    : ""
                }`}
              >
                {dish.chefSelection && (
                  <span className="bg-amber-500 text-white text-[11px] px-2 py-1 uppercase tracking-wide font-semibold mb-2 inline-block">
                    {dish.label || "Chef Selection"}
                  </span>
                )}

                <div className="flex justify-between items-center border-b border-dotted border-gray-700 pb-1">
                  <h3 className="font-semibold italic text-gray-800">
                    {dish.name}
                  </h3>
                  <span className="font-semibold text-gray-800">
                    ${dish.price}
                  </span>
                </div>
                {dish.description && (
                  <p className="text-sm text-gray-500 mt-1">
                    {dish.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
