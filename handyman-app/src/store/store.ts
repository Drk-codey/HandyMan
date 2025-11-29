import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, Service } from '../type';
import { MOCK_SERVICES } from '../utils/mockData';

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null as User | null, isAuthenticated: false },
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

// Services slice
const servicesSlice = createSlice({
  name: 'services',
  initialState: { list: MOCK_SERVICES as Service[] },
  reducers: {
    addService: (state, action: PayloadAction<Service>) => {
      state.list.push(action.payload);
    },
    // updateService: (state, action: PayloadAction<Service>) => {
    //   const index = state.list.findIndex(s => s.id === action.payload.id);
    //   if (index !== -1) {
    //     state.list[index] = action.payload;
    //   }
    // },
    deleteService: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(s => s.id !== action.payload);
    }
  }
});

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    services: servicesSlice.reducer,
  }
});

export const { login, logout } = authSlice.actions;
export const { addService, deleteService } = servicesSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;