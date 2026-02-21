import React from 'react';
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
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 to-transparent pointer-events-none" />

              <div className="relative w-full h-full p-4 sm:p-8">
                <DotLottieReact
                  src="/Animation/ready, set, go!.lottie"
                  autoplay
                  loop
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
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

