import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  icon: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Satvik Special Thali',
    description: 'A complete meal with Paneer, Dal, Mix Veg, Roti, Rice, Raita, and Sweet.',
    price: 350,
    category: 'Thali & Combos',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600',
    icon: 'Utensils'
  },
  {
    id: '2',
    name: 'Banarasi Dum Aloo',
    description: 'Baby potatoes cooked in a rich, spicy tomato-based gravy with traditional spices.',
    price: 220,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600',
    icon: 'Soup'
  },
  {
    id: '3',
    name: 'Kesar Pista Badam Milk',
    description: 'Traditional chilled milk flavored with saffron, pistachios, and almonds.',
    price: 120,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1596797038530-2c39bb802447?auto=format&fit=crop&q=80&w=600',
    icon: 'Milk'
  },
  {
    id: '4',
    name: 'Dal Makhani (No Onion No Garlic)',
    description: 'Creamy black lentils slow-cooked overnight with butter and fresh cream.',
    price: 180,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80&w=600',
    icon: 'Flame'
  }
];

export const CATEGORIES = [
  'Main Course',
  'Rice & Biryani',
  'Regional Specials',
  'Soups & Light Meals',
  'Thali & Combos',
  'Desserts'
];
