import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader, Diya } from '../components/Common';
import { MENU_ITEMS, MenuItem } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Phone, Clock, ShoppingBag, Utensils, Soup, Milk, Flame } from 'lucide-react';
import { OrderModal } from '../components/OrderModal';

const IconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils size={48} />,
  Soup: <Soup size={48} />,
  Milk: <Milk size={48} />,
  Flame: <Flame size={48} />,
};

export const Home: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOrderClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const quoteText = "Food prepared with devotion nourishes both body and soul. It is the purest form of service.";
  const words = quoteText.split(" ");

  return (
    <div className="overflow-hidden">
      {/* Creative Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#1a1410] overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
              alt="Hero Background"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#1a1410]" />
        </div>

        {/* Rotating Mandala Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-[120vh] h-[120vh] animate-rotate-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full text-gold fill-current">
              <path d="M50 0 L55 15 L70 15 L60 25 L65 40 L50 30 L35 40 L40 25 L30 15 L45 15 Z" transform="translate(0,0)" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.1" />
              {[...Array(12)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                  <path d="M50 5 L52 15 L48 15 Z" />
                  <circle cx="50" cy="20" r="1" />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Floating Petals */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="petal"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                width: `${Math.random() * 15 + 10}px`,
                height: `${Math.random() * 15 + 10}px`,
                backgroundColor: i % 2 === 0 ? '#FF8C00' : '#FFCC33',
                borderRadius: '100% 0 100% 0',
                opacity: 0.6,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-saffron/20 blur-2xl rounded-full scale-150 animate-pulse" />
                <Diya className="scale-[2]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight tracking-tight">
                Experience <span className="text-gold italic font-light">Divine</span> <br />
                <span className="relative inline-block">
                  Purity
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 mb-12 font-light tracking-widest max-w-3xl mx-auto italic font-serif"
            >
              "Where every ingredient is a blessing, and every meal is a prayer."
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/menu"
                className="group relative bg-saffron text-white px-12 py-5 rounded-full text-lg font-bold transition-all overflow-hidden shadow-2xl hover:shadow-saffron/40"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Explore Sacred Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="group px-12 py-5 rounded-full text-lg font-bold text-white border border-white/30 backdrop-blur-md hover:bg-white hover:text-warm-brown transition-all"
              >
                Order Online
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-ivory to-transparent z-10" />
      </section>

      {/* About Preview */}
      <section className="py-24 px-4 bg-ivory mandala-bg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
                alt="Our Story"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold rounded-2xl flex items-center justify-center p-8 text-white text-center shadow-xl">
              <div>
                <p className="text-4xl font-serif mb-1">25+</p>
                <p className="text-xs uppercase tracking-widest">Years of Tradition</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-saffron font-medium tracking-widest uppercase text-sm mb-4 block">Our Sacred Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif text-warm-brown mb-6">Serving Purity Since 1998</h2>
            <p className="text-lg text-warm-brown/80 mb-8 leading-relaxed">
              Satvik Rasoi serves pure vegetarian cuisine prepared with dedication, tradition, and high-quality ingredients. Our journey began with a simple vision: to bring the authentic taste of temple-style food to your table, ensuring every bite is a blessing.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-gold">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-serif text-lg">100% Veg</h4>
                  <p className="text-sm text-warm-brown/60">Strictly vegetarian kitchen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-gold">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Fresh Only</h4>
                  <p className="text-sm text-warm-brown/60">Farm-to-table ingredients</p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-saffron font-semibold hover:gap-4 transition-all"
            >
              Read Our Full Story <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Signature Offerings"
            subtitle="Hand-picked delicacies prepared with traditional recipes and modern love."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-ivory rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gold/5"
              >
                <div className="aspect-square bg-cream flex items-center justify-center relative group">
                  <div className="text-saffron group-hover:scale-110 transition-transform duration-500">
                    {IconMap[item.icon] || <Utensils size={48} />}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-saffron font-bold text-sm shadow-sm">
                    ₹{item.price}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-font">{item.category}</p>
                  <h3 className="text-xl font-serif text-warm-brown mb-2">{item.name}</h3>
                  <p className="text-sm text-warm-brown/70 mb-6 line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => handleOrderClick(item)}
                    className="w-full py-3 border border-saffron text-saffron rounded-xl text-sm font-bold hover:bg-saffron hover:text-white transition-all block text-center flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Strip */}
      <section className="py-32 bg-warm-brown relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 via-gold/10 to-saffron/20 animate-gradient-x" />
        <div className="absolute inset-0 opacity-10 mandala-bg scale-150 animate-rotate-slow" />
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-3 gap-y-2"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-3xl md:text-5xl font-serif text-white italic leading-tight"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: words.length * 0.1, duration: 0.5 }}
            className="mt-12 flex justify-center items-center gap-6"
          >
            <div className="h-[1px] w-16 bg-gold/50" />
            <span className="text-gold font-serif text-2xl tracking-widest uppercase">Ancient Wisdom</span>
            <div className="h-[1px] w-16 bg-gold/50" />
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-24 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4 border border-gold/5">
            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-saffron shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-xl font-serif mb-2">Find Us</h4>
              <p className="text-warm-brown/70 text-sm">Assi Ghat Road, Varanasi, Uttar Pradesh 221005</p>
              <button className="mt-4 text-saffron font-bold text-sm hover:underline">Get Directions</button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4 border border-gold/5">
            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-saffron shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-xl font-serif mb-2">Call Us</h4>
              <p className="text-warm-brown/70 text-sm">+91 98765 43210</p>
              <p className="text-warm-brown/70 text-sm">+91 542 231 4567</p>
              <button className="mt-4 text-saffron font-bold text-sm hover:underline">Click to Call</button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4 border border-gold/5">
            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-saffron shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="text-xl font-serif mb-2">Opening Hours</h4>
              <p className="text-warm-brown/70 text-sm">Mon - Sun: 11:00 AM - 11:00 PM</p>
              <p className="text-warm-brown/70 text-sm">Prasad Distribution: 12:30 PM</p>
              <button className="mt-4 text-saffron font-bold text-sm hover:underline">Book a Table</button>
            </div>
          </div>
        </div>
      </section>

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        itemName={selectedItem?.name}
      />
    </div>
  );
};
