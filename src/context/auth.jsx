import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@Github:users');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@Github:users');

    setData({});
  }, []);

  const signIn = useCallback(async ({ login }) => {
    const response = await api.get(`users/${login}`, {
      login,
    });

    const user = response.data;

    console.log(user);

    localStorage.setItem('@Github:users', JSON.stringify(user));

    setData({ user });
  }, []);

  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
