import React, { createContext, useState, useContext, useEffect } from 'react';
import { getTelegramUserData, getRandomAvatar } from '../utils/telegramUtils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initUser = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        const telegramData = await getTelegramUserData();
        if (telegramData) {
          const newUser = {
            ...telegramData,
            avatarUrl: telegramData.avatarUrl || getRandomAvatar()
          };
          setUser(newUser);
          localStorage.setItem('user', JSON.stringify(newUser));
        }
      }
    };
    initUser();
  }, []);

  const updateUser = (userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);