import AboutBg from "../assets/studio-E.jpeg";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { IoIosStar } from "react-icons/io";

function AboutSection() {
  return (
    <section id="about" className="bg-[#212529] p-6 md:p-20 text-white font-Figtree">
      <div className="flex flex-col md:flex-row gap-6">
        <figure className="md:w-1/2 max-h-screen">
          <img
            className="rounded-2xl h-[80vh]"
            src={AboutBg}
            alt="About-image"
          />
        </figure>

        <div className="flex flex-col space-y-4 md:w-1/2 ">
          <h2 className="text-center text-3xl md:text-5xl font-bold">
            About <span className="text-yellow-500">Integrity</span> Production
          </h2>
          <p className="text-lg">
            With over a decade in the music industry, I've crafted sounds for
            multi-platinum artists and rising stars alike. My signature
            production style blends innovative sound design with timeless
            musicality.
          </p>
          <p className="text-lg">
            With over a decade in the music industry, I've crafted sounds for
            multi-platinum artists and rising stars alike. My signature
            production style blends innovative sound design with timeless
            musicality.
          </p>

          <div className="space-y-2">
            <h2 className="text-yellow-500 font-semibold text-2xl">
              Genres $ Specialties:
            </h2>
            <ul className="flex gap-2 flex-wrap *:bg-[#6c757d] *:px-2 *:rounded-sm">
              <li>Hip-Hop</li>
              <li>R & B</li>
              <li>Blues</li>
              <li>Electronics</li>
              <li>Pop</li>
              <li>Soul</li>
              <li>Gospel</li>
              <li>Classical</li>
              <li>Country</li>
              <li>Jazz</li>
              <li>Reggae</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-8 grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
        <div className="flex flex-col items-center space-y-2">
          <p className="bg-yellow-500 p-4 rounded-full">
            <IoIosMusicalNotes className="text-5xl text-black" />
          </p>
          <h2 className="text-2xl font-semibold text-yellow-500">500+</h2>
          <p className="text-xl font-semibold">Tracks Produced</p>
        </div>
        <div  className="flex flex-col items-center space-y-2">
          <p className="bg-yellow-500 p-4 rounded-full">
            <IoIosPeople className="text-5xl text-black" />
          </p>
          <h2 className="text-2xl font-semibold text-yellow-500">100+</h2>
          <p className="text-xl font-semibold text-center">Artist Worked With</p>
        </div>
        <div  className="flex flex-col items-center space-y-2">
          <p className="bg-yellow-500 p-4 rounded-full">
            <LiaAwardSolid className="text-5xl text-black" />
          </p>
          <h2 className="text-2xl font-semibold text-yellow-500">8+</h2>
          <p className="text-xl font-semibold">Awards Won</p>
        </div>
        <div  className="flex flex-col items-center space-y-2">
          <p className="bg-yellow-500 p-4 rounded-full">
            <IoIosStar className="text-5xl text-black" />
          </p>
          <h2 className="text-2xl font-semibold text-yellow-500">30m+</h2>
          <p className="text-xl font-semibold">Stream Generated</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
