import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import MusicSection from "./components/MusicSection";
import BookModal from "./components/BookModal";
import KnowMoreSection from "./components/KnowMoreSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <Navbar openModal={() => setIsModalOpen(true)} />
      <HeroSection openModal={() => setIsModalOpen(true)} />
        <AboutSection />
        <TestimonialSection />
        <MusicSection />
        <KnowMoreSection />
        <ServicesSection />
        <ContactSection />
        <BookModal  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
     
      </div>
    </>
  );
}

export default App;
