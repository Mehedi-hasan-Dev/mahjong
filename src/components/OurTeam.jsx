export default function OurTeam() {
  const team = [
    {
      name: "Andy Moore",
      role: "Master chef in Brooklyn",
      image: "/images/team1.jpg",
    },
    {
      name: "Jhon Doe",
      role: "Master chef in Florida",
      image: "/images/team2.jpg",
    },
    {
      name: "Andy Moore",
      role: "Master chef in Bronx",
      image: "/images/team3.jpg",
    },
    {
      name: "Andy Moore",
      role: "Master chef in Miami",
      image: "/images/team4.jpg",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl italic text-[#b29055]">Our Team</h2>
        <h3 className="text-lg font-bold uppercase mt-1 text-black">
          High-Class Professional Service
        </h3>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Numerous commentators have also referred to the supposed restaurant
          owner's eccentric habit of touting for custom outside his
          establishment, dressed in aristocratic fashion and brandishing a sword
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center mt-4 mb-8">
          <div className="h-[1px] w-16 bg-gray-300"></div>
          <span className="mx-4 text-[#b29055]">❧</span>
          <div className="h-[1px] w-16 bg-gray-300"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-gray-200"
              />
              <h4 className="mt-4 font-bold">{member.name}</h4>
              <p className="text-sm text-[#b29055]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
