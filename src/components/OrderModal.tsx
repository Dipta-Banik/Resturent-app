import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { cn } from '../constants';
import { Diya } from './Common';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, itemName }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-ivory rounded-3xl shadow-2xl overflow-hidden border border-gold/20"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-saffron to-gold" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-warm-brown/50 hover:text-warm-brown transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Diya />
              </div>
              <h3 className="text-2xl font-serif text-warm-brown mb-2">Order with Devotion</h3>
              {itemName && (
                <p className="text-saffron font-medium mb-6 italic">Ordering: {itemName}</p>
              )}
              <p className="text-warm-brown/60 text-sm mb-8">
                Choose your preferred platform to place your order. We ensure every meal is prepared with purity and care.
              </p>

              <div className="space-y-4">
                {/* Zomato */}
                <a
                  href="https://www.zomato.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-white border border-gold/10 rounded-2xl hover:border-saffron hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#E23744] rounded-xl flex items-center justify-center text-white font-bold">Z</div>
                    <span className="font-bold text-warm-brown">Order on Zomato</span>
                  </div>
                  <ExternalLink size={18} className="text-gold group-hover:text-saffron" />
                </a>

                {/* Swiggy */}
                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-white border border-gold/10 rounded-2xl hover:border-saffron hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FC8019] rounded-xl flex items-center justify-center text-white font-bold">S</div>
                    <span className="font-bold text-warm-brown">Order on Swiggy</span>
                  </div>
                  <ExternalLink size={18} className="text-gold group-hover:text-saffron" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-white border border-gold/10 rounded-2xl hover:border-saffron hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white">
                      <MessageCircle size={24} />
                    </div>
                    <span className="font-bold text-warm-brown">Order on WhatsApp</span>
                  </div>
                  <ExternalLink size={18} className="text-gold group-hover:text-saffron" />
                </a>

                {/* Direct Call */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between w-full p-4 bg-cream border border-gold/20 rounded-2xl hover:bg-gold hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-gold transition-colors">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold">Call to Order</span>
                  </div>
                  <Phone size={18} className="opacity-50" />
                </a>
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-widest text-gold font-bold">
                भक्ति • प्रसाद • शुद्ध • सेवा
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
