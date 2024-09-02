import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { tapGPU, getCooldownStatus } from '../services/api';
import useApi from '../hooks/useApi';
import LevelUpModal from '../components/LevelUpModal';
import { FaUsers } from 'react-icons/fa';
import fanImage from "../Images/newfan.png";
import defaultAvatar from "../Images/second.png";
import breathingLight from "../Images/breath_1.svg";
import backgroundImage from "../Images/bg5.jpg";
import tokenSymbolSvg from "../Images/questIcon.png";
import logoLeft from "../Images/logoo.png";
import logoRight from "../Images/logo1.png";
import { triggerHapticFeedback } from '../utils/haptics';
import { useSettings } from '../context/SettingsContext';
import Navbar from '../components/Navbar';

const fadeAnimation = keyframes`
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-50px) scale(1.5); }
`;

const breatheAnimation = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.5; }
`;

const lightAnimation = keyframes`
  from { left: -30%; }
  to { left: 100%; }
`;



const anime1 = keyframes`
  to { background-color: rgb(77, 124, 255); }
`;

const anime2 = keyframes`
  to { fill: rgba(77, 124, 255, 0.642); }
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
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const UserSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
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

const TappableArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
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

const ActionButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const GPUContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 60px;
`;

const FanContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Fan = styled(motion.img)`
  width: 90%;
  height: 90%;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;

const BreathingLight = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${breatheAnimation} 4s infinite ease-in-out;
`;

const TapAnimation = styled.div`
  position: absolute;
  animation: ${fadeAnimation} 1s forwards;
  pointer-events: none;
  font-size: 18px;
  font-weight: bold;
  color: #4ade80;
`;

const ControlsContainer = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProgressBar = styled.div`
  height: 2px;
  width: 300px;
  background: rgb(44, 44, 44);
  position: relative;
  overflow: hidden;
`;

const BlackOverlay = styled.div`
  background: linear-gradient(
    87deg,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0.14) 30%,
    rgba(0, 0, 0, 0.14) 70%,
    rgb(0, 0, 0) 100%
  );
  position: absolute;
  inset: 0px;
`;

const Light = styled.div`
  width: 70px;
  height: 100%;
  position: absolute;
  left: -20%;
  top: 0px;
  background: linear-gradient(
    87deg,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 204, 255) 40%,
    rgb(0, 204, 255) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  animation: ${lightAnimation} 2s infinite ease-in-out;
`;

const BoostButtonWrapper = styled.label`
  position: relative;
  display: inline-block;
`;

const BoostButtonInput = styled.input`
  display: none;
