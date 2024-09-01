import React, { createContext, useState, useContext, useEffect } from 'react';
import { getProfileDashboard } from '../services/api';
import { getTelegramUserData, getRandomAvatar } from '../utils/telegramUtils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          const isTelegram = !!window.Telegram?.WebApp;
          if (isTelegram) {
            const telegramData = await getTelegramUserData();
            if (telegramData) {
              const userData = await getProfileDashboard();
              const newUser = {
                ...userData,
                ...telegramData,
                avatarUrl: telegramData.avatarUrl || getRandomAvatar()
              };
              setUser(newUser);
              localStorage.setItem('user', JSON.stringify(newUser));
            }
          } else {
            setUser({
              username: 'Guest',
              xp: 0,
              level: 1,
              compute: 0,
            });
          }
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (userData) => {
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);