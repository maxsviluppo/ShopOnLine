import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDER_IMAGES } from '../constants';

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDER_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  return (
    <div className="relative w-full max-w-[1500px] mx-auto group">
      {/* Gradient Overlay for Amazon effect */}
      <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-gray-100 to-transparent z-10 pointer-events-none"></div>

      <div className="overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <img 
          src={SLIDER_IMAGES[currentIndex]} 
          alt={`Slide ${currentIndex}`} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out mask-image-gradient"
        />
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/4 bottom-1/4 left-2 p-2 rounded hover:border hover:border-white focus:outline-none hidden group-hover:block z-20"
      >
        <ChevronLeft size={48} className="text-gray-800 bg-white/50 rounded-full p-1" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/4 bottom-1/4 right-2 p-2 rounded hover:border hover:border-white focus:outline-none hidden group-hover:block z-20"
      >
        <ChevronRight size={48} className="text-gray-800 bg-white/50 rounded-full p-1" />
      </button>
    </div>
  );
};

export default HeroSlider;