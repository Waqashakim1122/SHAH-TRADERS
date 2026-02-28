// src/components/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Package, Warehouse, Tag, ShoppingCart } from 'lucide-react';

const solutionsCategories = [
  {
    category: 'Fulfillment',
    items: [
      {
        icon: ShoppingCart,
        label: 'Ecommerce Fulfillment',
        description: 'Fast, accurate order processing with real-time tracking.',
        path: '/solutions/ecommerce-fulfillment',
      },
      {
        icon: Package,
        label: 'Fulfillment',
        description: 'Same day shipping with discounted carrier rates.',
        path: '/solutions/fulfillment',
      },
    ],
  },
  {
    category: 'Packing',
    items: [
      {
        icon: Tag,
        label: 'Packing & Labeling',
        description: 'Custom branded packaging and professional labeling.',
        path: '/solutions/packing-labeling',
      },
    ],
  },
  {
    category: 'Warehousing',
    items: [
      {
        icon: Warehouse,
        label: 'Warehousing',
        description: 'Scalable storage with 24/7 security and advanced reporting.',
        path: '/solutions/ware-housing',
      },
    ],
  },
];

const allSolutionItems = solutionsCategories.flatMap(c => c.items);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setSolutionsOpen(false), 150);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="w-full py-4 md:py-5 backdrop-blur-xl border-b border-white/5 bg-black/80 shadow-xl">
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent hover:from-cyan-300 hover:to-cyan-500 transition-all"
          >
            SHAH TRADERS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/" className={`font-medium transition-colors duration-200 ${isActive('/') ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>
              Home
            </Link>

            <Link to="/calculator" className={`font-medium transition-colors duration-200 ${isActive('/calculator') ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>
              Calculator
            </Link>

            {/* Solutions Mega Menu */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                  isActive('/solutions') ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[560px] transition-all duration-200 ${
                  solutionsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {/* Arrow tip */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0f1a]/80 border-l border-t border-cyan-500/20 rotate-45 z-10" />

                {/* Medium transparency - 60% dark with blur */}
                <div className="backdrop-blur-xl bg-[#000000]/95 border border-cyan-500/15 shadow-2xl shadow-black/70 overflow-hidden flex">

                  {/* LEFT - Category Sidebar */}
                  <div className="w-40 bg-white/[0.04] border-r border-white/8 py-5 flex flex-col">
                    <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase px-4 mb-3">
                      Category
                    </p>
                    {solutionsCategories.map((cat, i) => (
                      <button
                        key={cat.category}
                        onMouseEnter={() => setActiveCategory(i)}
                        className={`text-left px-4 py-3 text-sm font-medium transition-all duration-150 border-l-2 ${
                          activeCategory === i
                            ? 'text-white border-cyan-400 bg-white/8'
                            : 'text-gray-400 border-transparent hover:text-slate-200 hover:bg-white/[0.04]'
                        }`}
                      >
                        {cat.category}
                      </button>
                    ))}

                    <div className="mt-auto px-4 pt-4 pb-1 border-t border-white/5">
                      <Link
                        to="/solutions"
                        onClick={() => setSolutionsOpen(false)}
                        className="text-xs text-cyan-500 hover:text-cyan-400 transition-colors font-semibold"
                      >
                        All Solutions →
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT - Items */}
                  <div className="flex-1 p-4 flex flex-col gap-2">
                    {solutionsCategories[activeCategory].items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setSolutionsOpen(false)}
                          className="group flex items-start gap-4 p-3 hover:bg-white/5 transition-all duration-200"
                        >
                          <div className="w-11 h-11 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div className="pt-0.5">
                            <p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                              {item.label}
                            </p>
                            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>

            <Link to="/about" className={`font-medium transition-colors duration-200 ${isActive('/about') ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>
              About
            </Link>

            <Link to="/contact" className={`font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}>
              Contact
            </Link>

            <Link
              to="/get-quote"
              className="relative overflow-hidden px-7 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10">Request Quote</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-5 py-6 flex flex-col gap-2">

          <Link to="/" onClick={() => setIsOpen(false)}
            className={`text-left text-lg py-2 transition-colors ${isActive('/') ? 'text-cyan-400' : 'text-slate-200 hover:text-white'}`}>
            Home
          </Link>

          <Link to="/calculator" onClick={() => setIsOpen(false)}
            className={`text-left text-lg py-2 transition-colors ${isActive('/calculator') ? 'text-cyan-400' : 'text-slate-200 hover:text-white'}`}>
            Calculator
          </Link>

          {/* Mobile Solutions Accordion */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className={`w-full flex items-center justify-between text-lg py-2 transition-colors ${
                isActive('/solutions') ? 'text-cyan-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              Solutions
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pl-4 flex flex-col gap-1 mt-1 mb-2">
                <Link to="/solutions" onClick={() => setIsOpen(false)} className="text-cyan-500 text-sm py-1.5 hover:text-cyan-400 font-medium">
                  All Solutions
                </Link>
                {allSolutionItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-slate-300 hover:text-white text-sm py-1.5 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsOpen(false)}
            className={`text-left text-lg py-2 transition-colors ${isActive('/about') ? 'text-cyan-400' : 'text-slate-200 hover:text-white'}`}>
            About
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}
            className={`text-left text-lg py-2 transition-colors ${isActive('/contact') ? 'text-cyan-400' : 'text-slate-200 hover:text-white'}`}>
            Contact
          </Link>

          <Link
            to="/get-quote"
            onClick={() => setIsOpen(false)}
            className="mt-3 px-6 py-4 rounded-2xl font-semibold text-white text-center bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transition-all"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
