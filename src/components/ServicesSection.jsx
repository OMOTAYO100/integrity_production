import React from "react";
import { FaMusic, FaHeadphonesAlt, FaMicrophone, FaStar } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

function ServicesSection() {
  return (
    <section id="services" className="p-6 md:p-20 bg-[#212529] text-white">
      {/* Heading */}
      <div className="flex flex-col space-y-6 items-center">
        <h2
          className="relative text-4xl md:text-7xl font-bold text-center 
          before:content-[''] before:absolute before:w-40 md:before:w-80 
          before:h-1 before:rounded-full before:-bottom-3 before:left-3 before:bg-yellow-500"
        >
          Production <span className="text-yellow-500">Services</span>
        </h2>

        <p className="text-lg md:w-[75%] mx-auto text-center">
          Comprehensive music production services to elevate your sound from
          concept to commercial release.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-3 gap-6 mt-12 items-stretch">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-4 border border-gray-400 rounded-xl p-6 h-full hover:border-yellow-500 hover:scale-y-105 hover:scale-x-100 transition-all duration-300">
          <div className="text-4xl p-5 bg-yellow-500 rounded-full flex justify-center items-center">
            <FaMusic />
          </div>
          <h2 className="text-center font-semibold text-3xl">
            Beat Production
          </h2>
          <p className="text-center text-lg">
            Custom beats crafted to your unique style and vision.
          </p>
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <IoCheckmarkCircle className="inline-block text-yellow-500" />{" "}
              Original compositions tailored to your sound
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-blue-500" />{" "}
              Multi-genre expertise with signature sound
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-red-500" />{" "}
              Unlimited revisions until perfect
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-green-500" /> Stem
              files included for full flexibility
            </li>
          </ul>
          <p className="text-xl text-center font-semibold text-yellow-500">
            Starting at <sup>$</sup>500
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-4 border border-gray-400 rounded-xl p-6 h-full hover:border-blue-500 hover:scale-y-105 hover:scale-x-100 transition-all duration-300">
          <div className="text-4xl p-5 bg-yellow-500 rounded-full flex justify-center items-center">
            <FaHeadphonesAlt />
          </div>
          <h2 className="text-center font-semibold text-3xl">
            Mixing & Mastering
          </h2>
          <p className="text-center text-lg">
            Professional mixing and mastering for radio-ready sound.
          </p>
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <IoCheckmarkCircle className="inline-block text-yellow-500" />{" "}
              Industry-standard quality for all platforms
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-blue-500" />{" "}
              Multiple format delivery (WAV, MP3, etc.)
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-red-500" />{" "}
              Reference track matching available
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-green-500" />{" "}
              48-hour turnaround available
            </li>
          </ul>
          <p className="text-xl text-center font-semibold text-yellow-500">
            Starting at <sup>$</sup>300
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-4 border border-gray-400 rounded-xl p-6 h-full hover:border-yellow-500 hover:scale-y-105 hover:scale-x-100 transition-all duration-300">
          <div className="text-4xl p-5 bg-yellow-500 rounded-full flex justify-center items-center">
            <FaMicrophone />
          </div>
          <h2 className="text-center font-semibold text-3xl">
            Full Production
          </h2>
          <p className="text-center text-lg">
            Complete song production from concept to completion.
          </p>
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <IoCheckmarkCircle className="inline-block text-yellow-500" />{" "}
              Songwriting & creative arrangement
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-blue-500" />{" "}
              Professional studio recording session
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-red-500" />{" "}
              Premium mixing & mastering package
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-green-500" />{" "}
              Advanced vocal tuning & sound enhancement
            </li>
            <li>
              <IoCheckmarkCircle className="inline-block text-gray-500" /> Final
              export in all required formats
            </li>
          </ul>

          <p className="text-xl text-center font-semibold text-yellow-500">
            Starting at <sup>$</sup>1300
          </p>
        </div>
      </div>


      

      <div className="mt-24">
        <h2 className="relative text-2xl sm:text-4xl font-bold 
          before:content-[''] before:absolute before:w-30 sm:before:w-45  
          before:h-1 before:rounded-full before:-bottom-3 before:left-0 
           before:bg-yellow-500">production <span className="text-yellow-500 ">packages</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div
  className="flex flex-col items-center gap-4 border border-gray-400 rounded-xl p-6 h-full 
  hover:border-yellow-500 hover:scale-105 transition-all duration-300"
>
  <h2 className="text-center font-semibold text-3xl">Starter</h2>

  <p className="text-center text-4xl text-yellow-500 font-semibold">
    $300 <sub>per track</sub>
  </p>
  <p className="text-center text-lg">Best for beginners</p>

  <ul className="flex flex-col gap-3 text-center">
    <li><IoCheckmarkCircle className="inline-block text-green-500" /> Entry-level beat</li>
    <li><IoCheckmarkCircle className="inline-block text-blue-500" /> 1 revision</li>
    <li><IoCheckmarkCircle className="inline-block text-red-500" /> MP3 included</li>
    <li><IoCheckmarkCircle className="inline-block text-yellow-500" /> Delivery in 72 hours</li>
    <li><IoCheckmarkCircle className="inline-block text-purple-500" /> Basic mixing</li>
  
  </ul>

  <button className="mt-6 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition">
    Choose Package
  </button>
</div>


          <div
            className="relative flex flex-col items-center gap-4 border border-gray-400 rounded-xl p-6 h-full 
    hover:border-yellow-500 hover:scale-105 transition-all duration-300 "
          >
            {/* Most Popular Badge */}
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 
      bg-yellow-500 text-black font-semibold text-sm px-4 py-1 rounded-full shadow-md"
            >
              MOST POPULAR
            </span>

            {/* Heading */}
            <h2 className="text-center font-semibold text-3xl mt-4">
              Professional
            </h2>

            {/* Price */}
            <p className="text-center text-4xl text-yellow-500 font-semibold">
              $1500 <sub className="text-base text-gray-600">per track</sub>
            </p>

            <p className="text-center text-lg">Ideal for serious artists</p>

            {/* Features */}
            <ul className="flex flex-col gap-4 text-center mt-2">
              <li>
                <IoCheckmarkCircle className="inline-block text-yellow-500" />{" "}
                Premium beat production
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-blue-500" />{" "}
                Professional mixing & mastering
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-red-500" />{" "}
                Unlimited revisions
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-green-500" />{" "}
                All file formats included
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-purple-500" />{" "}
                24-hour turnaround
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-teal-500" />{" "}
                Stem files included
              </li>
            </ul>

            {/* Button */}
            <button className="mt-6 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition">
              Choose Package
            </button>
          </div>

          <div
            className="flex flex-col items-center gap-4 border border-gray-400 rounded-xl p-6 h-full 
  hover:border-yellow-500 hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-center font-semibold text-3xl">Premium</h2>

            <p className="text-center text-4xl text-yellow-500 font-semibold">
              $800 <sub className="text-base text-gray-600">per track</sub>
            </p>
            <p className="text-center text-lg">Perfect for growing artists</p>

            <ul className="flex flex-col gap-4 text-center">
              <li>
                <IoCheckmarkCircle className="inline-block text-blue-500" />{" "}
                High-quality beat production
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-yellow-500" />{" "}
                Basic mixing included
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-red-500" /> 3
                revisions
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-green-500" />{" "}
                MP3 + WAV files
              </li>
              <li>
                <IoCheckmarkCircle className="inline-block text-teal-500" />{" "}
                Delivery in 48 hours
              </li>
            </ul>

            <button className="mt-6 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition">
              Choose Package
            </button>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-6 justify-center items-center p-6 md:p-20 mt-20 bg-gradient-to-r from-slate-900 via-[#2e2c21] to-slate-900">
        <div>
            {<FaStar className="text-6xl text-yellow-500"/>}
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold text-center w-[80%] mx-auto sm:w-full">Ready to Elevate Your Sound?</h2>
        <p className="text-xl w-[70%] text-center">Book a consultation to discuss your project and get a custom quote tailored to your needs.</p>
        <div className="flex flex-col sm:flex-row gap-6 *:border-2 *:px-8 *:py-2 *:rounded-lg">
            <button className="bg-yellow-500 text-black font-semibold rotate-8 animate-pulse">Book Consultation</button>
            <button>Get Quote</button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
