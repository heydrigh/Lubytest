import React, { createContext, useContext, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    let user = localStorage.getItem('@Github:users');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@Github:users');

    setData({});
    Redirect('/');
  }, []);

  // const signIn = useCallback(async setData => {
  //   const user = setData.data;

  //   localStorage.setItem('@Github:users', JSON.stringify(user));

  //   setData({ user });
  // }, []);

  return (
    <AuthContext.Provider value={{ data, setData, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
