export type Category = 
  | 'House Section' 
  | 'Carpentry' 
  | 'Electrical Works' 
  | 'Plumbing' 
  | 'Furniture Works' 
  | 'Painting' 
  | 'Assembling' 
  | 'Landscaping' 
  | 'General Maintenance';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'handyman';
  avatar?: string;
}

export interface Service {
  id: string;
  providerId: string;
  providerName: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  location: string;
  rating: number;
  reviewsCount: number;
  image: string;
  active: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  customerId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
}