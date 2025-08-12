// components/OurStory.js
import Image from "next/image";
import foodImage from "./../../public/food.jpeg"; // replace with your own

export default function OurStory() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
        {/* Left */}
        <div>
          {/* Heading */}
          <h2
            className="text-5xl text-[#c19b6b] mb-2 text-center"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Discover
          </h2>

          <div className="flex items-center justify-center gap-3 mb-2 text-center">
            <span className="h-[2px] w-8 bg-[#c19b6b]"></span>
            <span
              className="text-base font-bold tracking-wider text-center text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              OUR STORY
            </span>
            <span className="h-[2px] w-8 bg-[#c19b6b]"></span>
          </div>

          {/* Floral Icon */}
          <div className="my-4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#c19b6b"
              viewBox="0 0 24 24"
            >
              <path d="M8.586 8.586a2 2 0 0 1 2.828 0l4 4a2 2 0 0 1-2.828 2.828l-4-4a2 2 0 0 1 0-2.828zm6.828-6.828a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1-2.828 2.828L14.586 4.586a2 2 0 0 1 0-2.828z" />
            </svg>
          </div>

          {/* Paragraphs */}
          <p
            className="text-gray-700 text-sm leading-relaxed mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The History of Kitchens and Cooks gives further intimation on Mr
            Boulanger usual menu, stating confidently that{" "}
            <span className="text-[#c19b6b]">
              "Boulanger served salted poultry and fresh eggs, all presented
              without a tablecloth on small marble tables"
            </span>
            . Numerous commentators have also referred to the supposed
            restaurant owner's eccentric habit of touting for custom outside his
            establishment, dressed in aristocratic fashion and brandishing a
            sword.
          </p>
          <p
            className="text-gray-700 text-sm leading-relaxed mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Numerous commentators have also referred to the supposed restaurant
            owner's eccentric habit of touting for custom outside his
            establishment, dressed in aristocratic fashion and brandishing a
            sword.
          </p>

          {/* Link */}
          <p
            className="italic text-[#c19b6b] font-semibold cursor-pointer hover:underline lg:pl-2.5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            DISCOVER OUR MENU
          </p>
        </div>

        {/* Right */}
        <div className="relative w-full h-[450px]">
          <Image
            src={foodImage}
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
