// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Calculator', path: '/calculator' },
    { label: 'Solutions', path: '/solutions' },
     { label: 'About', path: '/about' },
     { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Backdrop blur */}
      <div className="w-full py-4 md:py-5 backdrop-blur-xl border-b border-white/5 bg-black/80 shadow-xl">
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="
              font-display text-2xl md:text-3xl font-black tracking-tight
              bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent
              hover:from-cyan-300 hover:to-cyan-500 transition-all
            "
          >
            SHAH TRADERS
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  font-medium transition-colors duration-200
                  ${isActive(item.path) 
                    ? 'text-cyan-400' 
                    : 'text-slate-300 hover:text-white'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            {/* Quote button */}
            <Link
              to="/get-quote"
              className="
                relative overflow-hidden
                px-7 py-3 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-blue-600
                shadow-lg shadow-cyan-500/30
                hover:shadow-cyan-500/60
                hover:scale-105
                transition-all duration-300
                active:scale-95
              "
            >
              <span className="relative z-10">Request Quote</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-400
          ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-5 py-6 flex flex-col gap-5">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`
                text-left text-lg transition-colors
                ${isActive(item.path)
                  ? 'text-cyan-400'
                  : 'text-slate-200 hover:text-white'
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/get-quote"
            onClick={() => setIsOpen(false)}
            className="
              mt-2 px-6 py-4 rounded-2xl font-semibold text-white text-center
              bg-gradient-to-r from-cyan-500 to-blue-600
              shadow-lg shadow-cyan-500/30
              hover:shadow-cyan-500/60
              transition-all
            "
          >
            Request Quote
          </Link>
        </div>
      </div>

      <style jsx>{`
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </nav>
  );
}