import React, { useState, useEffect } from "react";
import Testimonials from "../data/Testimonials";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === Testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Testimonials.length - 1 : prev - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, message, role, name } = Testimonials[currentIndex];

  return (
    <section className="py-16 bg-[#212529] text-white flex flex-col items-center justify-center text-center px-6 relative">
      <h2 className="text-3xl font-bold mb-10 text-yellow-400">
        What Our Clients Say
      </h2>

      <div className="max-w-2xl bg-[#212529] p-8 rounded-2xl shadow-lg transition-all duration-500 ease-in-out relative">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-[-100px] top-1/2 -translate-y-1/2 bg-gray-700 p-3 rounded-full hover:bg-yellow-400 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Testimonial Content */}
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-400"
        />
        <p className="italic mb-6 text-lg">“{message}”</p>
        <h3 className="font-semibold text-xl">{name}</h3>
        <span className="text-sm text-gray-400">{role}</span>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-[-100px] top-1/2 -translate-y-1/2 bg-gray-700 p-3 rounded-full hover:bg-yellow-400 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-6">
        {Testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-yellow-400" : "bg-gray-500"
            } transition-all`}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
