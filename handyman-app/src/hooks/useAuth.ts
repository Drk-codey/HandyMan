import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import type { RootState, AppDispatch } from '../store/store';
import { login, signup, logout } from '../store/slices/authSlice';
import type { LoginFormData, SignupFormData } from '../types';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user , isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = useCallback(
    async (credentials: LoginFormData) => {
      return dispatch(login(credentials));
    },
    [dispatch]
  );

  const handleSignup = useCallback(
    async (data: SignupFormData) => {
      return dispatch(signup(data));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
  };
}