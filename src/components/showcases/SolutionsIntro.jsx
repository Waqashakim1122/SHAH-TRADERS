// src/components/showcases/SolutionsIntro.jsx
import { motion } from 'framer-motion';

export default function SolutionsIntro() {
  return (
    <section className="relative bg-[#020617] pt-16 pb-10 md:pt-24 md:pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-5 sm:px-6 md:px-10 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Label - Matching Pricing Calculator Style */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
              Our Solutions
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* Title - Clean & Dynamic */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Comprehensive logistics
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600">
              solutions
            </span>
            {" "}for your business
          </h2>

          {/* Subtitle - Refined with separators */}
          <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Fast fulfillment <span className="text-cyan-800 mx-2">•</span> 
            Real-time tracking <span className="text-cyan-800 mx-2">•</span> 
            Smart warehousing
          </p>
        </motion.div>
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