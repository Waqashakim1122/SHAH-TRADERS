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
    <section className="relative bg-[#020617] py-16 sm:py-24 overflow-hidden">
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
          className="flex flex-col items-center mb-16 sm:mb-20 px-6"
        >
          {/* Updated Lines: Matching Pricing Calculator Style */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.5em]">
              Trusted Partners
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-center text-2xl sm:text-4xl font-light text-slate-200">
            Powering commerce on{" "}
            {/* Removed underline class and offset */}
            <span className="text-white font-normal">
                world-class platforms
            </span>
          </h2>
        </motion.div>

        {/* Carousel Mask */}
        <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div 
            className="flex gap-8 sm:gap-12 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
              duration: 25, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {DUPLICATED_BRANDS.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group relative flex-shrink-0 w-[200px] sm:w-[280px] aspect-[16/10] flex items-center justify-center"
              >
                {/* White Card */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg 
                  group-hover:shadow-cyan-500/10 transition-all duration-700 
                  group-hover:-translate-y-2" />
                
                {/* Logo */}
                <div className="relative w-full h-full flex items-center justify-center p-8 sm:p-10">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'none', opacity: 1 }}
                  />
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] 
                  bg-cyan-500 group-hover:w-1/3 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}