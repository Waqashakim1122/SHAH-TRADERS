// src/pages/EcommerceFulfillmentPage.jsx
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, RefreshCw, Globe, BarChart3, ShieldCheck, Clock } from 'lucide-react';

const features = [
  { icon: Zap, title: "Same-Day Shipping", desc: "Orders placed before 2PM ship the same business day, keeping your customers happy and your reviews stellar." },
  { icon: RefreshCw, title: "Seamless Returns", desc: "Hassle-free returns processing that protects your brand reputation and keeps customers coming back." },
  { icon: Globe, title: "Multi-Channel Integration", desc: "Connect Shopify, Amazon, WooCommerce, TikTok Shop and more — all managed from one dashboard." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live inventory counts, order velocity, and fulfillment KPIs so you always know where your business stands." },
  { icon: ShieldCheck, title: "Discounted Shipping Rates", desc: "Our volume gives you access to carrier rates you can't get on your own — savings passed directly to you." },
  { icon: Clock, title: "24/7 Order Processing", desc: "Your orders never sleep and neither does our system. Round-the-clock processing for global selling." },
];

const steps = [
  { num: "01", title: "Connect Your Store", desc: "Integrate your ecommerce platform in minutes. We support 50+ platforms out of the box." },
  { num: "02", title: "Send Us Your Inventory", desc: "Ship your products to our fulfillment center. We receive, inspect, and shelve everything." },
  { num: "03", title: "We Pick, Pack & Ship", desc: "When an order comes in, we handle it — picked, packed, labeled and dispatched fast." },
  { num: "04", title: "Track Everything Live", desc: "You and your customers get real-time tracking from our warehouse to their door." },
];

const integrations = ["Shopify", "Amazon", "WooCommerce", "TikTok Shop", "eBay", "Etsy", "Walmart"];

export default function EcommerceFulfillmentDetailPage() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6">
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Ecommerce{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Fulfillment
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Scale your ecommerce business without the warehouse headaches. We pick, pack, and ship your orders so you can focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] text-sm sm:text-base">
                Get Started Today
              </a>
              <a href="/calculator" className="px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                Try Quote Calculator
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How It <span className="text-cyan-400">Works</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Four simple steps to outsourced fulfillment that scales with you.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-gray-800/60 bg-white/3 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 group">
                <span className="text-5xl font-bold text-gray-800 group-hover:text-cyan-900 transition-colors duration-300 block mb-4">{step.num}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Everything You <span className="text-cyan-400">Need</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Built for ecommerce brands that demand speed, accuracy, and visibility.</p>
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

      {/* Integrations */}
      <section className="py-16 lg:py-20 border-t border-gray-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Integrates With Your <span className="text-cyan-400">Platforms</span></h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">Connect your store in minutes. No developers needed.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((name, i) => (
                <span key={i} className="px-5 py-2.5 rounded-xl border border-gray-700/60 bg-white/5 text-gray-300 text-sm font-medium hover:border-cyan-500/40 hover:text-white transition-all duration-300">
                  {name}
                </span>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to Scale Your <span className="text-cyan-400">Fulfillment?</span></h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-base sm:text-lg">Join hundreds of ecommerce brands shipping faster and saving more with Shah Traders.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                Book a Free Consultation
              </a>
              <a href="/calculator" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all duration-300">
                Calculate Your Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}