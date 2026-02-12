// src/components/FulfillmentShowcase.jsx
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FulfillmentShowcase() {
  return (
    <section className="relative bg-[#020617] py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* LEFT - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Fulfillment
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Run detailed quotes to check prices and transit times. Use our system to set up custom rate shopping! Check your order status while it's in the warehouse and once it ships - you receive live updates throughout the process!
            </p>

            {/* Mobile video – bigger spacing */}
            <div className="lg:hidden my-10">
              <VideoOnlyCard videoSrc="/videos/fulfillment-center-demo.mp4" />
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {["Same day shipping", "Discounted shipping rates", "Real-time order updates", "Seamless platform integration"].map((bullet, i) => (
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

          {/* Desktop – bigger centered card */}
          <div className="hidden lg:flex lg:justify-center lg:items-center">
            <VideoOnlyCard videoSrc="/videos/fulfillment-center-demo.mp4" />
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
        rounded-3xl               /* softer corners for premium look */
        overflow-hidden 
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]   /* deeper, more elegant shadow */
        bg-white                  /* pure white background */
        aspect-[3/2.2]            /* bigger & more square-ish – feels larger */
        w-full 
        max-w-3xl                 /* noticeably bigger card */
        mx-auto
      "
    >
      <video
        className="w-full h-full object-contain bg-white"  // Changed from bg-black to bg-white
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