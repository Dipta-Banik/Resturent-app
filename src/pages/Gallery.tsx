import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/Common';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800', title: 'Special Thali' },
  { url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800', title: 'Banarasi Dum Aloo' },
  { url: 'https://images.unsplash.com/photo-1596797038530-2c39bb802447?auto=format&fit=crop&q=80&w=800', title: 'Kesar Pista Badam Milk' },
  { url: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80&w=800', title: 'Dal Makhani' },
  { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800', title: 'Fresh Salad' },
  { url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', title: 'Healthy Bowl' },
];

export const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Visual Journey"
          subtitle="A glimpse into our kitchen, our food, and the serenity we serve."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h4 className="text-white text-2xl font-serif">{img.title}</h4>
                  <div className="h-1 w-12 bg-gold mt-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
