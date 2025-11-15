// src/components/BookSection.jsx
import { useState } from "react";

function BookSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your booking request has been received.`);
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <section
      id="book"
      className="px-6 py-20 bg-gray-900 text-white flex justify-center items-center"
    >
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Book a Section
        </h2>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-md bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-1/2 p-3 rounded-md bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold p-3 rounded-md hover:bg-yellow-600 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookSection;
