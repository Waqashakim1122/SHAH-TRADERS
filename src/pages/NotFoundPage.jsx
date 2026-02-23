// src/pages/NotFoundPage.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="bg-[#020617] min-h-screen text-white flex flex-col items-center justify-center overflow-hidden relative px-4">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-blue-600/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 text-center max-w-lg w-full mx-auto py-24">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em]">Error</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
        </motion.div>

        {/* 404 — controlled size, never crops */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-4"
        >
          <h1
            className="text-8xl sm:text-9xl font-bold leading-none tracking-tight select-none"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.9) 0%, rgba(0,150,255,0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.35))',
            }}
          >
            404
          </h1>

          {/* Divider line under 404 */}
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-wide mt-6"
        >
          Page{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Not Found
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-gray-400 text-sm sm:text-base max-w-sm mx-auto mb-10 leading-relaxed"
        >
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] text-sm sm:text-base"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:border-cyan-400/50 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
          >
            Contact Support
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="border-t border-gray-800/60 pt-8"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-5 font-medium">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Home', path: '/' },
              { label: 'Calculator', path: '/calculator' },
              { label: 'Solutions', path: '/solutions' },
              { label: 'About', path: '/about' },
              { label: 'Contact', path: '/contact' },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="px-4 py-2 rounded-xl border border-gray-700/60 bg-white/4 text-gray-400 text-sm font-medium hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-white/8 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}