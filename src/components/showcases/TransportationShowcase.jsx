// src/components/PackingLabelingShowcase.jsx
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PackingLabelingShowcase() {
  return (
    <section className="relative bg-[#020617] py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden border-t border-gray-800/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Packing & Labeling
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Professional packing and custom labeling services to ensure your products arrive safely and look perfect. From custom inserts to branded packaging, we handle every detail so your customers receive an exceptional unboxing experience.
            </p>

            {/* Video on mobile */}
            <div className="lg:hidden my-10">
              <VideoOnlyCard videoSrc="/videos/packing-labeling-demo.mp4" />
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Custom branded packaging",
                "Professional labeling services",
                "Protective packing materials",
                "Gift wrapping options",
                "Insert and promotional material inclusion"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 text-sm sm:text-base md:text-lg">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            <a href="#" className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-base sm:text-lg mt-6 transition-colors">
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Video on desktop */}
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:order-1">
            <VideoOnlyCard videoSrc="/videos/packing-labeling-demo.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoOnlyCard({ videoSrc }) {
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
      "
    >
      <video
        className="w-full h-full object-contain bg-white"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
