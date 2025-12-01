import { useState, useCallback } from "react";

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType = 'info') => {
  const id = Date.now().toString();
  setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

  // Auto-remove toast after 5 seconds
  setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, 5000); 
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, []);

  return { toasts, addToast, removeToast}
}