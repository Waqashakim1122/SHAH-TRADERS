import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

import hero1 from '../assets/Hero/image1.jpg';
import hero2 from '../assets/Hero/image2.jpg';
import hero3 from '../assets/Hero/image3.jpg';
import hero4 from '../assets/Hero/image4.jpg';

const backgrounds = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [trackingId, setTrackingId] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentBg(index);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      console.log('Tracking:', trackingId);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Backgrounds */}
      {backgrounds.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={url}
            alt={`Logistics scene ${index + 1}`}
            className="w-full h-full object-cover brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 text-center py-16 sm:py-20 md:py-0">
        {/* Headline */}
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-display font-bold leading-tight mb-4 sm:mb-6 
          tracking-tight text-white animate-fade-in
          drop-shadow-2xl px-2
        ">
          End-to-End Fulfillment
          <br />
          <span className="inline-block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Built for Scale
          </span>
        </h1>

        {/* Professional Description */}
        <p className="
          text-sm sm:text-base md:text-lg
          text-gray-200 mb-8 sm:mb-10 
          max-w-md sm:max-w-xl md:max-w-2xl mx-auto 
          font-normal leading-relaxed animate-fade-in delay-200
          drop-shadow-lg px-4
        ">
          Transform your supply chain with our comprehensive 3PL solutions. From precision warehousing and custom packaging to same-day fulfillment, we deliver the operational excellence your business demands—backed by real-time visibility at every touchpoint.
        </p>

        {/* Tracking Input */}
        <div className="max-w-xs sm:max-w-md lg:max-w-lg mx-auto animate-fade-in delay-300 mb-12 sm:mb-16 px-4">
          <form onSubmit={handleTrack}>
            <div className="
              relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden 
              shadow-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300
            ">
              <div className="absolute left-3 xs:left-4 sm:left-5 text-cyan-400 pointer-events-none">
                <Search size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>

              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter tracking number"
                className="
                  w-full bg-transparent border-none text-white 
                  placeholder-gray-300 text-sm sm:text-base 
                  pl-10 sm:pl-14 pr-24 sm:pr-36 
                  py-3 sm:py-4 
                  focus:outline-none
                "
              />

              <button 
                type="submit"
                className="
                  absolute right-1 sm:right-2 
                  px-4 sm:px-8 py-2 sm:py-3 
                  rounded-2xl font-semibold text-xs sm:text-sm
                  bg-gradient-to-r from-cyan-500 to-blue-600
                  hover:from-cyan-400 hover:to-blue-500
                  transition-all duration-300 shadow-glow-cyan
                  active:scale-95
                  whitespace-nowrap
                "
              >
                Track
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300
              ${index === currentBg 
                ? 'bg-cyan-400 scale-125 shadow-glow-cyan' 
                : 'bg-white/40 hover:bg-white/70'}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .shadow-glow-cyan { box-shadow: 0 0 15px rgba(0, 212, 255, 0.6); }
        .animate-fade-in { animation: fadeInUp 1.2s ease-out forwards; opacity: 0; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .bg-clip-text { -webkit-background-clip: text; background-clip: text; }
      `}</style>
    </section>
  );
}
