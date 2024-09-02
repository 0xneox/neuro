import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { getQuests, claimQuest, getAchievements, claimAchievement } from '../services/api';
import useApi from '../hooks/useApi';
import { FaChevronDown, FaLock, FaGem, FaTrophy, FaTwitter, FaDiscord, FaTelegram, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import logoLeft from "../Images/logoo.png";
import logoRight from "../Images/logo1.png";
import backgroundImage from "../Images/bg5.jpg";

const QuestWrapper = styled.div`
  padding: 20px;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 60px; // Add padding to account for the fixed header
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const XPEarned = styled.div`
  background-color: #3d85c6;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
`;

const TabContainer = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: ${props => props.active ? '#3d85c6' : 'transparent'};
  color: white;
  border-radius: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const ItemWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ItemIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3d85c6;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemDetails = styled.div``;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const ItemDescription = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #888;
`;

const ActionButton = styled.button`
  background-color: ${props => props.claimed ? '#888' : props.locked ? '#d32f2f' : '#00c853'};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: ${props => props.claimed || props.locked ? 'default' : 'pointer'};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: ${props => !props.claimed && !props.locked ? 'scale(1.05)' : 'none'};
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #ffffff;
`;

const ErrorWrapper = styled.div`
  color: #ff6b6b;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`;

const mockQuests = [
  { id: 1, title: 'Follow on Twitter', description: 'Follow the official Twitter account', icon: <FaTwitter />, claimed: false, locked: false },
  { id: 2, title: 'Retweet Tweet', description: 'Retweet the latest announcement tweet', icon: <FaTwitter />, claimed: false, locked: false },
  { id: 3, title: 'Join Discord', description: 'Join the official Discord server', icon: <FaDiscord />, claimed: false, locked: false },
  { id: 4, title: 'Greet in Discord', description: 'Say hello in the introduction channel', icon: <FaDiscord />, claimed: false, locked: false },
  { id: 5, title: 'Join Telegram Group', description: 'Join the official Telegram group', icon: <FaTelegram />, claimed: false, locked: false },
  { id: 6, title: 'Invite a Friend', description: 'Invite a friend to the game', icon: <FaCheckCircle />, claimed: false, locked: false },
  { id: 7, title: 'Daily Login', description: 'Log in for 7 consecutive days', icon: <FaCheckCircle />, claimed: false, locked: false },
  { id: 8, title: 'Upgrade GPU', description: 'Upgrade your GPU once', icon: <FaCheckCircle />, claimed: false, locked: true },
  { id: 9, title: 'Tap 100 Times', description: 'Tap the GPU 100 times', icon: <FaCheckCircle />, claimed: false, locked: false },
  { id: 10, title: 'Earn 1000 NLOV', description: 'Earn a total of 1000 NLOV', icon: <FaCheckCircle />, claimed: false, locked: true },
];

const mockAchievements = [
  { id: 1, title: 'Beginner Miner', description: 'Tap the GPU for the first time', icon: '🏆', progress: 1, required: 1, claimed: true },
  { id: 2, title: 'Social Butterfly', description: 'Complete all social quests', icon: '🦋', progress: 3, required: 5, claimed: false },
  { id: 3, title: 'Upgrade Master', description: 'Upgrade the GPU 10 times', icon: '🚀', progress: 3, required: 10, claimed: false },
  { id: 4, title: 'NLOV Millionaire', description: 'Earn 100,000 NLOV', icon: '💰', progress: 25000, required: 100000, claimed: false },
];

const Quest = () => {
  const [activeTab, setActiveTab] = useState('quest');
  const [quests, setQuests] = useState(mockQuests);
  const [achievements, setAchievements] = useState(mockAchievements);

  const { execute: fetchQuests, loading: questsLoading, error: questsError } = useApi(getQuests);
  const { execute: executeQuestClaim, loading: questClaimLoading } = useApi(claimQuest);
  const { execute: fetchAchievements, loading: achievementsLoading, error: achievementsError } = useApi(getAchievements);
  const { execute: executeAchievementClaim, loading: achievementClaimLoading } = useApi(claimAchievement);

  useEffect(() => {
    // In a real application, you would fetch data from the API here
    // For now, we're using the mock data
    // fetchQuests().then(setQuests);
    // fetchAchievements().then(setAchievements);
  }, []);

  const handleQuestClaim = async (questId) => {
    try {
      // Simulate API call
      // await executeQuestClaim(questId);
      setQuests(quests.map(quest => 
        quest.id === questId ? { ...quest, claimed: true } : quest
      ));
    } catch (error) {
      console.error('Failed to claim quest:', error);
    }
  };

  const handleAchievementClaim = async (achievementId) => {
    try {
      // Simulate API call
      // await executeAchievementClaim(achievementId);
      setAchievements(achievements.map(achievement => 
        achievement.id === achievementId ? { ...achievement, claimed: true } : achievement
      ));
    } catch (error) {
      console.error('Failed to claim achievement:', error);
    }
  };

  const renderQuests = () => {
    if (questsLoading) {
      return <LoadingWrapper>Loading quests...</LoadingWrapper>;
    }

    if (questsError) {
      return <ErrorWrapper>Failed to load quests. Please try again later.</ErrorWrapper>;
    }

    return quests.map(quest => (
      <ItemWrapper key={quest.id}>
        <ItemInfo>
          <ItemIcon>{quest.icon}</ItemIcon>
          <ItemDetails>
            <ItemTitle>{quest.title}</ItemTitle>
            <ItemDescription>{quest.description}</ItemDescription>
          </ItemDetails>
        </ItemInfo>
        <ActionButton
          claimed={quest.claimed}
          locked={quest.locked}
          onClick={() => !quest.claimed && !quest.locked && handleQuestClaim(quest.id)}
        >
          {quest.claimed ? 'Claimed' : quest.locked ? 'Locked' : 'Claim'}
        </ActionButton>
      </ItemWrapper>
    ));
  };

  const renderAchievements = () => {
    if (achievementsLoading) {
      return <LoadingWrapper>Loading achievements...</LoadingWrapper>;
    }

    if (achievementsError) {
      return <ErrorWrapper>Failed to load achievements. Please try again later.</ErrorWrapper>;
    }

    return achievements.map(achievement => (
      <ItemWrapper key={achievement.id}>
        <ItemInfo>
          <ItemIcon>{achievement.icon}</ItemIcon>
          <ItemDetails>
            <ItemTitle>{achievement.title}</ItemTitle>
            <ItemDescription>{achievement.description}</ItemDescription>
          </ItemDetails>
        </ItemInfo>
        <ActionButton
          claimed={achievement.claimed}
          onClick={() => !achievement.claimed && handleAchievementClaim(achievement.id)}
        >
          {achievement.claimed ? 'Claimed' : 'Claim'}
        </ActionButton>
      </ItemWrapper>
    ));
  };

  const renderContent = () => {
    if (activeTab === 'quest') {
      return renderQuests();
    } else if (activeTab === 'achievement') {
      return renderAchievements();
    }
  };

  return (
    <QuestWrapper>
      <Header>
        <Logo src={logoLeft} alt="Logo" />
        <Navbar />
        <Logo src={logoRight} alt="Logo" />
      </Header>

      <ContentWrapper>
        <SubHeader>
          <DropdownButton>
            Current Quest
            <FaChevronDown style={{marginLeft: '5px'}} />
          </DropdownButton>
          <XPEarned>XP Earned: 5000</XPEarned>
        </SubHeader>

        <TabContainer>
          <Tab active={activeTab === 'quest'} onClick={() => setActiveTab('quest')}>
            <FaGem style={{marginRight: '5px'}} /> Quests
          </Tab>
          <Tab active={activeTab === 'achievement'} onClick={() => setActiveTab('achievement')}>
            <FaTrophy style={{marginRight: '5px'}} /> Achievements
          </Tab>
        </TabContainer>

        <Content>
          {renderContent()}
        </Content>
      </ContentWrapper>
    </QuestWrapper>
  );
};

export default Quest;
