import { motion } from 'framer-motion';
import amazon from "../assets/brands/amazon.png";
import walmart from "../assets/brands/walmart.png";
import ebay from "../assets/brands/ebay.png";
import shopify from "../assets/brands/shopify.png";

const BRANDS = [
  { name: "amazon", logo: amazon },
  { name: "walmart", logo: walmart },
  { name: "ebay", logo: ebay },
  { name: "shopify", logo: shopify },
];

const DUPLICATED_BRANDS = [...BRANDS, ...BRANDS];

export default function BrandStrip() {
  return (
    <section className="relative bg-[#020617] py-12 sm:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-cyan-500/[0.02] to-[#020617]" />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center mb-10 sm:mb-16 px-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 sm:w-10 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em]">
              Trusted Partners
            </span>
            <span className="h-px w-8 sm:w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-center text-2xl sm:text-4xl font-light text-slate-200">
            Powering commerce on{" "}
            <span className="text-white font-normal">
              world-class platforms
            </span>
          </h2>
        </motion.div>

        {/* Carousel — tighter mask on mobile so cards aren't clipped harshly */}
        <div
          className="relative flex w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0px, black 60px, black calc(100% - 60px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0px, black 60px, black calc(100% - 60px), transparent 100%)",
          }}
        >
          <motion.div
            className="flex gap-5 sm:gap-10 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {DUPLICATED_BRANDS.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group relative flex-shrink-0 w-[140px] sm:w-[220px] h-[88px] sm:h-[138px] flex items-center justify-center"
              >
                {/* White Card */}
                <div
                  className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl shadow-lg
                  group-hover:shadow-cyan-500/10 transition-all duration-700
                  group-hover:-translate-y-2"
                />

                {/* Logo */}
                <div className="relative w-full h-full flex items-center justify-center p-5 sm:p-8">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: "none", opacity: 1 }}
                  />
                </div>

                {/* Accent line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px]
                  bg-cyan-500 group-hover:w-1/3 transition-all duration-500 rounded-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}