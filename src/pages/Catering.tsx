import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/Common';
import { Calendar, Users, Utensils, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Catering: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Sacred Catering"
          subtitle="Bring the purity of Satvik Rasoi to your special occasions and spiritual gatherings."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {[
            {
              icon: <Utensils size={32} />,
              title: "Wedding Catering",
              desc: "Traditional grand feasts prepared with Vedic principles for your auspicious day.",
              img: "https://picsum.photos/seed/wedding/800/500"
            },
            {
              icon: <Calendar size={32} />,
              title: "Religious Events",
              desc: "Pure Satvik food for Pujas, Satsangs, and temple gatherings.",
              img: "https://picsum.photos/seed/puja/800/500"
            },
            {
              icon: <Gift size={32} />,
              title: "Family Celebrations",
              desc: "Birthdays, anniversaries, and housewarmings with a touch of tradition.",
              img: "https://picsum.photos/seed/party/800/500"
            },
            {
              icon: <Users size={32} />,
              title: "Corporate Orders",
              desc: "Healthy, pure vegetarian meals for your office events and meetings.",
              img: "https://picsum.photos/seed/office/800/500"
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gold/5 flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={service.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="text-saffron mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-4 text-warm-brown">{service.title}</h3>
                <p className="text-warm-brown/60 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/contact" className="text-saffron font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Inquire Now <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inquiry CTA */}
        <div className="bg-saffron rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 mandala-bg opacity-10 scale-150" />
          <div className="relative z-10">
            <h2 className="text-4xl font-serif mb-6">Planning an Event?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
              Let us handle the food with the same devotion and care we serve in our restaurant. Custom menus available.
            </p>
            <Link
              to="/contact"
              className="bg-white text-saffron px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-ivory transition-all inline-block"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
