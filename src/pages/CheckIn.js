import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { claimDailyXP, createUserProfile, initializeTelegramAuth } from '../services/api';
import useApi from '../hooks/useApi';
import { useAuth } from '../context/AuthContext';
import backgroundVideo from '../videos/video.mp4';
import fallbackImage from '../Images/bg5.jpg';
import logo from '../Images/logoo.png';
import neuro from '../Images/logo1.png';

const CheckInWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${fallbackImage});
  background-size: cover;
  background-position: center;
`;

const VideoBackground = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: absolute;
  top: 0;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Content = styled.div`
  z-index: 1;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ClaimTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  color: #fff;
  font-family: 'Orbitron', sans-serif;
`;

const XPText = styled(motion.div)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ffd700;
  font-family: 'Roboto', sans-serif;
`;

const ClaimButton = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all .3s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  margin-top: 10px;
  font-size: 14px;
`;

function CheckIn() {
  const [claimed, setClaimed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const { execute: executeClaim, loading: claimLoading } = useApi(claimDailyXP);
  const { execute: executeCreateProfile } = useApi(createUserProfile);
  const { execute: executeInitAuth } = useApi(initializeTelegramAuth);

  useEffect(() => {
    const initializeUser = async () => {
      if (!user) {
        const tg = window.Telegram?.WebApp;
        if (tg && tg.initDataUnsafe) {
          try {
            const authResult = await executeInitAuth(tg.initDataUnsafe);
            if (authResult.token) {
              localStorage.setItem('token', authResult.token);
              const newUser = await executeCreateProfile(authResult.user);
              setUser(newUser);
              if (newUser.lastClaimTime && Date.now() - new Date(newUser.lastClaimTime).getTime() < 24 * 60 * 60 * 1000) {
                navigate('/home');
              }
            }
          } catch (error) {
            console.error('Failed to initialize user:', error);
            setError('Failed to initialize user. Please try again.');
          }
        }
      } else if (user.lastClaimTime && Date.now() - new Date(user.lastClaimTime).getTime() < 24 * 60 * 60 * 1000) {
        navigate('/home');
      }
    };
    initializeUser();
  }, [user, setUser, executeCreateProfile, executeInitAuth, navigate]);

  const handleClaim = async () => {
    if (claimLoading) return;

    try {
      const result = await executeClaim();
      setClaimed(true);
      setShowConfetti(true);
      setUser(prevUser => ({ ...prevUser, xp: (prevUser?.xp || 0) + result.xpGained, lastClaimTime: new Date() }));

      setTimeout(() => {
        setShowConfetti(false);
        navigate('/home');
      }, 3000);
    } catch (error) {
      console.error('Claim failed:', error);
      setError('Failed to claim daily XP. Please try again later.');
    }
  };

  return (
    <CheckInWrapper>
      {!videoError && (
        <VideoBackground 
          autoPlay 
          loop 
          muted 
          playsInline
          onError={() => setVideoError(true)}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </VideoBackground>
      )}
      <Header>
        <Logo src={logo} alt="New Logo" />
        <Logo src={neuro} alt="Neurolov Logo" />
      </Header>
      <Content>
        <ClaimTitle>Daily Claim</ClaimTitle>
        <AnimatePresence>
          <XPText
            key={claimed ? 'claimed' : 'unclaimed'}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
          >
            100 XP
          </XPText>
        </AnimatePresence>
        <ClaimButton onClick={handleClaim} disabled={claimed || claimLoading}>
          <span>{claimed ? 'Claimed!' : claimLoading ? 'Claiming...' : 'Claim'}</span>
        </ClaimButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Content>
      {showConfetti && <Confetti />}
    </CheckInWrapper>
  );
}

export default CheckIn;