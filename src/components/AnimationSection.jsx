import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AnimationSection() {
  return (
    <section className="relative bg-[#020617] py-20 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Section Label */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">
                Innovation
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Moving At The{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
                Speed of Light
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-light mx-auto lg:mx-0">
              We leverage modern technology to ensure our digital
              platforms are as fast and efficient.
              Seamless integration for a faster world.
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <button className="
                px-8 py-4 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-blue-600
                shadow-lg shadow-cyan-500/30
                hover:shadow-cyan-500/60
                hover:scale-105
                transition-all duration-300
                flex items-center justify-center gap-2
                w-full sm:w-auto
              ">
                Track Shipment
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT - Animation Card */}
          <div className="flex justify-center lg:justify-end">
            <AnimationCard
              src="/Animation/ready, set, go!.lottie"
              posterImage="/Animation/ready, set, go!-poster.jpg"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}

function AnimationCard({ src, posterImage }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setTimeout(() => setShowAnimation(true), 300);
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
        max-w-lg
        mx-auto
        relative
        flex items-center justify-center
      "
    >
      {/* Subtle internal glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 to-transparent pointer-events-none z-10" />

      {/* Poster Image - visible until animation is ready */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${showAnimation ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <img
          src={posterImage}
          alt="Animation preview"
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
            Animation unavailable
          </div>
        </div>
      )}

      {/* Lottie Animation */}
      <div className={`relative w-full h-full p-4 sm:p-8 transition-opacity duration-500 z-10 ${showAnimation ? 'opacity-100' : 'opacity-0'}`}>
        <DotLottieReact
          src={src}
          autoplay
          loop
          className="w-full h-full object-contain"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>

    </motion.div>
  );
}
