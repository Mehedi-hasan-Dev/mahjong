import Image from "next/image";

export default function OpeningHours() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner.jpeg"
          alt="Restaurant Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Top Zigzag */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 20"
          preserveAspectRatio="none"
          className="w-full h-6 fill-white"
        >
          <polygon points="0,20 10,0 20,20 30,0 40,20 50,0 60,20 70,0 80,20 90,0 100,20 110,0 120,20 130,0 140,20 150,0 160,20 170,0 180,20 190,0 200,20 210,0 220,20 230,0 240,20 250,0 260,20 270,0 280,20 290,0 300,20 310,0 320,20 330,0 340,20 350,0 360,20 370,0 380,20 390,0 400,20 410,0 420,20 430,0 440,20 450,0 460,20 470,0 480,20 490,0 500,20" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2
          className="text-white text-3xl font-bold tracking-widest"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          OPENING HOURS
        </h2>
        <p
          className="text-[#c19b6b] italic mt-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Call For Reservations
        </p>
        <span className="text-white text-lg mt-1">•</span>

        <div className="grid grid-cols-3 items-center gap-4 mt-6">
          <div>
            <p
              className="text-[#c19b6b] italic"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Sunday to Tuesday
            </p>
            <p className="text-white font-bold">09:00</p>
            <p className="text-white font-bold">22:00</p>
          </div>

          <div className="border-l-2 border-dotted border-[#c19b6b] h-full mx-auto" />

          <div>
            <p
              className="text-[#c19b6b] italic"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Friday to Saturday
            </p>
            <p className="text-white font-bold">11:00</p>
            <p className="text-white font-bold">19:00</p>
          </div>
        </div>

        <p
          className="mt-6 text-[#c19b6b] italic"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          +7 (111) 123456789
        </p>
      </div>

      {/* Bottom Zigzag */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 20"
          preserveAspectRatio="none"
          className="w-full h-6 fill-white"
        >
          <polygon points="0,20 10,0 20,20 30,0 40,20 50,0 60,20 70,0 80,20 90,0 100,20 110,0 120,20 130,0 140,20 150,0 160,20 170,0 180,20 190,0 200,20 210,0 220,20 230,0 240,20 250,0 260,20 270,0 280,20 290,0 300,20 310,0 320,20 330,0 340,20 350,0 360,20 370,0 380,20 390,0 400,20 410,0 420,20 430,0 440,20 450,0 460,20 470,0 480,20 490,0 500,20" />
        </svg>
      </div>
    </section>
  );
}
