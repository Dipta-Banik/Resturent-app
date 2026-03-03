import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/Common';
import { Heart, ShieldCheck, Leaf, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-warm-brown overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/about-hero/1920/1080?blur=3"
            alt="About Hero"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-4"
          >
            Our Sacred Story
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-24 bg-gold mx-auto"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-warm-brown mb-8">A Tradition of Purity</h2>
            <div className="space-y-6 text-lg text-warm-brown/80 leading-relaxed">
              <p>
                At Satvik Rasoi, we believe that food is more than just sustenance—it is a spiritual experience. Our philosophy is rooted in the ancient Vedic principles of "Satvik" living, which emphasizes purity, clarity, and compassion.
              </p>
              <p>
                Every ingredient is carefully selected for its freshness and nutritional value. We strictly avoid onion and garlic in many of our preparations to maintain the highest level of purity, following the traditions of sacred temple kitchens.
              </p>
              <p>
                Our chefs prepare every meal with a meditative mindset, infusing each dish with positive energy and devotion. This is why we call our food "Prasad"—a blessed offering.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 mandala-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader title="Our Core Values" subtitle="The pillars that support our commitment to you." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: "Purity", desc: "Strictly vegetarian and hygienic preparation methods." },
              { icon: <Leaf size={32} />, title: "Freshness", desc: "Locally sourced, seasonal ingredients for every meal." },
              { icon: <Heart size={32} />, title: "Compassion", desc: "Food prepared with love and positive intentions." },
              { icon: <Users size={32} />, title: "Service", desc: "Treating every guest as a divine presence." },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-ivory p-10 rounded-3xl text-center border border-gold/10 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-saffron mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-warm-brown">{value.title}</h3>
                <p className="text-warm-brown/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
