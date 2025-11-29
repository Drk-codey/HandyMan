import type { Service, Category } from '../type';

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
  }
];