`;

const BoostButtonDiv = styled.div`
  position: relative;
  background-image: linear-gradient(#ffffff 33%, #414751 58%, #837b52, #c5baa1, #c3adaa);
  border-radius: 50px;
  padding: 6px;
  border: none;
  outline: none;
  box-shadow: 0.1em 0 0 #2726267f inset, -0.1em 0 0 #27262600 inset, 0 0.1em 0 #afa490 inset, 0 -0.1em 0 #ffffff3f, 0 0.2em 0.5em #0000007f, 0 -0.1em 0 #151616 inset, -0.1em -0.2em 0 #ffffff7f inset;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease-in-out;

  &::before {
    position: absolute;
    content: "";
    width: 4.1rem;
    height: 4.1rem;
    border-radius: inherit;
    background-color: #606060;
    z-index: -1;
    transition: background-image .3s ease-in-out;
  }

  ${BoostButtonInput}:checked + & {
    box-shadow: none;
  }

  ${BoostButtonInput}:checked + &::before {
    background-image: rgb(77, 124, 255);
    animation: ${anime1} .3s linear alternate-reverse infinite;
  }
`;

const BoostButtonIcon = styled.span`
  width: 4rem;
  height: 4rem;
  display: inline-block;

  svg {
    height: 100%;
    width: 100%;
    fill: #000000;
    transition: fill .3s ease-in-out;
  }

  ${BoostButtonInput}:checked + ${BoostButtonDiv} & svg {
    fill: rgb(77, 124, 255);
    animation: ${anime2} .3s linear alternate-reverse infinite;
  }
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


const BoostButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const progressAnimation = keyframes`
  100% {
    background-size: 120% 100%;
  }
`;

const CooldownButton = styled.div`
  width: 80px;
  height: 40px;
  border: 2px solid #22f49e;
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(90deg, #22f49e 0 10px, #0000 0 15px)
    left/0% 100% no-repeat content-box content-box;
  position: relative;
  animation: ${progressAnimation} 2s infinite steps(6);

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 100%;
    width: 10px;
    background: linear-gradient(
          #0000 calc(50% - 7px),
          #22f49e 0 calc(50% - 5px),
          #0000 0 calc(50% + 5px),
          #22f49e 0 calc(50% + 7px),
          #0000 0
        )
        left / 100% 100%,
      linear-gradient(#22f49e calc(50% - 5px), #0000 0 calc(50% + 5px), #22f49e 0)
        left / 2px 100%,
      linear-gradient(#0000 calc(50% - 5px), #22f49e 0 calc(50% + 5px), #0000 0)
        right/2px 100%;
    background-repeat: no-repeat;
  }
`;

const CooldownIcon = styled.svg`
  position: absolute;
  left: 22px;
  fill: rgba(37, 37, 37, 0.774);
`;


const Home = () => {
  const { user, updateUser } = useAuth();
  const { settings } = useSettings();
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [totalTaps, setTotalTaps] = useState(user?.totalTaps || 0);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const [cooldownTimeLeft, setCooldownTimeLeft] = useState(0);
  const [tapAnimations, setTapAnimations] = useState([]);
  const [fanSpeed, setFanSpeed] = useState(0);
  const [isBoostActive, setIsBoostActive] = useState(false);
  const fanRef = useRef(null);
  const rotationRef = useRef(0);
  const gpuContainerRef = useRef(null);
  const [showBoostButton, setShowBoostButton] = useState(false);
  
  const { execute: executeTap, loading: tapLoading } = useApi(tapGPU);
  const { execute: executeCooldownCheck } = useApi(getCooldownStatus);

  const rotateFan = useCallback(() => {
    rotationRef.current += 360;
    if (fanRef.current) {
      fanRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
    }
  }, []);

  const handleTap = useCallback(async () => {
    if (tapLoading || isCoolingDown) return;

    if (totalTaps >= 1000) {
      setIsCoolingDown(true);
      setCooldownTimeLeft(7 * 60); // 7 minutes in seconds
      return;
    }

    setShowBoostButton(true);

    const gpuRect = gpuContainerRef.current.getBoundingClientRect();
    const centerX = gpuRect.width / 2;
    const centerY = gpuRect.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    const angle = Math.random() * 2 * Math.PI;
    const startX = centerX + radius * Math.cos(angle);
    const startY = centerY + radius * Math.sin(angle);
    const endX = centerX + radius * Math.cos(angle + Math.PI);
    const endY = centerY + radius * Math.sin(angle + Math.PI);

    setTapAnimations(prev => [...prev, { 
      id: Date.now(), 
      startX, 
      startY,
      translateX: endX - startX,
      translateY: endY - startY
    }]);

    setTotalTaps(prevTaps => prevTaps + 1);
    setFanSpeed(prevSpeed => Math.min(prevSpeed + 10, 100));

    if (settings.hapticFeedbackEnabled) {
      triggerHapticFeedback('tap');
    }

    rotateFan();

    try {
      const result = await executeTap();

      if (result.levelUp) {
        setShowLevelUp(true);
        updateUser(result.user);
      }

    } catch (error) {
      console.error('Tap failed:', error);
    }
 }, [tapLoading, isCoolingDown, totalTaps, executeTap, settings.hapticFeedbackEnabled, updateUser, rotateFan]);

  const handleBoost = useCallback(() => {
    if (!isCoolingDown) {
      setIsBoostActive(prev => !prev);
      if (!isBoostActive) {
        setFanSpeed(100);
        setTimeout(() => {
          setFanSpeed(prevSpeed => Math.max(prevSpeed - 50, 0));
          setIsBoostActive(false);
        }, 3000);
      }
    }
  }, [isCoolingDown, isBoostActive]);

  useEffect(() => {
    if (isCoolingDown) {
      const timer = setInterval(() => {
        setCooldownTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsCoolingDown(false);
            setTotalTaps(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isCoolingDown]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTapAnimations(prev => prev.filter(anim => Date.now() - anim.id < 1000));
      setFanSpeed(prevSpeed => Math.max(prevSpeed - 1, 0));
    }, 100);
    return () => clearInterval(timer);
  }, []);



  return (
    <HomeWrapper>
      <Header>
        <Logo src={logoLeft} alt="Left Logo" />
        <Logo src={logoRight} alt="Right Logo" />
      </Header>

      <UserSection>
        <UserInfo>
          <Avatar src={user?.avatar || defaultAvatar} alt="User Avatar" />
          <UserDetails>
            <UserID>ID: {user?.id || '5856722860'}</UserID>
            <CPLevel>CP Level: {user?.cpLevel || '1'}</CPLevel>
          </UserDetails>
        </UserInfo>
        <ButtonGroup>
          <Button>Join Channel</Button>
          <Button><FaUsers /> {user?.referrals || 0}</Button>
        </ButtonGroup>
      </UserSection>

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

        <GPUContainer ref={gpuContainerRef}>
          <BreathingLight 
            src={breathingLight}
            alt="Breathing Light"
            animate={{ 
              opacity: isCoolingDown ? 0.8 : 0.4,
              scale: isCoolingDown ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              duration: isCoolingDown ? 2 : 0,
              repeat: isCoolingDown ? Infinity : 0
            }}
          />
          <FanContainer>
            <Fan
              ref={fanRef}
              src={fanImage}
              alt="Fan"
            />
          </FanContainer>
          {tapAnimations.map(anim => (
            <TapAnimation 
              key={anim.id} 
              style={{ 
                left: anim.startX, 
                top: anim.startY,
                '--translateX': `${anim.translateX}px`,
                '--translateY': `${anim.translateY}px`
              }}
            >
              +1
            </TapAnimation>
          ))}
          <ControlsContainer>
            <ProgressBar>
              <Light />
              <BlackOverlay />
            </ProgressBar>
            <BoostButtonWrapper className="switch">
              <BoostButtonInput 
                type="checkbox" 
                checked={isBoostActive} 
                onChange={handleBoost} 
                disabled={isCoolingDown} 
              />
              <BoostButtonDiv className="button">
                <BoostButtonIcon className="icon">
                  <svg xmlSpace="preserve" viewBox="0 0 463 463" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000">
                    <g>
                      <path d="M259.476,280.364V247.5c0-12.958-10.542-23.5-23.5-23.5s-23.5,10.542-23.5,23.5v29.672 c0,35.757-13.173,70.087-37.094,96.665l-32.981,36.646c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.82,2.521,10.592-0.558 l32.981-36.646c26.403-29.338,40.944-67.231,40.944-106.7V247.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5v32.864 c0,44.003-16.301,86.167-45.901,118.727l-32.149,35.364c-2.786,3.064-2.56,7.809,0.505,10.595c1.437,1.307,3.242,1.95,5.042,1.95 c2.04,0,4.072-0.827,5.552-2.455l32.148-35.364C241.789,373.854,259.476,328.106,259.476,280.364z"></path>
                      <path d="M291.476,247.5c0-30.603-24.897-55.5-55.5-55.5s-55.5,24.897-55.5,55.5v29.672c0,27.839-10.256,54.566-28.879,75.258 l-23.447,26.053c-2.771,3.079-2.521,7.821,0.558,10.593c3.079,2.771,7.82,2.519,10.592-0.558l23.447-26.053 c21.106-23.451,32.73-53.742,32.73-85.293V247.5c0-22.332,18.168-40.5,40.5-40.5c22.332,0,40.5,18.168,40.5,40.5v32.864 c0,51.979-19.256,101.789-54.223,140.252l-27.125,29.839c-2.787,3.064-2.561,7.809,0.504,10.595c1.437,1.307,3.242,1.95,5.042,1.95 c2.04,0,4.072-0.827,5.552-2.455l27.126-29.839c37.481-41.23,58.123-94.622,58.123-150.342V247.5z"></path>
                      <path d="M323.476,247.5c0-48.248-39.252-87.5-87.5-87.5s-87.5,39.252-87.5,87.5v29.672c0,19.92-7.339,39.045-20.665,53.851 l-21.112,23.458c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.821,2.519,10.592-0.558l21.112-23.458 c15.809-17.565,24.515-40.254,24.515-63.886V247.5c0-39.977,32.523-72.5,72.5-72.5s72.5,32.523,72.5,72.5v32.864 c0,59.958-22.212,117.412-62.545,161.777l-7.507,8.258c-2.786,3.065-2.56,7.809,0.505,10.595c1.437,1.306,3.243,1.95,5.042,1.95 c2.04,0,4.072-0.827,5.552-2.455l7.506-8.258c42.848-47.133,66.446-108.169,66.446-171.867V247.5z"></path>
                    </g>
                  </svg>
                </BoostButtonIcon>
              </BoostButtonDiv>
            </BoostButtonWrapper>
          </ControlsContainer>
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
          {isCoolingDown && (
            <Stat>
              <StatValue>{Math.floor(cooldownTimeLeft / 60)}:{cooldownTimeLeft % 60 < 10 ? '0' : ''}{cooldownTimeLeft % 60}</StatValue>
              <StatLabel>Cooldown</StatLabel>
            </Stat>
          )}
        </StatsContainer>
      </TappableArea>

      <Navbar />

      {showLevelUp && (
        <LevelUpModal 
          level={user?.cpLevel} 
          onClose={() => setShowLevelUp(false)} 
        />
      )}
    </HomeWrapper>
  );
};

export default Home;