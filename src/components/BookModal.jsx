import { useState } from "react";
import emailjs from "emailjs-com";

function BookModal({ isOpen, onClose }) {
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

    emailjs.send(
      "service_qd7dh3w",    // Replace with your EmailJS Service ID
      "template_54dix8t",   // Replace with your EmailJS Template ID
      formData,
      "0vc5ZYvFCXzuVjVeH"     // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert("Booking request sent successfully!");
      setFormData({ name: "", email: "", date: "", time: "", message: "" });
      onClose(); // Close the modal
    }, (err) => {
      console.error("FAILED...", err);
      alert("Oops! Something went wrong, please try again.");
    });
  };

  if (!isOpen) return null; // Do not render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 rounded-xl shadow-lg w-full max-w-3xl p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold hover:text-yellow-500"
        >
          &times;
        </button>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
          Book a Section
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default BookModal;
