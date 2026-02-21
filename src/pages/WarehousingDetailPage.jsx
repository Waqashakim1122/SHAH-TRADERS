// src/pages/WarehousingPage.jsx
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Warehouse, Shield, BarChart3, MapPin, Thermometer, Package } from 'lucide-react';

const features = [
  { icon: Shield, title: "24/7 Security Monitoring", desc: "Advanced CCTV, alarm systems, and on-site security personnel protecting your inventory around the clock." },
  { icon: BarChart3, title: "Advanced Reporting", desc: "Clear, transparent invoices and detailed KPI dashboards. Know exactly what ships and what it costs — every day." },
  { icon: MapPin, title: "Ohio US Warehouse", desc: "Strategically located in Ohio to reach 60% of the US population within 1-day ground shipping." },
  { icon: Package, title: "Scalable Storage Options", desc: "Pallet storage, bulk space, and dedicated areas — flex up or down as your inventory levels change." },
  { icon: Thermometer, title: "Climate Controlled", desc: "Temperature-controlled zones available for sensitive products that need precise storage conditions." },
  { icon: Warehouse, title: "FDA & FTZ Certified", desc: "Our facilities meet FDA-approved and Foreign Trade Zone standards for regulated and international goods." },
];

const storageTypes = [
  { label: "Pallet Storage", desc: "Standard and oversized pallets with adjustable rack heights from 4ft to 8ft." },
  { label: "Bulk Space", desc: "Floor-level bulk areas for oversized, non-palletized, or irregular goods." },
  { label: "Dedicated Zones", desc: "Reserved dedicated space for high-volume brands that need consistent availability." },
  { label: "Overflow Storage", desc: "Flexible overflow capacity for peak season, promotions, and unexpected surges." },
];

export default function WarehousingDetailPage() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6">
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Secure{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Warehousing
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Flexible, secure storage built for businesses that demand visibility and control. Scale your inventory without the overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] text-sm sm:text-base">
                Book a Tour
              </a>
              <a href="/calculator" className="px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                Try Quote Calculator
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  Storage Built for <span className="text-cyan-400">Every Need</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                  Whether you're a startup storing 10 pallets or an enterprise with thousands of SKUs, our warehouse infrastructure adapts to your exact requirements — with transparent pricing and zero surprises.
                </p>
                <ul className="space-y-3">
                  {["No long-term contracts required", "Real-time inventory visibility", "Dedicated account manager", "Same-day receiving confirmation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {storageTypes.map((type, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-5 rounded-2xl border border-gray-800/60 bg-white/3 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300">
                    <h3 className="text-white font-semibold mb-2">{type.label}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Warehouse <span className="text-cyan-400">Capabilities</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Enterprise-grade security and reporting, accessible to businesses of every size.</p>
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

      {/* Location Highlight */}
      <section className="py-16 lg:py-20 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl border border-gray-700/40 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest block mb-3">Strategic Location</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">Ohio — <span className="text-cyan-400">The Heart of the US</span></h2>
              <p className="text-gray-300 leading-relaxed mb-6">Our Ohio warehouse puts you within 1-day ground shipping reach of over 60% of the US population. Lower shipping costs, faster delivery, happier customers.</p>
              <ul className="space-y-2">
                {["I-70 & I-75 corridor access", "Close to major distribution hubs", "1-day reach to 60% of US population", "2-day reach to 90% of US population"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-cyan-500/20 bg-cyan-950/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <p className="text-white font-bold text-xl">Ohio, US</p>
                  <p className="text-gray-400 text-sm mt-1">Fulfillment Hub</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 to-blue-950/40 p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Need Flexible <span className="text-cyan-400">Storage?</span></h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base sm:text-lg">Get a custom warehousing quote tailored to your SKU count, volume, and growth plans.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                Request a Quote
              </a>
              <a href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all duration-300">
                Book a Warehouse Tour <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}