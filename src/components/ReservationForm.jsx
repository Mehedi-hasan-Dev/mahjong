"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    persons: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
  };

  return (
    <section>
      {/* Hero */}
      <div className="relative h-64 md:h-80">
        <img
          src="/bar3.jpeg"
          alt="Reservation Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">
            Make Online Reservation
          </h1>
          <p className="italic text-amber-200 mt-1">
            Booking a table online is easy
          </p>
        </div>
      </div>

      {/* Reservation Info */}
      <div className="max-w-4xl mx-auto px-4 py-12 bg-white">
        <div className="text-center mb-8">
          <h2 className="uppercase tracking-widest font-semibold text-gray-800">
            Reservation Info
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center my-2">
            <div className="w-10 h-px bg-amber-500"></div>
            <span className="mx-3">🍽</span>
            <div className="w-10 h-px bg-amber-500"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Newer restaurant-goers have also referred to the supposed restaurant
            owner's eccentric habit of treating her custom cuttlefish to the
            establishment, dressed in elaborate fashions and brandishing a
            sword.
          </p>

          
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Book a Table */}
          <div className="space-y-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 h-[48px]"
              required
            />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black focus:outline-none focus:border-amber-500 h-[48px]"
              required
            >
              <option value="">Time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>2:00 PM</option>
              <option>6:00 PM</option>
            </select>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black focus:outline-none focus:border-amber-500 h-[48px]"
              required
            >
              <option value="">Location</option>
              <option>New York City</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
            <select
              name="persons"
              value={formData.persons}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black focus:outline-none focus:border-amber-500 h-[48px]"
              required
            >
              <option value="">Persons</option>
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>4 Persons</option>
              <option>6 Persons</option>
            </select>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 h-[48px]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 h-[48px]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 h-[48px]"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-black p-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-amber-500 h-[48px] resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 uppercase text-sm tracking-wide hover:bg-amber-600 transition"
            >
              Make a reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
