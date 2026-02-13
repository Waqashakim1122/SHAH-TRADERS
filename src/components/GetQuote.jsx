import { motion } from 'framer-motion';
import { 
  Calculator, 
  PhoneCall, 
  Mail, 
  Send, 
  Sparkles,
  Calendar,
  TrendingDown,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function GetQuote() {
  return (
    <section className="relative bg-[#020617] min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Background Effects - matching your other pages */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Get Started</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h1 className="
            text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-display font-bold text-white leading-tight tracking-wide
          ">
            Get a{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Quote
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            See how Shah-Traders can save you time and money. Choose the option that works best for you.
          </p>
        </motion.div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Quote Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all shadow-xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center border border-cyan-400/30 mb-6 group-hover:scale-110 transition-transform">
              <Calculator className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Quote Calculator</h3>
            <p className="text-gray-400 mb-4">
              Calculate approximate costs in minutes with our self-service tool.
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-400 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Get instant estimates</span>
            </div>
            <button className="
              w-full px-6 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-cyan-400 to-cyan-600
              shadow-lg shadow-cyan-500/30
              hover:shadow-cyan-500/60 hover:scale-[1.02]
              transition-all duration-300
            ">
              Try Calculator
            </button>
          </motion.div>

          {/* Card 2: Book a Call */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all shadow-xl relative overflow-hidden"
          >
            {/* Social proof badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30 rounded-full px-3 py-1">
              <span className="text-xs font-semibold text-green-400">Save 20% avg.</span>
            </div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-400/30 mb-6 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Book a Call</h3>
            <p className="text-gray-400 mb-4">
              Let's save you money. Book a call with our team now.
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-400 mb-6">
              <TrendingDown className="w-4 h-4" />
              <span>Clients save 20% on average</span>
            </div>
            <button className="
              w-full px-6 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-purple-500 to-purple-600
              shadow-lg shadow-purple-500/30
              hover:shadow-purple-500/60 hover:scale-[1.02]
              transition-all duration-300
              flex items-center justify-center gap-2
            ">
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </button>
          </motion.div>

          {/* Card 3: Quick Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all shadow-xl"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center border border-pink-400/30 mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Quick Request</h3>
            <p className="text-gray-400 text-sm mb-6">
              Get a response within 1 business hour.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your name" 
                className="
                  w-full px-4 py-3 
                  bg-white/5 border border-white/10 
                  rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:border-cyan-400/50 
                  transition-all duration-300
                "
              />
              <input 
                type="email" 
                placeholder="Work email" 
                className="
                  w-full px-4 py-3 
                  bg-white/5 border border-white/10 
                  rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:border-cyan-400/50 
                  transition-all duration-300
                "
              />
              <textarea 
                placeholder="How can we help?" 
                rows="2"
                className="
                  w-full px-4 py-3 
                  bg-white/5 border border-white/10 
                  rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:border-cyan-400/50 
                  transition-all duration-300
                  resize-none
                "
              ></textarea>
              <button 
                type="submit" 
                className="
                  w-full px-6 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-pink-500 to-pink-600
                  shadow-lg shadow-pink-500/30
                  hover:shadow-pink-500/60 hover:scale-[1.02]
                  transition-all duration-300
                  flex items-center justify-center gap-2
                  group/btn
                "
              >
                Send Request 
                <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>1 hour response time</span>
            </div>
          </motion.div>
        </div>

        {/* Direct Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#020617] px-6 text-gray-500">Or contact us directly</span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                <PhoneCall className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-lg">+17865941795</span>
            </a>
            <a 
              href="mailto:sales@3plcenter.com" 
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-lg">info@shahtraders.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );

}
