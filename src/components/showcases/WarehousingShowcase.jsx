// src/components/WarehousingShowcase.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function WarehousingShowcase() {
  return (
    <section className="relative bg-[#020617] py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden border-t border-gray-800/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Warehousing
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              We offer clear and transparent invoices and advanced reporting - all in one place. Check your KPIs and metrics daily. Know what ships each day and all your costs!
            </p>

            {/* Video on mobile */}
            <div className="lg:hidden my-10">
              <VideoOnlyCard
                videoSrc="/videos/warehouse-operations-demo.mp4"
                posterImage="/videos/warehouse-poster.jpg"
              />
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Scalable storage options",
                "OHIO US Warehouse",
                "24/7 security monitoring",
                "Advanced reporting",
                "Safe and Secure"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 text-sm sm:text-base md:text-lg">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

           <Link
  to="/solutions/ware-housing"
  aria-label="Learn more about Warehousing Solutions"
  className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-base sm:text-lg mt-6 transition-colors"
>
  Learn more
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Link>
          </motion.div>

          {/* Video on desktop */}
          <div className="hidden lg:flex lg:justify-center lg:items-center">
            <VideoOnlyCard
              videoSrc="/videos/warehouse-operations-demo.mp4"
              posterImage="/videos/warehouse-poster.jpg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function VideoOnlyCard({ videoSrc, posterImage }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleLoadedData = () => {
    setIsLoading(false);
    setTimeout(() => setShowVideo(true), 300);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        rounded-3xl
        overflow-hidden
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]
        bg-white
        aspect-[3/2.2]
        w-full
        max-w-3xl
        mx-auto
        relative
      "
    >
      {/* Poster Image - visible until video is ready */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <img
          src={posterImage}
          alt="Warehousing preview"
          className="w-full h-full object-contain bg-white"
        />
      </div>

      {/* Three Dots Loading - Top Right */}
      {isLoading && !hasError && (
        <div className="absolute top-4 right-4 flex gap-1.5 z-20">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      )}

      {/* Small Error Icon - Top Right */}
      {hasError && (
        <div className="absolute top-4 right-4 z-20 group cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-red-100 border border-red-300 flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          {/* Tooltip */}
          <div className="absolute right-0 top-9 bg-gray-800 text-white text-xs rounded-lg px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
            Video unavailable
          </div>
        </div>
      )}

      {/* Video */}
      <video
        className={`w-full h-full object-contain bg-white transition-opacity duration-500 ${showVideo ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
        poster={posterImage}
        onLoadedData={handleLoadedData}
        onError={handleError}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </motion.div>
  );
}


