import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship, Truck, ThermometerSnowflake, ArrowRight } from 'lucide-react';

// Import local images for display (transparent PNGs of vehicles/equipment)
import airDisplay from '../assets/services/air-display.png';
import seaDisplay from '../assets/services/sea-display.png';
import landDisplay from '../assets/services/land-display.png';
import coldDisplay from '../assets/services/cold-display.png';

// Import local background images
import airBg from '../assets/services/air-bg.jpg';
import seaBg from '../assets/services/sea-bg.jpg';
import landBg from '../assets/services/land-bg.jpg';
import coldBg from '../assets/services/cold-bg.jpg';

const SERVICES = [
  {
    id: 'air',
    title: 'Air Freight',
    focus: 'When it has to be there fast',
    icon: Plane,
    description: "We get your stuff across the world quickly - perfect for urgent shipments that really can't wait.",
    displayImage: airDisplay,
    bgImage: airBg,
    tags: ['24/7 Tracking', 'Express lanes']
  },
  {
    id: 'sea',
    title: 'Ocean Freight',
    focus: 'Big loads, better prices',
    icon: Ship,
    description: 'Moving large volumes overseas without breaking the bank - full containers or shared space, we sort it out.',
    displayImage: seaDisplay,
    bgImage: seaBg,
    tags: ['FCL or LCL', 'Port-to-door options']
  },
  {
    id: 'land',
    title: 'Land Transport',
    focus: 'Across the region, reliably',
    icon: Truck,
    description: 'Trucks, borders, last-mile delivery - we handle the road part so your goods arrive safe and on time.',
    displayImage: landDisplay,
    bgImage: landBg,
    tags: ['Live GPS', 'Secured loads']
  },
  {
    id: 'cold',
    title: 'Cold Chain',
    focus: 'Keeping it fresh or frozen',
    icon: ThermometerSnowflake,
    description: 'Medicines, food, anything temperature-sensitive - we keep the cold chain solid from start to finish.',
    displayImage: coldDisplay,
    bgImage: coldBg,
    tags: ['Temp monitored', 'Validated process']
  }
];

export default function ServicesSection({ setActiveModal }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen bg-[#020617] flex flex-col lg:flex-row items-stretch overflow-hidden">
      
      {/* 1. IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img 
              src={SERVICES[activeIndex].bgImage} 
              alt="" 
              className="w-full h-full object-cover scale-105 blur-[2px]" 
            />
            <div className="absolute inset-0 bg-[#020617]/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. LEFT: CONTENT HUB - Fully Responsive */}
      <div className="relative z-10 w-full lg:w-3/5 flex flex-col justify-center px-4 xs:px-6 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 xs:gap-3 mb-4 sm:mb-6">
            <span className="h-[1px] w-6 xs:w-8 bg-cyan-500"></span>
            <span className="text-cyan-400 text-[10px] xs:text-xs font-bold uppercase tracking-[0.3em] xs:tracking-[0.4em]">What we do</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-[1.1]">
            Moving your stuff <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400">around the world.</span>
          </h2>
        </motion.div>

        <div className="grid gap-3 xs:gap-4 max-w-2xl">
          {SERVICES.map((item, idx) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveModal(item.id)}
              className={`relative group cursor-pointer p-1 rounded-xl sm:rounded-2xl transition-all duration-500 ${
                activeIndex === idx 
                  ? 'bg-gradient-to-r from-white/15 to-transparent shadow-2xl' 
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="relative z-10 flex items-center gap-3 xs:gap-4 sm:gap-6 p-3 xs:p-4 sm:p-5 rounded-[10px] xs:rounded-[12px] sm:rounded-[14px] bg-[#020617]/30 backdrop-blur-sm">
                {/* Icon */}
                <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                  activeIndex === idx 
                    ? 'bg-cyan-500 text-white scale-110' 
                    : 'bg-white/5 text-slate-400'
                }`}>
                  <item.icon size={20} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start xs:items-center justify-between gap-2 flex-col xs:flex-row">
                    <h3 className={`text-base xs:text-lg sm:text-xl font-bold ${activeIndex === idx ? 'text-white' : 'text-slate-400'}`}>
                      {item.title}
                    </h3>
                    {/* Tags - Hidden on mobile, visible from xs and up */}
                    <div className={`flex gap-1.5 xs:gap-2 transition-opacity duration-500 flex-wrap ${activeIndex === idx ? 'opacity-100' : 'opacity-0 hidden xs:flex'}`}>
                      {item.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-[9px] xs:text-[10px] px-1.5 xs:px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className={`text-xs xs:text-sm mt-1 ${activeIndex === idx ? 'text-slate-200' : 'text-slate-500 line-clamp-1'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Arrow - Hidden on smallest screens */}
                <ArrowRight 
                  className={`transition-all duration-500 hidden xs:block ${activeIndex === idx ? 'translate-x-0 opacity-100 text-cyan-400' : '-translate-x-4 opacity-0'}`} 
                  size={18} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. RIGHT: TRANSPARENT PHOTO PREVIEW - Responsive */}
      <div className="hidden md:flex w-full md:w-2/5 relative items-center justify-center px-8 md:px-12 lg:px-16 xl:pr-24 py-12 md:py-0 z-10">
        <div className="relative w-full aspect-square max-w-[280px] md:max-w-sm lg:max-w-md flex flex-col items-center justify-center">
          
          <div className="absolute inset-0 bg-cyan-500/[0.015] rounded-full blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex items-center justify-center"
              >
                <img 
                  src={SERVICES[activeIndex].displayImage} 
                  className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[450px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
                  alt="Logistics Asset" 
                />
              </motion.div>

              {/* FLOATING TAG */}
              <div className="mt-6 md:mt-8 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/[0.025] backdrop-blur-md border border-white/10 shadow-2xl inline-flex flex-col items-center min-w-[120px] md:min-w-[150px]">
                <div className="flex items-center gap-1.5 md:gap-2 mb-0.5">
                  <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[8px] md:text-[9px] text-cyan-400 font-mono tracking-widest uppercase">Currently moving</span>
                </div>
                <p className="text-white font-bold text-[10px] md:text-xs tracking-wider uppercase text-center">
                  {SERVICES[activeIndex].focus}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Preview - Shows below content on smaller screens */}
      <div className="md:hidden relative z-10 w-full flex items-center justify-center py-8 px-4">
        <div className="relative w-full max-w-[250px] flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative w-full flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex items-center justify-center"
              >
                <img 
                  src={SERVICES[activeIndex].displayImage} 
                  className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]" 
                  alt="Logistics Asset" 
                />
              </motion.div>

              {/* Mobile Floating Tag */}
              <div className="mt-4 px-3 py-1.5 rounded-lg bg-white/[0.025] backdrop-blur-md border border-white/10 shadow-2xl inline-flex flex-col items-center">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[8px] text-cyan-400 font-mono tracking-widest uppercase">Currently moving</span>
                </div>
                <p className="text-white font-bold text-[10px] tracking-wider uppercase text-center">
                  {SERVICES[activeIndex].focus}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Custom Responsive Styles */}
      <style jsx>{`
        @media (max-width: 374px) {
          h2 {
            font-size: 1.5rem;
          }
        }

        /* Ensure gradient text works properly */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}