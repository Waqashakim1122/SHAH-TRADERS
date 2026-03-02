import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

export default function AnimationSection() {
  return (
    <section className="relative bg-[#020617] py-20 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT - Text Content */}
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

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Moving At The{" "}
              <br />
              <span
                style={{
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(to right, #22d3ee, #60a5fa, #22d3ee)',
                }}
              >
                Speed of Light
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-light mx-auto lg:mx-0">
              We leverage modern technology to ensure our digital platforms are as fast and efficient as possible, prioritizing high performance in every build. By focusing on seamless integration, we eliminate technical friction to provide the agility needed for a faster world. Our goal is to transform complex processes into streamlined experiences that keep your business ahead.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: "⚡", label: "Lightning Fast" },
                { icon: "📦", label: "Real-Time Tracking" },
                { icon: "🛡️", label: "Secure & Reliable" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Animation Card */}
          <div className="flex justify-center lg:justify-end">
            <AnimationCard
              src="/Animation/ready-set-go.lottie"
              posterImage="/Animation/ready-set-go-poster.webp"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function AnimationCard({ src, posterImage }) {
  // ✅ Use a timer instead of onLoad — shows poster for 1.5s then reveals animation
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 1500); // Show poster for 1.5 seconds then fade in animation
    return () => clearTimeout(timer);
  }, []);

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
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 to-transparent pointer-events-none z-30" />

      {/* ✅ Animation — always rendered, fades in after timer */}
      <div
        className="absolute inset-0 p-4 sm:p-8 z-20 transition-opacity duration-700"
        style={{ opacity: showAnimation ? 1 : 0 }}
      >
        <DotLottieReact
          src={src}
          autoplay
          loop
          className="w-full h-full object-contain"
        />
      </div>

      {/* ✅ Poster — fades out after timer */}
      <div
        className="absolute inset-0 z-10 transition-opacity duration-700"
        style={{ opacity: showAnimation ? 0 : 1, pointerEvents: showAnimation ? 'none' : 'auto' }}
      >
        <img
          src={posterImage}
          alt="Animation preview"
          className="w-full h-full object-contain bg-white"
        />
      </div>

      {/* Three Dots Loading — visible while poster is showing */}
      {!showAnimation && (
        <div className="absolute top-4 right-4 flex gap-1.5 z-40">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      )}

    </motion.div>
  );
}

