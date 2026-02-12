import { Package, Eye, MousePointer, Gift, Lightbulb, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import whoWeAreImage from '../assets/about-us/how-we-are.jpeg';

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-[#020617] py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">About Us</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              This is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                3PL Center
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
              At Shah Traders, logistics isn't just what we do—it's in our DNA. As a family-owned
              company with three generations of logistics expertise, we've grown into a trusted
              partner for businesses across the U.S. Our full-service solutions cover every
              aspect of the supply chain, from drayage and fulfillment to advanced technology
              integrations.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
              We focus on what matters most to our clients: reliable operations, clear
              communication, and measurable savings. With our proprietary software and
              industry expertise, we provide transparency and efficiency at every step, helping
              businesses save time and money while avoiding costly mistakes.
            </p>
            <button className="
              px-8 py-4 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-cyan-500 to-blue-600
              shadow-lg shadow-cyan-500/30
              hover:shadow-cyan-500/60
              hover:scale-105
              transition-all duration-300
              active:scale-95
            ">
              Book a Call
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] bg-white aspect-[3/2.2] w-full max-w-3xl mx-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
              alt="3PL Center building" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Who We Are Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] bg-white aspect-[3/2.2] w-full max-w-3xl mx-auto order-2 lg:order-1"
          >
            <img 
              src={whoWeAreImage}
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Our Story</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Who</span>{' '}
              we are
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
              At the heart of Shah Traders is our visionary founder and CEO, Faisal Naseer. With logistics running through his family for three generations,
              Faisal Naseer has built a company that values personal connections and
              innovative solutions. His hands-on leadership reflects a deep
              commitment to helping businesses succeed and finding smarter ways to
              solve logistical challenges.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
              At Shah Traders, we're more than just a logistics provider—we're a family
              dedicated to your success. We've built our reputation on reliability,
              transparency, and personal relationships with our clients. Every
              shipment, every call, and every detail is handled with care by our expert
              team, who work directly from our strategically located warehouses
              across the U.S.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Our Mission</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Tailored solutions,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                trusted results
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
              With decades of experience, we know that no two businesses are alike.
              That's why we customize our solutions to meet your unique needs—
              whether it's securing better shipping rates, providing full visibility into
              your inventory, or ensuring your products get to your customers quickly
              and accurately. Our dedication to innovation and personalized service is
              what sets us apart and keeps our clients coming back.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] bg-white aspect-[3/2.2] w-full max-w-3xl mx-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
              alt="Team photo" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Key Metrics Section */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Our Impact</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Key metrics that define us
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { value: "99.9%", label: "On-time delivery", color: "from-orange-400 to-orange-500" },
              { value: "99.9%", label: "Order accuracy", color: "from-cyan-400 to-cyan-500" },
              { value: "3", label: "Generations of logistics expertise", color: "from-pink-400 to-pink-500" },
              { value: "2M", label: "Orders fulfilled annually", color: "from-blue-400 to-blue-500" },
              { value: "15+", label: "Warehouses nationwide", color: "from-green-400 to-green-500" },
              { value: "100+", label: "System integrations", color: "from-purple-400 to-purple-500" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center shadow-lg hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-3`}>
                  {metric.value}
                </div>
                <p className="text-slate-300 text-base md:text-lg font-light">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Values Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Ready to Help</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                values
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Package, 
                title: "Reliability", 
                desc: "We ensure dependable, on-time delivery and fulfillment, giving clients peace of mind and trust in every shipment.", 
                color: "pink" 
              },
              { 
                icon: Eye, 
                title: "Transparency", 
                desc: "Our commitment to full visibility at every step lets clients track, monitor, and know the status of their goods in real-time.", 
                color: "orange" 
              },
              { 
                icon: MousePointer, 
                title: "Flexibility", 
                desc: "We adapt to changing demands with scalable solutions, whether for seasonal fluctuations or unexpected spikes in demand.", 
                color: "blue" 
              },
              { 
                icon: Gift, 
                title: "Efficiency and Sustainability", 
                desc: "We save time, reduce costs, and support sustainability with efficient, eco-friendly logistics from warehouse to delivery.", 
                color: "cyan" 
              },
              { 
                icon: Lightbulb, 
                title: "Innovation", 
                desc: "We constantly invest in new technology to improve processes, enhance visibility, and drive success for our clients.", 
                color: "yellow" 
              },
              { 
                icon: Handshake, 
                title: "Partnership and collaboration", 
                desc: "We view our clients as partners and work closely with them to align our solutions with their business goals.", 
                color: "purple" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition-all duration-300 shadow-lg"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 rounded-2xl flex items-center justify-center border border-${item.color}-400/30 mb-6`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}
