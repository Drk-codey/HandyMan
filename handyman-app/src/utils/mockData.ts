import type { Service, Category } from '../types';

export const CATEGORIES: Category[] = [
  'House Section', 'Carpentry', 'Electrical Works', 'Plumbing', 
  'Furniture Works', 'Painting', 'Assembling', 'Landscaping', 'General Maintenance'
];

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    providerId: 'h1',
    providerName: 'Tolu B.',
    title: 'Home Complete Cleaning Solutions',
    description: 'Deep cleaning of all areas',
    category: 'House Section',
    price: 35000,
    location: 'Lekki, Lagos',
    rating: 4.9,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1581578731117-104f2a417954?auto=format&fit=crop&q=80',
    active: true
  },
  {
    id: '2',
    providerId: 'h2',
    providerName: 'Michael Bassey',
    title: 'Expert Plumbing Solutions',
    description: 'Leak fixes and installations',
    category: 'Plumbing',
    price: 25000,
    location: 'Ikeja, Lagos',
    rating: 4.8,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1504328345606-18aff75587dd?auto=format&fit=crop&q=80',
    active: true
  },
   {
    id: '3',
    providerId: 'h3',
    providerName: 'John Doe',
    title: 'Furniture Assembly Pro',
    description: 'IKEA and custom furniture assembly',
    category: 'Assembling',
    price: 15000,
    location: 'Yaba, Lagos',
    rating: 4.5,
    reviewsCount: 30,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80',
    active: true
  },
  {
    id: '4',
    providerId: 'h4',
    providerName: 'Ada Emmanuel',
    title: 'Professional Painting',
    description: 'Interior and exterior painting services',
    category: 'Painting',
    price: 45000,
    location: 'Victoria Island, Lagos',
    rating: 4.9,
    reviewsCount: 120,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    active: true
  },
  {
    id: '5',
    providerId: 'h5',
    providerName: 'James Okon',
    title: 'Electrical Installations',
    description: 'Safe and certified electrical work',
    category: 'Electrical Works',
    price: 30000,
    location: 'Surulere, Lagos',
    rating: 4.7,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
    active: true
  },
  {
    id: '6',
    providerId: 'h6',
    providerName: 'Peter Chukwu',
    title: 'Custom Carpentry',
    description: 'Doors, cabinets, and custom woodwork',
    category: 'Carpentry',
    price: 40000,
    location: 'Lekki, Lagos',
    rating: 4.8,
    reviewsCount: 67,
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
    active: true
  }
];

