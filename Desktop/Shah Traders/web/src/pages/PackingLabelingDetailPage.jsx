// src/pages/PackingLabelingPage.jsx
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Tag, Box, Gift, Star, Layers, Printer } from 'lucide-react';

const features = [
  { icon: Box, title: "Custom Branded Packaging", desc: "Your brand, your boxes. We use your branded packaging materials to deliver a memorable unboxing experience." },
  { icon: Printer, title: "Professional Labeling", desc: "Barcodes, shipping labels, SKU tags, custom inserts — applied accurately every single time." },
  { icon: Gift, title: "Gift Wrapping & Inserts", desc: "Tissue paper, ribbon, thank-you cards, promotional inserts — we make your customers feel special." },
  { icon: Layers, title: "Protective Packing Materials", desc: "Bubble wrap, foam, void fill, and custom-cut inserts to ensure products arrive in perfect condition." },
  { icon: Tag, title: "Kitting & Assembly", desc: "Bundle products together, create subscription boxes, or assemble multi-part kits at scale." },
  { icon: Star, title: "Quality Control Checks", desc: "Every order inspected before it ships. Wrong item, damaged product, missing piece — caught before it leaves." },
];

const packingTypes = [
  { step: "01", label: "Receive & Inspect", desc: "Your inventory arrives. We check, count, and shelve everything accurately." },
  { step: "02", label: "Order Comes In", desc: "A customer places an order on your store. It syncs to our system instantly." },
  { step: "03", label: "Pick & Pack", desc: "Our team picks the right items, packs them in your branded materials with care." },
  { step: "04", label: "Label & Dispatch", desc: "Labeled, sealed, and handed to the carrier — fast, accurate, and tracked." },
];

const packagingOptions = [
  "Poly mailers", "Corrugated boxes", "Padded envelopes", "Tubes & cylinders",
  "Custom inserts", "Tissue paper & ribbon", "Thank-you cards", "Promotional materials"
];

export default function PackingLabelingDetailPage() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-600/6 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6">
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Packing &{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Labeling
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Your product is your brand. We pack every order with precision and care — so your customers receive an experience, not just a box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] text-sm sm:text-base">
                Get Started
              </a>
              <a href="/calculator" className="px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                Try Quote Calculator
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our <span className="text-cyan-400">Process</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">From your inventory to your customer's hands — handled with care at every step.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingTypes.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-gray-800/60 bg-white/3 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 group">
                <span className="text-5xl font-bold text-gray-800 group-hover:text-cyan-900 transition-colors duration-300 block mb-4">{item.step}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What We <span className="text-cyan-400">Offer</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Complete packing and labeling services that make your brand look world-class.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-gray-800/60 bg-white/3 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300">
                <f.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-16 lg:py-20 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Packaging <span className="text-cyan-400">Materials We Support</span></h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">We work with your existing materials or help you source the right ones.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {packagingOptions.map((name, i) => (
                <span key={i} className="px-5 py-2.5 rounded-xl border border-gray-700/60 bg-white/5 text-gray-300 text-sm font-medium hover:border-cyan-500/40 hover:text-white transition-all duration-300">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 lg:py-20 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl border border-gray-700/40 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest block mb-3">The Unboxing Experience</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">Your Packaging is Your <span className="text-cyan-400">First Impression</span></h2>
              <p className="text-gray-300 leading-relaxed mb-6">Studies show 72% of consumers say packaging design influences their purchasing decisions. A great unboxing experience drives repeat purchases, social shares, and 5-star reviews. We help you nail it — at scale.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "72%", label: "of buyers influenced by packaging" },
                { num: "40%", label: "more likely to share on social" },
                { num: "2x", label: "repeat purchases with great UX" },
                { num: "99.9%", label: "packing accuracy rate" },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl border border-gray-800/60 bg-white/3 text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.num}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 to-blue-950/40 p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Elevate Your <span className="text-cyan-400">Unboxing Experience</span></h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base sm:text-lg">Let's talk about your brand's packaging needs and build a solution that wows your customers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                Book a Free Consultation
              </a>
              <a href="/calculator" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all duration-300">
                Get a Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}