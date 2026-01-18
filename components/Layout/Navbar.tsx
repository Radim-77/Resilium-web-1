import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-40 px-4 py-4 lg:py-6">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-surface/70 border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2 interactive-target">
            <span className="w-4 h-4 bg-accent rounded-full inline-block animate-pulse"></span>
            RESILIUM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveSub(item.label)}
                onMouseLeave={() => setActiveSub(null)}
            >
              <Link 
                to={item.path} 
                className={`text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors py-2 flex items-center gap-1 ${location.pathname.startsWith(item.path) ? 'text-accent' : 'text-text'}`}
              >
                {item.label}
                {item.subItems && <ChevronDown size={14} />}
              </Link>
              
              {/* Dropdown */}
              {item.subItems && (
                 <AnimatePresence>
                    {activeSub === item.label && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                        >
                            <div className="bg-surface border border-white/10 rounded-2xl p-2 shadow-xl backdrop-blur-xl">
                                {item.subItems.map(sub => (
                                    <Link 
                                        key={sub.label} 
                                        to={sub.path}
                                        className="block px-4 py-2 text-sm text-text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                    >
                                        {sub.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                 </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-text hover:text-accent">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-surface border border-white/10 rounded-4xl p-6 shadow-2xl backdrop-blur-xl lg:hidden flex flex-col gap-4 z-50"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                 <Link 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold block py-2 ${location.pathname === item.path ? 'text-accent' : 'text-text'}`}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                    <div className="pl-4 border-l border-white/10 ml-1">
                         {item.subItems.map(sub => (
                             <Link
                                key={sub.label}
                                to={sub.path}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-sm text-text-muted"
                             >
                                {sub.label}
                             </Link>
                         ))}
                    </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;