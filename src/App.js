// src/App.js

import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import LoadingSpinner from './components/LoadingSpinner';
import { SettingsProvider } from './context/SettingsContext';
import backgroundPattern from "./Images/bg_pattern.svg";

const Home = lazy(() => import('./pages/Home'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const DailyClaim = lazy(() => import('./pages/CheckIn'));
const Invite = lazy(() => import('./pages/Invite'));
const Achievement = lazy(() => import('./pages/Achievement'));
const Quest = lazy(() => import('./pages/Quest'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

const AppWrapper = styled.div`
 min-height: 100vh;
  background-color: #000033;
  background-image: url(${backgroundPattern});
  background-size: cover;
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  padding-bottom: 60px; // Adjust based on your Navigation height
`;

function App() {
  return (
    <SettingsProvider>
      <AppWrapper>
        <ContentWrapper>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<DailyClaim />} />
              <Route path="/home" element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/invite" element={<Invite />} />
              <Route path="/achievement" element={<Achievement />} />
              <Route path="/quest" element={<Quest />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </ContentWrapper>
        <ToastContainer position="bottom-right" />
      </AppWrapper>
    </SettingsProvider>
  );
}

export default App;