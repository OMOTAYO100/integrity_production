import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";

function MusicLinks() {
  return (
   <section className="p-6 flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 via-[#2e2c21] to-slate-900">
 <div className="p-12  text-white space-y-4">
      <h2 className="text-3xl font-bold text-center">Want to Hear More?</h2>
      <p className="text-lg text-center">Stream my full discography on all major platforms</p>

      <div className="flex gap-4 flex-wrap justify-center mt-4">
        <button className="flex items-center gap-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md transition">
          <FaSpotify className="inline-block" /> Spotify
        </button>
        <button className="flex items-center gap-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md transition">
          <SiAudiomack className="inline-block
          " /> Audiomack
        </button>
        <button className="flex items-center gap-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md transition">
          <FaApple className="inline-block" /> Apple Music
        </button>
        <button className="flex items-center gap-2 border-2 border-yellow-500 text-yellow-500  hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md transition">
          <FaYoutube className="inline-block" /> YouTube
        </button>
      </div>
    </div>
   </section>
  );
}

export default MusicLinks;
