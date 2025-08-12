import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact">
      {/* Hero */}
      <div className="relative h-64 md:h-80">
        <Image
          src="/bar2.jpeg" // put your image inside /public
          alt="Contact Banner"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
            Our Contacts
          </h1>
          <p className="italic text-amber-200 mt-1 text-lg">Where to find us</p>
        </div>

        {/* Zigzag border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            viewBox="0 0 500 40"
            preserveAspectRatio="none"
            className="w-full h-6 text-white"
            fill="currentColor"
          >
            <path d="M0,0 250,40 500,0 V40 H0 Z" />
          </svg>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column */}
          <div>
            <h3 className="uppercase font-bold text-gray-800 mb-2">
              Contact Info
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Numerous conversations have also referred to the supposed
              restaurant owner&apos;s eccentric habit of treating her custom
              cuttlefish to the establishment, dressed in elaborate fashions and
              brandishing a sword.
            </p>
            <p className="text-sm text-gray-600">
              Numerous conversations have also referred to the supposed
              restaurant owner&apos;s eccentric habit of treating her custom
              cuttlefish to the establishment, dressed in elaborate fashions and
              brandishing a sword.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h4 className="uppercase font-semibold text-gray-700 mb-2">
              Laremy - New York City
            </h4>
            <p className="text-sm text-gray-600">
              270 St. Dublin, New York, NY 10025
            </p>
            <p className="text-sm text-gray-600">+123 456 789</p>
            <p className="text-sm text-gray-600">youremail@domain.com</p>

            <h4 className="uppercase font-semibold text-gray-700 mt-6 mb-2">
              Laremy - Washington
            </h4>
            <p className="text-sm text-gray-600">
              270 St. Dublin, New York, NY 10025
            </p>
            <p className="text-sm text-gray-600">+123 456 789</p>
            <p className="text-sm text-gray-600">youremail@domain.com</p>
            
          </div>

          {/* Right Column */}
          <div>
            <h4 className="uppercase font-semibold text-gray-700 mb-2">
              Laremy - Florida
            </h4>
            <p className="text-sm text-gray-600">
              270 St. Dublin, New York, NY 10025
            </p>
            <p className="text-sm text-gray-600">+123 456 789</p>
            <p className="text-sm text-gray-600">youremail@domain.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  mt-2 mb-5">
              <div className="w-10 h-px bg-gray-300"></div>
              <div className="mx-2 text-amber-600">•</div>
              <div className="w-10 h-px bg-gray-300"></div>
            </div>
    </section>
  );
}
