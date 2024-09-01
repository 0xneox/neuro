

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';
const AUTH_BASE_URL = `${API_BASE_URL.replace('/api', '')}/auth`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in all API requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Helper function to handle API errors
const handleApiError = (error) => {
  console.error('API Error:', error.response || error);
  throw error.response ? error.response.data : error;
};

// Authentication
export const initializeTelegramAuth = async (initData) => {
  try {
    console.log('Initializing Telegram Auth with:', initData);
    const response = await axios.post(`${AUTH_BASE_URL}/telegram`, initData);
    console.log('Auth response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Telegram Auth Error:', error);
    handleApiError(error);
  }
};

// User actions
export const claimDailyXP = async () => {
  try {
    const response = await api.post('/users/claim-daily-xp');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const tapGPU = async () => {
  try {
    const response = await api.post('/users/tap');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const upgradeGPU = async () => {
  try {
    const response = await api.post('/users/upgrade-gpu');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Referral
export const generateReferralCode = async () => {
  try {
    const response = await api.post('/referral/generate-code');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const applyReferralCode = async (referralCode) => {
  try {
    const response = await api.post('/referral/apply-code', { referralCode });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getReferralStats = async () => {
  try {
    const response = await api.get('/referral/stats');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Quests
export const getQuests = async () => {
  try {
    const response = await api.get('/quests');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const claimQuest = async (questId) => {
  try {
    const response = await api.post(`/quests/${questId}/complete`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Leaderboard
export const getLeaderboard = async (type = 'all-time') => {
  try {
    const response = await api.get(`/leaderboard/${type}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Profile Dashboard
export const getProfileDashboard = async () => {
  try {
    const response = await api.get('/profile-dashboard');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateProfileDashboard = async (updateData) => {
  try {
    const response = await api.put('/profile-dashboard/update', updateData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Settings
export const getSettings = async () => {
  try {
    const response = await api.get('/settings');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateSettings = async (settingsData) => {
  try {
    const response = await api.put('/settings', settingsData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Achievements
export const getAchievements = async () => {
  try {
    const response = await api.get('/achievements');
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const claimAchievement = async (achievementId) => {
  try {
    const response = await api.post(`/achievements/claim/${achievementId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateAchievementProgress = async (achievementId, progressData) => {
  try {
    const response = await api.post(`/achievements/progress/${achievementId}`, progressData);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export default api;