import React from "react";
import HeroBg from "../assets/microphone-A.jpg";
import { FaPlay } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

function HeroSection({openModal}) {
  return (
    <section
      className="max-h-fit bg-cover bg-center flex justify-center p-6 md:p-20 text-white font-Figtree"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="flex flex-col space-y-4">
        <h2 className="text-5xl md:text-4xl lg:text-6xl sm:w-[60%] font-bold">CRAFTING <span className="text-yellow-500">HIT</span> BEATS THAT <span className="text-yellow-500">DOMINATE</span> THE CHARTS</h2>
        <p className="text-2xl font-semibold sm:w-[60%]">From soulful melodies to hard-hitting rhythms, we bring your sound to life with precision, passion, and creativity. 
          Step into the studio where every beat tells a story and every track becomes a masterpiece.</p>

          <div className="mt-8 flex flex-col md:flex-row gap-10 sm:gap-4">
            <button className="bg-yellow-500 p-4 rounded-xl text-2xl drop-shadow-[0_0_2px_white] text-black flex justify-center items-center gap-2 rotate-15 animate-bounce"><FaPlay className="inline-block text-2xl drop-shadow-[0_0_2px_white]" />Listen Now</button>
            <button   onClick={openModal} className="border-2 border-white p-4 rounded-xl text-2xl shadow-sm shadow-white flex justify-center items-center gap-2"><CiBookmark className="inline-block font-bold text-3xl drop-shadow-[0_0_2px_white]" />Book section</button>
          </div>

      </div>
    </section>
  );
}

export default HeroSection;
