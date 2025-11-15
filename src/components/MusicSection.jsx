import { useState, useRef } from "react";
import MusicData from "../data/MusicData";
import { FaPlay, FaPause } from "react-icons/fa";

function MusicSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const filteredMusic =
    selectedCategory === "All"
      ? MusicData
      : MusicData.filter((item) => item.category === selectedCategory);

  const handleTogglePlay = (song) => {
    // If the same song is clicked → toggle play/pause
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

    // If a new song is clicked
    setCurrentSong(song);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 100);
  };

  const categories = [
    "All",
    "Hip-Hop",
    "R&B",
    "Electronic",
    "Jazz",
    "Gospel",
    "Pop",
  ];

  return (
    <section id="work" className="bg-black text-white p-6 md:p-20 ">
      <div className="flex flex-col space-y-8 justify-self-center">
        <h2 className="relative text-4xl text-center md:text-7xl before:content-[''] before:absolute before:w-35 sm:before:w-70 before:h-1 before:rounded-full before:-bottom-3 before:left-25 sm:before:left-12 before:bg-yellow-500">
          Featured <span className="text-yellow-500">Work</span>
        </h2>
        <p className="text-xl text-center sm:w-[80%] sm:mx-auto">
          Explore my latest productions and collaborations across genres.
        </p>
      </div>

      <div className="p-10">
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 *:rounded-md *:border *:border-slate-200 text-white *:px-5 *:py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${
                selectedCategory === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        
        <div className="grid mt-10 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
  {filteredMusic.map((item) => (
    <div
      key={item.id}
      className="relative group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg w-full"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />

      <div className="absolute inset-0 bg-black/50 sm:opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
        <button
          className="bg-yellow-500 text-black p-5 rounded-full"
          onClick={() => handleTogglePlay(item)}
        >
          {currentSong?.id === item.id && isPlaying ? (
            <FaPause />
          ) : (
            <FaPlay />
          )}
        </button>
      </div>

      <div className="p-4 text-white space-y-1">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-300">{item.artist}</p>
        <p className="text-xs text-gray-400">{item.category}</p>
        <p className="text-xs text-gray-400">
          {item.album} • {item.releaseYear}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* HIDDEN AUDIO ELEMENT */}
        <audio ref={audioRef} src={currentSong?.audio} hidden />
      </div>
    </section>
  );
}

export default MusicSection;
