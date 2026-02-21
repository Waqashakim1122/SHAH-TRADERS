import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building2,
  Users,
  CheckCircle2,
  Globe
} from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="relative bg-[#020617] min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-8 lg:px-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Get in Touch</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Us
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            We're here to help with any questions about our 3PL solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Trust Badge */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center border border-cyan-400/30">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Verified</span>
                  </div>
                  <p className="text-2xl font-bold text-white">1,000+</p>
                  <p className="text-slate-400 text-sm font-light">client inquiries answered last month</p>
                </div>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center border border-orange-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  1213 Texas Ave  <br />
                  Ohio
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <a href="tel:+17865941795" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block font-light">
                  Phone: +17865941795
                </a>
                <a href="tel:+17865941795" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block mt-1 font-light">
                  Whatsapp:+17865941795
                </a>
              </div>

              {/* Email */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center border border-pink-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a href="mailto:info@shahtraders.com" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block font-light">
                  info@shahtraders.com
                </a>
                
              </div>

              {/* Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-400/30 mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hours</h3>
                <p className="text-slate-400 text-sm font-light">
                  Mon-Fri: 8:00 AM - 6:00 PM LocalTime<br />
                  Sat-Sun: Closed
                </p>
              </div>
            </div>

           
            
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Full name *</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="
                        w-full px-4 py-3 
                        bg-white/5 border border-white/10 
                        rounded-2xl text-white placeholder-gray-600
                        focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50
                        transition-all duration-300
                      "
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Company name</label>
                    <input 
                      type="text" 
                      placeholder="3PL Center"
                      className="
                        w-full px-4 py-3 
                        bg-white/5 border border-white/10 
                        rounded-2xl text-white placeholder-gray-600
                        focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50
                        transition-all duration-300
                      "
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Email *</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="
                        w-full px-4 py-3 
                        bg-white/5 border border-white/10 
                        rounded-2xl text-white placeholder-gray-600
                        focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50
                        transition-all duration-300
                      "
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-light">Phone number</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 123-4567"
                      className="
                        w-full px-4 py-3 
                        bg-white/5 border border-white/10 
                        rounded-2xl text-white placeholder-gray-600
                        focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50
                        transition-all duration-300
                      "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2 font-light">Subject</label>
                  {/* FIX 1: Use defaultValue on <select> instead of selected on <option> */}
                  <select
                    defaultValue=""
                    className="
                      w-full px-4 py-3 
                      bg-white/5 border border-white/10 
                      rounded-2xl text-white
                      focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50
                      transition-all duration-300
                      appearance-none cursor-pointer
                    "
                  >
                    <option value="" disabled className="bg-gray-900">Select a topic</option>
                    <option value="sales" className="bg-gray-900">Sales & Pricing</option>
                    <option value="support" className="bg-gray-900">Customer Support</option>
                    <option value="partnership" className="bg-gray-900">Partnership</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2 font-light">Message *</label>
                  <textarea 
                    rows="5"
                    placeholder="How can we help you?"
                    className="
                      w-full px-4 py-3 
                      bg-white/5 border border-white/10 
                      rounded-2xl text-white placeholder-gray-600
                      focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50
                      transition-all duration-300
                      resize-none
                    "
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="mt-1 w-4 h-4 bg-white/5 border border-white/10 rounded cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-400 font-light cursor-pointer">
                    I agree to be contacted about my inquiry and understand the 
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">privacy policy</a>.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="
                    w-full px-8 py-4 rounded-2xl font-semibold text-white
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    shadow-lg shadow-cyan-500/30
                    hover:shadow-cyan-500/60 hover:scale-105
                    transition-all duration-300
                    active:scale-95
                    flex items-center justify-center gap-3
                    text-lg
                  "
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-xs text-center text-slate-500 font-light">
                  * Required fields. We typically respond within 1 business hour.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Our Location</h3>
            </div>
            <div className="aspect-[21/9] w-full bg-gray-800/50 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden">
              {/* Replace with actual Google Maps iframe */}
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400/50 mx-auto mb-2" />
                <p className="text-slate-500 font-light">Interactive map will be embedded here</p>
                <p className="text-slate-600 text-sm mt-1 font-light">1213 Texas Ave,Cincinnati,Ohio 45205</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FIX 2: Removed <style jsx> tag — this is Next.js only and causes the jsx boolean warning in plain React.
          The bg-clip-text utility is already handled natively by Tailwind, so no custom CSS is needed. */}
    </section>
  );

}
