import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { getLeaderboard } from '../services/api';
import useApi from '../hooks/useApi';
import Navbar from '../components/Navbar';
import trophyIcon from '../Images/trophy.svg';

const LeaderboardWrapper = styled(motion.div)`
  padding: 20px;
  color: #ffffff;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
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

const Leaderboard = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const { execute: fetchLeaderboard, data: leaderboardData, loading, error } = useApi(getLeaderboard);

  useEffect(() => {
    fetchLeaderboard();
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 24 * 60 * 60);
    }, 1000);
    return () => clearInterval(timer);
  }, [fetchLeaderboard]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (loading) return <LeaderboardWrapper>Loading...</LeaderboardWrapper>;
  if (error) return <LeaderboardWrapper>Error: {error.message}</LeaderboardWrapper>;

  return (
    <LeaderboardWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>Wall of Fame</Header>
      <Subtitle>Play game daily and stand a chance to win rewards!</Subtitle>
      <TrophyIcon src={trophyIcon} alt="Trophy" />
      <Timer>The leaderboard will reset in: {formatTime(timeLeft)}</Timer>
      <TopThree>
        {leaderboardData && leaderboardData.slice(0, 3).map((user, index) => (
          <TopUser key={user._id} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.2 }}>
            <UserAvatar src={user.avatar} alt={user.username} borderColor={['gold', 'silver', 'bronze'][index]} />
            <Username>{user.username}</Username>
          </TopUser>
        ))}
      </TopThree>
      <LeaderboardTable>
        <AnimatePresence>
          {leaderboardData && leaderboardData.map((user, index) => (
            <TableRow
              key={user._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.computePower}</TableCell>
            </TableRow>
          ))}
        </AnimatePresence>
      </LeaderboardTable>
      <Navbar />
    </LeaderboardWrapper>
  );
};

export default Leaderboard;