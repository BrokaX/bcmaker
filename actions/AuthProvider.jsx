'use client';
import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ user: null });

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser({ user: null });
        }
      });

      return () => unsubscribe();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
       {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}