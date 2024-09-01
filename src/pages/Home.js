import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { tapGPU, getCooldownStatus, claimDailyXP, getDailyPoints } from '../services/api';
import useApi from '../hooks/useApi';
import LevelUpModal from '../components/LevelUpModal';
import { FaHome, FaTasks, FaSeedling, FaUserFriends, FaWallet } from 'react-icons/fa';
import fanImage from "../Images/newfan.png";
import defaultAvatar from "../Images/second.png";
import breathingLight from "../Images/breath_1.svg";
import backgroundImage from "../Images/bg_pattern.svg";
import tokenSymbolSvg from "../Images/questIcon.png";
import { triggerHapticFeedback } from '../utils/haptics';
import { useSettings } from '../context/SettingsContext';
import Navbar from '../components/Navbar';

const glowAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const HomeWrapper = styled.div`
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

const TappableArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserID = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const CPLevel = styled.span`
  font-size: 12px;
  color: #bbb;
`;

const ChannelButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

const TokenDisplay = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TokenAmount = styled.div`
  font-size: 36px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TokenSymbol = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const GPUContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  pointer-events: none;
`;

const BreathingLight = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${glowAnimation} 4s infinite ease-in-out;
`;

const Fan = styled(motion.img)`
  position: absolute;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #bbb;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const RewardAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ClaimButton = styled.button`
  background-color: #10b981;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #059669;
  }

  &:disabled {
    background-color: #6b7280;
    cursor: not-allowed;
  }
`;

const Home = () => {
  const { user, updateUser } = useAuth();
  const { settings } = useSettings();
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [totalTaps, setTotalTaps] = useState(user?.totalTaps || 0);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const [rewardAmount, setRewardAmount] = useState(0);
  const [canClaimDaily, setCanClaimDaily] = useState(true);
  const fanControls = useAnimation();
  
  const { execute: executeTap, data: tapData, loading: tapLoading } = useApi(tapGPU);
  const { execute: executeCooldownCheck } = useApi(getCooldownStatus);
  const { execute: executeClaimDailyXP } = useApi(claimDailyXP);
  const { execute: executeGetDailyPoints } = useApi(getDailyPoints);

  const handleTap = useCallback(async () => {
    if (tapLoading || isCoolingDown) return;

    if (settings.hapticFeedbackEnabled) {
      triggerHapticFeedback('tap');
    }

    try {
      const result = await executeTap();
      setTotalTaps(prevTaps => prevTaps + 1);
      setRewardAmount(prevReward => prevReward + result.rewardAmount);

      // Rotate the fan
      fanControls.start({
        rotate: 360,
        transition: { duration: 0.5, ease: "linear" }
      });

      if (result.cooldown) {
        setIsCoolingDown(true);
        setTimeout(() => setIsCoolingDown(false), result.cooldownDuration);
      }

    } catch (error) {
      console.error('Tap failed:', error);
    }
  }, [tapLoading, isCoolingDown, executeTap, fanControls, settings.hapticFeedbackEnabled]);

  useEffect(() => {
    const checkStatus = async () => {
      const cooldownStatus = await executeCooldownCheck();
      if (cooldownStatus.isCoolingDown) {
        setIsCoolingDown(true);
        setTimeout(() => setIsCoolingDown(false), cooldownStatus.remainingTime);
      }

      const dailyPoints = await executeGetDailyPoints();
      setCanClaimDaily(dailyPoints.canClaim);
    };
    checkStatus();
  }, [executeCooldownCheck, executeGetDailyPoints]);

  useEffect(() => {
    if (tapData?.levelUp) {
      setShowLevelUp(true);
      updateUser(tapData.user);
    }
  }, [tapData, updateUser]);

  const handleClaim = async () => {
    try {
      const result = await executeClaimDailyXP();
      if (result.success) {
        setRewardAmount(0);
        setCanClaimDaily(false);
        updateUser({ ...user, tokenBalance: user.tokenBalance + result.amount });
        // Show success message
      } else {
        console.log('Daily XP already claimed or not available');
        // Show info message
      }
    } catch (error) {
      console.error('Claim failed:', error);
      // Show error message
    }
  };

  return (
    <HomeWrapper>
      <Header>
        <UserInfo>
          <Avatar src={user?.avatar || defaultAvatar} alt="User Avatar" />
          <UserDetails>
            <UserID>ID: {user?.id || '5856722860'}</UserID>
            <CPLevel>CP Level: {user?.cpLevel || '1'}</CPLevel>
          </UserDetails>
        </UserInfo>
        <ChannelButton>Join Channel</ChannelButton>
      </Header>

      <TappableArea onClick={handleTap}>
        <TokenDisplay>
          <TokenAmount>
            <TokenSymbol src={tokenSymbolSvg} alt="NLOV" />
            {user?.tokenBalance || 5000} NLOV
          </TokenAmount>
        </TokenDisplay>

        <ButtonContainer>
          <ActionButton>Daily Code</ActionButton>
          <ActionButton>Check-in</ActionButton>
        </ButtonContainer>

        <GPUContainer>
          <BreathingLight 
            src={breathingLight}
            alt="Breathing Light"
            animate={{ opacity: isCoolingDown ? 0.5 : 1 }}
          />
          <Fan
            src={fanImage}
            alt="Fan"
            animate={fanControls}
          />
        </GPUContainer>

        <StatsContainer>
          <Stat>
            <StatValue>{totalTaps}</StatValue>
            <StatLabel>Total Taps</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{user?.cpLevel || 1}</StatValue>
            <StatLabel>CP Level</StatLabel>
          </Stat>
        </StatsContainer>

        <BottomContainer>
          <RewardAmount>{rewardAmount} NLOV</RewardAmount>
          <ClaimButton onClick={handleClaim} disabled={!canClaimDaily}>
            Claim Daily XP
          </ClaimButton>
        </BottomContainer>
      </TappableArea>

      <Navbar />

      {showLevelUp && (
        <LevelUpModal 
          level={tapData.newLevel} 
          onClose={() => setShowLevelUp(false)} 
        />
      )}
    </HomeWrapper>
  );
};

export default Home;