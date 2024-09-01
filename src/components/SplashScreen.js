// src/components/SplashScreen.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTelegram, FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import coverImage from '../Images/cover.png'; // Ensure this path is correct

const SplashWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #000033;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 3rem;
  margin-bottom: 5px;
  span {
    color: #00ffff;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #00ffff;
`;

const CoverImage = styled(motion.img)`
  width: 80%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StayTuned = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const MoreInfo = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const IconLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #00ffff;
  }
`;

const LoadingBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background-color: #1a1a1a;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 20px;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background-color: #00ffff;
`;

const SplashScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wobbling, setWobbling] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        return oldProgress + 1;
      });
    }, 100); // 30 seconds / 100 steps = 300ms per step

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const handleTap = () => {
    setWobbling(true);
    setTimeout(() => setWobbling(false), 1000);
  };

  const wobbleAnimation = {
    scale: [1, 1.05, 1],
    rotate: [0, -5, 3, -3, 2, -1, 0],
    transition: { duration: 1 }
  };

  return (
    <SplashWrapper 
      onClick={handleTap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <Logo>NEUR<span>O</span>L<span>O</span>V</Logo>
        <SubHeading>Compute App</SubHeading>
      </div>
      <CoverImage 
        src={coverImage} 
        alt="Neurolov Compute"
        animate={wobbling ? wobbleAnimation : {}}
      />
      <InfoGroup>
        <StayTuned>Stay Tuned</StayTuned>
        <MoreInfo>More info in official channels</MoreInfo>
        <SocialIcons>
          <IconLink href="#" target="_blank" rel="noopener noreferrer"><FaTelegram /></IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer"><FaDiscord /></IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></IconLink>
        </SocialIcons>
      </InfoGroup>
      <LoadingBar>
        <LoadingProgress
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </LoadingBar>
    </SplashWrapper>
  );
};

export default SplashScreen;