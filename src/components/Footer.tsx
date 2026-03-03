import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-brown text-white pt-20 pb-10 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-saffron to-gold" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-serif text-2xl">ॐ</span>
            </div>
            <h1 className="text-2xl font-serif">Satvik Rasoi</h1>
          </Link>
          <p className="text-white/60 leading-relaxed font-light italic">
            "Serving purity, tradition, and taste with every meal. Prepared with devotion for your body and soul."
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-saffron transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-serif mb-8 text-gold">Quick Links</h4>
          <ul className="space-y-4 text-white/70">
            <li><Link to="/" className="hover:text-saffron transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-saffron transition-colors">Our Story</Link></li>
            <li><Link to="/menu" className="hover:text-saffron transition-colors">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-saffron transition-colors">Gallery</Link></li>
            <li><Link to="/catering" className="hover:text-saffron transition-colors">Catering</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-serif mb-8 text-gold">Contact Info</h4>
          <ul className="space-y-6 text-white/70">
            <li className="flex gap-4">
              <MapPin size={20} className="text-saffron shrink-0" />
              <span>Assi Ghat Road, Varanasi, UP 221005</span>
            </li>
            <li className="flex gap-4">
              <Phone size={20} className="text-saffron shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-4">
              <Mail size={20} className="text-saffron shrink-0" />
              <span>info@satvikrasoi.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-serif mb-8 text-gold">Newsletter</h4>
          <p className="text-white/60 mb-6 text-sm">Subscribe to get updates on festival specials and spiritual events.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-saffron transition-colors"
            />
            <button className="w-full bg-saffron hover:bg-saffron-light py-3 rounded-xl font-bold transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
        <p>© 2024 Satvik Rasoi. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        <p className="flex items-center gap-1">
          Made with <Heart size={14} className="text-saffron" fill="currentColor" /> for Devotion
        </p>
      </div>
    </footer>
  );
};
