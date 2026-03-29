export interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  tagline: string;
}

export const FLAVORS: Flavor[] = [
  {
    id: 'original',
    name: 'Dr Pepper Original',
    description: 'The original 23 flavors that make every sip unique.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    color: '#711F25',
    tagline: 'The One You Crave'
  },
  {
    id: 'cherry',
    name: 'Dr Pepper Cherry',
    description: 'A smooth cherry twist on the classic taste.',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=800',
    color: '#9B1B30',
    tagline: 'Amazingly Smooth'
  },
  {
    id: 'cream-soda',
    name: 'Dr Pepper & Cream Soda',
    description: 'The perfect harmony of Dr Pepper and smooth cream soda.',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=800',
    color: '#D4AF37',
    tagline: 'A New Classic'
  },
  {
    id: 'strawberries-cream',
    name: 'Dr Pepper Strawberries & Cream',
    description: 'The newest addition to the permanent lineup.',
    image: 'https://images.unsplash.com/photo-1556767667-0754773d559b?auto=format&fit=crop&q=80&w=800',
    color: '#E0115F',
    tagline: 'Sweet & Smooth'
  }
];

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const MERCH: MerchItem[] = [
  {
    id: 'hoodie-1',
    name: 'Vintage Logo Hoodie',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
    category: 'Apparel'
  },
  {
    id: 'hat-1',
    name: 'Fansville Trucker Hat',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600',
    category: 'Accessories'
  },
  {
    id: 'cooler-1',
    name: 'Dr Pepper Retro Cooler',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=600',
    category: 'Lifestyle'
  }
];
