export type UserRole = 'customer' | 'handyman';
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

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
  role: UserRole;
  avatar?: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills?: Category[];
  rating?: number;
  completedJobs?: number;
  joinedDate?: string;
  verified?: boolean;
}

export interface Service {
  id: string;
  providerId: string;
  providerName: string;
  providerAvatar?: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  priceType?: 'fixed' | 'hourly' | 'negotiable';
  location: string;
  rating: number;
  reviewsCount: number;
  image: string;
  images?: string[]; // Additional images
  active: boolean;
  responseTime?: string; // e.g., "Within 1 hour"
  availability?: string[];
  tags?: string[];
  createdAt?: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  serviceImage?: string;
  customerId: string;
  customerName: string;
  customerPhone?: string;
  customerAvatar?: string;
  handymanId: string;
  handymanName: string;
  handymanPhone?: string;
  handymanAvatar?: string;
  date: string;
  time: string;
  address?: string;
  status: BookingStatus;
  price: number;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

// Review Interface
export interface Review {
  id: string;
  serviceId: string;
  customerId: string;
  customerName: string;
  customerAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful?: number;
  images?: string[];
}

// Message Interface
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

// Notification Interface
export interface Notification {
  id: string;
  userId: string;
  type: 'booking' | 'message' | 'review' | 'payment' | 'system';
  title: string;
  message: string;
  read: boolean;
  timestamp: string;
  actionUrl?: string;
}

// Filter Interface
export interface ServiceFilters {
  category?: Category;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  location?: string;
  searchQuery?: string;
}

// Dashboard Stats (for Handyman)
export interface HandymanStats {
  totalEarnings: number;
  completedJobs: number;
  upcomingBookings: number;
  averageRating: number;
  responseRate: number;
}

// Form Interfaces
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  name: string;
  role: UserRole;
  phone?: string;
}

export interface BookingFormData {
  date: string;
  time: string;
  address: string;
  notes?: string;
}

export interface ReviewFormData {
  rating: number;
  comment: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}