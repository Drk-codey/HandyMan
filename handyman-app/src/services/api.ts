import axios, { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';
import type {
  User,
  Service,
  Booking,
  Review,
  LoginFormData,
  SignupFormData,
  BookingFormData,
  ReviewFormData,
  ApiResponse,
  PaginatedResponse,
  ServiceFilters,
} from '../types';

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiResponse<null>>) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    const errorMessage = error.response?.data?.message || 'An error occurred';
    return Promise.reject(new Error(errorMessage));
  }
);

// AUTH API
// ============================================
export const authAPI = {
  login: async (credentials: LoginFormData): Promise<ApiResponse<{ user: User; token: string }>> => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  signup: async (data: SignupFormData): Promise<ApiResponse<{ user: User; token: string }>> => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  getProfile: async (): Promise<ApiResponse<User>> => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

   updateProfile: async (data: Partial<User>): Promise<ApiResponse<User>> => {
    const response = await api.put('/auth/profile', data);
    return response.data;
  },
};

// Service API
// export const servicesAPI = {
//   getAll: async (filters?: ServiceFilters): Promise<ApiResponse<PaginatedResponse<Service>>> => {
//     const response = await api.get('/services', { params: filters });
//     return response.data;
//   },

//   getById: async (id: string): Promise<ApiResponse<Service>> => {
//     const response = await api.get(`/services/${id}`);
//     return response.data;
//   },

//   create: async (data: Partial<Service>): Promise<ApiResponse<Service>> => {
//     const response = await api.post('/services', data);
//     return response.data;
//   },

//   update: async (id: string, data: Partial<Service>): Promise<ApiResponse<Service>> => {
//     const response = await api.put(`/services/${id}`, data);
//     return response.data;
//   },

//   delete: async (id: string): Promise<ApiResponse<null>> => {
//     const response = await api.delete(`/services/${id}`);
//     return response.data;
//   },

//   getReviews: async (serviceId: string): Promise<ApiResponse<Review[]>> => {
//     const response = await api.get(`/services/${serviceId}/reviews`);
//     return response.data;
//   },
// };

// Bookings API
// export const bookingsAPI = {
//   create: async (serviceId: string, data: BookingFormData): Promise<ApiResponse<Booking>> => {
//     const response = await api.post('/bookings', { serviceId, ...data });
//     return response.data;
//   },

//   getMyBookings: async (): Promise<ApiResponse<Booking[]>> => {
//     const response = await api.get('/bookings/my');
//     return response.data;
//   },

//   getById: async (id: string): Promise<ApiResponse<Booking>> => {
//     const response = await api.get(`/bookings/${id}`);
//     return response.data;
//   },

//   updateStatus: async (id: string, status: Booking['status']): Promise<ApiResponse<Booking>> => {
//     const response = await api.patch(`/bookings/${id}/status`, { status });
//     return response.data;
//   },

//   cancel: async (id: string): Promise<ApiResponse<null>> => {
//     const response = await api.delete(`/bookings/${id}`);
//     return response.data;
//   },
// };

// Reviews API

// export const reviewsAPI = {
//   create: async (bookingId: string, data: ReviewFormData): Promise<ApiResponse<Review>> => {
//     const response = await api.post('/reviews', { bookingId, ...data });
//     return response.data;
//   },

//   getByService: async (serviceId: string): Promise<ApiResponse<Review[]>> => {
//     const response = await api.get(`/reviews/service/${serviceId}`);
//     return response.data;
//   },
// };

// export default api;


