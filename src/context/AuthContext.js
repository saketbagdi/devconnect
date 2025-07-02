import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('devconnect-user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('devconnect-users')) || [];
    const existing = storedUsers.find((u) => u.email === email && u.password === password);
    if (existing) {
      setUser(existing);
      localStorage.setItem('devconnect-user', JSON.stringify(existing));
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('devconnect-users')) || [];
    const exists = storedUsers.find((u) => u.email === email);
    if (exists) return false;

    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem('devconnect-users', JSON.stringify(storedUsers));
    localStorage.setItem('devconnect-user', JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('devconnect-user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
