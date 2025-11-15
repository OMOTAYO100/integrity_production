import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Oops! Something went wrong, please try again.");
      });
  };

  return (
   <section id="contact" className="p-6 md:p-20 bg-black text-white">
  {/* Header */}
  <div className="mb-12 space-y-3">
    <h2 className="text-4xl md:text-6xl text-center font-bold">
      Let's <span className="text-yellow-500">Connect</span>
    </h2>
    <p className="text-center text-gray-300">
      Ready to create something amazing together? Contact me to discuss your next project.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row gap-10">
    {/* CONTACT FORM */}
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-2/3 bg-[#212529] p-8 md:p-12 rounded-xl space-y-4 shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>

      <div className="flex flex-col md:flex-row gap-4">
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
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 text-black font-semibold p-3 rounded-md hover:bg-yellow-600 transition"
      >
        Send Message
      </button>
    </form>

    {/* RIGHT SIDE CARDS */}
    <div className="flex flex-col gap-6 w-full lg:w-1/3">

      {/* Studio Info */}
      <div className="bg-[#212529] p-4 rounded-xl text-center space-y-4 shadow-lg">
        <h3 className="text-2xl font-semibold">Studio Information</h3>

        <div>
          <p className="text-yellow-500 font-semibold text-lg">Integrity Studio</p>
          <p className="text-gray-300">1234 Music Row, Los Angeles, CA 90028</p>
        </div>

        <div>
          <p className="text-yellow-500 font-semibold text-lg">+234 814 625 5425</p>
          <p className="text-gray-300">Available 9 AM - 9 PM PST</p>
        </div>

        <div>
          <p className="text-yellow-500 font-semibold text-lg">info@beatmaster.com</p>
          <p className="text-gray-300">Replies within 24 hours</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-[#212529] p-4 rounded-xl text-center space-y-4 shadow-lg">
        <h3 className="text-2xl text-yellow-500 font-semibold flex items-center justify-center gap-2">
          <FaHashtag /> Follow Me
        </h3>

      <div className="flex justify-center gap-6 text-2xl">
  <a
    href="https://instagram.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-500 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="https://facebook.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-500 transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://youtube.com/yourchannel"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-500 transition"
  >
    <FaYoutube />
  </a>

  <a
    href="https://open.spotify.com/artist/your-id"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-500 transition"
  >
    <FaSpotify />
  </a>
</div>


        <p className="text-gray-300">
          Follow for behind-the-scenes content, new releases, and exclusive offers.
        </p>
      </div>

      {/* Quick Response */}
      <div className="bg-yellow-500 text-black p-4 rounded-xl text-center space-y-4 shadow-lg">
        <h3 className="text-xl  font-semibold flex items-center justify-center gap-2">
          <BsLightningChargeFill /> Quick Response Guarantee
        </h3>
        <p>
          I respond to all serious inquiries within 24 hours. Let’s start creating your next hit today!
        </p>
      </div>

    </div>
  </div>
</section>

  );
}

export default ContactSection;
