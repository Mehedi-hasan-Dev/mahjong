"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RestaurantSection() {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Carousel */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Food ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div className="px-4 max-sm:text-center">
          <h2 className="text-4xl font-bold text-[#b29055] italic">
            Our restorans
          </h2>
          <h3 className="text-lg font-semibold mt-1 tracking-widest text-black">
            NATOQUE PENATIBUS
          </h3>
          <div className="flex justify-center my-2">
            <span className="text-[#b29055]">❧</span>
          </div>
          <p className="text-gray-600 mb-4">
            The History of Kitchens and Cooks gives further intimation on Mr
            Boulanger usual menu, stating confidently that "Boulanger served
            salted poultry and fresh eggs, all presented without a tablecloth on
            small marble tables". Numerous commentators have also referred to
            the supposed restaurant owner's eccentric habit of touting for
            custom outside his establishment, dressed in aristocratic fashion
            and brandishing a sword.
          </p>
          <p className="text-gray-600 mb-4">
            Restaurant owner's eccentric habit of touting for custom outside his
            establishment, dressed in aristocratic fashion and brandishing a
            sword
          </p>
          <a
            href="#"
            className="text-[#b29055] italic font-semibold hover:underline"
          >
            VIEW GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}
