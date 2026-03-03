import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { cn } from '../constants';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Catering', path: '/catering' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-gold/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-serif text-2xl">ॐ</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif leading-none text-warm-brown">Satvik Rasoi</h1>
              <p className="text-[10px] uppercase tracking-widest text-gold font-medium">Pure Devotion</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-saffron",
                  //location.pathname === link.path ? "text-saffron" : "text-warm-black/80"
                  location.pathname === link.path
  ? "text-saffron font-extrabold text-lg"
  : "text-warm-black/80 font-semibold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="bg-saffron hover:bg-saffron-light text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <ShoppingBag size={16} />
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-warm-brown">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-ivory border-b border-gold/10 px-4 pt-2 pb-6"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-serif py-2 border-b border-gold/5",
                  location.pathname === link.path ? "text-saffron" : "text-warm-brown"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="bg-saffron text-white py-3 rounded-xl text-center font-medium shadow-md"
            >
              Order Online
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
