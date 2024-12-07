import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadFromLocalStorage } from '../services/localStorageService';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [bebê, setBebê] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = loadFromLocalStorage('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setBebê({});
  };

  return (
    <AppContext.Provider value={{ bebê, setBebê, isAuthenticated, setAuthenticated: setIsAuthenticated, logout }}>
      {children}
    </AppContext.Provider>
  );
};
