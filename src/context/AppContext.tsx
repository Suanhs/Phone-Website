import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, RepairService, Booking, Quote, Review } from '../types';
import { mockProducts, mockRepairs, initialBookings, initialQuotes, mockReviews } from '../data/mockData';

interface AppContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  repairs: RepairService[];
  bookings: Booking[];
  addBooking: (b: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  quotes: Quote[];
  addQuote: (q: Omit<Quote, 'id' | 'createdAt' | 'status'>) => void;
  updateQuoteStatus: (id: string, status: Quote['status']) => void;
  reviews: Review[];
  cart: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  addProduct: (p: Omit<Product, 'id'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [repairs] = useState<RepairService[]>(mockRepairs);
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [reviews] = useState<Review[]>(mockReviews);
  const [cart, setCart] = useState<Product[]>([]);

  const addBooking = (b: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    setBookings(prev => [{
      ...b,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      status: 'New'
    }, ...prev]);
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const addQuote = (q: Omit<Quote, 'id' | 'createdAt' | 'status'>) => {
    setQuotes(prev => [{
      ...q,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      status: 'New'
    }, ...prev]);
  };

  const updateQuoteStatus = (id: string, status: Quote['status']) => {
    setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
  };

  const addToCart = (p: Product) => {
    setCart(prev => [...prev, p]);
  };

  const removeFromCart = (id: string) => {
    // simply remove one instance, or all instances depending on logic. Let's just remove one for now.
    const index = cart.findIndex(c => c.id === id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const clearCart = () => setCart([]);

  const addProduct = (p: Omit<Product, 'id'>) => {
    setProducts(prev => [{
      ...p,
      id: Math.random().toString(36).substr(2, 9),
    }, ...prev]);
  };

  return (
    <AppContext.Provider value={{
      products, setProducts, repairs, bookings, addBooking, updateBookingStatus,
      quotes, addQuote, updateQuoteStatus, reviews, cart, addToCart, removeFromCart, clearCart,
      addProduct
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
