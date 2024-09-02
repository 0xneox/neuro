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
  { id: 1, title: 'ツイッターをフォロー', description: '公式Twitterアカウントをフォローする', icon: <FaTwitter />, claimed: false, locked: false },
  { id: 2, title: 'ツイートをリツイート', description: '最新の告知ツイートをリツイートする', icon: <FaTwitter />, claimed: false, locked: false },
  { id: 3, title: 'Discordに参加', description: '公式Discordサーバーに参加する', icon: <FaDiscord />, claimed: false, locked: false },
  { id: 4, title: 'Discordで挨拶', description: '自己紹介チャンネルで挨拶する', icon: <FaDiscord />, claimed: false, locked: false },
  { id: 5, title: 'Telegramグループに参加', description: '公式Telegramグループに参加する', icon: <FaTelegram />, claimed: false, locked: false },
  { id: 6, title: '友達を招待', description: '友達を1人ゲームに招待する', icon: <FaCheckCircle />, claimed: false, locked: false },
  { id: 7, title: 'デイリーログイン', description: '7日間連続でログインする', icon: <FaCheckCircle />, claimed: false, locked: false },
  { id: 8, title: 'GPUをアップグレード', description: 'GPUを1回アップグレードする', icon: <FaCheckCircle />, claimed: false, locked: true },
  { id: 9, title: '100回タップ', description: 'GPUを100回タップする', icon: <FaCheckCircle />, claimed: false, locked: false },
  { id: 10, title: '1000 NLOVを獲得', description: '合計1000 NLOVを獲得する', icon: <FaCheckCircle />, claimed: false, locked: true },
];

const mockAchievements = [
  { id: 1, title: '初心者マイナー', description: '初めてGPUをタップする', icon: '🏆', progress: 1, required: 1, claimed: true },
  { id: 2, title: 'ソーシャルバタフライ', description: '全てのソーシャルクエストを完了する', icon: '🦋', progress: 3, required: 5, claimed: false },
  { id: 3, title: 'アップグレードマスター', description: 'GPUを10回アップグレードする', icon: '🚀', progress: 3, required: 10, claimed: false },
  { id: 4, title: 'NLOV億万長者', description: '100,000 NLOVを獲得する', icon: '💰', progress: 25000, required: 100000, claimed: false },
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

  const renderContent = () => {
    if (questsLoading || achievementsLoading) {
      return <LoadingWrapper>読み込み中...</LoadingWrapper>;
    }

    if (questsError || achievementsError) {
      return <ErrorWrapper>データの読み込みに失敗しました。後でもう一度お試しください。</ErrorWrapper>;
    }

    return (
      <AnimatePresence mode="wait">
        {activeTab === 'quest' && (
          <motion.div
            key="quests"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {quests.map(quest => (
              <ItemWrapper key={quest.id}>
                <ItemInfo>
                  <ItemIcon>{quest.icon}</ItemIcon>
                  <ItemDetails>
                    <ItemTitle>{quest.title}</ItemTitle>
                    <ItemDescription>{quest.description}</ItemDescription>
                  </ItemDetails>
                </ItemInfo>
                <ActionButton 
                  onClick={() => handleQuestClaim(quest.id)}
                  disabled={quest.claimed || quest.locked || questClaimLoading}
                  claimed={quest.claimed}
                  locked={quest.locked}
                >
                  {quest.claimed ? '完了' : quest.locked ? <><FaLock /> ロック</> : 'クリア'}
                </ActionButton>
              </ItemWrapper>
            ))}
          </motion.div>
        )}

        {activeTab === 'achievement' && (
          <motion.div
            key="achievements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {achievements.map(achievement => (
              <ItemWrapper key={achievement.id}>
                <ItemInfo>
                  <ItemIcon>{achievement.icon}</ItemIcon>
                  <ItemDetails>
                    <ItemTitle>{achievement.title}</ItemTitle>
                    <ItemDescription>{achievement.description}</ItemDescription>
                  </ItemDetails>
                </ItemInfo>
                <ActionButton 
                  onClick={() => handleAchievementClaim(achievement.id)}
                  disabled={achievement.claimed || achievement.progress < achievement.required || achievementClaimLoading}
                  claimed={achievement.claimed}
                >
                  {achievement.claimed ? '獲得済み' : `${achievement.progress}/${achievement.required}`}
                </ActionButton>
              </ItemWrapper>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <QuestWrapper>
      <Header>
        <Logo src={logoLeft} alt="Left Logo" />
        <Logo src={logoRight} alt="Right Logo" />
      </Header>

      <ContentWrapper>
        <SubHeader>
          <DropdownButton>
            デイリークエスト <FaChevronDown />
          </DropdownButton>
          <XPEarned>350 XP 獲得</XPEarned>
        </SubHeader>

        <TabContainer>
          <Tab active={activeTab === 'quest'} onClick={() => setActiveTab('quest')}>
            <FaGem style={{marginRight: '5px'}} /> クエスト
          </Tab>
          <Tab active={activeTab === 'achievement'} onClick={() => setActiveTab('achievement')}>
            <FaTrophy style={{marginRight: '5px'}} /> 実績
          </Tab>
        </TabContainer>

        <Content>
          {renderContent()}
        </Content>
      </ContentWrapper>
      <Navbar />
    </QuestWrapper>
  );
};

export default Quest;