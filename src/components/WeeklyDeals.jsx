export default function WeeklyDeals() {
  const deals = [
    { day: "MONDAY", desc: "(labore et dolore)", dish: "Oatmeal Apples", price: 26 },
    { day: "TUESDAY", desc: "(scornam accumsan)", dish: "Soft shell crab", price: 90 },
    { day: "WEDNESDAY", desc: "(nullam ut labore)", dish: "Miso chicken", price: 20 },
    { day: "THURSDAY", desc: "(adipiscing elit)", dish: "Fish pie", price: 44 },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/bar1.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-4 md:px-20">
        {/* Title + Subtitle centered */}
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h2 className="text-white text-4xl font-bold uppercase tracking-wide">
            WEEKLY DEALS
          </h2>
          <p className="text-[#b29055] italic mt-2">
            Investigationes demonstraverunt lectores
          </p>
        </div>

        {/* Deals list */}
        <div className="space-y-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-white"
            >
              <div>
                <span className="font-bold uppercase">{deal.day} </span>
                <span className="text-sm italic text-gray-300">{deal.desc}</span>
                <p className="italic text-lg text-[#b29055]">{deal.dish}</p>
              </div>
              <div className="flex-grow border-b border-dotted border-gray-400 mx-4"></div>
              <div className="text-[#b29055] font-bold">${deal.price}</div>
            </div>
          ))}
        </div>

        {/* Reservation */}
        <div className="mt-8">
          <a
            href="#"
            className="italic text-[#b29055] font-semibold hover:underline"
          >
            ONLINE RESERVATION
          </a>
        </div>
      </div>
    </section>
  );
}
