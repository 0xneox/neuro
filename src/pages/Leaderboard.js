import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaTrophy } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import trophyIcon from '../Images/trophy.svg';
import backgroundImage from "../Images/bg_pattern.svg";
import logoLeft from "../Images/logo.png";
import logoRight from "../Images/logo1.png";
import defaultAvatar from "../Images/second.png";

const LeaderboardWrapper = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
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
  padding: 10px 20px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px; // To account for the fixed header
`;


const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  opacity: 0.8;
`;

const TrophyIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
`;

const Timer = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;

const TopThree = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;
`;

const TopUser = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${props => props.borderColor};
`;

const Username = styled.span`
  font-size: 14px;
  margin-top: 5px;
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled(motion.tr)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const TableCell = styled.td`
  padding: 10px 5px;
  font-size: 14px;
`;

// Mock data for testing
const mockLeaderboardData = [
  { _id: '1', username: 'Player1', avatar: defaultAvatar, computePower: 5000 },
  { _id: '2', username: 'Player2', avatar: defaultAvatar, computePower: 4500 },
  { _id: '3', username: 'Player3', avatar: defaultAvatar, computePower: 4000 },
  { _id: '4', username: 'Player4', avatar: defaultAvatar, computePower: 3500 },
  { _id: '5', username: 'Player5', avatar: defaultAvatar, computePower: 3000 },
  { _id: '6', username: 'Player6', avatar: defaultAvatar, computePower: 2500 },
  { _id: '7', username: 'Player7', avatar: defaultAvatar, computePower: 2000 },
  { _id: '8', username: 'Player8', avatar: defaultAvatar, computePower: 1500 },
  { _id: '9', username: 'Player9', avatar: defaultAvatar, computePower: 1000 },
  { _id: '10', username: 'Player10', avatar: defaultAvatar, computePower: 500 },
];

const Leaderboard = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [leaderboardData, setLeaderboardData] = useState(mockLeaderboardData);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 24 * 60 * 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <LeaderboardWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>
        <Logo src={logoLeft} alt="New Logo" />
        <Logo src={logoRight} alt="Neurolov Logo" />
      </Header>
      
      <ContentWrapper>
        <Title>Wall of Fame</Title>
        <Subtitle>Play game daily and stand a chance to win rewards!</Subtitle>
        <TrophyIcon src={trophyIcon} alt="Trophy" />
        <Timer>The leaderboard will reset in: {formatTime(timeLeft)}</Timer>
        
        <TopThree>
          {leaderboardData.slice(0, 3).map((user, index) => (
            <TopUser key={user._id} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.2 }}>
              <UserAvatar src={user.avatar} alt={user.username} borderColor={['gold', 'silver', '#cd7f32'][index]} />
              <Username>{user.username}</Username>
            </TopUser>
          ))}
        </TopThree>
        
        <LeaderboardTable>
          <AnimatePresence>
            {leaderboardData.map((user, index) => (
              <TableRow
                key={user._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.computePower.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </AnimatePresence>
        </LeaderboardTable>
      </ContentWrapper>
      
      <Navbar />
    </LeaderboardWrapper>
  );
};

export default Leaderboard;