// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUp,
  Ship,
  Truck,
  Package,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-8 lg:px-16 py-16 md:py-20">
        
        {/* Top Section - Logo & Brief */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
               SHAH TRADERS
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Delivering excellence across every mile with three generations of logistics expertise.
            </p>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
              Solutions
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Fulfillment', path: '/solutions/fulfillment' },
                { name: 'PackingLabeling', path: '/solutions/packinglabeling' },
                { name: 'Warehousing', path: '/solutions/warehousing' },
                { name: 'All Solutions', path: '/solutions' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-light"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400/50 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Contact', path: '/contact' },
                { name: 'Get a Quote', path: '/get-quote' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-light"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400/50 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1 font-light">CALL US</p>
                  <a href="tel:+17865941795" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
                   +17865941795
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1 font-light">EMAIL</p>
                  <a href="mailto:quotes@3plcenter.com" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
                    info@shahtraders.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-all">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1 font-light">HQ</p>
                  <p className="text-slate-300 text-sm font-light">
                   1213 Texas Ave<br />Cincinnati Ohio,45205
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Social & Newsletter */}
        <div className="py-10 border-y border-white/5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow our journey</h4>
              <div className="flex items-center gap-4">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600/20 hover:border-blue-400/30' },
                  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-600/20 hover:border-sky-400/30' },
                  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600/20 hover:border-pink-400/30' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className={`
                      w-12 h-12 rounded-2xl 
                      bg-white/5 border border-white/10 
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-110
                      ${social.color}
                    `}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-start md:justify-end">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-xs font-bold border-2 border-[#020617]">
                    99.9%
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold border-2 border-[#020617]">
                    24/7
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold border-2 border-[#020617]">
                    3X
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Trusted since 1985</p>
                  <p className="text-slate-500 text-xs font-light">3 generations of excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left font-light">
            © {new Date().getFullYear()} Shah Traders. All rights reserved.
            <span className="mx-2 text-slate-600">|</span>
            <span className="text-slate-600">Three generations of business expertise</span>
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors font-light">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors font-light">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Floating Badge - Optional */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full" />
            <div className="relative px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-sm">
              <span className="text-xs font-mono text-cyan-400">
                ⚡ 24/7 Support Available
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </footer>
  );

}

