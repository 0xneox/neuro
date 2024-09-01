import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { claimDailyXP, createUserProfile, initializeTelegramAuth } from '../services/api';
import useApi from '../hooks/useApi';
import { useAuth } from '../context/AuthContext';
import logo from "../Images/logo.png";
import fanImage from "../Images/newfan.png";
import backgroundImage from "../Images/bg_pattern.svg";
import tokenSymbolSvg from "../Images/questIcon.png";

const glowAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const CheckInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000033;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  user-select: none;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const Logo = styled.img`
  width: 150px;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const FanContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BreathingLight = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(23,230,235,0.5) 0%, rgba(17,96,217,0.5) 100%);
  animation: ${glowAnimation} 4s infinite ease-in-out;
`;

const FanImage = styled(motion.img)`
  width: 90%;
  height: 90%;
  position: relative;
  z-index: 1;
`;

const CheckInTitle = styled.h1`
  font-size: 2.5rem;
  margin-top: 20px;
  text-align: center;
`;

const ClaimContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const XPText = styled(motion.div)`
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const TokenSymbol = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const ClaimButton = styled(motion.button)`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 15px 60px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #6b7280;
    cursor: not-allowed;
  }
`;
function CheckIn() {
  const [claimed, setClaimed] = useState(false);
  const [claimAmount, setClaimAmount] = useState(100);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const { execute: executeClaim, loading: claimLoading } = useApi(claimDailyXP);
  const { execute: executeCreateProfile, loading: createProfileLoading } = useApi(createUserProfile);
  const { execute: executeInitAuth, loading: authLoading } = useApi(initializeTelegramAuth);

  useEffect(() => {
    const initializeUser = async () => {
      if (!user) {
        const tg = window.Telegram?.WebApp;
        if (tg && tg.initDataUnsafe) {
          try {
            // Initialize Telegram auth
            const authResult = await executeInitAuth(tg.initDataUnsafe);
            
            // If auth is successful, create or update the user profile
            if (authResult.token) {
              localStorage.setItem('token', authResult.token);
              const newUser = await executeCreateProfile(authResult.user);
              setUser(newUser);
            }
          } catch (error) {
            console.error('Failed to initialize user:', error);
            // Handle error (e.g., show error message to user)
          }
        }
      }
    };
    initializeUser();
  }, [user, setUser, executeCreateProfile, executeInitAuth]);


  const handleClaim = async () => {
    if (claimLoading) return;

    try {
      const result = await executeClaim();
      setClaimAmount(result.amount);
      setClaimed(true);
      setUser(prevUser => ({ ...prevUser, xp: (prevUser?.xp || 0) + result.amount }));
      
      // Animation and transition
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    } catch (error) {
      console.error('Claim failed:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const loading = claimLoading || createProfileLoading || authLoading;

  return (
    <CheckInWrapper>
      <Header>
        <Logo src={logo} alt="Logo" />
      </Header>

      <MainContent>
        <FanContainer>
          <BreathingLight 
            animate={{ opacity: claimed ? 0.8 : 0.5 }}
          />
          <FanImage 
            src={fanImage} 
            alt="Fan" 
            animate={{ rotate: claimed ? 360 : 0 }}
            transition={{ duration: 1 }}
          />
        </FanContainer>

        <CheckInTitle>Daily Check-in</CheckInTitle>

        <ClaimContainer>
          <AnimatePresence>
            <XPText
              key={claimed ? 'claimed' : 'unclaimed'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <TokenSymbol src={tokenSymbolSvg} alt="XP" />
              {claimed ? `You claimed ${claimAmount} XP!` : `+${claimAmount} XP`}
            </XPText>
          </AnimatePresence>
          <ClaimButton
            onClick={handleClaim}
            disabled={loading || claimed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Processing...' : claimed ? 'Claimed!' : 'Claim XP'}
          </ClaimButton>
        </ClaimContainer>
      </MainContent>
    </CheckInWrapper>
  );
}

export default CheckIn;