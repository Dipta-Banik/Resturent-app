import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/Common';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Connect With Us"
          subtitle="We would love to hear from you. Whether it's a query, feedback, or a catering request."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gold/5">
              <h3 className="text-3xl font-serif mb-8 text-warm-brown">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-saffron shrink-0 shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Our Location</h4>
                    <p className="text-warm-brown/70">Assi Ghat Road, Near Kashi Vishwanath Temple, Varanasi, UP 221005</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-saffron shrink-0 shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Phone Numbers</h4>
                    <p className="text-warm-brown/70">+91 98765 43210</p>
                    <p className="text-warm-brown/70">+91 542 231 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-saffron shrink-0 shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Email Address</h4>
                    <p className="text-warm-brown/70">info@satvikrasoi.com</p>
                    <p className="text-warm-brown/70">catering@satvikrasoi.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gold/10">
                <h4 className="text-lg font-serif mb-6">Quick Actions</h4>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                    <MessageCircle size={20} /> WhatsApp Us
                  </button>
                  <button className="bg-saffron text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                    <Phone size={20} /> Call Now
                  </button>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-cream rounded-3xl overflow-hidden shadow-inner border border-gold/10 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gold/40 flex-col gap-4">
                <MapPin size={48} />
                <p className="font-serif italic">Interactive Map Coming Soon</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gold/5"
          >
            <h3 className="text-3xl font-serif mb-8 text-warm-brown">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-warm-brown/60 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 bg-ivory/50 border border-gold/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-warm-brown/60 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full px-5 py-4 bg-ivory/50 border border-gold/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-warm-brown/60 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-ivory/50 border border-gold/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-warm-brown/60 ml-1">Subject</label>
                <select className="w-full px-5 py-4 bg-ivory/50 border border-gold/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Table Reservation</option>
                  <option>Catering Request</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-warm-brown/60 ml-1">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 bg-ivory/50 border border-gold/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-saffron hover:bg-saffron-light text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-saffron/20 transition-all flex items-center justify-center gap-3"
              >
                <Send size={20} /> Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
