import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/Common';
import { MENU_ITEMS, CATEGORIES, MenuItem } from '../constants';
import { ShoppingBag, Search, Utensils, Soup, Milk, Flame, Coffee, Pizza, Salad } from 'lucide-react';
import { OrderModal } from '../components/OrderModal';

const IconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils size={48} />,
  Soup: <Soup size={48} />,
  Milk: <Milk size={48} />,
  Flame: <Flame size={48} />,
  Coffee: <Coffee size={48} />,
  Pizza: <Pizza size={48} />,
  Salad: <Salad size={48} />,
};

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOrderClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-ivory py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Sacred Menu"
          subtitle="Every dish is a Prasad, prepared with the finest ingredients and Vedic principles."
        />

        {/* Search and Filter */}
        <div className="mb-12 space-y-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={20} />
            <input
              type="text"
              placeholder="Search for your favorite dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gold/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'All'
                  ? 'bg-saffron text-white shadow-md'
                  : 'bg-white text-warm-brown hover:bg-cream'
              }`}
            >
              All Items
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-saffron text-white shadow-md'
                    : 'bg-white text-warm-brown hover:bg-cream'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gold/5 flex flex-col"
            >
              <div className="aspect-[16/10] bg-cream flex items-center justify-center relative group">
                <div className="text-saffron group-hover:scale-110 transition-transform duration-500">
                  {IconMap[item.icon] || <Utensils size={48} />}
                </div>
                <div className="absolute top-4 left-4 bg-saffron text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-warm-brown">{item.name}</h3>
                  <span className="text-xl font-bold text-saffron">₹{item.price}</span>
                </div>
                <p className="text-warm-brown/70 text-sm mb-8 flex-grow leading-relaxed">
                  {item.description}
                </p>
                <button 
                  onClick={() => handleOrderClick(item)}
                  className="w-full bg-cream hover:bg-gold hover:text-white text-gold py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-serif text-warm-brown/50 italic">No dishes found matching your search.</p>
          </div>
        )}
      </div>

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        itemName={selectedItem?.name}
      />
    </div>
  );
};
