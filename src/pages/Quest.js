import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaSyncAlt, FaChartBar, FaUser, FaChevronDown, FaLock, FaGem } from 'react-icons/fa';
import { claimQuest } from '../services/api';
import useApi from '../hooks/useApi';
import Navbar from '../components/Navbar';

const QuestWrapper = styled.div`
  padding: 20px;
  color: #ffffff;
  background-color: #000033;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
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
`;

const Content = styled.div`
  flex-grow: 1;
`;

const QuestItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestInfo = styled.div`
  display: flex;
  align-items: center;
`;

const QuestIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3d85c6;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestDetails = styled.div``;

const QuestTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const QuestDescription = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #888;
`;

const ClaimButton = styled.button`
  background-color: ${props => props.claimed ? '#888' : props.locked ? '#d32f2f' : '#00c853'};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: ${props => props.claimed || props.locked ? 'default' : 'pointer'};
`;



const NavbarIcon = styled.div`
  color: ${props => (props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.6)')};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavbarLabel = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;

const Quest = ({ history }) => {
  const [activePage, setActivePage] = useState('quest');
  const [activeTab, setActiveTab] = useState('quest');
  
  const [quests, setQuests] = useState([
    { id: 1, title: 'Follow', description: 'Follow our Twitter account', claimed: false, locked: false },
    { id: 2, title: 'Follow', description: 'Follow our Twitter account', claimed: false, locked: false },
    { id: 3, title: 'Follow', description: 'Follow our Twitter account', claimed: true, locked: false },
    { id: 4, title: 'Follow', description: 'Follow our Twitter account', claimed: true, locked: false },
    { id: 5, title: 'Follow', description: 'Follow our Twitter account', claimed: true, locked: false },
    { id: 6, title: 'Follow', description: 'Follow our Twitter account', claimed: false, locked: true },
    { id: 7, title: 'Follow', description: 'Follow our Twitter account', claimed: false, locked: true },
  ]);

  const { execute: executeClaim } = useApi(claimQuest);

  const handleNavigation = (page) => {
    setActivePage(page);
    if (history && history.push) {
      history.push(`/${page}`);
    }
  };

  const handleClaim = async (questId) => {
    try {
      await executeClaim(questId);
      setQuests(quests.map(quest => 
        quest.id === questId ? { ...quest, claimed: true } : quest
      ));
    } catch (error) {
      console.error('Failed to claim quest:', error);
    }
  };

  return (
    <QuestWrapper>
      <Header>
        <DropdownButton>
          Daily Quest <FaChevronDown />
        </DropdownButton>
        <XPEarned>350 XP earned</XPEarned>
      </Header>

      <TabContainer>
        <Tab active={activeTab === 'quest'} onClick={() => setActiveTab('quest')}>
          <FaGem style={{marginRight: '5px'}} /> Quest
        </Tab>
        <Tab active={activeTab === 'achievement'} onClick={() => setActiveTab('achievement')}>
          Achievement
        </Tab>
      </TabContainer>

      <Content>
        {quests.map(quest => (
          <QuestItem key={quest.id}>
            <QuestInfo>
              <QuestIcon>📋</QuestIcon>
              <QuestDetails>
                <QuestTitle>{quest.title}</QuestTitle>
                <QuestDescription>{quest.description}</QuestDescription>
              </QuestDetails>
            </QuestInfo>
            <ClaimButton 
              onClick={() => handleClaim(quest.id)}
              disabled={quest.claimed || quest.locked}
              claimed={quest.claimed}
              locked={quest.locked}
            >
              {quest.claimed ? 'Claimed' : quest.locked ? <><FaLock /> Locked</> : 'Claim'}
            </ClaimButton>
          </QuestItem>
        ))}
      </Content>
      <Navbar />
    </QuestWrapper>
  );
};

export default Quest;