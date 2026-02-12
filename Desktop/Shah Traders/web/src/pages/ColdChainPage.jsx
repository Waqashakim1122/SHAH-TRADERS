// src/pages/ColdChainPage.jsx
import { motion } from 'framer-motion';
import { ThermometerSnowflake, CheckCircle2 } from 'lucide-react';

export default function ColdChainPage() {
  return (
    <section className="relative bg-[#020617] min-h-screen py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Cold Chain{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Logistics
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Temperature-controlled supply chain solutions for pharmaceuticals, food, and sensitive goods.
          </p>
        </motion.div>
        {/* Add your cold chain content here */}
      </div>
    </section>
  );
}